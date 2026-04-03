# Portfolio MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, production-ready Angular portfolio website for John Dave Decena with all 8 sections deployed to GitHub Pages.

**Architecture:** Feature-based Angular standalone components. All content stored as typed TypeScript constants in `core/constants/`. A `ShellComponent` composes all 8 section components. A `ScrollSpyService` drives the sticky nav's active state via `IntersectionObserver`. No router — pure anchor-based single-page scroll.

**Tech Stack:** Angular (latest stable), TypeScript, SCSS, Inter font (Google Fonts), GitHub Actions, GitHub Pages.

**Design spec:** `docs/superpowers/specs/2026-04-04-portfolio-mvp-design.md`

---

## ⚡ Parallelization Note

- **Tasks 1–9** must run sequentially — they establish the foundation every section depends on.
- **Tasks 10–17** (feature sections) are fully independent and can be dispatched to parallel subagents simultaneously once Task 9 is complete.
- **Tasks 18–21** run sequentially after all feature sections are done.

---

## File Map

```
PortfolioWeb/
├─ src/
│  ├─ app/
│  │  ├─ core/
│  │  │  ├─ constants/
│  │  │  │  ├─ nav.constants.ts
│  │  │  │  ├─ skills.constants.ts
│  │  │  │  ├─ experience.constants.ts
│  │  │  │  ├─ projects.constants.ts
│  │  │  │  ├─ certifications.constants.ts
│  │  │  │  └─ contact.constants.ts
│  │  │  └─ models/
│  │  │     └─ models.ts
│  │  ├─ layout/
│  │  │  ├─ header/
│  │  │  │  ├─ header.component.ts
│  │  │  │  ├─ header.component.html
│  │  │  │  ├─ header.component.scss
│  │  │  │  └─ header.component.spec.ts
│  │  │  └─ shell/
│  │  │     ├─ shell.component.ts
│  │  │     ├─ shell.component.html
│  │  │     └─ shell.component.scss
│  │  ├─ features/
│  │  │  ├─ home/
│  │  │  │  ├─ home.component.ts
│  │  │  │  ├─ home.component.html
│  │  │  │  ├─ home.component.scss
│  │  │  │  └─ home.component.spec.ts
│  │  │  ├─ about/
│  │  │  │  ├─ about.component.ts
│  │  │  │  ├─ about.component.html
│  │  │  │  ├─ about.component.scss
│  │  │  │  └─ about.component.spec.ts
│  │  │  ├─ skills/
│  │  │  │  ├─ skills.component.ts
│  │  │  │  ├─ skills.component.html
│  │  │  │  ├─ skills.component.scss
│  │  │  │  └─ skills.component.spec.ts
│  │  │  ├─ experience/
│  │  │  │  ├─ experience.component.ts
│  │  │  │  ├─ experience.component.html
│  │  │  │  ├─ experience.component.scss
│  │  │  │  └─ experience.component.spec.ts
│  │  │  ├─ projects/
│  │  │  │  ├─ projects.component.ts
│  │  │  │  ├─ projects.component.html
│  │  │  │  ├─ projects.component.scss
│  │  │  │  └─ projects.component.spec.ts
│  │  │  ├─ certifications/
│  │  │  │  ├─ certifications.component.ts
│  │  │  │  ├─ certifications.component.html
│  │  │  │  ├─ certifications.component.scss
│  │  │  │  └─ certifications.component.spec.ts
│  │  │  ├─ resume/
│  │  │  │  ├─ resume.component.ts
│  │  │  │  ├─ resume.component.html
│  │  │  │  ├─ resume.component.scss
│  │  │  │  └─ resume.component.spec.ts
│  │  │  └─ contact/
│  │  │     ├─ contact.component.ts
│  │  │     ├─ contact.component.html
│  │  │     ├─ contact.component.scss
│  │  │     └─ contact.component.spec.ts
│  │  ├─ shared/
│  │  │  └─ ui/
│  │  │     ├─ section-wrapper/
│  │  │     │  ├─ section-wrapper.component.ts
│  │  │     │  ├─ section-wrapper.component.html
│  │  │     │  └─ section-wrapper.component.scss
│  │  │     └─ scroll-spy/
│  │  │        ├─ scroll-spy.service.ts
│  │  │        └─ scroll-spy.service.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.component.html
│  │  ├─ app.component.scss
│  │  └─ app.config.ts
│  ├─ assets/
│  │  └─ images/
│  │     └─ profile.jpg
│  ├─ styles/
│  │  ├─ _variables.scss
│  │  ├─ _mixins.scss
│  │  └─ main.scss
│  ├─ index.html
│  └─ main.ts
├─ public/
│  ├─ resume/
│  │  └─ John_Dave_Decena_CV.pdf
│  ├─ robots.txt
│  └─ sitemap.xml
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
├─ docs/
├─ angular.json
└─ package.json
```

---

## Phase 1: Foundation (Sequential)

### Task 1: Bootstrap Angular project

**Files:**
- Create: all Angular scaffold files in `PortfolioWeb/`

- [ ] **Step 1: Scaffold the Angular project**

From the `PortfolioWeb/` directory:

```bash
cd "C:/Users/My PC/source/repos/Portfolio/PortfolioWeb"
npx @angular/cli@latest new portfolio --directory . --skip-git --style=scss --routing=false --ssr=false
```

When prompted "Would you like to share pseudonymous usage data?" — answer `N`.

Expected: Angular project files appear in `PortfolioWeb/` including `src/`, `angular.json`, `package.json`.

- [ ] **Step 2: Verify the default build works**

```bash
cd "C:/Users/My PC/source/repos/Portfolio/PortfolioWeb"
npx ng build
```

Expected: `dist/portfolio/browser/` folder created with no errors.

- [ ] **Step 3: Verify tests run**

```bash
npx ng test --watch=false --browsers=ChromeHeadless
```

Expected: `AppComponent` default tests pass (3 passing).

- [ ] **Step 4: Create required directories**

```bash
mkdir -p src/styles src/app/core/constants src/app/core/models src/app/layout/header src/app/layout/shell src/app/features/home src/app/features/about src/app/features/skills src/app/features/experience src/app/features/projects src/app/features/certifications src/app/features/resume src/app/features/contact src/app/shared/ui/section-wrapper src/app/shared/ui/scroll-spy src/assets/images public/resume .github/workflows
```

- [ ] **Step 5: Commit**

```bash
git init
git add .
git commit -m "chore: bootstrap Angular portfolio project"
```

---

### Task 2: Design tokens and global styles

**Files:**
- Create: `src/styles/_variables.scss`
- Create: `src/styles/_mixins.scss`
- Create: `src/styles/main.scss`
- Modify: `src/styles.scss` (the Angular default global stylesheet)
- Modify: `angular.json` — add styles array entry
- Modify: `src/index.html` — add Inter font link

- [ ] **Step 1: Write `src/styles/_variables.scss`**

```scss
// Colors
$bg:        #070B1A;
$surface:   #0E1324;
$accent:    #22D3C5;
$accent-hover: #18B7AA;
$heading:   #F5F7FA;
$body:      #C7CFDA;
$muted:     #8B96A7;
$border:    rgba(255, 255, 255, 0.08);

// Typography
$font-family: 'Inter', sans-serif;
$font-size-base: 15px;

// Layout
$nav-height: 68px;
$section-padding: 80px 64px;
$section-max-width: 1200px;

// Border radius
$radius-sm: 5px;
$radius-md: 10px;
$radius-lg: 12px;
$radius-full: 9999px;

// Transitions
$transition-base: 150ms ease;
```

- [ ] **Step 2: Write `src/styles/_mixins.scss`**

```scss
@use 'variables' as *;

@mixin section-base {
  padding: $section-padding;
  max-width: $section-max-width;
  margin: 0 auto;
}

@mixin card-base {
  background: $surface;
  border: 1px solid $border;
  border-radius: $radius-md;
}

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

- [ ] **Step 3: Write `src/styles/main.scss`**

```scss
@use 'variables' as *;

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: $bg;
  color: $body;
  font-family: $font-family;
  font-size: $font-size-base;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

