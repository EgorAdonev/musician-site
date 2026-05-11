# Design

## Overview

Single-page artist landing site for blnfkr. The system is built from local cover art: neon green dice, purple-pink scan distortion, a monochrome portrait sketch, the yellow blnfkr logo mark, grain, rough borders, and large compressed type.

## Color Palette

- `--ink`: `oklch(13% 0.018 286)`, tinted near-black for night sections.
- `--paper`: `oklch(94% 0.016 114)`, acidic off-white for text.
- `--acid`: `oklch(76% 0.23 138)`, cover-art green used as the main brand signal.
- `--violet`: `oklch(61% 0.23 310)`, Instagram and cover distortion accent.
- `--cyan`: `oklch(82% 0.19 205)`, cross-light and link hover accent.
- `--hot`: `oklch(68% 0.24 30)`, warm noise accent from the dice cover.

## Typography

Use system fonts with deliberate weight contrast to avoid external dependencies. Display text is uppercase, condensed through `font-stretch` where supported, heavy weight, and tight but non-negative letter spacing. Body copy is a readable sans stack with generous line height on dark backgrounds.

## Layout

Hero is full viewport with `bln-fkr-portrait.jpg` and `logo.jpg` as layered background images and visible next-section hint. The page uses asymmetric grids, marquee-style cover strips, and compact framed content blocks with maximum 8px radius.

## Components

- Navigation: small fixed top bar with visible social exits.
- Browser identity: `favicon.ico` generated from `logo.jpg`.
- Language: in-place `RU / EN` segmented toggle in the navigation, with the selected language persisted in `localStorage`.
- Hero actions: high-contrast platform buttons.
- Story section: two-column layout with narrative copy and credits.
- Releases: cover-art grid using every local album-cover asset.
- Social section: atmospheric artist photo and direct links.

## Motion

Use subtle entrance reveals, slow background drift, and hover transforms on covers. Respect `prefers-reduced-motion`.
