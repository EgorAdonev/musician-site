# Design Rules

## Spatial Brand

- Build the site as a dark spatial music site, not a generic musician portfolio.
- Album covers and audio visuals are the primary artifacts. 3D space frames the music, it does not replace it.
- Use the full palette deliberately: champagne gold for active signal, cyan for audio/waveform, steel blue for depth, hot red-orange only for sharp accents.
- Avoid one-note deep blue gradients, beige creator templates, fake luxury, and repeated generic card grids.

## Typography

- Display headings must preserve whole words. Do not use `overflow-wrap: anywhere` on `h1`, `h2`, or gallery titles.
- One display word may take at most two lines. If it breaks into single trailing letters, widen the copy area or lower the clamp max.
- Letter spacing stays `0` unless a specific heading needs small positive tracking for legibility.
- Long body copy must stay readable on dark backgrounds with clear line-height and contrast.

## Layout

- Player and track list sit as one horizontal instrument board on desktop: player left, track list right. Stack only on mobile.
- Credits chips must keep platform/artist names intact: `SoundCloud Radio`, `Dash Radio`, and `RTONTHABEAT` stay one-line chips.
- Panels can be instruments, proof blocks, or social exits. Do not nest cards inside cards.
- Desktop sections need filled composition, not empty leftover columns.

## Journey

- Journey captions are not textbox panels. Use a perspective marquee as the text layer.
- Mobile Journey uses the current video-scene language: tunnel slice, album covers, audio bars, and camera-facing marquee.
- On iOS Safari/mobile, prefer the lightweight Journey fallback over heavy 3D/image decode stacks.
- Reduced motion must leave content visible and usable.

## Assets

- Project-bound generated images must be copied into `assets/`, never referenced from `.codex/generated_images`.
- Social icons should be local, clean vector/image assets with stable square framing.
- Generated tunnel asset role: mobile transition atmosphere, not readable content.

## Verification

- Run `node tests\verify-i18n.js`.
- Run `node tests\verify-layout-invariants.js`.
- Parse inline scripts for `index.html` and `hyperframes-Story/index.html`.
- Browser screenshots remain required for final signoff when Browser tooling is available.