.section-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  color: $accent;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.section-title {
  font-size: 36px;
  font-weight: 800;
  color: $heading;
  margin-bottom: 48px;
}
```

- [ ] **Step 4: Replace `src/styles.scss` content**

```scss
@use 'styles/variables' as *;
@use 'styles/main';
```

- [ ] **Step 5: Add Inter font to `src/index.html`**

Inside the `<head>` tag, before any other `<link>` elements, add:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

- [ ] **Step 6: Verify build compiles cleanly**

```bash
npx ng build
```

Expected: no SCSS errors, build succeeds.

- [ ] **Step 7: Commit**

```bash
git add src/styles/ src/styles.scss src/index.html
git commit -m "feat: add design tokens, global styles, and Inter font"
```

---

### Task 3: Core models

**Files:**
- Create: `src/app/core/models/models.ts`

- [ ] **Step 1: Write the test first**

Create `src/app/core/models/models.spec.ts`:

```typescript
import type {
  NavItem, SocialLink, SkillGroup, ExperienceItem, ProjectItem, CertificationItem, ContactItem
} from './models';

describe('Models', () => {
  it('NavItem should have id, label, anchor', () => {
    const item: NavItem = { id: 'home', label: 'Home', anchor: '#home' };
    expect(item.id).toBe('home');
    expect(item.label).toBe('Home');
    expect(item.anchor).toBe('#home');
  });

  it('ExperienceItem should support optional bullets', () => {
    const item: ExperienceItem = {
      company: 'Acme', title: 'Engineer', start: 'Jan 2020', end: 'Present',
      summary: 'Built things.', isCurrent: true
    };
    expect(item.bullets).toBeUndefined();
  });

  it('ProjectItem status should be a union type', () => {
    const item: ProjectItem = {
      name: 'Test', status: 'in-development', shortDescription: 'Desc',
      role: 'Dev', stack: ['Angular'], impact: 'Big'
    };
    expect(['public', 'private', 'in-development']).toContain(item.status);
  });
});
```

- [ ] **Step 2: Run test — expect compile failure**

```bash
npx ng test --include="src/app/core/models/models.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: error — `models.ts` not found.

- [ ] **Step 3: Write `src/app/core/models/models.ts`**

```typescript
export interface NavItem {
  id: string;
  label: string;
  anchor: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin';
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  start: string;
  end: string;
  summary: string;
  isCurrent: boolean;
  bullets?: string[];
}

export interface ProjectItem {
  name: string;
  status: 'public' | 'private' | 'in-development';
  shortDescription: string;
  role: string;
  stack: string[];
  impact: string;
  repoUrl?: string;
  liveUrl?: string;
  visibilityNote?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
  credentialUrl?: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: 'email' | 'linkedin' | 'github';
}
```

- [ ] **Step 4: Run test — expect pass**

```bash
npx ng test --include="src/app/core/models/models.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 3 specs, 0 failures.

- [ ] **Step 5: Commit**

```bash
git add src/app/core/models/
git commit -m "feat: add typed core models"
```

---

### Task 4: Core constants

**Files:**
- Create: `src/app/core/constants/nav.constants.ts`
- Create: `src/app/core/constants/skills.constants.ts`
- Create: `src/app/core/constants/experience.constants.ts`
- Create: `src/app/core/constants/projects.constants.ts`
- Create: `src/app/core/constants/certifications.constants.ts`
- Create: `src/app/core/constants/contact.constants.ts`

- [ ] **Step 1: Write `src/app/core/constants/nav.constants.ts`**

```typescript
import { NavItem, SocialLink } from '../models/models';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home',           label: 'Home',           anchor: '#home' },
  { id: 'about',          label: 'About',          anchor: '#about' },
  { id: 'skills',         label: 'Skills',         anchor: '#skills' },
  { id: 'experience',     label: 'Experience',     anchor: '#experience' },
  { id: 'projects',       label: 'Projects',       anchor: '#projects' },
  { id: 'certifications', label: 'Certifications', anchor: '#certifications' },
  { id: 'resume',         label: 'Resume',         anchor: '#resume' },
  { id: 'contact',        label: 'Contact',        anchor: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/john-dave-decena-0ab9a6196/', icon: 'linkedin' },
  { label: 'GitHub',   url: 'https://github.com/davedecena01', icon: 'github' },
];
```

- [ ] **Step 2: Write `src/app/core/constants/skills.constants.ts`**

```typescript
import { SkillGroup } from '../models/models';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Backend',
    skills: ['C#', '.NET Core', 'ASP.NET', 'Web API', 'GraphQL', 'Node.js'],
  },
  {
    title: 'Frontend',
    skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Cloud & Integration',
    skills: ['Azure', 'Azure APIM', 'Service Bus', 'Logic Apps', 'Databricks'],
  },
  {
    title: 'Data & Analytics',
    skills: ['SQL', 'Databricks', 'Azure Data'],
  },
  {
    title: 'Delivery & Tooling',
    skills: ['Azure DevOps', 'Git', 'GitHub Copilot', 'Cursor', 'Agile / SAFe'],
  },
];
```

- [ ] **Step 3: Write `src/app/core/constants/experience.constants.ts`**

```typescript
import { ExperienceItem } from '../models/models';

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: '3Cloud Solutions Inc',
    title: 'Senior Software Engineer',
    start: 'Jul 2023',
    end: 'Present',
    isCurrent: true,
    summary: 'Enterprise data platform engineering across .NET APIs, Databricks, and Azure cloud-native integrations.',
    bullets: [
      'Designed RESTful .NET Core APIs and GraphQL services integrating TM1 with Databricks, enabling secure cross-platform data access.',
      'Established foundational architecture for the Interactive Review Module, adopted as a reference standard across the platform.',
      'Designed and validated cloud-native integration patterns using Azure APIM, Service Bus, and Logic Apps.',
      'Led performance benchmarking and instrumentation, building baseline test harnesses and optimizing API throughput.',
    ],
  },
  {
    company: 'ConnectOS',
    title: 'Full Stack Developer',
    start: 'Nov 2022',
    end: 'Jul 2023',
    isCurrent: false,
    summary: 'Finance system automation and ERP integration.',
    bullets: [
      'Built features for a finance system automating AP, expense reimbursement, and proof of delivery workflows.',
      'Integrated third-party ERP APIs to ingest and normalize client data; optimized system performance through profiling.',
    ],
  },
  {
    company: 'Cognizant Softvision',
    title: 'Associate Lead Developer',
    start: 'Jan 2022',
    end: 'Nov 2022',
    isCurrent: false,
    summary: 'CMS platform enhancements, release coordination, and cross-functional Scrum team leadership.',
  },
  {
    company: 'Cognizant Softvision',
    title: 'Senior Developer',
    start: 'Jan 2021',
    end: 'Dec 2021',
    isCurrent: false,
    summary: 'CMS payment enhancements and engineering standards enforcement with UK-based architects.',
  },
  {
    company: 'Chevron Holdings Inc.',
    title: 'Software Engineer',
    start: 'Apr 2020',
    end: 'Dec 2020',
    isCurrent: false,
    summary: 'In-house ASP.NET MVC web and mobile applications for internal operations.',
  },
  {
    company: 'Navitaire Inc.',
    title: 'Senior Web Developer',
    start: 'Mar 2017',
    end: 'Apr 2020',
    isCurrent: false,
    summary: 'Airline booking platform modernization from ASP.NET to Angular; code reviewer and development lead.',
  },
  {
    company: 'Nokia',
    title: 'Software Engineer',
    start: 'Nov 2014',
    end: 'Mar 2017',
    isCurrent: false,
    summary: 'Internal enterprise web applications (HR, Finance, IT) and Scrum Master responsibilities.',
  },
  {
    company: 'Indra',
    title: 'Software Engineer',
    start: 'Jun 2014',
    end: 'Nov 2014',
    isCurrent: false,
    summary: 'Build validation, testing, and automated smoke test research.',
  },
];
```

- [ ] **Step 4: Write `src/app/core/constants/projects.constants.ts`**

```typescript
import { ProjectItem } from '../models/models';

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    name: 'Where To Stay in Japan?',
    status: 'in-development',
    shortDescription: 'AI-assisted trip planner using Google Gemini and Rakuten API to recommend accommodations across Japan.',
    role: 'Solo Developer',
    stack: ['Angular', '.NET Core', 'Google Gemini', 'Rakuten API'],
    impact: 'Personal showcase project — public repo on GitHub.',
    repoUrl: 'https://github.com/davedecena01',
  },
  {
    name: 'TM1 Platform Integration',
    status: 'private',
    shortDescription: 'Enterprise accounting platform integration enabling secure, scalable cross-platform data access between TM1 and Databricks.',
    role: 'Senior Software Engineer',
    stack: ['.NET Core', 'Angular', 'Databricks', 'GraphQL', 'TypeScript'],
    impact: 'Delivered a key Statement of Work objective for the enterprise data platform strategy.',
    visibilityNote: 'Private enterprise work — anonymized case study.',
  },
  {
    name: 'Airline Booking Platform',
    status: 'private',
    shortDescription: 'Modernized legacy airline reservation system from ASP.NET to a full Angular application supporting high-traffic customer-facing booking flows.',
    role: 'Senior Developer & Tech Lead',
    stack: ['Angular', 'ASP.NET MVC', 'JavaScript', 'XSLT'],
    impact: 'Improved performance, maintainability, and UX for a major airline and multiple international carriers.',
    visibilityNote: 'Private enterprise work — anonymized case study.',
  },
];
```

- [ ] **Step 5: Write `src/app/core/constants/certifications.constants.ts`**

```typescript
import { CertificationItem } from '../models/models';

