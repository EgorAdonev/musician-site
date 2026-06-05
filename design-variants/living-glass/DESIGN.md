# Design Variant A: Living Glass

## Concept

Living Glass turns the site into a translucent audio cockpit inside the blnfkr palace. The mood is nocturnal and premium, but still raw: frosted panels, refracted neon, waveform light, and cover art suspended behind glass.

The variant should not become generic glassmorphism. Glass is functional material: navigation, player, credits, and social exits feel like touchable panes. Background space stays dark and music-led.

## Physical Scene

A listener opens the page at night on a phone. The screen feels like looking through a cold studio window into a lit control room: cyan reflections, green meters, violet edges, album covers moving behind translucent surfaces.

# Portal — Style Reference
> Frosted glass on a gradient dawn

**Theme:** light

Portal's visual system evokes a serene, organized workspace language: spacious layouts with ethereal background gradients and frosted glass components. Typography is confident yet understated, mixing a retro-inspired display face with a highly legible sans-serif for content. A dominant achromatic palette is punctuated by a singular vivid blue accent, giving interactive elements a distinct, clean 'power-on' feel.

## Colors

| Name | Value | Role |
|------|-------|------|
| Sky Canvas | `#f7f7f7` | Page backgrounds, subtly textured card surfaces. The dominant light neutral that defines the working context |
| White Frost | `#ffffff` | Elevated card surfaces, navigation background, and text on darker backgrounds. Often appears with translucency or inset shadows |
| Ink | `#000000` | Primary text, borders, and main icon fills. Provides strong contrast against primary light surfaces |
| Charcoal Text | `#3e3e3e` | Secondary body text providing slightly softer contrast than primary Ink |
| Muted Ash | `#636363` | Tertiary body text and helper labels, a softer alternative to Charcoal Text |
| Portal Blue | `#007aff` | Primary action background, interactive element highlights, and decorative accents. This vivid blue is the single splash of color that signifies interaction and brand |
| Blue Aura | `#8cc2ff` | Blue supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |

## Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 1.2

### Perfectly Nineties Regular — Headline typeface for major page titles and key statements. Its unique, slightly retro character creates a distinctive brand voice.
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 36px, 48px
- **Line height:** 1.00
- **Letter spacing:** normal
- **OpenType features:** `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`

### Inter — Functional UI text, navigation, body copy, and secondary headings. Its generous x-height and clear forms ensure legibility across all sizes and weights. Used with specific font features for additional refinement.
- **Substitute:** system-ui
- **Weights:** 400, 500, 600
- **Sizes:** 10px, 12px, 14px, 16px, 18px
- **Line height:** 1.20, 1.30, 1.35
- **Letter spacing:** -0.0200em
- **OpenType features:** `"blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on`

### Type Scale

| Role | Size | Line Height | Letter Spacing |
|------|------|-------------|----------------|
| body | 14px | 1.35 | -0.28px |
| heading | 36px | 1 | — |
| display | 48px | 1 | — |

## Spacing & Layout

**Density:** comfortable

- **Section gap:** 40px
- **Card padding:** 16px
- **Element gap:** 10px

### Border Radius

- **navs:** 22px
- **cards:** 16px
- **icons:** 22px
- **other:** 22px
- **images:** 22px
- **buttons:** 50px

## Components

### Primary Ghost Button
**Role:** Call to action button with high contrast text and a 'ghost' background.

