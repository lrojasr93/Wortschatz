// Builds the web app in /app from the single-file Claude artifact (tools/wortschatz-artifact.html).
// Usage: node tools/build.js [path/to/wortschatz.html]
// The artifact keeps working on its own; this splits its data into /app/data/*.json,
// keeps progress in localStorage only and adds the PWA shell.
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const SRC = process.argv[2] || path.join(__dirname, 'wortschatz-artifact.html');
const OUT = path.join(ROOT, 'app');
const html = fs.readFileSync(SRC, 'utf8');

// Find the JS literal ([...] or {...}) that starts after `marker`, skipping strings and comments.
function literalAt(src, marker) {
  const at = src.indexOf(marker);
  if (at < 0 || src.indexOf(marker, at + 1) >= 0) throw new Error('marker not unique: ' + marker);
  let i = at + marker.length;
  while (src[i] !== '[' && src[i] !== '{') i++;
  const start = i; let depth = 0;
  for (; i < src.length; i++) {
    const c = src[i];
    if (c === '"' || c === "'" || c === '`') { for (i++; src[i] !== c; i++) if (src[i] === '\\') i++; continue; }
    if (c === '/' && src[i + 1] === '/') { while (src[i] !== '\n') i++; continue; }
    if (c === '/' && src[i + 1] === '*') { i = src.indexOf('*/', i) + 1; continue; }
    if (c === '[' || c === '{') depth++;
    else if (c === ']' || c === '}') { if (--depth === 0) return { start, end: i + 1, text: src.slice(start, i + 1) }; }
  }
  throw new Error('unterminated literal: ' + marker);
}
const evalLit = t => vm.runInNewContext('(' + t + ')');

const s0 = html.indexOf('<script>\n'), s1 = html.lastIndexOf('</script>');
let js = html.slice(s0 + 9, s1);
const head = html.slice(0, s0), tail = html.slice(s1 + 9);

// Data blocks: [marker in source, replacement expression]
const blocks = [
  ['var ES=LANG===\'es\'?', 'WD.es.ui', 'es.ui'],
  ['var ESD=LANG===\'es\'?', 'WD.es.data', 'es.data'],
  ['var RAW=', 'WD.words.words', 'words.words'],
  ['var PLURAL=', 'WD.words.plural', 'words.plural'],
  ['var JOBS=', 'WD.jobs', 'jobs'],
  ['var CONVS=', 'WD.conversations.a1b2', 'conversations.a1b2'],
  ['var IDIOMS=', 'WD.idioms', 'idioms'],
  ['var C1CONVS=', 'WD.conversations.c1', 'conversations.c1'],
  ['var WOTD=', 'WD.wotd', 'wotd'],
  ['var VERBS=', 'WD.verbs.verbs', 'verbs.verbs'],
  ['var VEX=', 'WD.verbs.examples', 'verbs.examples'],
  ['var PLACE=', 'WD.placement', 'placement'],
  ['var STORIES=', 'WD.stories', 'stories'],
];
const data = {};
const found = blocks.map(([m, expr, key]) => Object.assign(literalAt(js, m), { expr, key }));
found.sort((a, b) => b.start - a.start);
for (const f of found) {
  const [file, sub] = f.key.split('.');
  const v = evalLit(f.text);
  if (sub) (data[file] = data[file] || {})[sub] = v; else data[file] = v;
  js = js.slice(0, f.start) + f.expr + js.slice(f.end);
}

// Web version: no Claude account sync, no Claude-written replies; say these are coming soon.
function swap(from, to) { if (js.split(from).length !== 2) throw new Error('swap target not unique: ' + from.slice(0, 60)); js = js.replace(from, () => to); }
swap("try{ if(window.claude&&claude.use) claude.use('sample')", "try{ if(false) claude.use('sample')");
// Accounts: Supabase sync (tools/cloud-web.js) replaces the Claude account sync. Config in tools/supabase.json.
const SB_LIB = 'vendor/supabase-2.117.2.js';
const sbCfg = Object.assign(JSON.parse(fs.readFileSync(path.join(__dirname, 'supabase.json'), 'utf8')), { lib: SB_LIB });
swap('\ncloudInit();', '\nvar SB_CFG=' + JSON.stringify(sbCfg) + ';\n' + fs.readFileSync(path.join(__dirname, 'cloud-web.js'), 'utf8') + '\ncloudInit();');
swap("(SAMPLE?tl('Claude checks each reply and corrects it.'):tl('Your reply is compared with a model answer and its key words.'))+'</p>'",
     "(SAMPLE?tl('Claude checks each reply and corrects it.'):tl('Your reply is compared with a model answer and its key words.'))+'</p>'+(SAMPLE?'':'<p class=\"note\">'+tl('Coming soon: AI that corrects each reply.')+'</p>')");
