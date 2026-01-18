# Brank Design System: "Quiet Luxury"

> A comprehensive design system for the Brank frontend, implementing a "Volumetric Dark" aesthetic that mimics high-end physical hardware.

---

## Table of Contents

1. [High-Level Philosophy](#1-high-level-philosophy)
2. [Color Palette](#2-color-palette)
3. [Volumetric Shadow Tokens](#3-volumetric-shadow-tokens)
4. [Typography](#4-typography)
5. [Spacing & Layout](#5-spacing--layout)
6. [Component Patterns](#6-component-patterns)
7. [Animation & Transitions](#7-animation--transitions)
8. [Tailwind Configuration](#8-tailwind-configuration)
9. [CSS Utility Classes](#9-css-utility-classes)
10. [Usage Examples](#10-usage-examples)

---

## 1. High-Level Philosophy

This design system, codenamed **"Volumetric Dark,"** mimics high-end physical hardware with a premium, understated aesthetic.

### Core Principles

| Principle | Description |
|-----------|-------------|
| **Physics** | Elements are not "flat." They are either **raised (convex)** or **depressed (concave)** into the dark surface. |
| **Lighting** | Global light source is **Top-Left**. Shadows fall **Bottom-Right**. |
| **Material** | Soft-touch matte plastic. **No glossy surfaces. No harsh borders.** |
| **Restraint** | Minimal color usage. Let shadow and depth do the work. |

### Design Mantras

- "Black on Black" - Depth through shadow, not color
- "Whisper, don't shout" - Subtle interactions over dramatic animations
- "Touch it" - Every element should feel tangible and physical

---

## 2. Color Palette

The interface is **"Black on Black"** - using subtle variations of dark tones to create depth.

### Primary Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `bg-base` | `#050505` | `rgb(5, 5, 5)` | The desk surface / page background |
| `bg-surface` | `#111111` | `rgb(17, 17, 17)` | Raised elements (cards, containers) |
| `bg-surface-light` | `#161616` | `rgb(22, 22, 22)` | Lighter surface variant |
| `bg-elevated` | `#1a1a1a` | `rgb(26, 26, 26)` | Hover states, elevated surfaces |
| `bg-depressed` | `#0a0a0a` | `rgb(10, 10, 10)` | Inset/depressed areas |

### Text Colors

| Token | Hex | Opacity | Usage |
|-------|-----|---------|-------|
| `text-primary` | `#EAEAEA` | 100% | Primary headings, important text |
| `text-secondary` | `#CCCCCC` | 100% | Secondary text, descriptions |
| `text-muted` | `#888888` | 100% | Labels, captions, hints |
| `text-subtle` | `#666666` | 100% | Disabled states, very subtle text |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-success` | `#22C55E` | Small LED indicators only, success states |
| `accent-warning` | `#F59E0B` | Warning indicators |
| `accent-error` | `#EF4444` | Error states |
| `accent-info` | `#3B82F6` | Information indicators |

### Shadow Colors

| Token | Hex/RGBA | Usage |
|-------|----------|-------|
| `shadow-light` | `#1f1f1f` | Top-left highlight |
| `shadow-dark` | `#050505` | Bottom-right shadow |
| `shadow-border` | `rgba(255,255,255,0.02)` | Subtle border reinforcement |
| `shadow-glow` | `rgba(255,255,255,0.2)` | Text glow effect |

### Color Rules

```
✅ DO:
- Use bg-base (#050505) as the primary page background
- Use off-white (#EAEAEA) for large text, never pure white (#FFFFFF)
- Use green (#22C55E) sparingly, only for small LED indicators
- Create depth through shadow variations, not color differences

❌ DON'T:
- Use pure white (#FFFFFF) for large text areas
- Use bright accent colors for large surfaces
- Mix warm and cool grays
- Use gradients (except very subtle ones for depth)
```

---

## 3. Volumetric Shadow Tokens

Use these exact shadow values. **Do not invent new shadows.**

### A. The "Soft Tile" (Raised Card)

**Used for:** Feature cards, containers, buttons, modal overlays

```css
/* CSS */
.shadow-soft-tile {
  box-shadow:
    -20px -20px 60px #1f1f1f,
    20px 20px 60px #050505;
  border: 1px solid rgba(255, 255, 255, 0.02);
}

/* Tailwind Arbitrary Value */
shadow-[-20px_-20px_60px_#1f1f1f,20px_20px_60px_#050505]
border border-white/[0.02]
```

**Smaller variant (for buttons):**
```css
.shadow-soft-tile-sm {
  box-shadow:
    -8px -8px 24px #1f1f1f,
    8px 8px 24px #050505;
  border: 1px solid rgba(255, 255, 255, 0.02);
}
```

### B. The "Deep Field" (Depressed Input)

**Used for:** Search bars, text inputs, code snippets, depressed containers

```css
/* CSS */
.shadow-deep-field {
  box-shadow:
    inset 5px 5px 15px #050505,
    inset -5px -5px 15px #1a1a1a;
}

/* Tailwind Arbitrary Value */
shadow-[inset_5px_5px_15px_#050505,inset_-5px_-5px_15px_#1a1a1a]
```

**Larger variant (for bigger containers):**
```css
.shadow-deep-field-lg {
  box-shadow:
    inset 8px 8px 24px #050505,
    inset -8px -8px 24px #1a1a1a;
}
```

### C. The "Ridge" (Subtle Border)

**Used for:** Dividers, extremely subtle buttons, subtle separations

```css
/* CSS */
.shadow-ridge {
  box-shadow:
    6px 6px 10px -1px rgba(0, 0, 0, 0.5),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.02);
}

/* Tailwind Arbitrary Value */
shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.5),-6px_-6px_10px_-1px_rgba(255,255,255,0.02)]
```

### D. The "Glow" (LED Indicator)

**Used for:** Status indicators, active states, success markers

```css
/* CSS */
.shadow-glow-green {
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
}

.shadow-glow-blue {
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
}

/* Tailwind Arbitrary Value */
shadow-[0_0_10px_rgba(34,197,94,0.6)]
```

### E. The "Text Glow"

**Used for:** Key headings, emphasized words

```css
/* CSS */
.text-glow {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

.text-glow-strong {
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
}
```

### Shadow Quick Reference

| Shadow Type | Use Case | Feel |
|-------------|----------|------|
| Soft Tile | Cards, buttons | Raised, tactile |
| Deep Field | Inputs, search | Depressed, recessed |
| Ridge | Dividers, subtle elements | Barely there |
| Glow | Indicators, active states | Alive, electronic |
| Text Glow | Headlines, emphasis | Premium, ethereal |

---

## 4. Typography

### Font Stack

```css
/* Primary Font */
font-family: 'Geist Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Monospace Font */
font-family: 'Geist Mono', 'Fira Code', 'Consolas', monospace;
```

### Type Scale

| Level | Size | Weight | Tracking | Line Height | Usage |
|-------|------|--------|----------|-------------|-------|
| Display | 72px / 4.5rem | 500 (medium) | -0.03em | 1.1 | Hero headlines |
| H1 | 48px / 3rem | 500 (medium) | -0.02em | 1.2 | Page titles |
| H2 | 36px / 2.25rem | 500 (medium) | -0.02em | 1.25 | Section headers |
| H3 | 24px / 1.5rem | 500 (medium) | -0.01em | 1.3 | Subsection headers |
| H4 | 20px / 1.25rem | 500 (medium) | -0.01em | 1.4 | Card titles |
| Body Large | 18px / 1.125rem | 400 (normal) | 0 | 1.6 | Lead paragraphs |
| Body | 16px / 1rem | 400 (normal) | 0 | 1.6 | Default text |
| Body Small | 14px / 0.875rem | 400 (normal) | 0 | 1.5 | Secondary text |
| Caption | 12px / 0.75rem | 400 (normal) | 0.02em | 1.4 | Labels, hints |
| Overline | 11px / 0.6875rem | 500 (medium) | 0.1em | 1.4 | Category labels |

### Typography Rules

```css
/* Headers */
.heading {
  font-weight: 500; /* medium */
  letter-spacing: -0.02em; /* tracking-tight */
  color: #EAEAEA;
}

/* Body Text */
.body {
  font-weight: 400; /* normal */
  color: rgba(234, 234, 234, 0.8); /* 80% opacity */
  line-height: 1.6;
}

/* Muted Text */
.muted {
  color: #888888;
}

/* Glowing Text (for emphasis) */
.text-emphasis {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}
```

### Tailwind Typography Classes

```html
<!-- Display Heading -->
<h1 class="text-7xl font-medium tracking-tight text-[#EAEAEA]">

<!-- H1 -->
<h1 class="text-5xl font-medium tracking-tight text-[#EAEAEA]">

<!-- H2 -->
<h2 class="text-4xl font-medium tracking-tight text-[#EAEAEA]">

<!-- Body with opacity -->
<p class="text-base font-normal text-[#EAEAEA]/80">

<!-- Muted caption -->
<span class="text-xs font-normal tracking-wide text-[#888888]">

<!-- Glowing keyword -->
<span class="[text-shadow:0_0_20px_rgba(255,255,255,0.2)]">
```

---

## 5. Spacing & Layout

### Spacing Scale

Based on a 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight internal spacing |
| `space-2` | 8px | Default internal spacing |
| `space-3` | 12px | Small gaps |
| `space-4` | 16px | Default gaps |
| `space-6` | 24px | Section internal padding |
| `space-8` | 32px | Card padding |
| `space-12` | 48px | Section gaps |
| `space-16` | 64px | Large section gaps |
| `space-24` | 96px | Page section spacing |
| `space-32` | 128px | Major section breaks |

### Container Widths

```css
/* Max widths for content */
--container-sm: 640px;   /* Narrow content, forms */
--container-md: 768px;   /* Medium content */
--container-lg: 1024px;  /* Wide content */
--container-xl: 1280px;  /* Full-width sections */
--container-2xl: 1536px; /* Maximum content width */
```

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Small elements, tags |
| `rounded` | 8px | Buttons, small cards |
| `rounded-md` | 12px | Default cards |
| `rounded-lg` | 16px | Large cards |
| `rounded-xl` | 24px | Feature cards, modals |
| `rounded-2xl` | 32px | Hero elements |
| `rounded-full` | 9999px | Pills, toggles, avatars |

---

## 6. Component Patterns

### A. Status Tile (Bento Grid Item)

A square/rectangular container using Shadow A (Soft Tile).

```tsx
interface StatusTileProps {
  icon: React.ReactNode;
  label: string;
  status?: 'active' | 'inactive';
}

// Structure
<div className="
  bg-[#111111]
  rounded-xl
  p-6
  shadow-[-20px_-20px_60px_#1f1f1f,20px_20px_60px_#050505]
  border border-white/[0.02]
  flex flex-col items-center justify-center
  aspect-square
">
  {/* Icon */}
  <div className="text-[#EAEAEA] mb-4">
    {icon}
  </div>

  {/* Label */}
  <span className="text-sm text-[#888888]">
    {label}
  </span>

  {/* Status LED (if active) */}
  {status === 'active' && (
    <div className="
      w-2 h-2
      rounded-full
      bg-green-500
      shadow-[0_0_10px_rgba(34,197,94,0.6)]
      mt-3
    " />
  )}
</div>
```

### B. Toggle Switch

A pill-shaped container using Shadow B (Depressed track) with Shadow A (Raised knob).

```tsx
interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

// Structure
<button className="
  relative
  w-14 h-8
  rounded-full
  bg-[#0a0a0a]
  shadow-[inset_5px_5px_15px_#050505,inset_-5px_-5px_15px_#1a1a1a]
  transition-all duration-300
">
  {/* Knob */}
  <div className={`
    absolute top-1
    w-6 h-6
    rounded-full
    bg-[#161616]
    shadow-[-8px_-8px_24px_#1f1f1f,8px_8px_24px_#050505]
    border border-white/[0.02]
    transition-all duration-300
    ${enabled ? 'left-7' : 'left-1'}
  `}>
    {/* Active LED */}
    {enabled && (
      <div className="
        absolute inset-0 m-auto
        w-2 h-2
        rounded-full
        bg-green-500
        shadow-[0_0_10px_rgba(34,197,94,0.6)]
      " />
    )}
  </div>
</button>
```

### C. Input Field (Deep Field)

```tsx
// Structure
<div className="relative">
  {/* Label */}
  <label className="
    block text-xs font-medium tracking-wide
    text-[#888888] uppercase mb-2
  ">
    Search
  </label>

  {/* Input Container */}
  <div className="
    bg-[#0a0a0a]
    rounded-lg
    shadow-[inset_5px_5px_15px_#050505,inset_-5px_-5px_15px_#1a1a1a]
    px-4 py-3
  ">
    <input
      type="text"
      className="
        bg-transparent
        w-full
        text-[#EAEAEA]
        placeholder:text-[#666666]
        outline-none
        text-base
      "
      placeholder="Type to search..."
    />
  </div>
</div>
```

### D. Primary Button (Soft Tile)

```tsx
// Structure
<button className="
  bg-[#111111]
  text-[#EAEAEA]
  px-6 py-3
  rounded-lg
  font-medium
  shadow-[-8px_-8px_24px_#1f1f1f,8px_8px_24px_#050505]
  border border-white/[0.02]
  transition-all duration-300
  hover:bg-[#161616]
  active:shadow-[inset_5px_5px_15px_#050505,inset_-5px_-5px_15px_#1a1a1a]
">
  Get Started
</button>
```

### E. Card (Feature Card)

```tsx
// Structure
<div className="
  bg-[#111111]
  rounded-xl
  p-8
  shadow-[-20px_-20px_60px_#1f1f1f,20px_20px_60px_#050505]
  border border-white/[0.02]
">
  {/* Icon/Image Area */}
  <div className="
    w-12 h-12
    rounded-lg
    bg-[#0a0a0a]
    shadow-[inset_5px_5px_15px_#050505,inset_-5px_-5px_15px_#1a1a1a]
    flex items-center justify-center
    mb-6
  ">
    <Icon className="w-6 h-6 text-[#888888]" />
  </div>

  {/* Title */}
  <h3 className="
    text-xl font-medium tracking-tight
    text-[#EAEAEA] mb-3
  ">
    Feature Title
  </h3>

  {/* Description */}
  <p className="text-[#888888] text-base leading-relaxed">
    Feature description goes here with muted text.
  </p>
</div>
```

### F. Navigation Item

```tsx
// Structure
<a className="
  px-4 py-2
  rounded-lg
  text-[#888888]
  text-sm font-medium
  transition-all duration-300
  hover:text-[#EAEAEA]
  hover:bg-[#111111]
  hover:shadow-[-8px_-8px_24px_#1f1f1f,8px_8px_24px_#050505]
">
  Products
</a>
```

---

## 7. Animation & Transitions

### Default Transition

All interactive elements use the same base transition:

```css
.transition-base {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Tailwind */
transition-all duration-300
```

### Hover Lift Effect

For cards that "lift" on hover:

```css
.hover-lift {
  transition: all 300ms ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow:
    -24px -24px 70px #1f1f1f,
    24px 24px 70px #050505;
}
```

### Press Effect

For buttons that "press" when clicked:

```css
.press-effect:active {
  transform: scale(0.98);
  box-shadow:
    inset 5px 5px 15px #050505,
    inset -5px -5px 15px #1a1a1a;
}
```

### Fade In Animation

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 500ms ease-out forwards;
}
```

### Glow Pulse (for LED indicators)

```css
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
  }
  50% {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.8);
  }
}

.animate-glow-pulse {
  animation: glowPulse 2s ease-in-out infinite;
}
```

---

## 8. Tailwind Configuration

Add these to your `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        'bg-base': '#050505',
        'bg-surface': '#111111',
        'bg-surface-light': '#161616',
        'bg-elevated': '#1a1a1a',
        'bg-depressed': '#0a0a0a',

        // Text colors
        'text-primary': '#EAEAEA',
        'text-secondary': '#CCCCCC',
        'text-muted': '#888888',
        'text-subtle': '#666666',

        // Shadow colors
        'shadow-light': '#1f1f1f',
        'shadow-dark': '#050505',
      },

      boxShadow: {
        // Soft Tile (Raised)
        'soft-tile': '-20px -20px 60px #1f1f1f, 20px 20px 60px #050505',
        'soft-tile-sm': '-8px -8px 24px #1f1f1f, 8px 8px 24px #050505',

        // Deep Field (Depressed)
        'deep-field': 'inset 5px 5px 15px #050505, inset -5px -5px 15px #1a1a1a',
        'deep-field-lg': 'inset 8px 8px 24px #050505, inset -8px -8px 24px #1a1a1a',

        // Ridge (Subtle)
        'ridge': '6px 6px 10px -1px rgba(0,0,0,0.5), -6px -6px 10px -1px rgba(255,255,255,0.02)',

        // Glow effects
        'glow-green': '0 0 10px rgba(34, 197, 94, 0.6)',
        'glow-blue': '0 0 10px rgba(59, 130, 246, 0.6)',
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.2)',
      },

      fontFamily: {
        sans: ['Geist Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Geist Mono', 'Fira Code', 'Consolas', 'monospace'],
      },

      letterSpacing: {
        'tighter': '-0.03em',
        'tight': '-0.02em',
        'snug': '-0.01em',
      },

      animation: {
        'fade-in': 'fadeIn 500ms ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(34, 197, 94, 0.6)' },
          '50%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 9. CSS Utility Classes

Add these to your `globals.css`:

```css
/* ============================================
   BRANK DESIGN SYSTEM - Utility Classes
   ============================================ */

/* Background Colors */
.bg-base { background-color: #050505; }
.bg-surface { background-color: #111111; }
.bg-surface-light { background-color: #161616; }
.bg-elevated { background-color: #1a1a1a; }
.bg-depressed { background-color: #0a0a0a; }

/* Text Colors */
.text-primary { color: #EAEAEA; }
.text-secondary { color: #CCCCCC; }
.text-muted { color: #888888; }
.text-subtle { color: #666666; }

/* Volumetric Shadows */
.shadow-soft-tile {
  box-shadow: -20px -20px 60px #1f1f1f, 20px 20px 60px #050505;
  border: 1px solid rgba(255, 255, 255, 0.02);
}

.shadow-soft-tile-sm {
  box-shadow: -8px -8px 24px #1f1f1f, 8px 8px 24px #050505;
  border: 1px solid rgba(255, 255, 255, 0.02);
}

.shadow-deep-field {
  box-shadow: inset 5px 5px 15px #050505, inset -5px -5px 15px #1a1a1a;
}

.shadow-deep-field-lg {
  box-shadow: inset 8px 8px 24px #050505, inset -8px -8px 24px #1a1a1a;
}

.shadow-ridge {
  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.5), -6px -6px 10px -1px rgba(255,255,255,0.02);
}

/* Glow Effects */
.shadow-glow-green {
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
}

.shadow-glow-blue {
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
}

.text-glow {
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

.text-glow-strong {
  text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
}

/* LED Indicator */
.led-indicator {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: #22C55E;
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
}

.led-indicator-pulse {
  animation: glowPulse 2s ease-in-out infinite;
}

/* Subtle Border */
.border-subtle {
  border: 1px solid rgba(255, 255, 255, 0.02);
}

.border-subtle-visible {
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Typography */
.heading-display {
  font-size: 4.5rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #EAEAEA;
}

.heading-1 {
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: #EAEAEA;
}

.heading-2 {
  font-size: 2.25rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: #EAEAEA;
}

.heading-3 {
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.3;
  color: #EAEAEA;
}

.body-large {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(234, 234, 234, 0.8);
}

.body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(234, 234, 234, 0.8);
}

.caption {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.4;
  color: #888888;
}

.overline {
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #888888;
}

/* Hover Effects */
.hover-lift {
  transition: all 300ms ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: -24px -24px 70px #1f1f1f, 24px 24px 70px #050505;
}

/* Press Effect */
.press-effect {
  transition: all 150ms ease;
}

.press-effect:active {
  transform: scale(0.98);
  box-shadow: inset 5px 5px 15px #050505, inset -5px -5px 15px #1a1a1a;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
  }
  50% {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.8);
  }
}

.animate-fade-in {
  animation: fadeIn 500ms ease-out forwards;
}

.animate-glow-pulse {
  animation: glowPulse 2s ease-in-out infinite;
}
```

---

## 10. Usage Examples

### Example: Hero Section

```tsx
export function HeroSection() {
  return (
    <section className="bg-base min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        {/* Overline */}
        <span className="overline text-text-muted mb-4 block">
          Brand Intelligence Platform
        </span>

        {/* Headline */}
        <h1 className="heading-display text-glow mb-6">
          Track Your Brand's
          <br />
          <span className="text-text-muted">Digital Presence</span>
        </h1>

        {/* Subheadline */}
        <p className="body-large max-w-2xl mx-auto mb-10">
          Monitor mentions, analyze sentiment, and understand your
          brand's impact across every channel.
        </p>

        {/* CTA Button */}
        <button className="
          bg-surface
          text-primary
          px-8 py-4
          rounded-lg
          font-medium
          shadow-soft-tile-sm
          border-subtle
          hover-lift
          press-effect
        ">
          Get Started
        </button>
      </div>
    </section>
  );
}
```

### Example: Feature Card Grid

```tsx
export function FeatureGrid() {
  const features = [
    { icon: <ChartIcon />, title: 'Analytics', desc: 'Real-time insights' },
    { icon: <BellIcon />, title: 'Alerts', desc: 'Instant notifications' },
    { icon: <GlobeIcon />, title: 'Global', desc: 'Worldwide coverage' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="
            bg-surface
            rounded-xl
            p-8
            shadow-soft-tile
            border-subtle
            hover-lift
          "
        >
          {/* Icon Container */}
          <div className="
            w-12 h-12
            rounded-lg
            bg-depressed
            shadow-deep-field
            flex items-center justify-center
            mb-6
          ">
            <span className="text-text-muted">{feature.icon}</span>
          </div>

          {/* Title */}
          <h3 className="heading-3 mb-3">{feature.title}</h3>

          {/* Description */}
          <p className="text-text-muted">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}
```

### Example: Search Input

```tsx
export function SearchInput() {
  return (
    <div className="max-w-md">
      <label className="overline block mb-2">Search</label>
      <div className="
        bg-depressed
        rounded-lg
        shadow-deep-field
        px-4 py-3
        flex items-center gap-3
      ">
        <SearchIcon className="w-5 h-5 text-text-subtle" />
        <input
          type="text"
          className="
            bg-transparent
            w-full
            text-primary
            placeholder:text-text-subtle
            outline-none
          "
          placeholder="Search brands..."
        />
      </div>
    </div>
  );
}
```

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│  BRANK DESIGN SYSTEM - QUICK REFERENCE                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  BACKGROUNDS                    SHADOWS                     │
│  ───────────                    ───────                     │
│  Base:    #050505               Soft Tile:  Raised cards    │
│  Surface: #111111               Deep Field: Inputs          │
│  Elevated:#1a1a1a               Ridge:      Subtle borders  │
│  Depressed:#0a0a0a              Glow:       LED indicators  │
│                                                             │
│  TEXT                           ACCENTS                     │
│  ────                           ───────                     │
│  Primary:  #EAEAEA              Success: #22C55E (LEDs)     │
│  Muted:    #888888              Warning: #F59E0B            │
│  Subtle:   #666666              Error:   #EF4444            │
│                                                             │
│  TYPOGRAPHY                     TRANSITIONS                 │
│  ──────────                     ───────────                 │
│  Font:     Geist / Inter        Default: 300ms ease         │
│  Headers:  font-medium          Hover:   translateY(-4px)   │
│  Tracking: -0.02em              Press:   scale(0.98)        │
│                                                             │
│  BORDER                         LIGHT SOURCE                │
│  ──────                         ────────────                │
│  Color: rgba(255,255,255,0.02)  Direction: Top-Left ↘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-01-XX | Initial design system documentation |

---

*This design system is maintained by the Brank design team. For questions or suggestions, please open an issue in the repository.*