export const CERTIFICATION_ITEMS: CertificationItem[] = [
  { name: 'Azure Developer Associate',                    issuer: 'Microsoft',      date: 'Feb 2025' },
  { name: 'Azure AI Engineer Associate',                  issuer: 'Microsoft',      date: 'Sep 2024' },
  { name: 'Security, Compliance & Identity Fundamentals', issuer: 'Microsoft',      date: 'Mar 2026' },
  { name: 'Azure Data Fundamentals',                      issuer: 'Microsoft',      date: 'Feb 2026' },
  { name: 'Azure AI Fundamentals',                        issuer: 'Microsoft',      date: 'Aug 2024' },
  { name: 'Power Platform Fundamentals',                  issuer: 'Microsoft',      date: 'Jul 2024' },
  { name: 'Azure Fundamentals',                           issuer: 'Microsoft',      date: 'Sep 2020' },
  { name: 'Certified SAFe® 5 Practitioner',               issuer: 'Scaled Agile',   date: 'Aug 2020' },
];
```

- [ ] **Step 6: Write `src/app/core/constants/contact.constants.ts`**

```typescript
import { ContactItem } from '../models/models';

export const CONTACT_ITEMS: ContactItem[] = [
  {
    label: 'Yahoo Email',
    value: 'davedecena01@yahoo.com',
    href: 'mailto:davedecena01@yahoo.com',
    icon: 'email',
  },
  {
    label: 'Gmail',
    value: 'davedecena01@gmail.com',
    href: 'mailto:davedecena01@gmail.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/john-dave-decena-0ab9a6196',
    href: 'https://www.linkedin.com/in/john-dave-decena-0ab9a6196/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/davedecena01',
    href: 'https://github.com/davedecena01',
    icon: 'github',
  },
];
```

- [ ] **Step 7: Write a constants smoke test**

Create `src/app/core/constants/constants.spec.ts`:

```typescript
import { NAV_ITEMS } from './nav.constants';
import { SKILL_GROUPS } from './skills.constants';
import { EXPERIENCE_ITEMS } from './experience.constants';
import { PROJECT_ITEMS } from './projects.constants';
import { CERTIFICATION_ITEMS } from './certifications.constants';
import { CONTACT_ITEMS } from './contact.constants';

describe('Core constants', () => {
  it('should have 8 nav items', () => expect(NAV_ITEMS.length).toBe(8));
  it('should have 5 skill groups', () => expect(SKILL_GROUPS.length).toBe(5));
  it('should have 8 experience items', () => expect(EXPERIENCE_ITEMS.length).toBe(8));
  it('should have current role marked correctly', () => expect(EXPERIENCE_ITEMS[0].isCurrent).toBeTrue());
  it('should have 3 projects', () => expect(PROJECT_ITEMS.length).toBe(3));
  it('should have 8 certifications', () => expect(CERTIFICATION_ITEMS.length).toBe(8));
  it('should have 4 contact items', () => expect(CONTACT_ITEMS.length).toBe(4));
});
```

- [ ] **Step 8: Run tests**

```bash
npx ng test --include="src/app/core/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 10 specs, 0 failures.

- [ ] **Step 9: Commit**

```bash
git add src/app/core/
git commit -m "feat: add typed content constants for all sections"
```

---

### Task 5: SectionWrapperComponent

**Files:**
- Create: `src/app/shared/ui/section-wrapper/section-wrapper.component.ts`
- Create: `src/app/shared/ui/section-wrapper/section-wrapper.component.html`
- Create: `src/app/shared/ui/section-wrapper/section-wrapper.component.scss`

- [ ] **Step 1: Write the test**

Create `src/app/shared/ui/section-wrapper/section-wrapper.component.spec.ts`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionWrapperComponent } from './section-wrapper.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [SectionWrapperComponent],
  template: `<app-section-wrapper sectionId="about"><p>Content</p></app-section-wrapper>`,
})
class TestHostComponent {}

describe('SectionWrapperComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should render projected content', () => {
    expect(fixture.nativeElement.querySelector('p').textContent).toBe('Content');
  });

  it('should apply sectionId as element id', () => {
    expect(fixture.nativeElement.querySelector('section').id).toBe('about');
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx ng test --include="src/app/shared/ui/section-wrapper/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: error — component not found.

- [ ] **Step 3: Write `section-wrapper.component.ts`**

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  templateUrl: './section-wrapper.component.html',
  styleUrls: ['./section-wrapper.component.scss'],
})
export class SectionWrapperComponent {
  @Input({ required: true }) sectionId!: string;
}
```

- [ ] **Step 4: Write `section-wrapper.component.html`**

```html
<section [id]="sectionId" class="section-wrapper">
  <div class="section-inner">
    <ng-content></ng-content>
  </div>
</section>
```

- [ ] **Step 5: Write `section-wrapper.component.scss`**

```scss
@use '../../../../styles/variables' as *;

.section-wrapper {
  border-bottom: 1px solid $border;
}

.section-inner {
  padding: $section-padding;
  max-width: $section-max-width;
  margin: 0 auto;
}
```

- [ ] **Step 6: Run test — expect pass**

```bash
npx ng test --include="src/app/shared/ui/section-wrapper/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 2 specs, 0 failures.

- [ ] **Step 7: Commit**

```bash
git add src/app/shared/ui/section-wrapper/
git commit -m "feat: add SectionWrapperComponent"
```

---

### Task 6: ScrollSpyService

**Files:**
- Create: `src/app/shared/ui/scroll-spy/scroll-spy.service.ts`
- Create: `src/app/shared/ui/scroll-spy/scroll-spy.service.spec.ts`

- [ ] **Step 1: Write the test**

