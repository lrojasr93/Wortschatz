-- Wortschatz: progress sync. Paste in Supabase → SQL Editor → New query → Run.
-- One row per user with the whole app state. Row Level Security lets each person read and write only their own row.
create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null,
  saved_at bigint not null default 0,
  updated_at timestamptz not null default now(),
  constraint progress_size check (pg_column_size(data) < 2000000)
);
alter table public.progress enable row level security;
drop policy if exists "read own progress" on public.progress;
drop policy if exists "insert own progress" on public.progress;
drop policy if exists "update own progress" on public.progress;
drop policy if exists "delete own progress" on public.progress;
create policy "read own progress" on public.progress for select to authenticated using ((select auth.uid()) = user_id);
create policy "insert own progress" on public.progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "update own progress" on public.progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "delete own progress" on public.progress for delete to authenticated using ((select auth.uid()) = user_id);

-- "Delete account" button in the app: removes the signed-in user and, by cascade, their progress.
create or replace function public.delete_account() returns void
language sql security definer set search_path = '' as $$
  delete from auth.users where id = auth.uid();
$$;
revoke execute on function public.delete_account() from public, anon;
grant execute on function public.delete_account() to authenticated;