swap("    if(SAMPLE) h+=tl('<div class=\"story\"><b>A new story with your words</b>",
     "    if(!SAMPLE) h+='<div class=\"story\"><b>'+tl('A new story with your words')+'</b><span class=\"exen\">'+tl('Coming soon: new stories written by AI with the words you are learning.')+'</span></div>';\n    if(SAMPLE) h+=tl('<div class=\"story\"><b>A new story with your words</b>");
// Install card (tools/install-web.js): on Hoy after two days of practice, and always in Yo. INST_PLAY = Google Play link once the app is live there.
const INST_PLAY = '';
swap('\nvar SB_CFG=', '\nvar INST_PLAY=' + JSON.stringify(INST_PLAY) + ';\n' + fs.readFileSync(path.join(__dirname, 'install-web.js'), 'utf8') + '\nvar SB_CFG=');
swap("  var cl=curLevel();\n  h+='<div class=\"panel lvp\">", "  h+=instCard('today');\n  var cl=curLevel();\n  h+='<div class=\"panel lvp\">");
swap("  h+='<p class=\"fbl\"><button class=\"link\" data-a=\"fbgo\">💬 '+tl('Send feedback')+'</button></p>';", "  h+='<p class=\"fbl\"><button class=\"link\" data-a=\"fbgo\">💬 '+tl('Send feedback')+'</button></p>';\n  h+=instCard('me');");
Object.assign(data.es.ui, {
  'Install Wortschatz on your phone': 'Instala Wortschatz en tu móvil',
  'Open it from your home screen, full screen, and keep practicing without internet.': 'Ábrela desde tu pantalla de inicio, a pantalla completa, y sigue practicando sin internet.',
  'Open this page in Safari.': 'Abre esta página en Safari.',
  'Tap Share (the square with an arrow ⬆︎).': 'Toca Compartir (el cuadrado con una flecha ⬆︎).',
  'Choose “Add to Home Screen”, then “Add”.': 'Elige «Añadir a pantalla de inicio» y luego «Añadir».',
  'In Chrome, open the menu ⋮ and tap “Install app” or “Add to Home screen”.': 'En Chrome, abre el menú ⋮ y toca «Instalar aplicación» o «Añadir a pantalla de inicio».',
  'Install': 'Instalar',
  'Get it on Google Play': 'Descárgala en Google Play',
});
Object.assign(data.es.ui, {
  'Coming soon: AI that corrects each reply.': 'Próximamente: IA que corrige cada respuesta.',
  'A new story with your words': 'Una historia nueva con tus palabras',
  'Coming soon: new stories written by AI with the words you are learning.': 'Próximamente: historias nuevas escritas con IA usando las palabras que estás aprendiendo.',
});

// Write data files: one per pack.
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'data', 'jobs'), { recursive: true });
const files = {};
const put = (rel, v) => { fs.writeFileSync(path.join(OUT, 'data', rel), JSON.stringify(v)); return rel; };
for (const k of Object.keys(data)) if (k !== 'jobs') files[k] = put(k + '.json', data[k]);
files.jobs = data.jobs.map(j => put('jobs/' + j.key + '.json', j));

const ver = require('crypto').createHash('sha1').update(js + JSON.stringify(data) + head + fs.readFileSync(path.join(__dirname, 'fonts', 'fonts.css')) + fs.readFileSync(__filename) + fs.readFileSync(path.join(ROOT, 'stats.js')) + SB_LIB).digest('hex').slice(0, 10);
fs.writeFileSync(path.join(OUT, 'data', 'index.json'), JSON.stringify({ version: ver, files }, null, 1));
// Anonymous counts: our own sender (stats.js at the site root, shared with the landing) instead of GoatCounter's script.
const stats = fs.readFileSync(path.join(ROOT, 'stats.js'), 'utf8');
fs.writeFileSync(path.join(OUT, 'app.js'), '// Generated by tools/build.js from the Wortschatz artifact. Edit the artifact, then rebuild.\n' + stats + js);

