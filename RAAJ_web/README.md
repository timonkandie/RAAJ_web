# RAAJ Studios

**Design that Inspires. Creativity that Delivers.**

RAAJ Studios is a Nairobi-based creative design agency specializing in brand identity, packaging, print collateral, and motion graphics. We partner with businesses, startups, and organizations across East Africa to build visual identities that command attention and drive results.

🌐 [raajstudios.com](https://raajstudios.com) &nbsp;·&nbsp; 📸 [@raaj_studios](https://www.instagram.com/raaj_studios) &nbsp;·&nbsp; 📌 Nairobi, Kenya

---

## Services

| Service | Description |
|---|---|
| **Brand Identity & Logo Design** | Comprehensive visual identity systems — logos, color palettes, typography, and brand guidelines |
| **Poster & Campaign Design** | High-impact print and digital posters for events, product launches, and marketing campaigns |
| **Flyer & Brochure Design** | Informative, print-ready collateral for direct marketing and corporate communications |
| **Packaging Design** | Shelf-ready product packaging with custom dielines, 3D mockups, and print specifications |
| **Business Cards & Stationery** | Premium corporate collateral with specialty print techniques |
| **Motion & UI Graphics** | Animated logos, social media content, and user interface design |

---

## Technology

This website is built as a lightweight, high-performance Progressive Web App (PWA) with zero external frameworks.

| Layer | Stack |
|---|---|
| **Frontend** | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| **Typography** | Plus Jakarta Sans via Google Fonts |
| **Backend** | Google Apps Script (form processing & email notifications) |
| **Database** | Google Sheets (submission storage) |
| **Hosting** | Vercel (auto-deploy from `main` branch) |
| **PWA** | Service Worker + Web App Manifest |

### Architecture

```
RAAJ_web/
├── index.html                  # Homepage
├── about.html                  # Company story & team
├── services.html               # Service offerings & process
├── portfolio.html              # Project showcase with filtering
├── pricing.html                # Pricing tiers
├── hire.html                   # Project inquiry form
├── contact.html                # General contact form
├── recruitment.html            # Career applications
├── testimonials.html           # Client testimonials
├── blog.html                   # Industry insights (coming soon)
├── sw.js                       # Service Worker
├── manifest.json               # PWA manifest
│
├── components/                 # Reusable HTML partials
│   ├── navbar.html
│   ├── hero.html
│   └── footer.html
│
├── css/                        # Stylesheets
│   ├── variables.css           # Design tokens
│   ├── style.css               # Global styles
│   ├── components.css          # UI component library
│   ├── responsive.css          # Breakpoint system
│   ├── animations.css          # Keyframe definitions
│   └── ...
│
├── js/                         # Application logic
│   ├── components.js           # Dynamic component loader
│   ├── navigation.js           # Menu & scroll behavior
│   ├── forms.js                # Google Sheets + WhatsApp integration
│   ├── performance.js          # Adaptive performance engine
│   ├── engine/                 # Render & animation engines
│   └── data/                   # Content data stores
│
├── logos/                      # Brand assets
├── icons/                      # UI & PWA icons
└── images/                     # Site imagery
```

### Performance

- **Service Worker** — Offline-first caching for instant repeat visits
- **Skeleton screens** — Shimmer placeholders eliminate blank page flash
- **Adaptive rendering** — Detects device capability and adjusts animations accordingly
- **Deferred scripts** — Non-blocking JavaScript loading
- **Fluid typography** — `clamp()`-based scaling across all viewport sizes
- **Reduced motion** — Respects `prefers-reduced-motion` for accessibility
- **System theme detection** — Automatic dark/light mode via `prefers-color-scheme`

---

## Brand Guidelines

| Element | Specification |
|---|---|
| Primary Color | `#33B8FF` (Sky Blue) |
| Accent Color | `#2563EB` |
| Dark Background | `#0F172A` |
| Light Background | `#F8FCFF` |
| Heading Font | Plus Jakarta Sans (600–800) |
| Body Font | Plus Jakarta Sans (400–500) |
| Border Radius | `18px` (large), `12px` (medium) |
| Tone of Voice | Professional, confident, solution-focused |

---

## Development

### Prerequisites

No build tools required. This is a static site — open any `.html` file in a browser or serve locally:

```bash
npx serve .
```

### Deployment

The site auto-deploys to Vercel when changes are pushed to the `main` branch.

```bash
git checkout antigravity-version    # Working branch
# ... make changes ...
git add . && git commit -m "description"
git push origin antigravity-version
git checkout main && git merge antigravity-version
git push origin main                # Triggers Vercel deploy
```

### Form Submissions

All forms (Contact, Hire, Recruitment) submit to a Google Apps Script endpoint that:
1. Writes the submission to a shared Google Sheet (organized by tab)
2. Sends HTML email notifications to the team
3. Opens a WhatsApp conversation for immediate follow-up

---

## Contact

For project inquiries, partnerships, or general questions:

| Channel | Details |
|---|---|
| **WhatsApp** | [+254 754 748 388](https://wa.me/254754748388) |
| **Instagram** | [@raaj_studios](https://www.instagram.com/raaj_studios) |
| **Location** | CBD, Nairobi, Kenya |

---

<p align="center"><sub>© 2026 RAAJ Studios. All rights reserved.</sub></p>
