# Sunday — Style Reference
> Warm, bright, inviting future.

**Theme:** light

The Sunday design system exudes a friendly, approachable high-tech elegance, like a next-generation appliance. The dominant bright white background is punctuated by highly saturated, inviting yellow accents, drawing the eye to interactive elements. Large, bold headlines set in a custom sans-serif with subtle negative letter-spacing project a confident yet understated tone, making advanced robotics feel accessible rather than intimidating. The playful contrast between sharp 0px radii for some interactive elements and softer 12px card corners creates a dynamic visual language.

## Colors

| Name | Value | Role |
|------|-------|------|
| Snowfield | `#ffffff` | Page backgrounds, primary surfaces, most text over dark backgrounds. |
| Coal | `#000000` | Hero headlines, critical text, strong borders. |
| Graphite | `#1a1a1a` | Body text, secondary headings, default links, icons. |
| Silver Mist | `#eeeeee` | Subtle borders, button backgrounds in hover states, light dividers. |
| Pebble | `#6f6f6f` | Secondary body text, supporting information, subtle accents. |
| Frost | `#f3f3f0` | Tertiary backgrounds, subtle section breaks. |
| Aqua Haze | `#d9ecee` | Subtle background shading, decorative element fill. |
| Buttery Yellow | `#f7e731` | Primary call-to-action buttons, active states, key highlights — a warm, vibrant pop against the neutral palette. |
| Earthen Creme | `#eadcce` | Card backgrounds, subtle accent blocks, creating warmth. |
| Sage Whisper | `#aec2b8` | Card backgrounds, subtle accent blocks, providing natural harmony. |
| Sage Mist Gradient | `linear-gradient(in oklab, rgb(174, 194, 184) 33%, rgb(236, 236, 232) 100%)` | Background gradient for certain sections, adding gentle depth. |

## Typography

### sans — Primary brand display font for all headings and body text. The custom nature with negative letter-spacing maintains a tight yet airy feel, preventing large headings from feeling too spread out.
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 16px, 18px, 20px, 24px, 32px, 42px, 84px, 104px, 120px, 142px
- **Line height:** 1.00, 1.10, 1.15, 1.20, 1.30, 1.33, 1.40, 1.50
- **Letter spacing:** -0.025
- **OpenType features:** `"kern", "ss01"`

### mono — Used for smaller utility text like captions, labels, and metadata, providing a technical contrast to the primary sans-serif. The positive letter-spacing ensures legibility at small sizes.
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 12px, 14px
- **Line height:** 1.00, 1.14, 1.20, 1.33, 1.43
- **Letter spacing:** 0.025
- **OpenType features:** `"kern", "ss01"`

### helvetica neue — Bold, compact typeface for specific button labels or emphasized text, providing a robust feel within constrained spaces.
- **Substitute:** Arial Bold
- **Weights:** 700
- **Sizes:** 14px
- **Line height:** 1.71
- **Letter spacing:** 0

### Type Scale

| Role | Size | Line Height | Letter Spacing |
|------|------|-------------|----------------|
| caption | 12px | 1.43 | 0.025px |
| body-sm | 14px | 1.43 | 0.025px |
| body | 16px | 1.5 | -0.025px |
| subheading | 20px | 1.4 | -0.025px |
| heading | 24px | 1.33 | -0.025px |
| heading-lg | 42px | 1.15 | -0.025px |
| display | 142px | 1 | -0.025px |

## Spacing & Layout

**Base unit:** 4px

**Density:** comfortable

- **Section gap:** 160px
- **Card padding:** 12-24px
- **Element gap:** 4px

### Border Radius

- **cards:** 12px
- **other:** 8px, 24px
- **buttons:** 4px

## Components

### Ghost Header Button
**Role:** Navigation, secondary actions.

Transparent background (rgba(0, 0, 0, 0)), text color #EEEEEE, no border, 0px border radius, 0px padding. Used in main header for nav items to appear minimal and blend with dark backgrounds.

### Text Link Button
**Role:** Inline actions, simple navigation.

Transparent background (rgba(0, 0, 0, 0)), text color #1A1A1A, text-based, 0px border radius, 20px padding. Used for clear, direct calls to action without strong visual hierarchy.

### Light Pill Button
**Role:** Secondary calls to action, filters.

Transparent background (rgba(0, 0, 0, 0)), text color #000000, subtle border (oklab(0 0 0 / 0.1)), 1.67772e+07px (effectively pill) border-radius, 12px vertical padding, 14px horizontal padding.

