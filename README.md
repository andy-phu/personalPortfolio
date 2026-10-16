# Andy Phu — Portfolio

Personal portfolio built with Next.js App Router, React, and TypeScript. The homepage is statically rendered, with no database, paid API, or runtime secrets required.

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

- `app/page.tsx`: introduction, OpenHouse, project archive, skills, and contact.
- `components/Experience.tsx`: work history and achievements.
- `components/SelectedProjects.tsx`: featured project links and screenshots.
- `app/globals.css`: responsive black, white, and teal theme.
- `public/Andy_Phu_Resume.pdf`: downloadable resume.

## Vercel

Import this repository with the Next.js preset. Use the repository root and default build/output settings. No environment variables are needed. Choose a Hobby account for eligible personal, non-commercial hosting within its free usage limits.

OpenHouse is described from the supplied resume; no live or repository URL was supplied, so none is invented. Older project links are retained from the original portfolio.
