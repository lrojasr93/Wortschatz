-- Rumbo Alemania / Wortschatz: protección contra spam en los formularios públicos.
-- Pega esto en Supabase → SQL Editor → New query → Run, DESPUÉS de waitlist.sql y comentarios.sql.
-- Se puede ejecutar más de una vez.
--
-- Qué hace:
-- 1. La fecha (created_at) la pone siempre el servidor: nadie puede enviar fechas falsas.
-- 2. Límite de envíos por hora en total para cada tabla. Si un bot envía miles de filas,
--    se corta al llegar al límite y la tabla no se llena de basura. Las personas reales casi nunca lo notan.
--    Si un día lanzas una campaña grande y se queda corto, sube los números de abajo y vuelve a ejecutarlo.
-- 3. Índices para que contar sea rápido.
-- 4. Quita a la clave pública (anon) todo acceso a la tabla progress: solo la usan personas con sesión iniciada.

create or replace function public.limitar_envios() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  n int;
  limite int := tg_argv[0]::int;
begin
  new.created_at := now();
  execute format('select count(*) from public.%I where created_at > now() - interval ''1 hour''', tg_table_name) into n;
  if n >= limite then
    raise exception 'Demasiados envíos, inténtalo más tarde' using errcode = 'P0001';
  end if;
  return new;
end $$;
revoke execute on function public.limitar_envios() from public, anon, authenticated;

create index if not exists waitlist_created_at on public.waitlist (created_at);
create index if not exists encuesta_created_at on public.encuesta (created_at);
create index if not exists comentarios_created_at on public.comentarios (created_at);

drop trigger if exists limitar_envios on public.waitlist;
drop trigger if exists limitar_envios on public.encuesta;
drop trigger if exists limitar_envios on public.comentarios;
create trigger limitar_envios before insert on public.waitlist    for each row execute function public.limitar_envios(300);
create trigger limitar_envios before insert on public.encuesta    for each row execute function public.limitar_envios(300);
create trigger limitar_envios before insert on public.comentarios for each row execute function public.limitar_envios(60);

revoke all on public.progress from anon;

-- Comprobación rápida: la clave pública no debe poder leer ninguna de estas tablas.
-- Debe devolver "false" en todas las filas:
-- select t, has_table_privilege('anon', 'public.' || t, 'select') as anon_puede_leer
-- from unnest(array['waitlist','encuesta','comentarios','progress']) t;
