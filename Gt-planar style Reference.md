# Gt-planar — Style Reference
> Midnight mainframe with glowing terminals.

**Theme:** dark

GT Planar channels 'cyberpunk utility': a deep dark canvas with vibrant, almost neon, monochromatic accents of electric violet and glowing green. Typography is hyper-controlled and precise, often uppercase, with distinct pixel-perfect white borders defining interactive elements. This creates a high-fidelity, command-line interface aesthetic where every visual element serves a clear, functional purpose in a deeply contrasted, high-tech environment.

## Colors

| Name | Value | Role |
|------|-------|------|
| Void Black | `#000000` | Page background, primary text on bright surfaces, button text on electric purple fills, hairline borders |
| Screen White | `#ffffff` | Interface text, icon strokes, active state borders, text on dark surfaces, accent shadows |
| Input Dark | `#1a0014` | Input field backgrounds, subtle elevated surface |
| Subtle Gray | `#949494` | Muted text, inactive element borders, secondary information |
| Border Gray | `#606060` | Fine, utilitarian borders on neutral elements |
| Electric Violet | `#6100ff` | Primary action button backgrounds, interactive text, button borders, active accents |
| Fluorescent Green | `#00ff85` | Primary Call to Action button background, active state borders, and high-emphasis information. This provides a stark contrast to the violet |
| Deep Space Violet | `#29006c` | Secondary action button backgrounds, elevated card surfaces with a subtle tint |
| Safety Yellow | `#fcff76` | Green outline accent for tags, dividers, and focused UI edges |
| Alert Red | `#ff003d` | Red outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |
| Indicator Orange | `#ff8a00` | Orange outline accent for tags, dividers, and focused UI edges. Use as a supporting accent, not as a status color |

## Typography

### GT Planar — The sole typeface, GT Planar, defines the entire text hierarchy from micro-interactions to monumental headlines. Its variable weights emphasize precision and stark contrast, making it crucial for the 'cyberpunk utility' aesthetic. The wide range of sizes and letter-spacing values allows for hyper-controlled text density.
- **Substitute:** Space Mono, IBM Plex Mono
- **Weights:** 300, 400, 700
- **Sizes:** 11px, 14px, 16px, 17px, 20px, 24px, 25px, 32px, 37px, 58px, 86px, 115px, 146px, 187px, 230px, 274px
- **Line height:** 0.80, 0.90, 0.95, 1.00, 1.09, 1.10, 1.14, 1.15, 1.17, 1.19, 1.20, 1.24, 1.43, 1.50, 1.63
- **Letter spacing:** -0.2000em, -0.0500em, -0.0100em, -0.0050em, 0.0050em, 0.0080em, 0.0110em, 0.0150em, 0.0200em, 0.0250em, 0.0400em, 0.0460em, 0.0500em, 0.0700em, 0.7000em
- **OpenType features:** `"kern", "ss04"; "kern", "ss01", "ss02", "ss03"; "kern", "ss01", "ss02"; "kern", "ss03", "ss04" 0; "kern", "ss01"; "kern", "ss02"; "kern", "ss03"; "kern", "lnum", "tnum"`

### Type Scale

| Role | Size | Line Height | Letter Spacing |
|------|------|-------------|----------------|
| caption | 11px | 1.43 | 0.05px |
| body-sm | 14px | 1.17 | 0.015px |
| body | 16px | 1.15 | 0.011px |
| subheading | 24px | 1.1 | 0.008px |
| heading | 58px | 0.95 | -0.005px |
| heading-lg | 86px | 0.9 | -0.01px |
| display-sm | 146px | 0.8 | -0.05px |
| display | 274px | 0.8 | -0.2px |

## Spacing & Layout

**Base unit:** 4px

**Density:** compact

- **Section gap:** 25px
- **Card padding:** 25px
- **Element gap:** 5px

### Border Radius

- **tags:** 9999px
- **buttons:** 9999px
- **default:** 0px

## Components

### Primary Action Button (Violet Fill)
**Role:** Main interactive element for actions.