```typescript
import { TestBed } from '@angular/core/testing';
import { ScrollSpyService } from './scroll-spy.service';

describe('ScrollSpyService', () => {
  let service: ScrollSpyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollSpyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default active section to "home"', (done) => {
    service.activeSection$.subscribe(section => {
      expect(section).toBe('home');
      done();
    });
  });

  it('scrollTo should not throw if element does not exist', () => {
    expect(() => service.scrollTo('nonexistent')).not.toThrow();
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx ng test --include="src/app/shared/ui/scroll-spy/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: error — service not found.

- [ ] **Step 3: Write `scroll-spy.service.ts`**

```typescript
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService implements OnDestroy {
  activeSection$ = new BehaviorSubject<string>('home');
  private observer: IntersectionObserver | null = null;

  init(sectionIds: string[]): void {
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          this.activeSection$.next(visible[0].target.id);
        }
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
```

- [ ] **Step 4: Run test — expect pass**

```bash
npx ng test --include="src/app/shared/ui/scroll-spy/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 3 specs, 0 failures.

- [ ] **Step 5: Commit**

```bash
git add src/app/shared/ui/scroll-spy/
git commit -m "feat: add ScrollSpyService with IntersectionObserver"
```

---

### Task 7: HeaderComponent

**Files:**
- Create: `src/app/layout/header/header.component.ts`
- Create: `src/app/layout/header/header.component.html`
- Create: `src/app/layout/header/header.component.scss`
- Create: `src/app/layout/header/header.component.spec.ts`

- [ ] **Step 1: Write the test**

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HeaderComponent] }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render the JD logo badge', () => {
    expect(compiled.querySelector('.logo')?.textContent?.trim()).toBe('JD');
  });

  it('should render 8 nav links', () => {
    expect(compiled.querySelectorAll('.nav-links a').length).toBe(8);
  });

  it('should mark "home" as active by default', () => {
    const active = compiled.querySelector('.nav-links a.active');
    expect(active?.getAttribute('data-section')).toBe('home');
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx ng test --include="src/app/layout/header/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: error — component not found.

- [ ] **Step 3: Write `header.component.ts`**

```typescript
import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NAV_ITEMS } from '../../core/constants/nav.constants';
import { NavItem } from '../../core/models/models';
import { ScrollSpyService } from '../../shared/ui/scroll-spy/scroll-spy.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly navItems: NavItem[] = NAV_ITEMS;

  constructor(public scrollSpy: ScrollSpyService) {}

  ngOnInit(): void {
    this.scrollSpy.init(this.navItems.map(n => n.id));
  }

  onNavClick(event: Event, anchor: string): void {
    event.preventDefault();
    const id = anchor.replace('#', '');
    this.scrollSpy.scrollTo(id);
  }
}
```

- [ ] **Step 4: Write `header.component.html`**

```html
<header class="site-header">
  <div class="header-inner">
    <div class="logo">JD</div>
    <nav>
      <ul class="nav-links">
        @for (item of navItems; track item.id) {
          <li>
            <a
              [href]="item.anchor"
              [attr.data-section]="item.id"
              [class.active]="(scrollSpy.activeSection$ | async) === item.id"
              (click)="onNavClick($event, item.anchor)"
            >
              {{ item.label }}
            </a>
          </li>
        }
      </ul>
    </nav>
  </div>
</header>
```

- [ ] **Step 5: Write `header.component.scss`**

```scss
@use '../../../styles/variables' as *;

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: $bg;
  border-bottom: 1px solid $border;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 64px;
  height: $nav-height;
  max-width: $section-max-width;
  margin: 0 auto;
}

.logo {
  background: $accent;
  color: #ffffff;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 1.5px;
  padding: 6px 14px;
  border-radius: $radius-sm;
}

.nav-links {
  display: flex;
  gap: 36px;

  a {
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
    opacity: 0.85;
    padding-bottom: 4px;
    transition: opacity $transition-base;

    &.active {
      border-bottom: 2px solid #ffffff;
      opacity: 1;
    }

    &:hover {
      opacity: 1;
    }
  }
}
```

- [ ] **Step 6: Run test — expect pass**

```bash
npx ng test --include="src/app/layout/header/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 3 specs, 0 failures.

- [ ] **Step 7: Commit**

```bash
git add src/app/layout/header/
git commit -m "feat: add sticky HeaderComponent with scroll spy"
```

---

### Task 8: ShellComponent and App wiring

**Files:**
- Create: `src/app/layout/shell/shell.component.ts`
- Create: `src/app/layout/shell/shell.component.html`
- Create: `src/app/layout/shell/shell.component.scss`
- Modify: `src/app/app.component.ts`
- Modify: `src/app/app.component.html`
- Modify: `src/app/app.component.scss`

- [ ] **Step 1: Create `shell.component.ts` (stub — sections added in Tasks 10–17)**

```typescript
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {}
```

- [ ] **Step 2: Write `shell.component.html` (stub)**

```html
<app-header></app-header>
<main class="site-main">
  <!-- Feature sections are added in Tasks 10–17 -->
</main>
```

- [ ] **Step 3: Write `shell.component.scss`**

```scss
@use '../../../styles/variables' as *;

.site-main {
  background: $bg;
}
```

- [ ] **Step 4: Replace `app.component.ts`**

```typescript
import { Component } from '@angular/core';
import { ShellComponent } from './layout/shell/shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShellComponent],
  template: `<app-shell></app-shell>`,
  styles: [],
})
export class AppComponent {}
```

- [ ] **Step 5: Replace `app.component.html`** (delete all default content, leave only whitespace — the template is inline in the component above)

Delete the file `src/app/app.component.html` entirely, or if Angular requires it leave it empty. Since we inlined the template in the component, the html file is no longer needed. Remove it:

```bash
rm src/app/app.component.html src/app/app.component.scss
```

- [ ] **Step 6: Verify dev server starts cleanly**

```bash
npx ng serve --open
```

Expected: browser opens, dark nav bar visible with all 8 nav links, no console errors. Stop with `Ctrl+C`.

- [ ] **Step 7: Commit**

```bash
git add src/app/layout/shell/ src/app/app.component.ts
git commit -m "feat: wire ShellComponent into AppComponent"
```

---

## Phase 2: Feature Sections (Parallelizable — Tasks 9–16)

> ⚡ **All tasks in this phase are independent.** After Task 8 is complete, dispatch Tasks 9–16 to parallel subagents simultaneously. Each agent only needs to add its section component and register it in `ShellComponent`. To avoid a merge conflict on `shell.component.ts`, have each agent append their import+component tag and commit. Or one agent can wire all 8 into Shell at the end.

---

### Task 9: HomeComponent (Hero Section)

**Files:**
- Create: `src/app/features/home/home.component.ts`
- Create: `src/app/features/home/home.component.html`
- Create: `src/app/features/home/home.component.scss`
- Create: `src/app/features/home/home.component.spec.ts`

- [ ] **Step 1: Write the test**

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HomeComponent] }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render full name', () => {
    expect(compiled.textContent).toContain('John Dave Decena');
  });

  it('should render professional title', () => {
    expect(compiled.textContent).toContain('Senior Software Engineer');
  });

  it('should render Download Resume button', () => {
    expect(compiled.textContent).toContain('Download Resume');
  });

  it('should render profile image', () => {
    expect(compiled.querySelector('img')?.getAttribute('alt')).toContain('John Dave Decena');
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx ng test --include="src/app/features/home/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: error — component not found.

- [ ] **Step 3: Write `home.component.ts`**

```typescript
import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../core/constants/nav.constants';
import { SocialLink } from '../../core/models/models';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly socialLinks: SocialLink[] = SOCIAL_LINKS;
  readonly resumeUrl = 'resume/John_Dave_Decena_CV.pdf';
}
```

- [ ] **Step 4: Write `home.component.html`**

```html
<section id="home" class="hero">
  <div class="hero-left">
    <span class="hello-badge">Hello I'm</span>
    <h1 class="hero-name">John Dave Decena</h1>
    <h2 class="hero-title">Senior Software Engineer</h2>
    <p class="hero-summary">
      Enterprise .NET &amp; Azure Engineer with nearly 12 years of experience building APIs,
      cloud integrations, and modern platform solutions using .NET, Angular, Azure, SQL, and Databricks.
    </p>

    <div class="contact-snippets">
      <span class="contact-snippet">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        davedecena01&#64;yahoo.com
      </span>
      <span class="contact-snippet">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        github.com/davedecena01
      </span>
      <span class="contact-snippet">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
        linkedin.com/in/john-dave-decena
      </span>
    </div>

    <div class="hero-ctas">
      <a [href]="resumeUrl" download class="btn btn-primary">Download Resume</a>
      <a href="#projects" class="btn btn-outline">View Projects</a>
    </div>

    <div class="social-links">
      @for (link of socialLinks; track link.label) {
        <a [href]="link.url" target="_blank" rel="noopener noreferrer" [attr.aria-label]="link.label" class="social-icon">
          @if (link.icon === 'linkedin') {
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          }
          @if (link.icon === 'github') {
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          }
        </a>
      }
    </div>
  </div>

  <div class="hero-right">
    <div class="photo-ring">
      <div class="photo-inner">
        <img src="assets/images/profile.jpg" alt="John Dave Decena — Senior Software Engineer" />
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 5: Write `home.component.scss`**

