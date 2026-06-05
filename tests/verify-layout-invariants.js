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
assert(journeyHtml.includes('../assets/images/brand/spatial-transition-tunnel.png'), 'Mobile Journey must use project-local generated tunnel asset');
assert(fs.existsSync(path.join(root, 'assets', 'images', 'brand', 'spatial-transition-tunnel.png')), 'Generated tunnel asset missing from workspace');

assert(html.includes('data-design-option="glass"'), 'Living Glass variant button missing');
assert(html.includes('data-design-option="spatial"'), 'Spatial 3D variant button missing');
assert(html.includes('body[data-design="glass"]'), 'Living Glass CSS hook missing');
assert(html.includes('body[data-design="spatial"]'), 'Spatial CSS hook missing');
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