### Dark Pill Button
**Role:** Emphasized calls to action, primary interactions.

Background color #000000, text color #1A1A1A, 6px border-radius, 0px padding. Used sparingly as a strong interactive element on light backgrounds.

### Hero CTA Button
**Role:** Primary site actions (e.g., join beta).

Background color #f7e731 (Buttery Yellow), text color #000000 (Coal), font 'sans' size 18px 400 weight, 1.67772e+07px (effectively pill) border-radius, 18px vertical padding, 24px horizontal padding.

### Feature Card Transparent
**Role:** Informational content blocks.

Transparent background (rgba(0, 0, 0, 0)), 0px border radius, no box shadow, 0px vertical padding, 24px horizontal padding and 160px bottom padding. Used for section intros or full-bleed content.

### Dark Rounded Card
**Role:** Contained dark-themed content blocks.

Background color #000000 (Coal), 12px border radius, no box shadow, 12px padding. Used for embedding content that needs to stand out on a light page.

### Earthen Creme Card
**Role:** Thematic content sections.

Background color #eadcce (Earthen Creme), 12px border radius, no box shadow, 12px padding. Provides a warm, inviting backdrop for specific content.

### Sage Whisper Card
**Role:** Alternative thematic content sections.

Background color #aec2b8 (Sage Whisper), 12px border radius, no box shadow, 12px padding. Offers a calming, modern backdrop for content blocks.

## Do's and Don'ts

### Do
- Prioritize 'Buttery Yellow' (#f7e731) for all primary calls to action to maintain brand vibrancy.
- Use 'sans' font with negative letter spacing (-0.025em) for all headings and body text for a refined, tight typographic feel.
- Apply 1.67772e+07px (pill shape) to primary CTA buttons for a distinct, friendly interactive element.
- Employ 'Snowfield' (#ffffff) as the dominant background color to ensure a bright, airy aesthetic.
- Utilize 12px border-radius for cards and content blocks to introduce subtle softness against the crisp typography.
- Maintain a clear visual hierarchy by using 'Coal' (#000000) for hero headlines and 'Graphite' (#1a1a1a) for body text.
- Use 20px of padding for interactive elements like buttons that are not pill-shaped for consistent touch targets.

### Don't
- Avoid using harsh drop shadows; prefer background color changes or subtle borders for depth.
- Do not deviate from the specified negative letter-spacing for headlines; generic tracking will diminish the brand's typographic signature.
- Refrain from introducing new highly saturated colors outside the defined 'Buttery Yellow' (#f7e731) to preserve accent impact.
- Do not use generic system fonts for prominent text; always use 'sans' or 'mono' to maintain brand identity.
- Avoid mixed unit spacing; adhere to the 4px base unit multipliers for all padding and margins.
- Do not use square buttons (0px radius) unless specifically for ghosted navigation elements.
- De-emphasize borders on non-interactive elements; rely on background subtle color changes for content separation.

## Imagery

The site heavily features product photography of the Memo robot, often showing tight crops of its white and orange chassis. Photography is product-focused, showcasing the robot's design and functionality rather than lifestyle scenes. Imagery is typically contained within sections rather than full-bleed, seamlessly integrated with text. Subtle overlays or background treatments, like the Sage Mist Gradient, can sometimes appear behind product visuals for a softer impression. Icons are minimal, monochromatic, and typically filled, serving a functional rather than decorative role.

## Layout

The site employs a primarily max-width centered layout, with the hero section often feeling full-bleed due to background images that extend to the viewport edge while content remains centered. The hero features a large, centered headline over striking product imagery. Section rhythm is spaced generously, with consistent vertical gaps between content blocks. Content arrangement often alternates between text and image columns (text-left/image-right), common for feature descriptions. Grid usage is visible in feature sections, though not strictly uniform. The navigation is a minimalist top bar, with a logo and hamburger menu.

## Similar Brands

- **Boston Dynamics** — Clean, modern aesthetic focused on robotics, utilizing large type and generous white space.
- **OpenAI** — Sophisticated, approachable presentation of complex technology using a clear, bright aesthetic and well-defined typography.
- **Apple** — Product-heavy photography on clean backgrounds, large headlines, and a minimalist interface emphasizing product design.
- **Google (Material Design)** — Use of subtle background differences for elevation, clear typography, and a bright, functional UI.
