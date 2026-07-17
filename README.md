# Portfolio

A minimal, clean Next.js portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit your content

- **Projects:** `lib/projects.ts` — add/edit/remove entries in the `projects` array.
- **Hero copy & skills:** `components/Hero.tsx`
- **About section:** `components/About.tsx`
- **Contact links (email, GitHub, LinkedIn):** `components/Contact.tsx`
- **Colors:** `app/globals.css` (`--color-*` variables)

## Deploy to Vercel

1. Push this project to a new GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Leave the default settings (Vercel auto-detects Next.js) and click Deploy.
4. Every future `git push` to `main` auto-deploys.

To add a custom domain later: Project Settings -> Domains on Vercel.
