# RAAJ Studios — Website Project README
> Last updated: 2026-08-26
> Built by: Kandie (developer) with AI assistance
> Client: RAAJ Studios, Nairobi, Kenya

---

## 1. Project Overview

**RAAJ Studios** is a creative graphic design agency based in Nairobi, Kenya. This website serves as their primary online presence — showcasing their services, portfolio, pricing approach, and providing an interactive way for potential clients to get in touch and hire the studio.

**Key facts:**
- Industry: Graphic Design Agency
- Status: Production Ready / Launched
- Team: Small Creative Team
- Target clients: Small businesses, Startups, Restaurants, Retail brands, Event organizers, Entrepreneurs, NGOs, Educational institutions
- Motto: *"Design that Inspires. Creativity that Delivers."*
- WhatsApp: +254 754 748 388
- Instagram: [@raaj_studios](https://www.instagram.com/raaj_studios)

---

## 1.1 Development Roadmap & Phase Status

- **Phase 0: Performance Architecture** — `✅ Completed`
  - Service Worker (`sw.js`), PWA Manifest (`manifest.json`), Skeleton Screens (`css/skeleton.css`, `js/skeleton.js`), Base HTML optimization with font preloading & non-blocking scripts.
- **Phase 1: Core Engine Fixes** — `✅ Completed`
  - Fixed `renderPipeline.js`, `animationengine.js`, `hero.js`, populated `Portfolio.js` data engine, and stubbed core JS modules.
- **Phase 2: Reusable Component Library** — `✅ Completed`
  - Section Titles, Service Cards, Portfolio Cards, Testimonial Cards, Pricing Cards, Blog Cards, Contact & Recruitment Forms, Footer, Modal Window Engine, Gallery Lightbox (`css/components.css`).
- **Phase 3: Performance & Responsiveness** — `✅ Completed`
  - Device/Connection Detection (`js/performance.js`), Breakpoint system (`css/responsive.css`), Fluid Typography Engine (`css/fluid-typography.css`), Reduced Motion Accessibility (`css/reduced-motion.css`).
- **Phase 4: Advanced Interactivity & Motion** — `✅ Completed`
  - Scroll reveals (`js/scroll.js`), Animated stats counter (`js/counter.js`), Page loader (`js/loader.js`, `css/loader.css`), Form toasts (`js/toast.js`), Page transitions (`js/transitions.js`, `css/transitions.css`), 3D tilt (`VanillaTilt`), Custom cursor (`js/cursor.js`).
- **Phase 5: Page Assembly** — `✅ Completed`
  - Built all 9 core pages (`hire.html`, `services.html`, `about.html`, `contact.html`, `portfolio.html`, `pricing.html`, `testimonials.html`, `recruitment.html`, `blog.html`).
- **Phase 6: Polish & Launch Prep** — `✅ Completed`
  - Cross-page consistency audit, responsive image optimizations (`srcset`), full CSS/JS minification (`*.min.css`, `*.min.js`), and comprehensive cross-device verification.

---

## 2. Brand Identity

| Element | Value |
|---|---|
| Primary Color | Sky Blue `#33B8FF` / Accent `#2563EB` |
| Primary Dark | `#0F6EA9` |
| Primary Light | `#EAF8FF` |
| Background | `#0F172A` / `#F8FCFF` |
| Surface | `#F3F5F7` |
| Text Primary | `#222222` |
| Text Secondary | `#666666` |
| Heading Font | Plus Jakarta Sans / Orbitron (Bold, Futuristic) |
| Body Font | Plus Jakarta Sans / Poppins (Clean, Readable) |
| Border Radius | Rounded (`--radius-lg: 18px`) |
| Icon Style | Minimal, outline-based, rounded |

**Tone of voice:** Clear, friendly, professional, confident, inspirational, solution-focused.

---

## 3. Core Services

1. Logo Design
2. Poster Design
3. Flyer Design
4. Business Cards
5. Packaging Design

---

## 4. File Structure

```
RAAJ_web/
│
├── Index.html              ← Homepage (base template) [DONE]
├── about.html              ← About page [DONE]
├── services.html           ← Services page [DONE]
├── portfolio.html          ← Portfolio page [DONE]
├── pricing.html            ← Pricing page [DONE]
├── blog.html               ← Blog page [DONE]
├── recruitment.html        ← Recruitment page [DONE]
├── contact.html            ← Contact page [DONE]
├── hire.html               ← Hire Us page [DONE]
├── testimonials.html       ← Testimonials page [DONE]
│
├── sw.js                   ← Service Worker (PWA caching) [DONE]
├── manifest.json           ← PWA manifest (app install) [DONE]
├── README.md               ← Project documentation
│
├── components/
│   ├── navbar.html         ← Navigation bar (reusable) [DONE]
│   ├── hero.html           ← Hero section (homepage only) [DONE]
│   └── footer.html         ← Footer (reusable) [DONE]
│
├── css/
│   ├── variables.css       ← Design tokens (colors, fonts, spacing) [DONE]
│   ├── skeleton.css        ← Shimmer loading placeholders [DONE]
│   ├── style.css           ← Global styles and resets [DONE]
│   ├── components.css      ← Card and UI component styles [DONE]
│   ├── hero.css            ← Hero section styles [DONE]
│   ├── animations.css      ← Keyframe animations [DONE]
│   ├── transitions.css     ← Page transition styles [DONE]
│   ├── fluid-typography.css← Responsive font scaling [DONE]
│   ├── responsive.css      ← Breakpoint layout rules [DONE]
│   ├── reduced-motion.css  ← Accessibility fallbacks [DONE]
│   └── *.min.css           ← Minified CSS bundles [DONE]
│
├── js/
│   ├── skeleton.js         ← Skeleton screen controller [DONE]
│   ├── performance.js      ← Device/connection detection [DONE]
│   ├── components.js       ← Dynamic HTML component loader [DONE]
│   ├── navigation.js       ← Mobile menu & scroll behavior [DONE]
│   ├── app.js              ← Main application initialiser [DONE]
│   ├── animations.js       ← Scroll animation triggers [DONE]
│   ├── forms.js            ← Form validation & submission [DONE]
│   ├── portfolio.js        ← Portfolio filtering & search [DONE]
│   ├── scroll.js           ← Intersection Observer reveals [DONE]
│   ├── counter.js          ← Animated stats counter [DONE]
│   ├── loader.js           ← Page loading screen controller [DONE]
│   ├── toast.js            ← Toast notification system [DONE]
│   ├── transitions.js      ← Page-to-page transitions [DONE]
│   ├── modal.js            ← Portfolio modal window [DONE]
│   ├── gallery.js          ← Image gallery & lightbox [DONE]
│   ├── cursor.js           ← Custom cursor (desktop) [DONE]
│   ├── *.min.js            ← Minified JS bundles [DONE]
│   │
│   ├── engine/
│   │   ├── renderPipeline.js   ← Hero workspace renderer [DONE]
│   │   └── animationengine.js  ← Animation controller [DONE]
│   │
│   └── data/
│       └── Portfolio.js        ← Project data store [DONE]
│
└── assets/
    ├── icons/              ← PWA icons & app badges [DONE]
    ├── logos/              ← Client logos for carousel [DONE]
    ├── projects/           ← Portfolio project images [DONE]
    └── screenshots/        ← PWA store screenshots [DONE]
```

---

## 5. Build Task List

### PHASE 0 — Performance Architecture
| # | Task | File | Status |
|---|------|------|--------|
| 0a | Service Worker | `sw.js` | ✅ Done |
| 0b | PWA Manifest | `manifest.json` | ✅ Done |
| 0c | Skeleton Screens | `skeleton.css` + `skeleton.js` | ✅ Done |
| 0d | Base HTML Template | `Index.html` | ✅ Done |

### PHASE 1 — Fix What's Broken
| # | Task | File | Status |
|---|------|------|--------|
| 1 | Fix render engine | `js/engine/renderPipeline.js` | ✅ Done |
| 2 | Fix animation engine | `js/engine/animationengine.js` | ✅ Done |
| 3 | Fix hero controller | `js/hero.js` | ✅ Done |
| 4 | Fill portfolio data | `js/data/Portfolio.js` | ✅ Done |
| 5 | Create missing JS files | `animations.js`, `forms.js`, `portfolio.js`, `app.js` | ✅ Done |

### PHASE 2 — Build the Component Library
| # | Task | File | Status |
|---|------|------|--------|
| 6 | Component styles | `css/components.css` | ✅ Done |
| 7 | Section Title component | inside `components.css` + `components.js` | ✅ Done |
| 8 | Service Card component | inside `components.css` + `components.js` | ✅ Done |
| 9 | Portfolio Card component | inside `components.css` + `components.js` | ✅ Done |
| 10 | Testimonial Card component | inside `components.css` + `components.js` | ✅ Done |
| 11 | Pricing Card component | inside `components.css` + `components.js` | ✅ Done |
| 12 | Blog Card component | inside `components.css` + `components.js` | ✅ Done |
| 13 | Contact Form component | inside `components.css` + `forms.js` | ✅ Done |
| 14 | Recruitment Form component | inside `components.css` + `forms.js` | ✅ Done |
| 15 | Footer component | `components/footer.html` | ✅ Done |
| 16 | Modal Window | `js/modal.js` + `css/components.css` | ✅ Done |
| 17 | Image Gallery + Lightbox | `js/gallery.js` + `css/components.css` | ✅ Done |

### PHASE 3 — Performance & Responsiveness
| # | Task | File | Status |
|---|------|------|--------|
| 18 | Device/connection detection | `js/performance.js` | ✅ Done |
| 19 | Responsive breakpoints | `css/responsive.css` | ✅ Done |
| 20 | Fluid typography | `css/fluid-typography.css` | ✅ Done |
| 21 | Reduced motion fallbacks | `css/reduced-motion.css` | ✅ Done |

### PHASE 4 — Professional Enhancements
| # | Task | File | Status |
|---|------|------|--------|
| 22 | Scroll reveal triggers | `js/scroll.js` | ✅ Done |
| 23 | Animated stats counter | `js/counter.js` | ✅ Done |
| 24 | Page loading screen | `js/loader.js` + `css/loader.css` | ✅ Done |
| 25 | Form feedback toasts | `js/toast.js` | ✅ Done |
| 26 | Page transitions | `js/transitions.js` + `css/transitions.css` | ✅ Done |
| 27 | Hero background animation | inside `css/hero.css` | ✅ Done |
| 28 | VanillaTilt 3D effect | inside `js/hero.js` | ✅ Done |
| 29 | Typewriter hero heading | inside `js/hero.js` | ✅ Done |
| 30 | Custom cursor | `js/cursor.js` | ✅ Done |

### PHASE 5 — Build the Pages
| # | Task | File | Status |
|---|------|------|--------|
| 31 | Hire Us page | `hire.html` | ✅ Done |
| 32 | Services page | `services.html` | ✅ Done |
| 33 | About page | `about.html` | ✅ Done |
| 34 | Contact page | `contact.html` | ✅ Done |
| 35 | Portfolio page | `portfolio.html` | ✅ Done |
| 36 | Pricing page | `pricing.html` | ✅ Done |
| 37 | Testimonials page | `testimonials.html` | ✅ Done |
| 38 | Recruitment page | `recruitment.html` | ✅ Done |
| 39 | Blog page | `blog.html` | ✅ Done |

### PHASE 6 — Polish & Launch Prep
| # | Task | File | Status |
|---|------|------|--------|
| 40 | Cross-page consistency check | All pages | ✅ Done |
| 41 | Real asset integration | `assets/` folder | ✅ Done |
| 42 | Responsive image srcset | All `<img>` tags | ✅ Done |
| 43 | Minify CSS and JS | All CSS + JS files (`*.min.*`) | ✅ Done |
| 44 | Final testing | All pages, desktop + mobile | ✅ Done |

---

## 6. Performance Strategy

| Technique | What it does |
|---|---|
| Service Worker | Caches all assets after first visit — repeat visits load instantly |
| Skeleton screens | Shows shimmer placeholders instantly — no blank white flash |
| `defer` on scripts | Scripts download in background — page renders without waiting |
| Font preconnect | DNS lookup starts early — fonts appear with page not after |
| Page prefetch | Next likely pages download in background while user reads |
| Lazy loading | Images below the fold don't load until scrolled to |
| WebP images | 30–40% smaller than JPG at same quality |
| CSS clamp() | Fonts and spacing scale smoothly across all screen sizes |
| `performance.js` | Detects slow devices and disables heavy effects automatically |

---

## 7. Responsive Breakpoints

| Name | Width | Target |
|---|---|---|
| Mobile | < 480px | Budget phones, older devices |
| Tablet portrait | 481px – 768px | Mid-range phones, small tablets |
| Tablet landscape | 769px – 992px | Large phones, iPads |
| Desktop | 993px+ | Laptops, monitors |

---

## 8. Performance Modes

Controlled by `js/performance.js` — set automatically based on device capability:

| Mode | Condition | What's disabled |
|---|---|---|
| High | Desktop, fast connection | Full experience (all animations, 3D tilt, custom cursor active) |
| Medium | Mobile, 4G connection | Non-essential tilt & heavy background effects replaced with CSS |
| Low | Weak device, 3G / low power / reduced motion | All complex JS animations off, clean static CSS fallbacks active |

---

## 9. Contact & Social

| Platform | Detail |
|---|---|
| WhatsApp | +254 754 748 388 |
| Instagram | [@raaj_studios](https://www.instagram.com/raaj_studios) |
| Location | Nairobi, Kenya |

---

## 10. Developer Notes

- `sw.js` and `manifest.json` must always stay in the **root folder** alongside `Index.html`.
- The Service Worker activates over **HTTPS or localhost** (`http://localhost:3000/`).
- All CSS and JS files have minified counterparts (`.min.css` and `.min.js`) produced for optimal production delivery.
- Icon style remains consistent: **rounded, minimal, outline-based**.
