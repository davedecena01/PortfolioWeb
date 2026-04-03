# Portfolio MVP Design Spec
**Date:** 2026-04-04
**Scope:** Full MVP — all 8 sections, production-ready

---

## 1. Project Bootstrap

### Framework
Angular (latest stable), standalone components, TypeScript, SCSS.

### Project structure
```
src/app/
├─ core/
│  ├─ constants/       ← all content data as typed TS constants
│  └─ models/          ← typed interfaces (NavItem, ExperienceItem, etc.)
├─ layout/
│  ├─ header/          ← sticky nav component
│  └─ shell/           ← root component composing all sections
├─ features/
│  ├─ home/            ← hero section
│  ├─ about/
│  ├─ skills/
│  ├─ experience/
│  ├─ projects/
│  ├─ certifications/
│  ├─ resume/
│  └─ contact/
└─ shared/
   └─ ui/              ← section-wrapper, btn, badge reusable components
```

### Styling
- Global SCSS tokens in `src/styles/_variables.scss`
- Component-scoped SCSS per feature
- No CSS frameworks — custom SCSS only

---

## 2. Design Tokens

```scss
// Colors
$bg:        #070B1A;
$surface:   #0E1324;
$accent:    #22D3C5;
$heading:   #F5F7FA;
$body:      #C7CFDA;
$muted:     #8B96A7;
$border:    rgba(255, 255, 255, 0.08);

// Typography
$font-family: 'Inter', sans-serif;
$font-size-base: 15px;

// Spacing base: 8px grid

// Nav
$nav-height: 68px;
$nav-active-underline: #FFFFFF;
```

---

## 3. Navigation (HeaderComponent)

- Sticky top bar, `$nav-height: 68px`, background `$bg`, bottom border `$border`
- **Logo:** `JD` badge — teal (`$accent`) background, **white** text, bold, rounded corners
- **Nav links:** all white (`#FFFFFF`), Inter 15px weight 500, opacity 0.85 inactive
- **Active state:** white 2px underline only — no background, no color change
- Active section detected via `IntersectionObserver` scroll spy (no router)
- Links: Home, About, Skills, Experience, Projects, Certifications, Resume, Contact
- Smooth scroll to anchor on click

---

## 4. Section Sections

All sections share a `SectionWrapperComponent`:
- `padding: 80px 64px`
- `max-width: 1200px`, centered
- **Section label:** 12px, uppercase, `$accent`, letter-spacing 3px
- **Section title:** 36px, weight 800, `$heading`

---

## 5. Hero Section (HomeComponent)

**Layout:** Two-column flex — content left, photo right.

### Left column
- `Hello I'm` — teal pill badge, white text, rounded-full
- Name: `John Dave Decena` — 62px, weight 800, white, letter-spacing -1px
- Title: `Senior Software Engineer` — 22px, weight 600, white
- Summary paragraph: 15px, `$body`, line-height 1.8, max-width 480px
- Contact snippets: email, GitHub, LinkedIn with SVG icons
- CTAs: **Download Resume** (primary teal button) + **View Projects** (outline button)
- Social icons: LinkedIn + GitHub, circular ghost buttons

### Right column
- Circular photo frame: 380px diameter
- Outer ring: teal-to-transparent gradient, 5px padding, `box-shadow` glow
- Inner border: 6px solid `$surface`
- Photo: `object-fit: contain`, `background: #ffffff` (matches passport photo background)
- Asset: `src/assets/images/profile.jpg`

---

## 6. About Section (AboutComponent)

**Layout:** Two-column grid — text left, stat highlights right.

### Text
- 3 short paragraphs covering: platform engineering background, Azure/Databricks expertise, SAFe certification and AI tooling proficiency

### Stat highlights (2×2 grid of cards)
| Stat | Label |
|------|-------|
| 12 | Years of experience |
| 8+ | Companies served |
| 7 | Azure certifications |
| SAFe 5 | Certified practitioner |

Card style: `$surface` background, `$border` border, 10px radius, accent number.

---

## 7. Skills Section (SkillsComponent)

**Layout:** 3-column grid of skill group cards.

### Groups
| Group | Skills |
|-------|--------|
| Backend | C#, .NET Core, ASP.NET, Web API, GraphQL, Node.js |
| Frontend | Angular, React, TypeScript, JavaScript, HTML/CSS |
| Cloud & Integration | Azure, Azure APIM, Service Bus, Logic Apps, Databricks |
| Data & Analytics | SQL, Databricks, Azure Data |
| Delivery & Tooling | Azure DevOps, Git, GitHub Copilot, Cursor, Agile/SAFe |

Card style: `$surface` background, `$border` border, group title in `$accent`.
Skill tags: pill shape, subtle border, `$body` text.

---

## 8. Experience Section (ExperienceComponent)

**Layout:** Vertical timeline — left line with dot indicators.

- Timeline line: 2px, `$border` color, runs full height
- Active role dot: `$accent` filled, teal glow ring
- Past role dots: muted `#2A3547`
- Active role date label: `$accent` color
- Past role date labels: `$muted` color

