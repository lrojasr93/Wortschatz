// Renders the English app icons (PNG) from SVG with Playwright into tools/icons-en/. Run: node tools/icons-en.js
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');
// An open book in a deep teal square, with "EN" on its pages
const svg = (full, pad) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">` +
  `<rect width="512" height="512" rx="${full ? 0 : 112}" fill="#0f4c5c"/>` +
  `<g transform="translate(256 256) scale(${pad}) translate(-256 -256)">` +
  `<path d="M96 150 Q176 120 256 160 Q336 120 416 150 L416 380 Q336 350 256 390 Q176 350 96 380 Z" fill="#fff"/>` +
  `<path d="M256 160 L256 390" stroke="#0f4c5c" stroke-width="10"/>` +
  `<path d="M150 205 h60 M150 205 v110 M150 260 h50 M150 315 h60" stroke="#0f4c5c" stroke-width="22" stroke-linecap="round" fill="none"/>` +
  `<path d="M300 315 V205 L362 315 V205" stroke="#e8a33d" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
  `</g></svg>`;
const dir = path.join(__dirname, 'icons-en'); fs.mkdirSync(dir, { recursive: true });
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
