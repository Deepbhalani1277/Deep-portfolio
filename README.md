# Deep Portfolio

A modern personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS, featuring animated UI sections for skills, projects, education, hackathons, GitHub activity, and contact details.

## Live Sections

- Hero
- About
- Skills
- Education
- Projects
- Hackathons
- GitHub
- Contact

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Radix UI components
- OpenNext for Cloudflare Pages
- Wrangler CLI

## Project Structure

```text
app/                # Next.js app router files
components/         # Portfolio and UI components
hooks/              # Reusable hooks
lib/                # Utility functions
public/             # Static assets
styles/             # Global styles
open-next.config.ts # OpenNext Cloudflare adapter config
wrangler.jsonc      # Cloudflare Pages config
```

## Prerequisites

- Node.js 20+
- pnpm 10+

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Available Scripts

- `pnpm dev` - Start local development server
- `pnpm build` - Build Next.js app
- `pnpm start` - Start production server locally
- `pnpm lint` - Run ESLint
- `pnpm cf:build` - Build for Cloudflare Pages using OpenNext
- `pnpm cf:preview` - Build and run Cloudflare Pages local preview
- `pnpm cf:deploy` - Build and deploy to Cloudflare Pages

## Deploy To Cloudflare Pages

This project is preconfigured for Cloudflare using OpenNext.

1. Push the repository to GitHub.
2. In Cloudflare dashboard, go to `Workers & Pages` -> `Pages` -> `Create a project`.
3. Connect this GitHub repo.
4. Use these build settings:
   - Build command: `pnpm cf:build`
   - Build output directory: `.open-next/assets`
5. Add environment variable:
   - `NODE_VERSION=20`
6. Deploy.

For runtime compatibility, ensure `nodejs_compat` is enabled in Pages compatibility flags (also defined in `wrangler.jsonc`).

## License

This project is for personal portfolio use.
