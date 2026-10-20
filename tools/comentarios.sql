-- Wortschatz: comentarios enviados desde la app (Yo → Enviar comentario).
-- Pega esto en Supabase → SQL Editor → New query → Run. Se puede ejecutar más de una vez.
-- Cualquiera puede AÑADIR un comentario; nadie puede leerlos desde la web. Tú los ves en Table Editor → comentarios.

create table if not exists public.comentarios (
  id uuid primary key default gen_random_uuid(),
  mensaje text not null check (length(mensaje) between 1 and 2000),
  tipo text check (tipo in ('idea', 'error', 'otro')),
  email text check (email is null or (length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')),
  idioma text check (length(idioma) <= 5),
  nivel text check (length(nivel) <= 5),
  origen text check (origen in ('web', 'claude')),
  created_at timestamptz not null default now()
);

alter table public.comentarios enable row level security;
drop policy if exists "anyone can comment" on public.comentarios;
create policy "anyone can comment" on public.comentarios for insert to anon, authenticated with check (true);
revoke all on public.comentarios from anon, authenticated;
grant insert on public.comentarios to anon, authenticated;
