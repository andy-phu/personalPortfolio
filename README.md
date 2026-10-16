# Andy Phu — Portfolio

Personal portfolio built with Next.js App Router, React, and TypeScript, with a dark layout inspired by the Minimalist & Elegant Portfolio template on v0. The homepage is statically rendered, with no database, paid API, or runtime secrets required.

## Local development

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

## Production checks

```sh
npm run build
npm run typecheck
npm start
```

## Content

- `app/page.tsx`: hero, about, experience, projects, and contact sections.
- `components/Navigation.tsx`: active-section navigation, with a mobile bottom bar.
- `components/MotionEffects.tsx`: progressive scroll reveals with reduced-motion support.
- `components/ProjectArchive.tsx`: earlier project links.
- `components/Experience.tsx`: work history and achievements.
- `components/SelectedProjects.tsx`: featured project links and screenshots.
- `app/globals.css`: responsive dark theme, self-hosted Inter font, and entrance animations.
- `public/Andy_Phu_Resume.pdf`: downloadable resume.

## Vercel

Import this repository with the Next.js preset. Use the repository root and default build/output settings. No environment variables are needed. Choose a Hobby account for eligible personal, non-commercial hosting within its free usage limits.

OpenHouse is described from the supplied resume; no live or repository URL was supplied, so none is invented. Older project links are retained from the original portfolio.

## Design reference

https://v0.app/templates/minimalist-elegant-portfolio-WwF64vn8A1b

The layout is adapted to Andy’s content with original experience rows, restrained teal accents, and contact links at the bottom. It stays dark by default. Motion respects the operating system’s reduced-motion preference, and content remains available without JavaScript.
