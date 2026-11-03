-- Wordhoard (English app at /en/): progress sync, kept apart from Wortschatz's table.
-- Paste in Supabase → SQL Editor → New query → Run. Same project and same accounts as Wortschatz.
-- One row per user with the whole app state. Row Level Security lets each person read and write only their own row.
create table if not exists public.progress_en (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null,
  saved_at bigint not null default 0,
  updated_at timestamptz not null default now(),
  constraint progress_en_size check (pg_column_size(data) < 2000000)
);
alter table public.progress_en enable row level security;
drop policy if exists "read own progress_en" on public.progress_en;
drop policy if exists "insert own progress_en" on public.progress_en;
drop policy if exists "update own progress_en" on public.progress_en;
drop policy if exists "delete own progress_en" on public.progress_en;
create policy "read own progress_en" on public.progress_en for select to authenticated using ((select auth.uid()) = user_id);
create policy "insert own progress_en" on public.progress_en for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "update own progress_en" on public.progress_en for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "delete own progress_en" on public.progress_en for delete to authenticated using ((select auth.uid()) = user_id);
revoke all on public.progress_en from anon;
grant select, insert, update, delete on public.progress_en to authenticated;