### Entries (chronological, newest first)
1. **Senior Software Engineer** — 3Cloud Solutions Inc, Jul 2023–Present (4 bullets)
2. **Full Stack Developer** — ConnectOS, Nov 2022–Jul 2023 (2 bullets)
3. **Associate Lead Developer** — Cognizant Softvision, Jan 2022–Nov 2022
4. **Senior Developer** — Cognizant Softvision, Jan 2021–Dec 2021
5. **Software Engineer** — Chevron Holdings Inc., Apr 2020–Dec 2020
6. **Senior Web Developer** — Navitaire Inc., Mar 2017–Apr 2020
7. **Software Engineer** — Nokia, Nov 2014–Mar 2017
8. **Software Engineer** — Indra, Jun 2014–Nov 2014

Recent roles (3Cloud, ConnectOS) show impact bullets. Older roles show title + company only.

---

## 9. Projects Section (ProjectsComponent)

**Layout:** 3-column card grid.

### Cards
Each card contains: status badge, name, summary, role, tech stack tags, impact line.

| Project | Status | Role |
|---------|--------|------|
| Where To Stay in Japan? | In Development | Solo Developer |
| TM1 Platform Integration | Private / Anonymized | Senior Software Engineer |
| Airline Booking Platform | Private / Anonymized | Senior Developer & Tech Lead |

Status badge styles:
- In Development: teal tint background, `$accent` text
- Private/Anonymized: ghost background, `$muted` text

Stack tags: teal tint background, small rounded, `$accent` text.

---

## 10. Certifications Section (CertificationsComponent)

**Layout:** 4-column grid of certification cards.

### Certifications (8 total)
| Name | Issuer | Date |
|------|--------|------|
| Azure Developer Associate | Microsoft | Feb 2025 |
| Azure AI Engineer Associate | Microsoft | Sep 2024 |
| Security, Compliance & Identity Fundamentals | Microsoft | Mar 2026 |
| Azure Data Fundamentals | Microsoft | Feb 2026 |
| Azure AI Fundamentals | Microsoft | Aug 2024 |
| Power Platform Fundamentals | Microsoft | Jul 2024 |
| Azure Fundamentals | Microsoft | Sep 2020 |
| Certified SAFe® 5 Practitioner | Scaled Agile | Aug 2020 |

Card style: `$surface` background, issuer in `$accent`, name in `$heading`, date in `$muted`.
Badge images: optional — use `credentialUrl` if available, otherwise text-only card.

---

## 11. Resume Section (ResumeComponent)

**Layout:** Centered — label, title, description, 3 CTA buttons.

- **Download Resume (PDF)** — primary teal button, links to `public/resume/John_Dave_Decena_CV.pdf`
- **LinkedIn** — outline button, opens `https://www.linkedin.com/in/john-dave-decena-0ab9a6196/`
- **GitHub** — outline button, opens `https://github.com/davedecena01`

All external links open in `_blank` with `rel="noopener noreferrer"`.

---

## 12. Contact Section (ContactComponent)

**Layout:** Two-column — intro text left, contact cards right.

### Intro text
"Open to senior engineering roles, freelance engagements, and technical collaborations. Feel free to reach out directly — no contact form, just real channels."

### Contact cards (4)
| Label | Value |
|-------|-------|
| Yahoo Email | davedecena01@yahoo.com |
| Gmail | davedecena01@gmail.com |
| LinkedIn | linkedin.com/in/john-dave-decena-0ab9a6196 |
| GitHub | github.com/davedecena01 |

Card style: `$surface` background, teal icon block left, label + value right.

---

## 13. Assets Required

| Asset | Source | Destination |
|-------|--------|-------------|
| Profile photo | `C:/Users/My PC/Downloads/profile picture.jpg` | `src/assets/images/profile.jpg` |
| Resume PDF | `C:/Users/My PC/Downloads/John_Dave_Decena_-_Software_Engineer (1).pdf` | `public/resume/John_Dave_Decena_CV.pdf` |

---

## 14. Angular Implementation Details

### Content data
All content stored as typed constants in `core/constants/`:
- `nav.constants.ts` — nav items
- `experience.constants.ts` — `ExperienceItem[]`
- `projects.constants.ts` — `ProjectItem[]`
- `certifications.constants.ts` — `CertificationItem[]`
- `skills.constants.ts` — `SkillGroup[]`
- `contact.constants.ts` — contact links

### Typed models
All interfaces in `core/models/models.ts` per the technical spec.

### Scroll behavior
- `IntersectionObserver` in `HeaderComponent` to track active section
- `scrollIntoView({ behavior: 'smooth' })` on nav click
- `RouterModule` not needed — anchor-only navigation

### Shared UI components
- `SectionWrapperComponent` — wraps each section with consistent padding/max-width
- `BtnComponent` — primary and outline variants
- `BadgeComponent` — for status labels and skill tags

### SEO / Meta
- `index.html`: title, meta description, Open Graph tags
- `robots.txt` and `sitemap.xml` in `public/`
- Favicon

### Deployment
- GitHub Actions workflow: build on push to `main`, deploy to `gh-pages` branch
- `base href` set to repo name for GitHub Pages routing

---

## 15. Motion / Animation

Allowed:
- Subtle fade-in on section enter (IntersectionObserver + CSS `@keyframes`)
- Hover elevation on cards (`transform: translateY(-2px)`, `box-shadow` increase)
- Button hover transitions (background shift, 150ms ease)

Not allowed: parallax, cursor effects, particle systems, heavy JS animation libraries.
