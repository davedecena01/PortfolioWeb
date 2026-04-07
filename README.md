# John Dave Decena — Portfolio Website

[![Live Site](https://img.shields.io/badge/Live%20Site-davedecena01.github.io-22D3C5?style=flat-square)](https://davedecena01.github.io/PortfolioWeb/)
[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat-square&logo=angular)](https://angular.dev/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222?style=flat-square&logo=github)](https://pages.github.com/)

A modern, single-page portfolio for a Senior .NET & Azure Software Engineer. Built with Angular 21 and deployed automatically to GitHub Pages.

**Live:** [https://davedecena01.github.io/PortfolioWeb/](https://davedecena01.github.io/PortfolioWeb/)

---

## Tech Stack

- **Framework:** Angular 21 (standalone components)
- **Language:** TypeScript
- **Styling:** SCSS with design tokens
- **Testing:** Vitest (51 passing tests)
- **CI/CD:** GitHub Actions → GitHub Pages
- **Hosting:** GitHub Pages (static, free)

---

## Architecture

Feature-based Angular structure with standalone components:

```
src/app/
├── layout/          # Shell, Header
├── features/        # One folder per section
│   ├── home/        # Hero section
│   ├── about/       # Summary + stat cards
│   ├── skills/      # Skill group cards
│   ├── experience/  # Vertical timeline
│   ├── projects/    # Project cards
│   ├── certifications/
│   ├── resume/
│   └── contact/
├── shared/          # Reusable UI components
└── core/            # Services (ScrollSpy)
```

Key design decisions:
- **Design tokens** in `src/styles/_variables.scss` — no hardcoded hex values in components
- **ScrollSpyService** updates the active nav link based on scroll position
- **Responsive CSS** — `@media` breakpoints at `≤1024px` (tablet) and `≤768px` (mobile)
- **Asset serving** via Angular 17+ `public/` directory — `public/images/`, `public/resume/`

---

## Local Development

```bash
npm install
npx ng serve
```

Open [http://localhost:4200/PortfolioWeb/](http://localhost:4200/PortfolioWeb/)

---

## Running Tests

```bash
npx ng test --watch=false
```

Runs 51 tests across 15 spec files using Vitest.

---

## Build & Deploy

**Build:**
```bash
npx ng build
```
Output: `dist/portfolio/browser/`

**Deploy:**  
Auto-deploys to GitHub Pages on every push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).

Manual deploy trigger available in the Actions tab.

---

## Sections

| Section | Description |
|---------|-------------|
| Home | Hero with profile photo and CTAs |
| About | Professional summary and key stats |
| Skills | Grouped technology tags (5 categories) |
| Experience | 8-entry vertical timeline |
| Projects | 3 project cards with tech stack |
| Certifications | 8 Azure and SAFe certifications |
| Resume | Download and view links |
| Contact | Email, LinkedIn, GitHub, and location |
