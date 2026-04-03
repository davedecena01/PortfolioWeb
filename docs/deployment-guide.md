# Deployment Guide

## Goal
Deploy the Angular portfolio website with zero hosting cost.

## Recommended Hosting
GitHub Pages

## Why GitHub Pages
- free
- integrated with the public repository
- easy for recruiters to verify
- enough for a static Angular portfolio

## 1. Prerequisites
- Git installed
- Node.js installed
- Angular CLI installed
- GitHub account
- public GitHub repository created

## 2. Build Strategy
Keep the site as a single-page anchor-navigation portfolio to avoid routing issues on GitHub Pages.

## 3. Angular Setup Notes
When preparing for deployment:
- confirm production build works locally
- set the correct base href for GitHub Pages if needed
- keep asset paths relative or correctly resolved

Example build command:
```bash
ng build --configuration production --base-href /REPOSITORY_NAME/
```

Replace `REPOSITORY_NAME` with the actual GitHub repository name.

## 4. Deployment Option A: Manual Dist Deployment
Build the app:
```bash
ng build --configuration production --base-href /REPOSITORY_NAME/
```

Then deploy the `dist` output to GitHub Pages using one of:
- `angular-cli-ghpages`
- manual Pages branch approach
- GitHub Actions

## 5. Recommended Option B: GitHub Actions
Create a GitHub Actions workflow that:
1. installs dependencies
2. builds the Angular app
3. publishes the build artifacts to GitHub Pages

Suggested workflow steps:
- checkout repository
- setup Node.js
- install dependencies
- run production build
- upload Pages artifact
- deploy to GitHub Pages

## 6. GitHub Repository Settings
In GitHub:
- open repository settings
- go to Pages
- select GitHub Actions as the source if using workflow deployment

## 7. Resume Asset Placement
Place the resume file under:
```text
public/resume/John_Dave_Decena_Resume.pdf
```

Ensure the resume download button points to the correct built asset path.

## 8. Badge and Image Assets
Place profile photo and badge files under:
```text
src/assets/images/
src/assets/badges/
```

Compress images before committing.

## 9. Post-Deployment Checklist
- site loads correctly
- navbar anchors scroll properly
- resume downloads
- LinkedIn link works
- GitHub link works
- images load correctly
- no console errors
- no broken layout on narrower screens
- metadata is present

## 10. Optional Future Alternatives
If later needed, this project can also be deployed for free to:
- Cloudflare Pages
- Netlify

GitHub Pages remains the default recommendation for the first release.

## 11. Release Checklist
- update README live URL
- capture homepage screenshot
- verify changelog
- tag initial release if desired