Background: Sky Canvas (#f7f7f7), Text: Ink (#000000), Border Radius: 50px, Padding: 0px 36px 0px 36px.

### Primary Action Button
**Role:** Filled call to action button, emphasizing interactions.

Background: Portal Blue (#007aff), Text: Ink (#000000), Border Radius: 50px, Padding: 0px 36px 0px 36px.

### Default Card
**Role:** Standard content container for features or information blocks.

Background: White Frost (#ffffff), Border Radius: 14px, Padding: 16px. No direct shadow, relying on background contrast.

### Frosted Card
**Role:** Enhanced content container with a translucent, semi-frosted appearance.

Background: rgba(255, 255, 255, 0.6), Border Radius: 24px, Padding: 20px. Features a backdrop blur filter for its translucent effect.

### Elevated Bubble Card
**Role:** Prominent, rounded card with a soft shadow for hierarchy.

Background: rgba(255, 255, 255, 0.8), Border Radius: 50px, Shadow: rgba(0, 0, 0, 0.03) 0px 0.6px 2.3px, rgba(0, 0, 0, 0.04) 0px 2.3px 8.7px, rgba(0, 0, 0, 0.08) 0px 10px 38px.

### Compact Card
**Role:** Smaller content container for lists or items needing less visual space.

Background: White Frost (#ffffff), Border Radius: 24px, Padding: 12px 20px.

## Do's and Don'ts

### Do
- Prioritize Sky Canvas (#f7f7f7) for main page backgrounds to maintain a light, airy feel.
- Use Portal Blue (#007aff) exclusively for primary interactive elements and crucial brand accents.
- Apply Perfect Nineties Regular for section titles at 36px or 48px, never for body text.
- Use Inter font with a letter-spacing of -0.0200em for all body and UI text.
- Ensure all buttons have a 50px border-radius, creating distinctive pill shapes.
- Leverage backdrop blur filters on translucent White Frost cards to achieve the frosted glass effect.
- Maintain a comfortable density with 10px element gaps and 16px card padding.

### Don't
- Avoid using multiple accent colors; Portal Blue (#007aff) is the only chromatic highlight.
- Do not use box-shadows to signify elevation for most cards; rely visually on background contrast and translucency.
- Do not vary border-radius significantly within component types; stick to defined radii for buttons, cards, etc.
- Do not use Perfect Nineties Regular for small text or functional labels, reserve it for display use.
- Avoid tight, dense layouts; maintain spaciousness with defined section and element gaps.
- Do not introduce heavy borders or harsh dividers; use soft inset shadows or subtle background differences for separation.
- Do not use dark backgrounds for entire sections unless they serve as a stylized hero element.

## Elevation

- **Elevated Bubble Card:** `rgba(0, 0, 0, 0.03) 0px 0.602187px 2.28831px -0.416667px, rgba(0, 0, 0, 0.04) 0px 2.28853px 8.69643px -0.833333px, rgba(0, 0, 0, 0.08) 0px 10px 38px -1.25px`
- **Primary Action Button (active/focus):** `rgb(140, 194, 255) 0px 1px 0px 1px inset`

## Surfaces

- **Sky Canvas** (`#f7f7f7`) — Base page background. Provides a soft, clean foundation for content.
- **White Frost** (`#ffffff`) — Primary card and elevated component background. Often appears with translucency (rgba(255,255,255,0.6)) and features backdrop blurring for a frosted effect.

## Imagery

This site uses product screenshots with a distinct 'frosted glass' or 'iOS-like' interface overlaid onto abstract, natural landscape photography. Imagery serves a decorative and atmospheric role, creating a sense of calm and aspiration. Screenshots are often contained within rounded rectangular frames and feature translucent UI elements, consistent with the overall frosted aesthetic. Icons are simple, outlined or filled, and primarily monochrome, supporting the clean UI.

## Layout

The page primarily uses a full-bleed layout for background imagery, specifically for the hero section with a gradient sky. Content areas are centered within a soft, visually contained structure, implicitly adhering to a max-width for readability. The hero features a large, centered headline over the atmospheric background, with a central call-to-action. Subsequent sections employ generous vertical spacing, suggesting a comfortable, unhurried reading experience. Content typically alternates between stacked text blocks and embedded product screenshots.

## Similar Brands

- **Linear** — Monochromatic UI with a single vivid accent color, restrained typography, and a focus on clean, spacious layouts.
- **Superhuman** — Emphasis on speed, minimal UI, distinct typography, and subtle component styling with a preference for light themes.
- **Amie** — Use of atmospheric background imagery, light canvas, and primary functional blues for interactive elements.
- **Apple (recent macOS/iOS UI)** — Prevalent use of translucency, backdrop blur, soft shadows, and rounded 'bubble' shapes for UI elements.

## Palette

- Base: blue-black glass shell.
- Main signal: cyan and aqua highlights.
- Active state: acid green, used for Play, active track, active locale, and selected variant.
- Depth glow: violet.
- Heat accent: coral/red-orange only for warning energy and tiny motion flares.
- Text: near-white with blue-green muted copy.

Avoid milky white glass, pale SaaS gradients, and low-contrast gray copy.

## Typography

- Same compact display stack as the main site.
- Display headings can be slightly calmer than Spatial 3D: max scale stays below `6rem`.
- Use `text-wrap: balance` for h1-h3 and never break words mid-word.
- UI text should feel etched into glass: high weight, no letter spacing, compact labels.

## Layout

- Header: translucent fixed glass rail with clear nav separation.
- Hero: palace image visible through a dark glass gradient. `blnfkr` sits directly on space, not inside a card.
- Player: strongest expression of the variant. The instrument panel has layered glass, inner highlights, and visible canvas meters.
- Track list: a second glass pane beside the player, no excess empty vertical space.
- Gallery: rotating covers seen as glossy objects behind a faint lens surface.
- Archive/Credits: chips are glass tiles with enough width for long names.
- Signals: social exits are clean glass panels with crisp icon framing.

## Motion

- Motion should feel refractive: small scale shifts, blur flashes, glints, and waveform shimmer.
- Section travel can use a glass sweep or cyan refraction flash.
- Avoid rubbery motion and noisy constant animation.
- Reduced motion uses static glass layers and no blur-heavy transitions.

## Journey

- Desktop Journey keeps camera-facing marquee.
- Mobile Journey uses the generated tunnel asset as the scene slice, with covers and audio bars reflected in the glass surface.
- No textbox captions.

## Implementation Notes

- Body hook: `body[data-design="glass"]`.
- Use stronger `backdrop-filter` only on UI panes, not full-page sections.
- Keep panels at 8-12px radius. Do not over-round.
- Canvas colors: aqua/cyan dominant, acid active bars, violet tertiary bars.
- If performance drops on mobile, remove blur first and keep transparency via color.

## Risks

- Can look like generic 2024 glassmorphism if every panel gets the same blur.
- Can reduce readability if copy sits over bright palace imagery.
- Can feel too polished for the artist if rough cover texture disappears.

## Success Criteria

- Player feels premium and usable.
- Navigation and credits are easiest to read among the three variants.
- Album covers still feel central, not decorative.
- Mobile remains stable without heavy blur cost.
