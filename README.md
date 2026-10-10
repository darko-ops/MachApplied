# machapplied.com

Single-page welcome site for Mach Applied. Next.js (App Router) + TypeScript + Tailwind, static export.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site written to ./out
```

## Configuration

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_FORM_ENDPOINT` — form endpoint that accepts a POST (e.g. Formspree). When unset, the contact form opens a prefilled `mailto:` instead.
- `NEXT_PUBLIC_CONTACT_EMAIL` — address for the mailto fallback and footer. Defaults to `hello@machapplied.com`.

Both are inlined at build time, so rebuild after changing them.

## Layout

- `app/globals.css` — color tokens (dark-first, light via `prefers-color-scheme`), motion rules
- `app/layout.tsx` — fonts, metadata, analytics placeholder
- `app/og.png/route.tsx` — Open Graph image, rendered to `/og.png` at build time
- `app/icon.svg` — favicon
- `components/` — one file per section
