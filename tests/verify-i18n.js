const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/const translations = (\{[\s\S]*?\n    \});\n\n    const storageKey/);

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

const requiredSnippets = [
  'data-lang="ru"',
  'data-lang="en"',
  'const storageKey = "blnfkr-lang"',
  'localStorage.getItem(storageKey)',
  'localStorage.setItem(storageKey, lang)',
  'document.documentElement.lang = lang',
  'new URLSearchParams(window.location.search).get("lang")',
  'Listen now',
  '8+ years of beatmaking & production',
  'Snippets, photos, videos',
  'Слушать',
  '8+ лет в битмейкинге',
  'Отрывки, фото, видео'
];

for (const snippet of requiredSnippets) {
  if (!html.includes(snippet)) {
    throw new Error(`missing required snippet: ${snippet}`);
  }
}

console.log(`i18n verifier passed: ${keys.length} translated keys in ru/en, localStorage language toggle present`);