Filled with Electric Violet (#6100ff), black text, no border radius, 0px padding. Focus on background color for interaction.

### Outlined Button (Violet Border)
**Role:** Secondary action or ghost button.

Transparent background, Electric Violet (#6100ff) text, Electric Violet (#6100ff) 1px border. 5px padding, 0px border-radius.

### Dark Elevated Button (Violet Border)
**Role:** Tertiary action or grouped controls.

Deep Space Violet (#29006c) background, Electric Violet (#6100ff) accent text, Electric Violet (#6100ff) 1px border. No border radius, 0px padding.

### Fluorescent Action Button
**Role:** Prominent, high-contrast call to action.

Fluorescent Green (#00ff85) background, Void Black (#000000) text, Fluorescent Green (#00ff85) 1px border. 25px top/bottom padding, 50px left/right padding, 0px border-radius.

### Text Input
**Role:** Data entry fields.

Input Dark (#1a0014) background, Screen White (#ffffff) text, Screen White (#ffffff) 1px border. No border radius, 0px padding.

### Navigation Link Outlined (Red)
**Role:** Accentuated navigation item for warnings/promotions.

Transparent background, Alert Red (#ff003d) text. Defined by a 1px Alert Red (#ff003d) border instead of a fill, 10px padding, 0px border-radius.

### Navigation Link Outlined (Yellow)
**Role:** Accentuated navigation item for warnings/promotions.

Transparent background, Safety Yellow (#fcff76) text. Defined by a 1px Safety Yellow (#fcff76) border instead of a fill, 10px padding, 0px border-radius.

## Do's and Don'ts

### Do
- Prioritize Void Black (#000000) as the dominant background color for most sections to maintain a dark, immersive theme.
- Use Electric Violet (#6100ff) only for primary interactive elements, active states, and critical information to maximize its impact.
- Employ the GT Planar typeface exclusively, varying weight and size meticulously to establish hierarchy rather than mixing font families.
- Define interactive elements with stark 1px Screen White (#ffffff) or accent-colored borders (Electric Violet #6100ff, Alert Red #ff003d, Safety Yellow #fcff76) and 0px border-radius for a precise, angular look.
- Apply negative letter-spacing for large display text and positive letter-spacing for smaller, utilitarian text to enhance the precise, engineered feel.
- Use 0px border-radius for most UI elements like buttons, inputs, and cards, reserving 9999px for small, tag-like elements.
- Construct layouts with clear, often horizontal, divisions and compact spacing to pack information densely without feeling cluttered.

### Don't
- Avoid using soft shadows or gradients that suggest depth or realism, as the system relies on stark contrasts and flat surfaces.
- Do not introduce additional font families; GT Planar is the sole typographic voice.
- Refrain from using pastel or desaturated colors; all accent colors must be vivid and highly saturated.
- Never add rounded corners to primary buttons, inputs, or cards; maintain the hard-edged aesthetic except for very specific tag-like elements.
- Do not use more than two accent colors prominently in a single view to maintain focus and prevent visual noise.
- Avoid large, unbordered blocks of color unless they serve as a full-bleed hero, instead opting for precise borders around elements.
- Do not use generic spacing values; adhere to the 4px base unit and derived tokens for compact, consistent rhythm.

## Elevation

- **Interactive Elements:** `rgb(255, 255, 255) 1px 0px 0px 0px, rgb(255, 255, 255) 0px 1px 0px 0px, rgb(255, 255, 255) 1px 1px 0px 0px, rgb(255, 255, 255) 1px 0px 0px 0px inset, rgb(255, 255, 255) 0px 1px 0px 0px inset`

## Surfaces

- **Canvas** (`#000000`) — Primary page background, deep void for content.
- **Input Surface** (`#1a0014`) — Input fields and subtly recessed interactive areas.
- **Elevated Violet Surface** (`#29006c`) — Background for secondary interactive elements or elevated content modules.

## Imagery

This design system uses no traditional imagery like photography or illustration. Instead, visual elements are generated dynamically, resembling wireframes or high-speed light trails, contributing to a sense of data visualization and kinetic energy. The focus is entirely on UI elements and stark typography. Icons, where present, are monochromatic outlines with sharp angles and thin strokes.

## Layout

The page model is full-bleed but features tightly controlled maximum width content areas. The hero section often utilizes a full-viewport, dynamically generated visual background with centered, stark headlines. Section rhythm is primarily seamless, with content blocks often flowing directly into one another or defined by subtle internal dividers rather than alternating background bands. Content arrangement varies from centered stacks of text to more complex, grid-based interactive elements where text and functional UI are integrated directly into the visual experience. The overall density is compact, even within the full-bleed canvas, ensuring information is readily accessible. Navigation is handled via a fixed top bar with minimal, bordered text links.

## Similar Brands

- **The Future is Type** — Shares a strong emphasis on a single, technically precise monospace/geometric typeface, using it to build an entire visual identity.
- **Hyper Island** — Employs high-contrast dark themes with vivid, sometimes neon, single-color accents for interactivity and focus.
- **Certain graphic design portfolios** — Focuses heavily on typographic experimentation and visual starkness, treating text as the primary graphic element.
- **Gandi.net** — Features a dark UI with bright, saturated key action colors and minimalist, functional design.
