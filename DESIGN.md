# Design Variants

Root design index for A/B testing of the blnfkr palace site.

Product register stays `brand`: the design itself is part of the artist identity. All variants must keep the same content, links, player behavior, credits, local assets, accessibility requirements, and i18n. Only visual material, layout rhythm, motion feel, and atmosphere change.

## Variants

1. **A: Living Glass**
   - File: `design-variants/living-glass/DESIGN.md`
   - Hypothesis: listeners trust the site more when the palace feels like a premium translucent audio cockpit.
   - Best for: clarity, modern polish, visible UI controls, readable player.

2. **B: Spatial 3D Web**
   - File: `design-variants/spatial-3d-web/DESIGN.md`
   - Hypothesis: visitors remember the artist more when the site behaves like a moving 3D room system.
   - Best for: spectacle, Journey continuity, futuristic web identity.

## Shared Non-Negotiables

- First viewport must signal `blnfkr` and the palace/music world immediately.
- Album covers are primary artifacts. No variant may bury them behind decoration.
- Player and track list stay horizontal on desktop: player left, list right. Stack only on mobile.
- Credits chips keep long names intact: `SoundCloud Radio`, `Dash Radio`, `RTONTHABEAT`.
- Gallery headings preserve words. No single trailing letters like `y` or `ии`.
- Journey uses camera-facing marquee text, not textbox caption panels.
- iOS Safari/mobile avoids heavy 3D decode stacks and uses lightweight Journey fallback.
- Body text remains readable over imagery with strong contrast.
- Reduced motion must leave all content visible and usable.

## A/B Test Plan

- `?design=glass`: Living Glass.
- `?design=spatial`: Spatial 3D Web, default.
- Store selected variant in `localStorage` only after user clicks a variant control.
- Compare the same flows in each variant: landing impression, play track, switch language, open gallery, inspect credits, open social/music link, open Journey.
- Score each variant on: identity memory, readability, mobile stability, player usability, credits trust, performance, and visual uniqueness.

## Evidence Required Before Choosing Winner

- Desktop screenshot for Glass and Spatial.
- Mobile screenshot for Glass and Spatial.
- Journey/mobile transition screenshot for Spatial, and Glass if it receives a matching Journey material pass.
- Browser click flow for player, navigation, language toggle, and variant toggle.
- Static tests:
  - `node tests\verify-i18n.js`
  - `node tests\verify-layout-invariants.js`
  - inline script parse check for `index.html` and `hyperframes-palace/index.html`

## Current Default

Use **Spatial 3D Web** as default until testing proves another variant performs better. It matches the current product direction, the HyperFrames Journey work, and the generated tunnel asset.