// index.html: same markup and styles, plus manifest, icons, data loader and service worker.
const loader = `<script>
// Loads the vocabulary packs from data/*.json, then starts the app.
(function(){
  var lang='en';try{var o=JSON.parse(localStorage.getItem('wortschatz-v1')||'{}');lang=o.lang||(/^es\\b/i.test(navigator.language||'')?'es':'en')}catch(e){}
  function get(f){return fetch('data/'+f).then(function(r){if(!r.ok)throw new Error(f);return r.json()})}
  get('index.json').then(function(ix){
    var keys=Object.keys(ix.files).filter(function(k){return k!=='es'||lang==='es'});
    return Promise.all(keys.map(function(k){var f=ix.files[k];return Array.isArray(f)?Promise.all(f.map(get)):get(f)})).then(function(all){
      window.WD={es:{ui:{},data:null}};keys.forEach(function(k,i){WD[k]=all[i]});
      var s=document.createElement('script');s.src='app.js?v='+ix.version;document.body.appendChild(s);
    });
  }).catch(function(){document.getElementById('main').innerHTML='<div class="panel"><p class="sub">'+(lang==='es'?'No se pudo cargar el vocabulario. Revisa tu conexión y recarga la página.':'Could not load the vocabulary. Check your connection and reload.')+'</p></div>'});
  // Keep Chrome's install prompt for the install card (tools/install-web.js), which loads later with app.js.
  addEventListener('beforeinstallprompt',function(e){e.preventDefault();window.__bip=e});
  if('serviceWorker' in navigator) addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})});
})();
</script>`;
// Error reports: when the app breaks on someone's device, an anonymous row goes to the Supabase table `errores`
// (insert only, see tools/errores.sql): the message, where it happened, app version, browser family and screen. No user id, at most 5 per visit.
const errorReporter = !sbCfg.url || !sbCfg.anonKey ? '' : `<script>
(function(){
  var U=${JSON.stringify(sbCfg.url + '/rest/v1/errores')},K=${JSON.stringify(sbCfg.anonKey)},n=0,seen={};
  function cut(x,m){return String(x==null?'':x).slice(0,m)}
  function where(u){return cut(String(u||'').replace(/^https?:\\/\\/[^\\/]+/,'').replace(/[?#].*$/,''),150)}
  function browser(){
    var u=navigator.userAgent||'',m=u.match(/(Edg|OPR|SamsungBrowser|Firefox|FxiOS|CriOS|Chrome|Version)\\/(\\d+)/);
    var b=m?({Version:'Safari',CriOS:'Chrome',FxiOS:'Firefox',Edg:'Edge',OPR:'Opera'}[m[1]]||m[1])+' '+m[2]:'other';
    var os=/Android/.test(u)?'Android':/iPhone|iPad|iPod/.test(u)?'iOS':/Mac OS/.test(u)?'macOS':/Windows/.test(u)?'Windows':/Linux/.test(u)?'Linux':'other';
    var app=false;try{app=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true}catch(e){}
    return b+' · '+os+(app?' · app':'');
  }
  function send(msg,src,stack){
    msg=cut(msg||'unknown',500);
    if(n>=5||seen[msg]||msg==='Script error.')return;seen[msg]=1;n++;
    try{fetch(U,{method:'POST',keepalive:true,headers:{apikey:K,'Content-Type':'application/json',Prefer:'return=minimal'},
      body:JSON.stringify({mensaje:msg,fuente:src||null,pila:stack?cut(String(stack).replace(/https?:\\/\\/[^\\/\\s)]+/g,'').replace(/\\?v=\\w+/g,''),1000):null,
        version:${JSON.stringify(ver)},navegador:cut(browser(),60),pantalla:cut(window.wsScreen||'',40)||null})}).catch(function(){})}catch(e){}
  }
  addEventListener('error',function(e){if(!e||!e.message)return;send(e.message,e.filename?where(e.filename)+':'+(e.lineno||0)+':'+(e.colno||0):null,e.error&&e.error.stack)});
  addEventListener('unhandledrejection',function(e){var r=e&&e.reason;send('Unhandled: '+(r&&r.message||r),null,r&&r.stack)});
})();
</script>
`;
const reporterHash = errorReporter && require('crypto').createHash('sha256').update(errorReporter.slice('<script>'.length, errorReporter.lastIndexOf('</script>'))).digest('base64');
// Content Security Policy: only our own scripts (the data loader by hash), Supabase for accounts and
// GoatCounter for anonymous counts. GitHub Pages cannot send headers, so it goes in a <meta> tag.
const loaderHash = require('crypto').createHash('sha256').update(loader.slice('<script>'.length, -'</script>'.length)).digest('base64');
const SB_HOST = sbCfg.url ? new URL(sbCfg.url).origin : '';
const GC_HOST = 'https://rumboalemania.goatcounter.com';
const csp = '<meta http-equiv="Content-Security-Policy" content="' + [
  "default-src 'self'",
  "script-src 'self' 'sha256-" + loaderHash + "'" + (errorReporter ? " 'sha256-" + reporterHash + "'" : ''),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: " + GC_HOST,
  'connect-src ' + ["'self'", SB_HOST, SB_HOST && SB_HOST.replace(/^https/, 'wss'), GC_HOST].filter(Boolean).join(' '),
  "font-src 'self'", "media-src 'self' blob: data:", "worker-src 'self'", "manifest-src 'self'",
  "object-src 'none'", "base-uri 'none'", "form-action 'none'"
].join('; ') + '">';
const pwaHead = `<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#111b33">
<link rel="icon" href="icons/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="icons/icon-180.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Wortschatz">
${csp}
<meta name="referrer" content="strict-origin-when-cross-origin">
${errorReporter}`;
// Fonts are self-hosted (tools/fonts) so no visitor data goes to Google.
const gf = head.match(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>\n/);
if (!gf) throw new Error('Google Fonts link not found');
let page = head.replace(gf[0], pwaHead + '<link rel="stylesheet" href="fonts.css">\n') + loader + tail;
if (/googleapis|gstatic/.test(page + js)) throw new Error('Google Fonts reference left');
if (!page.includes('id="main"')) throw new Error('no #main in page');
fs.writeFileSync(path.join(OUT, 'index.html'), page);

