# Legal Fusion Hub marketing site

Public marketing site for Legal Fusion Hub. Hub answers the call, qualifies the lead, and books the consultation that turns a bankruptcy inquiry into a retained client.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Motion
- Self-hosted variable fonts
- Vercel deployment

## Develop

Requires Node.js 24 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Verify

```bash
npm run lint
npm run typecheck
npm run build
```

## Demo form

The demo form posts JSON to the configured booking endpoint when these public environment variables are set:

```bash
NEXT_PUBLIC_GHL_DEMO_ENDPOINT=
NEXT_PUBLIC_GHL_DEMO_FORM_ID=
```

Without an endpoint, the form opens a pre-addressed email to `jeff@legalfusionhub.com` with the submitted fields.

## Product and design authority

- `PRODUCT.md` records product truth and naming.
- `DESIGN.md` records the shipped visual system.
- `.impeccable/surfaces/home.md` records the homepage Persuade strategy and interaction direction.

