# Karni & Co. — Business & Facility Supplies

Mobile-first B2B quote-led website built with Next.js App Router, TypeScript and Tailwind CSS v4.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Configure before publishing
Edit `src/lib/site.ts`:
- `whatsappNumber`: real business number, international country code + number, digits only (e.g. `91XXXXXXXXXX`, replaced with actual digits).
- `contactEmail`: real business enquiry email.
- `location`: verify the public-facing business location.

Replace `example.com` in `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` with your actual domain. Review proposed categories against what you can actually source. Confirm the business name and trademark availability before printing or launch.

## Static build
```bash
npm run build
```
Static output is generated in `out/`. Deploy `out/` to Cloudflare Pages using Direct Upload or connect the Git repository.

## Form behavior
This starter has no backend or database. The form opens a prefilled WhatsApp chat when a valid WhatsApp number is configured, or prepares an email using the visitor's email app. Visitors must manually send the message. To receive/store submissions without the visitor's app, connect a form service or backend.