// Service worker: precache the shell and every data file; network first for pages, cache first otherwise.
const assets = ['./', 'index.html', 'app.js?v=' + ver, 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/icon-180.png',
  'data/index.json', 'fonts.css'].concat(fs.readdirSync(path.join(__dirname, 'fonts')).filter(f => f.endsWith('.woff2')).map(f => 'fonts/' + f)).concat(Object.values(files).flat().map(f => 'data/' + f));
fs.writeFileSync(path.join(OUT, 'sw.js'), `// Generated by tools/build.js
var CACHE='wortschatz-${ver}';
var ASSETS=${JSON.stringify(assets)};
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k.indexOf('wortschatz-')===0&&k!==CACHE}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){
  var r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return;
  var fresh=r.mode==='navigate'||(u.origin===location.origin&&/\\/data\\/index\\.json$/.test(u.pathname));
  if(fresh){e.respondWith(fetch(r).then(function(res){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(r,cp)});return res}).catch(function(){return caches.match(r,{ignoreSearch:r.mode==='navigate'}).then(function(m){return m||caches.match('index.html')})}));return}
  e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(res){if(res.ok){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(r,cp)})}return res})}));
});
`);

fs.writeFileSync(path.join(OUT, 'manifest.webmanifest'), JSON.stringify({
  name: 'Wortschatz – Rumbo Alemania', short_name: 'Wortschatz', description: 'German vocabulary, verbs and conversations. / Vocabulario alemán, verbos y conversaciones.',
  id: '/app/', start_url: '/app/', scope: '/app/', display: 'standalone', orientation: 'portrait',
  background_color: '#eef1f7', theme_color: '#111b33', lang: 'es',
  icons: [
    { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    { src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }
  ]
}, null, 1));

// Icons are made by tools/icons.js; copy them in.
fs.cpSync(path.join(__dirname, 'icons'), path.join(OUT, 'icons'), { recursive: true });
fs.copyFileSync(path.join(__dirname, 'fonts', 'fonts.css'), path.join(OUT, 'fonts.css'));
fs.mkdirSync(path.join(OUT, 'fonts'));
for (const f of fs.readdirSync(path.join(__dirname, 'fonts'))) if (f.endsWith('.woff2')) fs.copyFileSync(path.join(__dirname, 'fonts', f), path.join(OUT, 'fonts', f));
fs.mkdirSync(path.join(OUT, 'vendor'));
fs.copyFileSync(path.join(__dirname, SB_LIB), path.join(OUT, SB_LIB));
console.log('built app/ version', ver, Object.keys(files).join(', '), '(' + files.jobs.length + ' job packs)');
