# UI Specification

## 1. Overall Experience

The website should feel:
- modern
- premium
- calm
- technically mature
- elegant and readable

The layout should be inspired by the chosen reference image, especially in:
- left-right hero composition
- dark navy theme
- circular image treatment
- top horizontal navigation
- spacious premium feel

## 2. Design Language

### Tone
- premium enterprise portfolio
- not playful
- not overly corporate
- not flashy
- not creative-agency style

### Motion
Allowed:
- subtle fade-in reveals
- gentle hover elevation on cards
- button hover transitions
- slight image frame emphasis

Avoid:
- parallax
- cursor effects
- large-scale motion graphics
- background particle systems
- unnecessary 3D behavior

## 3. Color Palette
Suggested base palette:
- Background: `#070B1A`
- Surface: `#0E1324`
- Accent: `#22D3C5`
- Accent Hover: `#18B7AA`
- Heading: `#F5F7FA`
- Body Text: `#C7CFDA`
- Muted Text: `#8B96A7`
- Border: `rgba(255,255,255,0.08)`

Claude may refine values if it keeps the same overall aesthetic.

## 4. Typography
Preferred fonts:
- Inter
- Manrope
- Plus Jakarta Sans

Recommended default: **Inter**

### Hierarchy
- large, bold name in hero
- medium section headings
- clear supporting paragraph text
- restrained badge and label sizes
- readable body text without overly small secondary text

## 5. Navigation

### Desktop Nav
Top horizontal navbar with the following items:
- Home
- About
- Skills
- Experience
- Projects
- Certifications
- Resume
- Contact

### Behavior
- sticky or visually persistent
- active section highlight
- smooth scroll on click

## 6. Hero Section

### Layout
Two-column layout:
- left: intro content
- right: circular profile image

### Required Hero Elements
- small "Hello I'm" badge
- full name
- title
- headline
- concise supporting paragraph
- contact snippets or icon links
- download resume CTA
- view projects CTA

### Profile Image Treatment
- circular crop
- dark ring or layered circular frame
- positioned to match the premium reference feel

## 7. About Section
Use concise professional content with emphasis on:
- years of experience
- enterprise systems
- .NET, Angular, Azure, APIs
- platform and integration delivery
- strong engineering discipline

Use supporting cards or compact highlight blocks if useful.

## 8. Skills Section

### Layout Recommendation
Grouped skill cards by domain:
- Backend
- Frontend
- Cloud & Integration
- Data & Analytics
- Delivery & Tooling

Avoid a chaotic tag cloud as the only presentation.

## 9. Experience Section

### Layout Recommendation
Use one of:
- vertical timeline
- stacked premium cards

Preferred content format:
- role
- company
- dates
- concise summary
- 2 to 4 impact bullets

## 10. Projects Section

### Card Requirements
Each project should show:
- title
- status
- short summary
- role
- tech stack
- business impact
- CTA or status note

### Project Tone
Private enterprise work should feel credible and polished without exposing confidential implementation details.

## 11. Certifications Section
Use a clean grid of certification cards.

Each card should support:
- certification name
- issuer
- date
- optional badge image
- optional credential link

## 12. Resume Section
Short section with clear CTA buttons:
- Download Resume
- View LinkedIn
- View GitHub

## 13. Contact Section
Simple and professional.
Include:
- Yahoo email
- Gmail email
- LinkedIn
- GitHub

No contact form backend is required.

## 14. Responsiveness
Primary priority is desktop polish, but the site must still remain usable on smaller screens.

### Minimum expectations
- no broken layout on mobile
- readable text
- accessible nav behavior
- profile image scales down correctly
- cards stack cleanly

## 15. Reusable UI Components
Encourage reusable patterns:
- section container
- CTA button variants
- card component style
- icon link group
- badge component
- heading block pattern
