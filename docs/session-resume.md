# Session Resume — Portfolio MVP

## Last Updated

**Session date:** 2026-04-05

**Status:** Phase 1 (Foundation) complete. Phase 2 (Feature Sections) not yet started.

---

## What Has Been Done

### Phase 1 — Foundation (Tasks 1–8) ✅ COMPLETE

| Task | Description | Commit |
|------|-------------|--------|
| Task 1 | Bootstrap Angular 21 project | c3d965f |
| Task 2 | Design tokens + global SCSS + Inter font | d6e47e2, 2c91c7e, a897c3d |
| Task 3 | Core models (`models.ts`) | f348c64, 5165372 |
| Task 4 | Core constants (nav, skills, experience, projects, certs, contact) | fcc2283, 813cba8 |
| Task 5 | SectionWrapperComponent | a927f30 |
| Task 6 | ScrollSpyService | 84d6b6b |
| Task 7 | HeaderComponent (sticky nav) | f8c543d |
| Task 8 | ShellComponent + App wiring | 2070f82 |
| Fixes | Code review fixes for Tasks 5–8 | 03e8765 |

**Current test count: 26 tests passing across 7 test files.**

---

## Key Architecture Notes

### Angular version: 21
- Root class is `App` in `src/app/app.ts` (NOT `AppComponent`)
- **Test runner: Vitest** — NOT Karma. Test command: `npx ng test --watch=false` (no `--browsers` flag)
- Use `.toBe(true)` not `.toBeTrue()` — Vitest, not Jasmine

### File structure (implemented so far)
```
src/app/
├─ core/
│  ├─ constants/   ← nav, skills, experience, projects, certifications, contact
│  └─ models/      ← models.ts (7 interfaces)
├─ layout/
│  ├─ header/      ← sticky nav, JD logo, scroll spy active state
│  └─ shell/       ← stub — HeaderComponent + empty <main> (sections added in Tasks 9-16)
└─ shared/
   └─ ui/
      ├─ section-wrapper/  ← SectionWrapperComponent
      └─ scroll-spy/       ← ScrollSpyService
```

### ScrollSpy init pattern (important)
`ScrollSpyService.init()` is called from `ShellComponent.ngAfterViewInit` — NOT from `HeaderComponent.ngOnInit`. This ensures section DOM elements are present when IntersectionObserver starts observing.

### SCSS import pattern
`angular.json` has `stylePreprocessorOptions.includePaths: ["src/styles"]`.
Component SCSS files use relative paths (not bare names):
- `@use '../../../styles/variables' as *;` (from layout depth)
- `@use '../../../../styles/variables' as *;` (from shared/ui depth)
- `@use '../../../../styles/mixins' as *;` for mixins

### Design tokens (key values)
```scss
$bg: #070B1A        // page background
$surface: #0E1324   // card/section surface
$accent: #22D3C5    // teal
$heading: #F5F7FA   // white text
$body: #C7CFDA      // body text
$muted: #8B96A7     // muted text
$border: rgba(255, 255, 255, 0.08)
$nav-height: 68px
$section-max-width: 1200px
$section-padding: 80px 64px
```

---

## What Needs to Be Done Next

### Phase 2 — Feature Sections (Tasks 9–16) ← START HERE

All 8 section components are **independent** and can be dispatched to parallel subagents after reading the plan. Each subagent builds one section component and wires it into ShellComponent.

> ⚡ Tasks 9–16 are parallelizable — dispatch all 8 simultaneously once you've extracted task texts from the plan.

Full plan: `docs/superpowers/plans/2026-04-04-portfolio-mvp.md`
Design spec: `docs/superpowers/specs/2026-04-04-portfolio-mvp-design.md`

| Task | Section | Notes |
|------|---------|-------|
| Task 9  | HomeComponent (Hero) | Two-column, photo right, circular frame, Download Resume CTA |
| Task 10 | AboutComponent | Two-column, stat cards (12 yrs, 8+ companies, 7 Azure certs, SAFe 5) |
| Task 11 | SkillsComponent | 3-column grid of skill group cards |
| Task 12 | ExperienceComponent | Vertical timeline, newest first, teal dot for current role |
| Task 13 | ProjectsComponent | 3-column card grid, status badges |
| Task 14 | CertificationsComponent | 4-column grid, 8 certs |
| Task 15 | ResumeComponent | Centered, 3 CTA buttons (Download, LinkedIn, GitHub) |
| Task 16 | ContactComponent | Two-column, 4 contact cards with icons |

**After Tasks 9–16:** Wire all 8 section components into `ShellComponent` (update `shell.component.ts` imports and `shell.component.html`).

### Phase 3 — Assets & Deployment (Tasks 17–20)

| Task | Description |
|------|-------------|
| Task 17 | Copy profile photo + resume PDF into project assets |
| Task 18 | SEO meta tags, robots.txt, sitemap.xml |
| Task 19 | GitHub Actions deploy workflow (base-href `/PortfolioWeb/`) |
| Task 20 | Final smoke test + build verification |

---

## Assets to Copy (Task 17)

| File | Source | Destination |
|------|--------|-------------|
| Profile photo | `C:/Users/My PC/Downloads/profile picture.jpg` | `src/assets/images/profile.jpg` |
| Resume PDF | `C:/Users/My PC/Downloads/John_Dave_Decena_-_Software_Engineer (1).pdf` | `public/resume/John_Dave_Decena_CV.pdf` |

---

## GitHub Setup (Task 19)

- Repo: `https://github.com/davedecena01/PortfolioWeb.git` (already exists, already pushed)
- **base-href for GitHub Pages:** `/PortfolioWeb/` (repo name is `PortfolioWeb`)
- Enable GitHub Pages → Source: GitHub Actions
- Deploy URL will be: `https://davedecena01.github.io/PortfolioWeb/`

---

## How to Resume

1. Open this repo in Claude Code: `C:/Users/My PC/source/repos/Portfolio/PortfolioWeb`
2. Invoke `superpowers:subagent-driven-development`
3. Read plan: `docs/superpowers/plans/2026-04-04-portfolio-mvp.md`
4. Start dispatching subagents from **Task 9** (Phase 2 feature sections)

### Quick-start commands to verify state
```bash
cd "C:/Users/My PC/source/repos/Portfolio/PortfolioWeb"
git log --oneline -5          # confirm last commit is 03e8765
npx ng test --watch=false     # confirm 26 tests pass
npx ng build                  # confirm build succeeds
```

---

## Reference Files

| File | Purpose |
|------|---------|
| `docs/product-spec.md` | Product requirements |
| `docs/technical-spec.md` | Technical architecture |
| `docs/ui-spec.md` | UI/UX design direction |
| `docs/content-inventory.md` | All content data |
| `docs/superpowers/specs/2026-04-04-portfolio-mvp-design.md` | Full design spec (approved) |
| `docs/superpowers/plans/2026-04-04-portfolio-mvp.md` | Implementation plan (20 tasks with code) |
