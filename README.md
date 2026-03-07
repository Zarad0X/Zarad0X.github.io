# Han Zhang - Personal Website

Personal academic website and portfolio built with Astro, Tailwind, and TypeScript.

Explore more on [text](https://zarad0x.github.io/)

## Sections

- Home
- Work Experience
- Projects
- Blog

## Project Structure

```text
src/
  consts.ts                 # Site name, metadata, socials
  pages/
    index.astro             # Homepage copy
    work/index.astro
    projects/index.astro
    blog/index.astro
  content/
    work/*.md               # Work entries
    projects/*/index.md     # Project entries
    blog/*/index.md|mdx     # Blog posts
```

## Content Editing

- Global site info: `src/consts.ts`
- Homepage intro: `src/pages/index.astro`
- Work entries: `src/content/work/*.md`
- Project entries: `src/content/projects/*/index.md`
- Blog posts: `src/content/blog/*/index.md` or `index.mdx`

Set `draft: false` to publish an entry, `draft: true` to hide it.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build and Preview

```bash
npm run build
npm run preview
```

## Scripts

- `npm run dev` - start dev server
- `npm run dev:network` - start dev server on local network
- `npm run build` - type-check and production build
- `npm run preview` - preview production build
- `npm run preview:network` - preview on local network
- `npm run lint` - lint project
- `npm run lint:fix` - auto-fix lint issues
