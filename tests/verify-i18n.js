const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/const translations = (\{[\s\S]*?\n\s*\});\s*\n\s*const prefersReducedMotion/);

if (!match) {
  throw new Error('translations object not found');
}

const translations = Function('return ' + match[1])();
const textKeys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map((item) => item[1]);
const attrKeys = [...html.matchAll(/data-i18n-attr="([^"]+)"/g)].flatMap((item) =>
  item[1]
    .split(',')
    .map((pair) => pair.split(':')[1]?.trim())
    .filter(Boolean)
);
const keys = [...new Set([...textKeys, ...attrKeys])];

for (const lang of ['ru', 'en']) {
  const missing = keys.filter((key) => !(key in translations[lang]));
  if (missing.length) {
    throw new Error(`${lang} missing translations: ${missing.join(', ')}`);
  }
}

const requiredKeys = [
  'navAtrium',
  'navAudio',
  'navGallery',
  'navArchive',
  'navSignals',
  'navJourney',
  'galleryTitle',
  'proofRadio'
];

for (const key of requiredKeys) {
  if (!translations.ru[key] || !translations.en[key]) {
    throw new Error(`missing required translation key: ${key}`);
  }
}

if (translations.ru.navAudio === translations.en.navAudio) {
  throw new Error('Russian navAudio must be localized, not copied from English');
}

if (translations.ru.galleryTitle.split(/\s+/).length !== 2 || translations.en.galleryTitle.split(/\s+/).length !== 2) {
  throw new Error('galleryTitle should remain a two-word heading in both locales');
}

const requiredSnippets = [
  'data-lang="ru"',
  'data-lang="en"',
  'localStorage.getItem("areyoublind-lang")',
  'localStorage.setItem("areyoublind-lang", lang)',
  'document.documentElement.lang = lang',
  'document.documentElement.dir = "ltr"',
  'setPlayButtonState("play")',
  'setPlayButtonState("pause")',
  'setPlayButtonState("buffering")'
];

for (const snippet of requiredSnippets) {
  if (!html.includes(snippet)) {
    throw new Error(`missing required snippet: ${snippet}`);
  }
}

console.log(`i18n verifier passed: ${keys.length} translated keys in ru/en`);
