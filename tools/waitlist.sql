-- Rumbo Alemania: lista de espera y encuesta de la landing.
-- Pega esto en Supabase → SQL Editor → New query → Run. Se puede ejecutar más de una vez.
-- Los visitantes solo pueden AÑADIR filas; nadie puede leerlas desde la web. Tú las ves en Table Editor.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  profesion text check (length(profesion) <= 60),
  nivel text check (length(nivel) <= 20),
  consentimiento boolean not null check (consentimiento),
  origen text check (length(origen) <= 60),
  created_at timestamptz not null default now()
);

create table if not exists public.encuesta (
  id uuid primary key default gen_random_uuid(),
  email text not null check (length(email) <= 254),
  pagaria text check (pagaria in ('No pagaría', 'Menos de 5 USD', '5 a 8 USD', 'Más de 8 USD')),
  cuando text check (cuando in ('Ya vivo en Alemania', 'En menos de 6 meses', 'En 6 a 12 meses', 'Más adelante o no lo sé')),
  falta text check (length(falta) <= 1000),
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;
alter table public.encuesta enable row level security;
drop policy if exists "anyone can join" on public.waitlist;
drop policy if exists "anyone can answer" on public.encuesta;
create policy "anyone can join" on public.waitlist for insert to anon, authenticated with check (true);
create policy "anyone can answer" on public.encuesta for insert to anon, authenticated with check (true);
revoke all on public.waitlist, public.encuesta from anon, authenticated;
grant insert on public.waitlist, public.encuesta to anon, authenticated;

-- Resumen para el paso 7 del plan (≥100 inscritos y ≥20 % pagaría 5 USD o más).
-- Ejecútalo cuando quieras ver los números:
-- select (select count(*) from waitlist) as inscritos,
--        count(*) as respuestas,
--        round(100.0 * count(*) filter (where pagaria in ('5 a 8 USD', 'Más de 8 USD')) / nullif(count(*), 0)) as pct_paga_5_o_mas
-- from encuesta;
