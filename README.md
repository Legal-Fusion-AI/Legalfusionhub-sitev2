# Legal Fusion Hub marketing site

Public marketing site for Legal Fusion Hub, the done-for-you client acquisition system for bankruptcy law firms.

Legal Fusion Portal, the separate bankruptcy filing application, is linked at [file.legalfusionhub.com](https://file.legalfusionhub.com).

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

The demo form posts JSON to GoHighLevel when these public environment variables are configured:

```bash
NEXT_PUBLIC_GHL_DEMO_ENDPOINT=
NEXT_PUBLIC_GHL_DEMO_FORM_ID=
```

Without an endpoint, the form opens a pre-addressed email to `info@legalfusion.ai` with the submitted fields.

## Product and design authority

- `PRODUCT.md` records product truth and naming.
- `DESIGN.md` records the shipped visual system.
- `.impeccable/surfaces/home.md` records the homepage Persuade strategy and interaction direction.

