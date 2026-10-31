// Turns the result of query 1 in tools/consultas.sql (downloaded from Supabase as CSV) into readable German.
// Usage: node tools/fallos.js resultado.csv
'use strict';
const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', 'app', 'data'), rd = f => JSON.parse(fs.readFileSync(path.join(D, f), 'utf8'));
const ix = rd('index.json'), words = rd('words.json'), idioms = rd('idioms.json'), conv = rd('conversations.json');
const name = {};
words.words.forEach((r, i) => { name['b' + i] = (r[1] ? r[1] + ' ' : '') + r[2] + ' (' + r[3] + ')'; });
idioms.forEach((r, i) => { name['u' + i] = r[0] + ' (' + r[1] + ')'; });
for (const f of ix.files.jobs) { const j = rd(f); j.words.forEach((r, i) => { name['j' + j.key + i] = (r[0] ? r[0] + ' ' : '') + r[1] + ' (' + r[2] + ')'; }); }
const convs = {}; conv.a1b2.concat(conv.c1).forEach(c => { convs[c.id] = c; });
const KIND = { art: 'artículo', mean: 'significado', prod: 'escribir', gap: 'huecos', case: 'casos', tr: 'traducir', verb: 'verbo', conv: 'conversación' };
function label(tipo, item) {
  const [id, a, b] = item.split('|');
  if (tipo === 'verb') return id + ' · ' + ({ pres: 'presente', past: 'pretérito', perf: 'perfecto' }[a] || a) + ' · ' + (['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'][+b] || b);
  if (tipo === 'conv') { const c = convs[id], t = c && c.turns[+a]; return c ? c.t + ' · ' + (t ? t.task : 'turno ' + a) : item; }
  if (id.startsWith('c')) return '(palabra propia de alguien)';
  return name[id] || item;
}
const csv = fs.readFileSync(process.argv[2] || 0, 'utf8').trim().split(/\r?\n/);
const head = csv.shift().split(',').map(s => s.replace(/"/g, ''));
const ti = head.indexOf('tipo'), ii = head.indexOf('item');
if (ti < 0 || ii < 0) { console.error('El CSV necesita las columnas tipo e item (consulta 1 de tools/consultas.sql).'); process.exit(1); }
for (const line of csv) {
  const c = []; let cur = '', q = false;
  for (let i = 0; i < line.length; i++) { const ch = line[i]; if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; } else if (ch === '"') q = true; else if (ch === ',') { c.push(cur); cur = ''; } else cur += ch; }
  c.push(cur);
  const rest = head.map((h, i) => i === ti || i === ii ? null : h + ' ' + c[i]).filter(Boolean).join(' · ');
  console.log((KIND[c[ti]] || c[ti]).padEnd(13) + label(c[ti], c[ii]) + '  —  ' + rest);
}
