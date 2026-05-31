# Design

## Overview

Single-page artist landing site for blnfkr rebuilt as a fast futuristic palace. Each scroll section is a distinct room: Atrium, Audio Lab, Gallery, Archive, Signal Room. The site should feel like camera movement through a modern music palace rather than a generic portfolio.

The design combines local cover art, a generated 3D palace room asset, canvas audio visualization, rotating album covers, and kinetic text. It must remain lightweight: static HTML/CSS/JS, local media, lazy decorative assets, no mandatory heavy runtime.

## Physical Scene

A listener opens the page at night from a social link, often on mobile, while deciding whether to play the artist's tracks. The site should load quickly, give an immediate sense of sound and identity, and make listening or opening social profiles obvious.

## Visual Direction

- Reference lane: futuristic AI/creative landing pages, Leonardo.ai-style dimensional surfaces, fast camera moves between rooms, glossy black architecture, neon audio instrumentation.
- Sunday reference influence: confident large typography, friendly high-tech clarity, strong primary CTA contrast, generous first-viewport readability.
- GT Planar reference influence: midnight mainframe canvas, hard utility borders, compact control density, fluorescent green and electric violet signal roles.
- Avoid: beige creator sites, clean corporate music portfolios, fake luxury, static social-button grids, decorative 3D that slows the page, repeated card templates, generic purple SaaS gradients.
- The first viewport must signal the artist and the palace world immediately.
- Album covers remain the main artifact. 3D architecture frames the music, it does not replace it.

## Color Palette

Use OKLCH tokens in CSS.

- `--void`: near-black palace shell, primary background.
- `--floor`: deep violet-black reflective surface.
- `--paper`: acidic near-white text.
- `--acid`: neon green from cover art and audio meters.
- `--violet`: hot violet for room glows and transitions.
- `--cyan`: cyan scanner light and waveform strokes.
- `--hot`: red-orange accent for active states and warning energy.
- `--sunday`: saturated yellow used sparingly for friendly high-tech focus edges.
- `--glass`: translucent dark surface for controls only.

Palette strategy: full palette on a dark, high-contrast base. Do not drift into one-note purple/blue. Acid green, cyan, violet, and hot red must each have a clear role.

## Typography

Use local/system font stacks only for speed. Display text is heavy, compact, and architectural; body text is readable with generous line height on dark backgrounds.

- Display headings: `Arial Black`, `Impact`, `Helvetica Neue Condensed Black`, system fallback.
- Body/UI: `Helvetica Neue`, Arial, system sans.
- Avoid all-caps body paragraphs. Reserve uppercase for compact navigation, labels, and display phrases.
- Letter spacing is `0` by default. Display headings may use slight positive spacing only when needed for legibility.
- Text must not overflow on mobile. Use `clamp()`, `overflow-wrap`, and measured Pretext/canvas fallbacks for kinetic blocks.

## Layout

- Fixed top navigation with room links and language toggle.
- Hero/Atrium: full-bleed generated palace image plus local logo, rotating covers, and audio cockpit visible in the first viewport.
- Audio Lab: local track player, equalizer, waveform canvas, live track list.
- Gallery: rotating album-cover spinner inspired by Pretext text-wrap demos. Covers should feel like objects in a circular room.
- Archive: proof points, credits, radio notes, release history.
- Signal Room: direct exits to Apple Music, YouTube, Instagram, SoundCloud, Spotify, Yandex Music, VK.
- No nested cards. Panels are instruments or room surfaces, not generic cards.

## Motion

- Section changes use a fast camera-travel transition: slight zoom, blur, chromatic flash, and room state update.
- Album covers rotate continuously in 3D; reduce to static grid under `prefers-reduced-motion`.
- Text content receives kinetic Pretext-assisted line movement or canvas-rendered flowing text where appropriate.
- Equalizer and waveform respond to Web Audio analyser data after user starts playback.
- All continuous animation pauses or simplifies when reduced motion is requested.

## Pretext Usage

Pretext is used as an optional enhancement:

- Lazy-load `@chenglou/pretext` from ESM CDN.
- Use `prepare`, `layoutWithLines`, or compatible fallbacks to split kinetic phrases into measured lines.
- If Pretext fails to load, keep content readable with CSS and canvas fallback measurement.
- The page must never depend on Pretext for essential navigation or content.

## Audio

- Use only local tracks from `assets/tracks/`.
- Do not autoplay. User clicks Play.
- Use a single `<audio>` element, Web Audio `AnalyserNode`, and canvas rendering.
- Draw both spectrum bars and waveform.
- Keep analyser FFT moderate for performance.

## HyperFrames

HyperFrames is used for a separate palace-room motion composition under `hyperframes-palace/`. It should define rooms, transitions, and cinematic 3D-feeling camera moves for video export or later embedding. The main landing page may reference the composition but should not block on HyperFrames runtime.

## Performance Rules

- Static first render must be useful before JavaScript finishes.
- Use local compressed assets where available; generated 3D image is decorative and lazy where possible outside hero.
- Avoid mandatory large libraries on the landing page. No required Three.js for the main page.
- Defer scripts, lazy-load images outside the first viewport, and respect `prefers-reduced-motion`.
- Audio analysis starts only after a user gesture.
- Canvas animation should use one `requestAnimationFrame` loop and stop doing heavy work when audio is paused.

## Accessibility

- Semantic sections and landmarks.
- Clear focus states.
- High contrast text on dark backgrounds.
- Buttons describe actions.
- Media controls are keyboard reachable.
- Decorative motion has reduced-motion alternatives.
- Album covers have descriptive alt text.

## Quality Checklist

- Desktop and mobile screenshots verified in browser.
- Player buttons, room navigation, language toggle, and A/B variant toggle clicked.
- No visible text overlap.
- No broken local assets.
- No console errors that break interaction.
- Design rules extracted after iteration.