```scss
@use '../../../styles/variables' as *;

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 64px;
  min-height: calc(100vh - #{$nav-height});
  max-width: $section-max-width;
  margin: 0 auto;
  gap: 48px;
}

.hero-left {
  flex: 1;
}

.hello-badge {
  display: inline-block;
  background: $accent;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 22px;
  border-radius: $radius-full;
  margin-bottom: 24px;
}

.hero-name {
  font-size: 62px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 12px;
  letter-spacing: -1px;
}

.hero-title {
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 28px;
}

.hero-summary {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 32px;
}

.contact-snippets {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;
}

.contact-snippet {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
}

.icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  opacity: 0.5;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  margin-bottom: 36px;
}

.btn {
  font-family: $font-family;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: $radius-sm;
  transition: all $transition-base;
  cursor: pointer;
  display: inline-block;

  &-primary {
    background: $accent;
    color: #070B1A;
    border: 1px solid $accent;

    &:hover { background: $accent-hover; border-color: $accent-hover; }
  }

  &-outline {
    background: transparent;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.3);

    &:hover { border-color: rgba(255, 255, 255, 0.7); }
  }
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: background $transition-base;

  &:hover { background: rgba(255, 255, 255, 0.14); }
}

// Photo
.hero-right {
  flex-shrink: 0;
}

.photo-ring {
  width: 380px;
  height: 380px;
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(135deg, $accent 0%, rgba(34, 211, 197, 0.15) 100%);
  box-shadow: 0 0 60px rgba(34, 211, 197, 0.15), 0 32px 80px rgba(0, 0, 0, 0.5);
}

.photo-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 6px solid #0E1324;
  overflow: hidden;
  background: #ffffff;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
  }
}
```

- [ ] **Step 6: Register HomeComponent in ShellComponent**

In `src/app/layout/shell/shell.component.ts`, add the import and register:

```typescript
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../../features/home/home.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {}
```

In `src/app/layout/shell/shell.component.html`, add:

```html
<app-header></app-header>
<main class="site-main">
  <app-home></app-home>
</main>
```

- [ ] **Step 7: Run test — expect pass**

```bash
npx ng test --include="src/app/features/home/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 4 specs, 0 failures.

- [ ] **Step 8: Commit**

```bash
git add src/app/features/home/ src/app/layout/shell/
git commit -m "feat: add HomeComponent hero section"
```

---

### Task 10: AboutComponent

**Files:**
- Create: `src/app/features/about/about.component.ts`
- Create: `src/app/features/about/about.component.html`
- Create: `src/app/features/about/about.component.scss`
- Create: `src/app/features/about/about.component.spec.ts`

- [ ] **Step 1: Write the test**

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AboutComponent] }).compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render section title "About Me"', () => {
    expect(compiled.textContent).toContain('About Me');
  });

  it('should render 4 stat highlight cards', () => {
    expect(compiled.querySelectorAll('.highlight-card').length).toBe(4);
  });

  it('should show 12 years of experience stat', () => {
    expect(compiled.textContent).toContain('12');
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx ng test --include="src/app/features/about/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

- [ ] **Step 3: Write `about.component.ts`**

```typescript
import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';

interface StatHighlight { value: string; label: string; }

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly highlights: StatHighlight[] = [
    { value: '12',    label: 'Years of experience' },
    { value: '8+',    label: 'Companies served' },
    { value: '7',     label: 'Azure certifications' },
    { value: 'SAFe 5', label: 'Certified practitioner' },
  ];
}
```

- [ ] **Step 4: Write `about.component.html`**

```html
<app-section-wrapper sectionId="about">
  <span class="section-label">Who I Am</span>
  <h2 class="section-title">About Me</h2>

  <div class="about-grid">
    <div class="about-text">
      <p>Senior Full Stack / Platform Engineer with nearly 12 years of experience designing, building, and scaling enterprise web, cloud, data, and integration platforms.</p>
      <p>Deep expertise in C#, .NET, and modern web frameworks, with hands-on delivery of cloud-native, event-driven integrations on Azure (API Management, Service Bus, Logic Apps) and analytics platforms such as Databricks.</p>
      <p>SAFe Level 5 Certified Agile practitioner with experience as a code reviewer, technical mentor, and development lead. Highly proficient in AI-assisted development using GitHub Copilot and Cursor.</p>
    </div>

    <div class="about-highlights">
      @for (stat of highlights; track stat.label) {
        <div class="highlight-card">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      }
    </div>
  </div>
</app-section-wrapper>
```

- [ ] **Step 5: Write `about.component.scss`**

```scss
@use '../../../styles/variables' as *;

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.about-text {
  p {
    font-size: 15px;
    color: $body;
    line-height: 1.8;
    margin-bottom: 16px;

    &:last-child { margin-bottom: 0; }
  }
}

.about-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.highlight-card {
  background: $surface;
  border: 1px solid $border;
  border-radius: $radius-md;
  padding: 20px;

  .stat-value {
    font-size: 28px;
    font-weight: 800;
    color: $accent;
  }

  .stat-label {
    font-size: 13px;
    color: $muted;
    margin-top: 4px;
  }
}
```

- [ ] **Step 6: Register in ShellComponent**

In `shell.component.ts` imports array, add `AboutComponent`.
In `shell.component.html`, after `<app-home>`, add `<app-about></app-about>`.

- [ ] **Step 7: Run test — expect pass**

```bash
npx ng test --include="src/app/features/about/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 3 specs, 0 failures.

- [ ] **Step 8: Commit**

```bash
git add src/app/features/about/ src/app/layout/shell/
git commit -m "feat: add AboutComponent"
```

---

### Task 11: SkillsComponent

**Files:**
- Create: `src/app/features/skills/skills.component.ts`
- Create: `src/app/features/skills/skills.component.html`
- Create: `src/app/features/skills/skills.component.scss`
- Create: `src/app/features/skills/skills.component.spec.ts`

