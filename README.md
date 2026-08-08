# RAAJ Studios — Website Project README
> Last updated: 2026-07-28

> Built by: Kandie (developer) with AI assistance

> Client: RAAJ Studios, Nairobi, Kenya

---

## 1. Project Overview

**RAAJ Studios** is a creative graphic design agency startup based in Nairobi, Kenya. This website serves as their primary online presence — showcasing their services, portfolio, pricing approach, and providing a way for potential clients to get in touch and hire the studio.

**Key facts:**
- Industry: Graphic Design Agency
- Status: Creative Startup
- Team: Small Creative Team
- Target clients: Small businesses, Startups, Restaurants, Retail brands, Event organizers, Entrepreneurs, NGOs, Educational institutions
- Motto: *"Design that Inspires. Creativity that Delivers."*
- WhatsApp: +254 754 748 388
- Instagram: [@raaj_studios](https://www.instagram.com/raaj_studios)

---

## 1.1 Development Roadmap & Phase Status

- **Phase 1: Foundation & Base Design Token System** — `✅ Completed`
  - Core tokens (`css/variables.css`), Reset & Layout (`css/style.css`), Keyframe Animations (`css/animations.css`), Skeleton Loader (`css/skeleton.css`, `js/skeleton.js`), PWA Manifest (`manifest.json`, `sw.js`).
- **Phase 2: Reusable Component Library** — `✅ Completed` (Tagged `phase-2-complete`)
  - Section Title, Service Cards, Portfolio Cards, Testimonial Cards, Custom Flexible Pricing, Blog Cards, Contact & Recruitment Forms, Footer, Modal Window Engine, Gallery Lightbox.
- **Phase 3: Performance & Responsiveness** — `✅ Completed` (Tagged `phase-3-complete`)
  - **Task 18**: Device & Connection Detection Monitor (`js/performance.js`) — `✅ Completed`
  - **Task 19**: Responsive Breakpoints & Fluid Grid System (`css/responsive.css`) — `✅ Completed`
  - **Task 20**: Fluid Typography Engine (`css/fluid-typography.css`) — `✅ Completed`
  - **Task 21**: Reduced Motion Accessibility (`css/reduced-motion.css`) — `✅ Completed`
- **Phase 4: Advanced Interactivity & Motion** — `⏳ In Progress`
  - **Task 22**: Page Transitions Engine (`js/transitions.js`, `css/transitions.css`) — `✅ Completed`
  - **Task 23**: Advanced Scroll Animations & Parallax (`js/scroll.js`) — `⏳ Pending`
  - **Task 24**: Animated Number Counters (`js/counter.js`) — `⏳ Pending`
  - **Task 25**: Custom Cursor & Hover Effects (`js/cursor.js`) — `⏳ Pending`
  - **Task 26**: Advanced Micro-interactions (`js/interactions.js`) — `⏳ Pending`
  - **Task 27**: Interactive Service Configurator (`js/configurator.js`) — `⏳ Pending`

---

## 2. Brand Identity

| Element | Value |
|---|---|
| Primary Color | Sky Blue `#33B8FF` |
| Primary Dark | `#0F6EA9` |
| Primary Light | `#EAF8FF` |
| Background | `#F8FCFF` |
| Surface | `#F3F5F7` |
| Text Primary | `#222222` |
| Text Secondary | `#666666` |
| Heading Font | Orbitron (Bold, Futuristic) |
| Body Font | Poppins (Clean, Readable) |
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
├── Index.html              ← Homepage (base template)
├── about.html              ← About page
├── services.html           ← Services page
├── portfolio.html          ← Portfolio page
├── pricing.html            ← Pricing page
├── blog.html               ← Blog page
├── recruitment.html        ← Recruitment page
├── contact.html            ← Contact page
├── hire.html               ← Hire Us page
├── testimonials.html       ← Testimonials page
│
├── sw.js                   ← Service Worker (PWA caching)
├── manifest.json           ← PWA manifest (app install)
├── README.md               ← This file
│
├── components/
│   ├── navbar.html         ← Navigation bar (reusable)
│   ├── hero.html           ← Hero section (homepage only)
│   └── footer.html         ← Footer (reusable) [DONE]
│
├── css/
│   ├── variables.css       ← Design tokens (colors, fonts, spacing)
│   ├── skeleton.css        ← Shimmer loading placeholders
│   ├── style.css           ← Global styles and resets
│   ├── components.css      ← Card and UI component styles [DONE]
│   ├── hero.css            ← Hero section styles
│   ├── animations.css      ← Keyframe animations
│   ├── transitions.css     ← Page transition styles [TO BUILD]
│   ├── fluid-typography.css← Responsive font scaling [TO BUILD]
│   ├── responsive.css      ← Breakpoint layout rules [TO FILL]
│   └── reduced-motion.css  ← Accessibility fallbacks [TO BUILD]
│
├── js/
│   ├── skeleton.js         ← Skeleton screen controller
│   ├── performance.js      ← Device/connection detection [TO BUILD]
│   ├── components.js       ← Loads navbar + footer HTML
│   ├── navigation.js       ← Hamburger menu + scroll effects
│   ├── app.js              ← Main app initialiser [DONE]
│   ├── animations.js       ← Scroll animation triggers [DONE]
│   ├── forms.js            ← Form validation + submission [DONE]
│   ├── portfolio.js        ← Portfolio page filter logic [DONE]
│   ├── scroll.js           ← Intersection Observer reveals [TO BUILD]
│   ├── counter.js          ← Animated stats counter [TO BUILD]
│   ├── loader.js           ← Page loading screen [TO BUILD]
│   ├── toast.js            ← Notification toasts [TO BUILD]
│   ├── transitions.js      ← Page-to-page transitions [TO BUILD]
│   ├── modal.js            ← Portfolio modal window [DONE]
│   ├── gallery.js          ← Image gallery + lightbox [DONE]
│   ├── cursor.js           ← Custom cursor (desktop) [TO BUILD]
│   │
│   ├── engine/
│   │   ├── renderPipeline.js   ← Hero workspace renderer [DONE]
│   │   └── animationengine.js  ← Animation controller [DONE]
│   │
│   └── data/
│       └── Portfolio.js        ← Project data [DONE]
│
└── assets/
    ├── icons/              ← PWA icons (all sizes) [NEEDED]
    ├── logos/              ← Client logos for carousel [NEEDED]
    ├── projects/           ← Portfolio project images [NEEDED]
    └── screenshots/        ← PWA store screenshots [NEEDED]
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
| 18 | Device/connection detection | `js/performance.js` | 🔴 To Do |
| 19 | Responsive breakpoints | `css/responsive.css` | 🔴 To Do |
| 20 | Fluid typography | `css/fluid-typography.css` | 🔴 To Do |
| 21 | Reduced motion fallbacks | `css/reduced-motion.css` | 🔴 To Do |

### PHASE 4 — Professional Enhancements
| # | Task | File | Status |
|---|------|------|--------|
| 22 | Scroll reveal triggers | `js/scroll.js` | 🔴 To Do |
| 23 | Animated stats counter | `js/counter.js` | 🔴 To Do |
| 24 | Page loading screen | `js/loader.js` + `css/loader.css` | 🔴 To Do |
| 25 | Form feedback toasts | `js/toast.js` | 🔴 To Do |
| 26 | Page transitions | `js/transitions.js` + `css/transitions.css` | 🔴 To Do |
| 27 | Hero background animation | inside `css/hero.css` | 🔴 To Do |
| 28 | VanillaTilt on workspace card | inside `js/hero.js` | 🔴 To Do |
| 29 | Typewriter hero heading | inside `js/hero.js` | 🔴 To Do |
| 30 | Custom cursor | `js/cursor.js` | 🔴 To Do |

### PHASE 5 — Build the Pages
| # | Task | File | Status |
|---|------|------|--------|
| 31 | Hire Us page | `hire.html` | 🔴 To Do |
| 32 | Services page | `services.html` | 🔴 To Do |
| 33 | About page | `about.html` | 🔴 To Do |
| 34 | Contact page | `contact.html` | 🔴 To Do |
| 35 | Portfolio page | `portfolio.html` | 🔴 To Do |
| 36 | Pricing page | `pricing.html` | 🔴 To Do |
| 37 | Testimonials page | `testimonials.html` | 🔴 To Do |
| 38 | Recruitment page | `recruitment.html` | 🔴 To Do |
| 39 | Blog page | `blog.html` | 🔴 To Do |

### PHASE 6 — Polish & Launch Prep
| # | Task | File | Status |
|---|------|------|--------|
| 40 | Cross-page consistency check | All pages | 🔴 To Do |
| 41 | Real asset integration | `assets/` folder | 🔴 To Do |
| 42 | Responsive image srcset | All `<img>` tags | 🔴 To Do |
| 43 | Minify CSS and JS | All CSS + JS files | 🔴 To Do |
| 44 | Final testing | All pages, desktop + mobile | 🔴 To Do |

---

## 6. How to Create a New Page

Every page is built from `Index.html` as the base. Four things change per page:

**1. Title and description** (in `<head>`):
```html
<title>About Us — RAAJ Studios</title>
<meta name="description" content="Page-specific description here.">
```

**2. Page-specific CSS** (in `<head>`, replace `hero.css`):
```html
<link rel="stylesheet" href="css/about.css">
```

**3. Main content** (replace everything inside `<main>`):
```html
<main id="page-content">
  <!-- Page sections go here -->
</main>
```

**4. Remove homepage-only elements:**
- Delete `<div id="hero"></div>` — homepage only
- Remove hero-related scripts: `renderPipeline.js`, `animationengine.js`, `Portfolio.js`, `hero.js`

Everything else (navbar slot, mobile menu, footer slot, modal, toast, cursor, SW registration) stays identical on every page.

---

## 7. Performance Strategy

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

## 8. Responsive Breakpoints

| Name | Width | Target |
|---|---|---|
| Mobile | < 480px | Budget phones, older devices |
| Tablet portrait | 481px – 768px | Mid-range phones, small tablets |
| Tablet landscape | 769px – 992px | Large phones, iPads |
| Desktop | 993px+ | Laptops, monitors |

---

## 9. Performance Modes

Controlled by `js/performance.js` — set automatically based on device:

| Mode | Condition | What's disabled |
|---|---|---|
| High | Desktop, fast connection, 8+ cores | Nothing — full experience |
| Medium | Phone, 4G connection | Particles replaced with CSS, tilt off |
| Low | Weak device, 3G or below, reduced motion | All JS animations off, CSS only |

---

## 10. Assets Still Needed from Client

| Asset | Where used | Status |
|---|---|---|
| RAAJ Studios logo (PNG/SVG) | Navbar, footer, favicon | ✅ Provided |
| PWA icons (8 sizes, 72px–512px) | `assets/icons/` | 🔴 To generate from logo |
| Portfolio project images (WebP) | `assets/projects/` | 🔴 Pending from client |
| Client carousel logos (SVG) | Hero workspace | 🔴 Placeholder SVGs needed |
| OG image (1200×630px) | WhatsApp/Facebook share preview | 🔴 To create |
| Team photos | About page | 🔴 Optional |
| Email address | Contact page, footer | 🔴 Pending from client |
| Physical location/area | Contact page, footer | 🔴 Pending from client |
| Pricing information | Pricing page | 🔴 Using WhatsApp CTA instead |
| Real portfolio work | Portfolio page | 🔴 Pending from client |

---

## 11. Contact & Social

| Platform | Detail |
|---|---|
| WhatsApp | +254 754 748 388 |
| Instagram | [@raaj_studios](https://www.instagram.com/raaj_studios) |
| Email | Pending |
| Location | Nairobi, Kenya (area TBC) |

---

## 12. Notes for Developer

- `sw.js` and `manifest.json` must always stay in the **root folder** alongside `Index.html` — never move them into subfolders
- The Service Worker only activates over **HTTPS or localhost** — won't work by double-clicking the HTML file
- All images should be in **WebP format** and under **200KB** each
- Icon style must stay consistent — **rounded, minimal, outline-based** throughout
- Never mix icon families (no mixing Heroicons with Font Awesome etc.)
- Photography style: **bright, modern, minimal, high contrast** — avoid cluttered or low-quality stock photos
- Stats in the hero (100+ projects, 50+ clients) need to be **confirmed as real** before site goes live
- The blog page should only be built as active if the client commits to writing posts — otherwise use a "coming soon" state
