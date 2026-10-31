-- Wortschatz: consultas para ver dónde mejorar. Pega UNA en Supabase → SQL Editor y pulsa Run.
-- Los datos de uso por ejercicio (empezados, terminados, abandonados, aciertos) y las vueltas al día 1, 7 y 30
-- están en GoatCounter (rumboalemania.goatcounter.com), en las rutas app/ex/... y app/ret/...

-- 1) Lo que más se falla ahora mismo (solo personas con cuenta).
--    tipo: art = artículo, mean = significado, prod = escribir, gap = huecos, case = casos, tr = traducir, verb = verbos, conv = conversación.
--    Para ver las palabras en vez de los códigos: descarga el resultado como CSV y ejecuta  node tools/fallos.js resultado.csv
select split_part(m.k, ':', 1) as tipo,
       split_part(m.k, ':', 2) as item,
       count(distinct p.user_id) as personas,
       sum((m.v->>'n')::int) as fallos
from public.progress p, jsonb_each(p.data->'mist') as m(k, v)
group by 1, 2
order by personas desc, fallos desc
limit 50;

-- 2) Qué tipo de ejercicio cuesta más (fallos pendientes por tipo).
select split_part(m.k, ':', 1) as tipo,
       count(distinct p.user_id) as personas,
       count(*) as items_fallados,
       sum((m.v->>'n')::int) as fallos
from public.progress p, jsonb_each(p.data->'mist') as m(k, v)
group by 1
order by fallos desc;

-- 3) Errores de la última semana, agrupados.
select mensaje, fuente, count(*) as veces, max(created_at) as ultima_vez,
       string_agg(distinct navegador, ', ') as navegadores,
       string_agg(distinct pantalla, ', ') as pantallas,
       string_agg(distinct version, ', ') as versiones
from public.errores
where created_at > now() - interval '7 days'
group by mensaje, fuente
order by veces desc;

-- 4) Comentarios recientes.
select created_at, tipo, mensaje, email, idioma, nivel
from public.comentarios
order by created_at desc
limit 50;