- [ ] **Step 1: Write the test**

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let fixture: ComponentFixture<SkillsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SkillsComponent] }).compileComponents();
    fixture = TestBed.createComponent(SkillsComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render 5 skill groups', () => {
    expect(compiled.querySelectorAll('.skill-group').length).toBe(5);
  });

  it('should render "Backend" group', () => {
    expect(compiled.textContent).toContain('Backend');
  });

  it('should render C# skill tag', () => {
    expect(compiled.textContent).toContain('C#');
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx ng test --include="src/app/features/skills/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

- [ ] **Step 3: Write `skills.component.ts`**

```typescript
import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';
import { SKILL_GROUPS } from '../../core/constants/skills.constants';
import { SkillGroup } from '../../core/models/models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  readonly skillGroups: SkillGroup[] = SKILL_GROUPS;
}
```

- [ ] **Step 4: Write `skills.component.html`**

```html
<app-section-wrapper sectionId="skills">
  <span class="section-label">What I Work With</span>
  <h2 class="section-title">Skills</h2>

  <div class="skills-grid">
    @for (group of skillGroups; track group.title) {
      <div class="skill-group">
        <h3 class="group-title">{{ group.title }}</h3>
        <div class="skill-tags">
          @for (skill of group.skills; track skill) {
            <span class="skill-tag">{{ skill }}</span>
          }
        </div>
      </div>
    }
  </div>
</app-section-wrapper>
```

- [ ] **Step 5: Write `skills.component.scss`**

```scss
@use '../../../styles/variables' as *;

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.skill-group {
  background: $surface;
  border: 1px solid $border;
  border-radius: $radius-md;
  padding: 24px;
}

.group-title {
  font-size: 13px;
  font-weight: 700;
  color: $accent;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: $body;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: $radius-full;
}
```

- [ ] **Step 6: Register in ShellComponent** — add `SkillsComponent` to imports and `<app-skills>` to template.

- [ ] **Step 7: Run test — expect pass**

```bash
npx ng test --include="src/app/features/skills/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 3 specs, 0 failures.

- [ ] **Step 8: Commit**

```bash
git add src/app/features/skills/ src/app/layout/shell/
git commit -m "feat: add SkillsComponent"
```

---

### Task 12: ExperienceComponent

**Files:**
- Create: `src/app/features/experience/experience.component.ts`
- Create: `src/app/features/experience/experience.component.html`
- Create: `src/app/features/experience/experience.component.scss`
- Create: `src/app/features/experience/experience.component.spec.ts`

- [ ] **Step 1: Write the test**

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let fixture: ComponentFixture<ExperienceComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ExperienceComponent] }).compileComponents();
    fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render 8 timeline items', () => {
    expect(compiled.querySelectorAll('.timeline-item').length).toBe(8);
  });

  it('should mark 3Cloud as the current role', () => {
    const currentItem = compiled.querySelector('.timeline-item.current');
    expect(currentItem?.textContent).toContain('3Cloud');
  });

  it('should render impact bullets for current role', () => {
    expect(compiled.querySelectorAll('.timeline-bullets li').length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx ng test --include="src/app/features/experience/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

- [ ] **Step 3: Write `experience.component.ts`**

```typescript
import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';
import { EXPERIENCE_ITEMS } from '../../core/constants/experience.constants';
import { ExperienceItem } from '../../core/models/models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  readonly items: ExperienceItem[] = EXPERIENCE_ITEMS;
}
```

- [ ] **Step 4: Write `experience.component.html`**

```html
<app-section-wrapper sectionId="experience">
  <span class="section-label">Where I've Been</span>
  <h2 class="section-title">Experience</h2>

  <div class="timeline">
    @for (item of items; track item.company + item.start) {
      <div class="timeline-item" [class.current]="item.isCurrent">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-meta">{{ item.start }} — {{ item.end }}</div>
          <div class="timeline-role">{{ item.title }}</div>
          <div class="timeline-company">{{ item.company }}</div>
          @if (item.bullets && item.bullets.length > 0) {
            <ul class="timeline-bullets">
              @for (bullet of item.bullets; track bullet) {
                <li>{{ bullet }}</li>
              }
            </ul>
          }
        </div>
      </div>
    }
  </div>
</app-section-wrapper>
```

- [ ] **Step 5: Write `experience.component.scss`**

```scss
@use '../../../styles/variables' as *;

.timeline {
  position: relative;
  padding-left: 32px;

  &::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 8px;
    bottom: 0;
    width: 2px;
    background: $border;
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;

  &:last-child { margin-bottom: 0; }
}

.timeline-dot {
  position: absolute;
  left: -32px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #2A3547;
  border: 2px solid $bg;

  .current & {
    background: $accent;
    box-shadow: 0 0 0 3px rgba(34, 211, 197, 0.2);
  }
}

.timeline-meta {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: $muted;
  margin-bottom: 4px;

  .current & { color: $accent; }
}

.timeline-role {
  font-size: 17px;
  font-weight: 700;
  color: $heading;
}

.timeline-company {
  font-size: 14px;
  color: $muted;
  margin-bottom: 10px;
}

.timeline-bullets {
  li {
    font-size: 13px;
    color: $body;
    line-height: 1.7;
    padding-left: 14px;
    position: relative;
    margin-bottom: 4px;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: $accent;
    }
  }
}
```

- [ ] **Step 6: Register in ShellComponent** — add `ExperienceComponent` to imports and `<app-experience>` to template.

- [ ] **Step 7: Run test — expect pass**

```bash
npx ng test --include="src/app/features/experience/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 3 specs, 0 failures.

- [ ] **Step 8: Commit**

```bash
git add src/app/features/experience/ src/app/layout/shell/
git commit -m "feat: add ExperienceComponent with vertical timeline"
```

---

### Task 13: ProjectsComponent

**Files:**
- Create: `src/app/features/projects/projects.component.ts`
- Create: `src/app/features/projects/projects.component.html`
- Create: `src/app/features/projects/projects.component.scss`
- Create: `src/app/features/projects/projects.component.spec.ts`

