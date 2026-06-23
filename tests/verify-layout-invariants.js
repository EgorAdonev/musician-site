const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const journeyHtml = fs.readFileSync(path.join(root, 'hyperframes-palace', 'index.html'), 'utf8');
const designIndex = fs.readFileSync(path.join(root, 'DESIGN.md'), 'utf8');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function cssBlock(selector, source = html) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = source.match(new RegExp(`${escaped}\\s*\\{([\\s\\S]*?)\\n\\s*\\}`, 'm'));
  assert(match, `missing CSS block: ${selector}`);
  return match[1];
}

const galleryTitle = cssBlock('.gallery-room h2');
assert(galleryTitle.includes('word-break: keep-all'), 'gallery title must keep words intact');
assert(galleryTitle.includes('hyphens: none'), 'gallery title must not hyphenate words');
assert(galleryTitle.includes('text-wrap: balance'), 'gallery title should balance two-word headings');
assert(!galleryTitle.includes('overflow-wrap: anywhere'), 'gallery title must not use emergency word breaks');
assert(html.includes('galleryTitle: "Discography carousel"'), 'English gallery title changed unexpectedly');
assert(html.includes('galleryTitle: "Карусель дискографии"'), 'Russian gallery title changed unexpectedly');

const galleryGrid = cssBlock('.gallery-room .room-grid');
assert(galleryGrid.includes('grid-template-columns: minmax(0, 1.12fr) minmax(320px, 0.88fr)'), 'gallery grid must leave enough copy width');

const h1Block = cssBlock('h1');
assert(h1Block.includes('font-size: clamp(3.15rem, 8vw, 7rem)'), 'hero H1 must be capped so AreYouBlind? fits');
const heroGrid = cssBlock('.hero .room-grid');
assert(heroGrid.includes('grid-template-columns: minmax(0, 0.88fr) minmax(360px, 1.12fr)'), 'hero grid must reserve separate text/visual columns');

assert(/\.room-nav a,\s*\.chip-button,\s*\.action-button\s*\{[\s\S]*?border-radius: 999px/.test(html), 'buttons/chips must use Leonardo-like pill shape');

const creditsPanel = cssBlock('.credits-panel');
assert(creditsPanel.includes('minmax(min(100%, 18rem), 1fr)'), 'credits chips need an 18rem minimum when space allows');

const creditsStrong = cssBlock('.credits-panel strong');
for (const required of ['white-space: nowrap', 'word-break: normal', 'text-wrap: nowrap', 'overflow: hidden']) {
  assert(creditsStrong.includes(required), `credits chips missing ${required}`);
}
assert(html.includes('<strong>SoundCloud Radio</strong>'), 'SoundCloud Radio must be one chip');
assert(html.includes('<strong>Dash Radio</strong>'), 'Dash Radio must be one chip');
assert(html.includes('<strong>RTONTHABEAT</strong>'), 'RTONTHABEAT must be one chip');

assert(html.includes('assets/images/social/instagram-glyph.svg'), 'Instagram icon must use local SVG asset');
assert(html.includes('assets/images/social/vk-compact-logo.svg'), 'VK icon must use local SVG asset');
assert(fs.existsSync(path.join(root, 'assets', 'images', 'social', 'instagram-glyph.svg')), 'Instagram SVG asset missing');
assert(fs.existsSync(path.join(root, 'assets', 'images', 'social', 'vk-compact-logo.svg')), 'VK SVG asset missing');

assert(journeyHtml.includes('journey-marquee'), 'Journey must use marquee captions');
assert(journeyHtml.includes('data-marquee-track'), 'Journey marquee track missing');
assert(!journeyHtml.includes('journey-caption caption-'), 'Journey textbox captions must stay removed');
assert(!journeyHtml.includes('data-mobile-caption'), 'Mobile Journey textbox captions must stay removed');
assert(journeyHtml.includes('../assets/images/brand/spatial-transition-tunnel-mobile.jpg'), 'Mobile Journey must use lightweight mobile tunnel asset');
assert(fs.existsSync(path.join(root, 'assets', 'images', 'brand', 'spatial-transition-tunnel.png')), 'Generated tunnel asset missing from workspace');
const mobileTunnel = path.join(root, 'assets', 'images', 'brand', 'spatial-transition-tunnel-mobile.jpg');
assert(fs.existsSync(mobileTunnel), 'Mobile tunnel asset missing from workspace');
assert(fs.statSync(mobileTunnel).size < 160000, 'Mobile tunnel asset must stay lightweight for iOS Safari');
assert(journeyHtml.includes('@media (max-width: 760px), (pointer: coarse)'), 'Journey needs CSS-first mobile fallback before JS');
assert(journeyHtml.includes('#palace-rooms .camera') && journeyHtml.includes('display: none'), 'Journey mobile CSS must hide 3D camera before JS');
assert(journeyHtml.includes('if (isIOS && isSafari)') && journeyHtml.includes('showExit();'), 'iOS Safari Journey must skip GSAP mobile timeline');
assert(journeyHtml.includes('color: #f3ead8'), 'Journey marquee text must use champagne color');
assert(journeyHtml.includes('linear-gradient(90deg, #d9b270, #f3ead8)'), 'Journey marquee divider must use champagne gradient');

assert(html.includes('data-design-option="glass"'), 'Living Glass variant button missing');
assert(html.includes('data-design-option="spatial"'), 'Spatial 3D variant button missing');
assert(html.includes('body[data-design="glass"]'), 'Living Glass CSS hook missing');
assert(html.includes('body[data-design="spatial"]'), 'Spatial CSS hook missing');
assert(html.includes('<body data-design="glass">'), 'Living Glass must be default body design');
assert(html.includes('data-src="assets/video/hyperflight-cut-01.avif"'), 'Hyperflight AVIF frames must be lazy data-src');
assert(!/<img[^>]+(?<!data-)src="assets\/video\/hyperflight-cut-01\.avif"/.test(html), 'Hyperflight AVIF must not eager-load on iOS Safari');
assert(!html.includes('localhost:8400/live.js'), 'Live preview script must not ship in index.html');
assert(!html.includes('data-design-option="nature"'), 'Natural variant button should not exist');
assert(!html.includes('body[data-design="nature"]'), 'Natural variant CSS should not exist');
assert(!html.includes('variant-b'), 'Legacy variant-b class must stay removed');
assert(designIndex.includes('design-variants/living-glass/DESIGN.md'), 'Living Glass DESIGN.md missing from index');
assert(designIndex.includes('design-variants/spatial-3d-web/DESIGN.md'), 'Spatial DESIGN.md missing from index');
assert(!designIndex.includes('natural-aesthetic'), 'Natural variant should not be in root DESIGN.md');
assert(fs.existsSync(path.join(root, 'design-variants', 'living-glass', 'DESIGN.md')), 'Living Glass DESIGN.md missing');
assert(fs.existsSync(path.join(root, 'design-variants', 'spatial-3d-web', 'DESIGN.md')), 'Spatial DESIGN.md missing');
assert(!fs.existsSync(path.join(root, 'design-variants', 'natural-aesthetic', 'DESIGN.md')), 'Natural DESIGN.md should be removed');

console.log('layout invariants passed');
