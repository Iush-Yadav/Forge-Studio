# forge.studio

Production website for **forge.studio** — a web studio for local businesses. Built with Next.js (App Router).

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

## Contact + review forms

Forms work **out of the box with no API key** via [FormSubmit.co](https://formsubmit.co).
They email the address in `lib/constants.js` (`EMAIL`).

> ⚠️ **One-time step:** the very first form submission triggers a confirmation
> email from FormSubmit to that address. Click the activation link in it once —
> after that, every submission is delivered automatically.

## Environment variables

Set these in `.env.local` (all optional):

| Variable | Required | What it does |
|---|---|---|
| `CONTACT_EMAIL` | optional | Where form submissions are emailed. Defaults to the `EMAIL` in `lib/constants.js`. |
| `NEXT_PUBLIC_SITE_URL` | recommended | Your live domain, e.g. `https://forge.studio`. Used for canonical URLs, sitemap and OG tags. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | optional | Set to your domain to enable privacy-friendly [Plausible](https://plausible.io) analytics. Leave blank to disable. |

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm start` — serve the production build

## Deploy

Deploy to [Vercel](https://vercel.com) (recommended for Next.js):
1. Push this folder to a Git repo.
2. Import it in Vercel.
3. Add the environment variables above in the Vercel dashboard.
4. Point your domain at it.

## Structure

```
app/            App Router: layout (SEO/metadata/JSON-LD), page, API route, legal pages,
                sitemap.js, robots.js, opengraph-image.js, icon.svg
components/     Client components (Nav, Hero, Content sections, Engage sections, shared UI)
lib/            constants.js (brand, contact, content data) + icons.jsx (SVG icon set)
```

## Notes on content

- **Capabilities** section shows what we *can build* for each business type — no fabricated client results.
- **Reviews** section lets real visitors submit a rating + their experience (emailed to you); no invented testimonials are displayed.
- Update contact details, pricing and copy in `lib/constants.js`.