- [ ] **Step 1: Write the test**

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectsComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render 3 project cards', () => {
    expect(compiled.querySelectorAll('.project-card').length).toBe(3);
  });

  it('should show "Where To Stay in Japan?" project', () => {
    expect(compiled.textContent).toContain('Where To Stay in Japan?');
  });

  it('should show status badge for each card', () => {
    expect(compiled.querySelectorAll('.project-status').length).toBe(3);
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx ng test --include="src/app/features/projects/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

- [ ] **Step 3: Write `projects.component.ts`**

```typescript
import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';
import { PROJECT_ITEMS } from '../../core/constants/projects.constants';
import { ProjectItem } from '../../core/models/models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly projects: ProjectItem[] = PROJECT_ITEMS;

  statusLabel(status: ProjectItem['status']): string {
    return { 'public': 'Public', 'private': 'Private / Anonymized', 'in-development': 'In Development' }[status];
  }
}
```

- [ ] **Step 4: Write `projects.component.html`**

```html
<app-section-wrapper sectionId="projects">
  <span class="section-label">What I've Built</span>
  <h2 class="section-title">Projects</h2>

  <div class="projects-grid">
    @for (project of projects; track project.name) {
      <div class="project-card">
        <span class="project-status" [class]="'status-' + project.status">
          {{ statusLabel(project.status) }}
        </span>
        <h3 class="project-name">{{ project.name }}</h3>
        <p class="project-summary">{{ project.shortDescription }}</p>
        <p class="project-role">Role: {{ project.role }}</p>
        <div class="project-stack">
          @for (tech of project.stack; track tech) {
            <span class="stack-tag">{{ tech }}</span>
          }
        </div>
        <p class="project-impact">{{ project.impact }}</p>
        @if (project.repoUrl) {
          <a [href]="project.repoUrl" target="_blank" rel="noopener noreferrer" class="project-link">View on GitHub →</a>
        }
        @if (project.visibilityNote) {
          <p class="visibility-note">{{ project.visibilityNote }}</p>
        }
      </div>
    }
  </div>
</app-section-wrapper>
```

- [ ] **Step 5: Write `projects.component.scss`**

```scss
@use '../../../styles/variables' as *;

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.project-card {
  background: $surface;
  border: 1px solid $border;
  border-radius: $radius-lg;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color $transition-base;

  &:hover { border-color: rgba(34, 211, 197, 0.3); }
}

.project-status {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: $radius-full;
  width: fit-content;

  &.status-in-development {
    background: rgba(34, 211, 197, 0.1);
    color: $accent;
  }

  &.status-private {
    background: rgba(255, 255, 255, 0.05);
    color: $muted;
  }

  &.status-public {
    background: rgba(34, 211, 197, 0.1);
    color: $accent;
  }
}

.project-name {
  font-size: 16px;
  font-weight: 700;
  color: $heading;
}

.project-summary {
  font-size: 13px;
  color: $body;
  line-height: 1.6;
}

.project-role {
  font-size: 12px;
  color: $muted;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.stack-tag {
  font-size: 11px;
  color: $accent;
  background: rgba(34, 211, 197, 0.08);
  border: 1px solid rgba(34, 211, 197, 0.15);
  padding: 3px 8px;
  border-radius: 4px;
}

.project-impact {
  font-size: 12px;
  color: $body;
  border-top: 1px solid $border;
  padding-top: 12px;
  margin-top: auto;
}

.project-link {
  font-size: 12px;
  color: $accent;
  font-weight: 600;

  &:hover { text-decoration: underline; }
}

.visibility-note {
  font-size: 11px;
  color: $muted;
  font-style: italic;
}
```

- [ ] **Step 6: Register in ShellComponent** — add `ProjectsComponent` to imports and `<app-projects>` to template.

- [ ] **Step 7: Run test — expect pass**

```bash
npx ng test --include="src/app/features/projects/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 3 specs, 0 failures.

- [ ] **Step 8: Commit**

```bash
git add src/app/features/projects/ src/app/layout/shell/
git commit -m "feat: add ProjectsComponent"
```

---

### Task 14: CertificationsComponent

**Files:**
- Create: `src/app/features/certifications/certifications.component.ts`
- Create: `src/app/features/certifications/certifications.component.html`
- Create: `src/app/features/certifications/certifications.component.scss`
- Create: `src/app/features/certifications/certifications.component.spec.ts`

- [ ] **Step 1: Write the test**

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificationsComponent } from './certifications.component';

describe('CertificationsComponent', () => {
  let fixture: ComponentFixture<CertificationsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CertificationsComponent] }).compileComponents();
    fixture = TestBed.createComponent(CertificationsComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render 8 certification cards', () => {
    expect(compiled.querySelectorAll('.cert-card').length).toBe(8);
  });

  it('should show Azure Developer Associate', () => {
    expect(compiled.textContent).toContain('Azure Developer Associate');
  });

  it('should show SAFe certification', () => {
    expect(compiled.textContent).toContain('SAFe');
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx ng test --include="src/app/features/certifications/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

- [ ] **Step 3: Write `certifications.component.ts`**

```typescript
import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';
import { CERTIFICATION_ITEMS } from '../../core/constants/certifications.constants';
import { CertificationItem } from '../../core/models/models';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent {
  readonly certifications: CertificationItem[] = CERTIFICATION_ITEMS;
}
```

- [ ] **Step 4: Write `certifications.component.html`**

```html
<app-section-wrapper sectionId="certifications">
  <span class="section-label">Credentials</span>
  <h2 class="section-title">Certifications</h2>

  <div class="certs-grid">
    @for (cert of certifications; track cert.name) {
      <div class="cert-card">
        <div class="cert-issuer">{{ cert.issuer }}</div>
        <div class="cert-name">{{ cert.name }}</div>
        <div class="cert-date">{{ cert.date }}</div>
        @if (cert.credentialUrl) {
          <a [href]="cert.credentialUrl" target="_blank" rel="noopener noreferrer" class="cert-link">
            Verify credential →
          </a>
        }
      </div>
    }
  </div>
</app-section-wrapper>
```

- [ ] **Step 5: Write `certifications.component.scss`**

```scss
@use '../../../styles/variables' as *;

.certs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.cert-card {
  background: $surface;
  border: 1px solid $border;
  border-radius: $radius-md;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color $transition-base;

  &:hover { border-color: rgba(34, 211, 197, 0.25); }
}

.cert-issuer {
  font-size: 11px;
  font-weight: 700;
  color: $accent;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.cert-name {
  font-size: 13px;
  font-weight: 600;
  color: $heading;
  line-height: 1.4;
}

.cert-date {
  font-size: 11px;
  color: $muted;
  margin-top: auto;
}

.cert-link {
  font-size: 11px;
  color: $accent;
  margin-top: 4px;

  &:hover { text-decoration: underline; }
}
```

- [ ] **Step 6: Register in ShellComponent** — add `CertificationsComponent` to imports and `<app-certifications>` to template.

- [ ] **Step 7: Run test — expect pass**

```bash
npx ng test --include="src/app/features/certifications/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 3 specs, 0 failures.

- [ ] **Step 8: Commit**

```bash
git add src/app/features/certifications/ src/app/layout/shell/
git commit -m "feat: add CertificationsComponent"
```

---

### Task 15: ResumeComponent

**Files:**
- Create: `src/app/features/resume/resume.component.ts`
- Create: `src/app/features/resume/resume.component.html`
- Create: `src/app/features/resume/resume.component.scss`
- Create: `src/app/features/resume/resume.component.spec.ts`

- [ ] **Step 1: Write the test**

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let fixture: ComponentFixture<ResumeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ResumeComponent] }).compileComponents();
    fixture = TestBed.createComponent(ResumeComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render Download Resume button', () => {
    expect(compiled.textContent).toContain('Download Resume');
  });

  it('should render LinkedIn link', () => {
    expect(compiled.textContent).toContain('LinkedIn');
  });

  it('should render GitHub link', () => {
    expect(compiled.textContent).toContain('GitHub');
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx ng test --include="src/app/features/resume/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

- [ ] **Step 3: Write `resume.component.ts`**

```typescript
import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  readonly resumeUrl = 'resume/John_Dave_Decena_CV.pdf';
  readonly linkedinUrl = 'https://www.linkedin.com/in/john-dave-decena-0ab9a6196/';
  readonly githubUrl = 'https://github.com/davedecena01';
}
```

- [ ] **Step 4: Write `resume.component.html`**

```html
<app-section-wrapper sectionId="resume">
  <div class="resume-inner">
    <span class="section-label">My Resume</span>
    <h2 class="section-title">Download &amp; Connect</h2>
    <p class="resume-desc">
      View my full work history, skills, and certifications — or connect with me directly.
    </p>
    <div class="resume-ctas">
      <a [href]="resumeUrl" download class="btn btn-primary">Download Resume (PDF)</a>
      <a [href]="linkedinUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline">LinkedIn</a>
      <a [href]="githubUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline">GitHub</a>
    </div>
  </div>
</app-section-wrapper>
```

- [ ] **Step 5: Write `resume.component.scss`**

```scss
@use '../../../styles/variables' as *;

.resume-inner {
  text-align: center;
}

.section-title { margin-bottom: 16px; }

.resume-desc {
  font-size: 15px;
  color: $muted;
  margin-bottom: 40px;
}

.resume-ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  font-family: $font-family;
  font-size: 14px;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: $radius-sm;
  transition: all $transition-base;
  display: inline-block;

  &-primary {
    background: $accent;
    color: #070B1A;
    border: 1px solid $accent;

    &:hover { background: $accent-hover; border-color: $accent-hover; }
  }

  &-outline {
    background: transparent;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover { border-color: rgba(255, 255, 255, 0.6); }
  }
}
```

- [ ] **Step 6: Register in ShellComponent** — add `ResumeComponent` to imports and `<app-resume>` to template.

- [ ] **Step 7: Run test — expect pass**

```bash
npx ng test --include="src/app/features/resume/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 3 specs, 0 failures.

- [ ] **Step 8: Commit**

```bash
git add src/app/features/resume/ src/app/layout/shell/
git commit -m "feat: add ResumeComponent"
```

---

### Task 16: ContactComponent

**Files:**
- Create: `src/app/features/contact/contact.component.ts`
- Create: `src/app/features/contact/contact.component.html`
- Create: `src/app/features/contact/contact.component.scss`
- Create: `src/app/features/contact/contact.component.spec.ts`

- [ ] **Step 1: Write the test**

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ContactComponent] }).compileComponents();
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render 4 contact items', () => {
    expect(compiled.querySelectorAll('.contact-item').length).toBe(4);
  });

  it('should show Yahoo email', () => {
    expect(compiled.textContent).toContain('davedecena01@yahoo.com');
  });

  it('should show Gmail', () => {
    expect(compiled.textContent).toContain('davedecena01@gmail.com');
  });
});
```

- [ ] **Step 2: Run test — expect failure**

```bash
npx ng test --include="src/app/features/contact/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

- [ ] **Step 3: Write `contact.component.ts`**

```typescript
import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';
import { CONTACT_ITEMS } from '../../core/constants/contact.constants';
import { ContactItem } from '../../core/models/models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly contactItems: ContactItem[] = CONTACT_ITEMS;
}
```

- [ ] **Step 4: Write `contact.component.html`**

```html
<app-section-wrapper sectionId="contact">
  <span class="section-label">Get In Touch</span>
  <h2 class="section-title">Contact</h2>

  <div class="contact-grid">
    <div class="contact-intro">
      <p>Open to senior engineering roles, freelance engagements, and technical collaborations.
        Feel free to reach out directly — no contact form, just real channels.</p>
    </div>

    <div class="contact-list">
      @for (item of contactItems; track item.label) {
        <a [href]="item.href" target="_blank" rel="noopener noreferrer" class="contact-item">
          <div class="contact-icon" [attr.aria-hidden]="true">
            @if (item.icon === 'email') {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            }
            @if (item.icon === 'linkedin') {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            }
            @if (item.icon === 'github') {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            }
          </div>
          <div>
            <div class="contact-label">{{ item.label }}</div>
            <div class="contact-value">{{ item.value }}</div>
          </div>
        </a>
      }
    </div>
  </div>
</app-section-wrapper>
```

- [ ] **Step 5: Write `contact.component.scss`**

```scss
@use '../../../styles/variables' as *;

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.contact-intro p {
  font-size: 15px;
  color: $body;
  line-height: 1.8;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: $surface;
  border: 1px solid $border;
  border-radius: $radius-md;
  transition: border-color $transition-base;

  &:hover { border-color: rgba(34, 211, 197, 0.3); }
}

.contact-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(34, 211, 197, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: $accent;
}

.contact-label {
  font-size: 11px;
  color: $muted;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-value {
  font-size: 14px;
  color: $heading;
  font-weight: 500;
}
```

- [ ] **Step 6: Register in ShellComponent** — add `ContactComponent` to imports and `<app-contact>` to template.

- [ ] **Step 7: Run test — expect pass**

```bash
npx ng test --include="src/app/features/contact/**/*.spec.ts" --watch=false --browsers=ChromeHeadless
```

Expected: 3 specs, 0 failures.

- [ ] **Step 8: Commit**

```bash
git add src/app/features/contact/ src/app/layout/shell/
git commit -m "feat: add ContactComponent"
```

---

## Phase 3: Assets, SEO & Deployment

### Task 17: Copy assets

**Files:**
- Create: `src/assets/images/profile.jpg`
- Create: `public/resume/John_Dave_Decena_CV.pdf`

- [ ] **Step 1: Copy profile photo**

```bash
cp "C:/Users/My PC/Downloads/profile picture.jpg" src/assets/images/profile.jpg
```

- [ ] **Step 2: Copy resume PDF**

```bash
cp "C:/Users/My PC/Downloads/John_Dave_Decena_-_Software_Engineer (1).pdf" "public/resume/John_Dave_Decena_CV.pdf"
```

- [ ] **Step 3: Verify assets are served**

```bash
npx ng serve
```

Open `http://localhost:4200` — confirm profile photo appears in the hero section and the "Download Resume" link resolves without a 404. Stop with `Ctrl+C`.

- [ ] **Step 4: Commit**

```bash
git add src/assets/images/profile.jpg "public/resume/John_Dave_Decena_CV.pdf"
git commit -m "feat: add profile photo and resume PDF assets"
```

---

### Task 18: SEO and meta tags

**Files:**
- Modify: `src/index.html`
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`

- [ ] **Step 1: Update `src/index.html` with full SEO meta**

Replace the `<head>` section with:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>John Dave Decena — Senior Software Engineer</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Senior Software Engineer specializing in .NET, Azure, Angular, and enterprise platform modernization. Nearly 12 years of experience building APIs, cloud integrations, and modern platforms.">
  <meta name="author" content="John Dave Decena">
  <meta name="robots" content="index, follow">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="John Dave Decena — Senior Software Engineer">
  <meta property="og:description" content="Enterprise .NET & Azure Engineer | Web API, Cloud Integration">
  <meta property="og:image" content="assets/images/profile.jpg">

  <!-- Favicon placeholder — replace with actual favicon -->
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

- [ ] **Step 2: Create `public/robots.txt`**

```
User-agent: *
Allow: /
```

- [ ] **Step 3: Create `public/sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://davedecena01.github.io/Portfolio/</loc>
    <lastmod>2026-04-04</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

> **Note:** Update the `<loc>` URL once the GitHub repository name and Pages URL are confirmed.

- [ ] **Step 4: Commit**

```bash
git add src/index.html public/robots.txt public/sitemap.xml
git commit -m "feat: add SEO meta tags, robots.txt, and sitemap"
```

---

### Task 19: GitHub Actions deployment workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create the GitHub repo on GitHub.com**

Go to github.com → New repository → name it `Portfolio` → public → no README (we have our own) → Create.

- [ ] **Step 2: Add remote and push**

```bash
git remote add origin https://github.com/davedecena01/Portfolio.git
git branch -M main
git push -u origin main
```

- [ ] **Step 3: Create `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Angular app
        run: npx ng build --base-href /Portfolio/

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/portfolio/browser

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> **Note:** The `--base-href /Portfolio/` flag matches the GitHub repository name. If the repo name is different, update this value.

- [ ] **Step 4: Enable GitHub Pages in repository settings**

Go to the GitHub repo → Settings → Pages → Source: select "GitHub Actions".

- [ ] **Step 5: Push workflow and trigger deployment**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Actions deploy workflow for GitHub Pages"
git push
```

- [ ] **Step 6: Verify deployment**

Go to the GitHub repo → Actions tab → watch the workflow run. Once complete, visit `https://davedecena01.github.io/Portfolio/` and confirm the portfolio loads correctly.

---

### Task 20: Final smoke test

- [ ] **Step 1: Run full test suite**

```bash
npx ng test --watch=false --browsers=ChromeHeadless
```

Expected: all specs pass, 0 failures.

- [ ] **Step 2: Run production build**

```bash
npx ng build
```

Expected: no errors, `dist/portfolio/browser/` created.

- [ ] **Step 3: Verify locally with serve**

```bash
npx ng serve --open
```

Check each section visually:
- [ ] Nav is sticky and scroll spy highlights correct section
- [ ] Hero shows photo, name, title, CTAs
- [ ] About shows stat cards
- [ ] Skills shows all 5 groups
- [ ] Experience shows 8 timeline entries, current role in teal
- [ ] Projects shows 3 cards with correct data
- [ ] Certifications shows 8 cards in 4-column grid
- [ ] Resume has 3 CTA buttons
- [ ] Contact shows 4 contact cards
- [ ] Download Resume link works
- [ ] LinkedIn and GitHub links open correct URLs

- [ ] **Step 4: Final commit**

```bash
git add .
git commit -m "chore: final MVP build verification"
git push
```

---

## Self-Review Checklist

| Spec Requirement | Covered By |
|---|---|
| Angular standalone components | Tasks 1, 5, 7–16 |
| Sticky nav with scroll spy | Task 7 (HeaderComponent + ScrollSpyService) |
| 8 nav items | Task 4 (nav.constants) |
| Hero: name, title, photo, CTAs | Task 9 |
| Circular photo frame, white bg | Task 9 (home.component.scss) |
| About: text + stat highlights | Task 10 |
| Skills: 5 grouped cards | Task 11 |
| Experience: vertical timeline | Task 12 |
| Projects: 3 cards with status | Task 13 |
| Certifications: 4-col grid | Task 14 |
| Resume: PDF download + links | Task 15 |
| Contact: 4 contact cards | Task 16 |
| Profile photo asset | Task 17 |
| Resume PDF asset | Task 17 |
| SEO meta, robots, sitemap | Task 18 |
| GitHub Actions deployment | Task 19 |
| Design tokens in SCSS | Task 2 |
| Typed models | Task 3 |
| All content in constants | Task 4 |
| SectionWrapperComponent | Task 5 |
