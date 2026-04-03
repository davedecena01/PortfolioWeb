# Technical Specification

## 1. Technical Approach

### Chosen Frontend Framework
Angular

### Rationale
Angular aligns with the professional stack presented on the CV and turns the portfolio itself into a relevant showcase artifact. It also supports strong structure, typed content models, and straightforward static deployment.

## 2. Architecture Principles
- static-first
- no backend dependency
- clear separation of content and presentation
- typed content models
- maintainable standalone component structure
- minimal dependencies
- recruiter-friendly folder organization

## 3. Recommended Stack
- Angular (latest stable)
- TypeScript
- SCSS
- Angular standalone components
- static content via TypeScript constants or JSON
- optional lightweight icon library
- GitHub Actions for deployment
- GitHub Pages for hosting

## 4. Routing Strategy
Use a single-page approach with anchor-based navigation.

### Reason
This reduces GitHub Pages routing complexity and supports the intended single-page scrolling experience.

## 5. Data Strategy
All content should be stored statically and typed.

### Suggested interfaces
```ts
export interface NavItem {
  id: string;
  label: string;
  anchor: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
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
  achievements: string[];
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
  caseStudyUrl?: string;
  visibilityNote?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  badgeImage?: string;
  credentialUrl?: string;
}
```

## 6. Project Structure
```text
portfolio/
├─ src/
│  ├─ app/
│  │  ├─ core/
│  │  │  ├─ constants/
│  │  │  ├─ models/
│  │  │  └─ services/
│  │  ├─ shared/
│  │  │  ├─ components/
│  │  │  └─ ui/
│  │  ├─ features/
│  │  │  ├─ home/
│  │  │  ├─ about/
│  │  │  ├─ skills/
│  │  │  ├─ experience/
│  │  │  ├─ projects/
│  │  │  ├─ certifications/
│  │  │  ├─ resume/
│  │  │  └─ contact/
│  │  ├─ layout/
│  │  │  ├─ header/
│  │  │  ├─ footer/
│  │  │  └─ shell/
│  │  ├─ app.component.ts
│  │  ├─ app.component.html
│  │  ├─ app.component.scss
│  │  ├─ app.config.ts
│  │  └─ app.routes.ts
│  ├─ assets/
│  │  ├─ images/
│  │  ├─ badges/
│  │  └─ icons/
│  ├─ styles/
│  │  ├─ _variables.scss
│  │  ├─ _mixins.scss
│  │  ├─ _utilities.scss
│  │  └─ main.scss
│  ├─ index.html
│  └─ main.ts
├─ public/
│  └─ resume/
├─ docs/
├─ README.md
├─ angular.json
└─ package.json
```

## 7. Component Plan

### Layout
- header component
- section wrapper utility
- optional footer component

### Feature sections
- hero section
- about section
- skills section
- experience section
- projects section
- certifications section
- resume section
- contact section

## 8. Performance Requirements
- keep bundle lean
- avoid heavy animation libraries
- compress profile image
- lazy load non-critical assets when reasonable
- target strong Lighthouse scores

## 9. Accessibility Requirements
- semantic section landmarks
- accessible nav links
- keyboard focus states
- alt text for profile image and badges
- adequate contrast

## 10. SEO Requirements
- title and meta description
- Open Graph metadata
- robots.txt
- sitemap.xml
- favicon
- canonical placeholder
- structured data if simple enough

## 11. Deployment Requirements
- free hosting only
- GitHub Pages as default target
- automated deployment via GitHub Actions preferred
- use anchor navigation to avoid route refresh issues on static hosting

## 12. Build Phases

### Phase 1
- project bootstrap
- design tokens
- shell layout
- navigation

### Phase 2
- hero, about, skills, experience

### Phase 3
- projects, certifications, resume, contact

### Phase 4
- polish, responsiveness, accessibility, SEO

### Phase 5
- screenshots, docs, README, deployment
