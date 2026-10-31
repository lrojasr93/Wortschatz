-- Wortschatz: errores de la app web, enviados solos cuando algo falla en el dispositivo de alguien.
-- Pega esto en Supabase → SQL Editor → New query → Run. Se puede ejecutar más de una vez.
-- Cualquiera puede AÑADIR una fila; nadie puede leerlas desde la web. Tú las ves en Table Editor → errores
-- o con la consulta "Errores de la última semana" de tools/consultas.sql. No guarda quién era la persona.

create table if not exists public.errores (
  id bigint generated always as identity primary key,
  mensaje text not null check (length(mensaje) between 1 and 500),
  fuente text check (length(fuente) <= 170),
  pila text check (length(pila) <= 1000),
  version text check (length(version) <= 20),
  navegador text check (length(navegador) <= 60),
  pantalla text check (length(pantalla) <= 40),
  created_at timestamptz not null default now()
);

alter table public.errores enable row level security;
drop policy if exists "anyone can report" on public.errores;
create policy "anyone can report" on public.errores for insert to anon, authenticated with check (true);
revoke all on public.errores from anon, authenticated;
grant insert on public.errores to anon, authenticated;

-- Los errores viejos no sirven: se borran solos a los 90 días si activas pg_cron (Database → Extensions → pg_cron).
-- select cron.schedule('borrar-errores-viejos', '0 3 * * *', $$delete from public.errores where created_at < now() - interval '90 days'$$);
