// Renders the app icons (PNG) from SVG with Playwright. Run: node tools/icons.js
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');
const svg = (full, pad) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">` +
  `<rect width="512" height="512" rx="${full ? 0 : 112}" fill="#111b33"/>` +
  `<g transform="translate(256 256) scale(${pad}) translate(-256 -256)">` +
  `<path d="M120 150 L180 360 L256 210 L332 360 L392 150" fill="none" stroke="#fff" stroke-width="46" stroke-linejoin="round" stroke-linecap="round"/>` +
  `<rect x="136" y="392" width="80" height="22" rx="4" fill="#3a4258"/><rect x="216" y="392" width="80" height="22" fill="#dd2a3a"/><rect x="296" y="392" width="80" height="22" rx="4" fill="#f2b705"/>` +
  `</g></svg>`;
const dir = path.join(__dirname, 'icons');
fs.writeFileSync(path.join(dir, 'icon.svg'), svg(false, 1));
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  for (const [name, size, full, pad] of [['icon-192', 192, false, 1], ['icon-512', 512, false, 1], ['icon-180', 180, true, 0.86], ['icon-maskable-512', 512, true, 0.72]]) {
    await p.setViewportSize({ width: size, height: size });
    await p.setContent(`<style>*{margin:0}body{background:transparent}</style><img src="data:image/svg+xml;base64,${Buffer.from(svg(full, pad)).toString('base64')}" width="${size}" height="${size}">`);
    await p.screenshot({ path: path.join(dir, name + '.png'), omitBackground: true });
  }
  await b.close();
})();
