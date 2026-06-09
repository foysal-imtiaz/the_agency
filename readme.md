# Nexus Digital — Agency Website

A professional digital marketing agency website built with **Next.js 14 App Router** and **Tailwind CSS**, following the Mistral AI design system aesthetic: minimal, high-contrast, enterprise-grade.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| Tailwind CSS | Styling |
| Resend | Contact form email delivery |
| Google Fonts (Inter) | Typography |

---

## Project Structure

```
app/
├── layout.tsx          ← Global layout (Navbar, Footer, OG defaults)
├── globals.css         ← Tailwind base + custom animations
├── page.tsx            ← Home page
├── services/
│   └── page.tsx        ← Services & pricing page
├── about/
│   └── page.tsx        ← About / team page
├── contact/
│   └── page.tsx        ← Contact page with form & Calendly placeholder
└── api/
    └── contact/
        └── route.js    ← Contact form API (Resend integration ready)

components/
├── Navbar.tsx          ← Sticky responsive navbar
├── Footer.tsx          ← Footer with links
├── ContactForm.tsx     ← Client-side contact form with validation
└── AnimateOnScroll.jsx ← Intersection Observer animation utility
```

---

## Running Locally

### Prerequisites

- Node.js 18.17+ ([download](https://nodejs.org))
- npm 9+ (comes with Node)

### Steps

1. **Unzip and open the project**
   ```bash
   unzip agency-site.zip
   cd agency-site
   code .   # Opens in VS Code
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Open `.env.local` and fill in your values (see [Environment Variables](#environment-variables) below).

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | For emails | Your Resend API key from [resend.com](https://resend.com) |
| `NEXT_PUBLIC_SITE_URL` | Optional | Your production domain for canonical URLs |

> The site works without `RESEND_API_KEY` — form submissions will just log to the console. Enable Resend when you're ready to receive emails.

---

## Enabling Contact Form Emails (Resend)

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Create an API key
3. Add it to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
   ```
4. Open `app/api/contact/route.js`
5. Uncomment the Resend import and the `resend.emails.send()` block
6. Update the `from` and `to` email addresses to your own

---

## Customizing Content

### Agency name & branding
- Search and replace `Nexus Digital` across all files with your agency name
- Update the logo SVG in `components/Navbar.tsx` and `components/Footer.tsx`

### Team section
- Edit the `team` array in `app/about/page.tsx`

### Pricing
- Edit the `plans` arrays inside each service in `app/services/page.tsx`

### Calendly embed
- In `app/contact/page.tsx`, replace the placeholder `<div>` with the actual Calendly inline embed code from your Calendly account

### Colors
- All colors are defined in `tailwind.config.js` under `theme.extend.colors`
- Primary brand token is `brand-black` (`#000000`)

---

## Building for Production

```bash
npm run build
npm run start
```

To verify the build is clean:
```bash
npm run build 2>&1 | tail -20
```

---

## Deploying to Vercel (Recommended)

Vercel is the easiest deploy target for Next.js projects.

### Option A: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. From your project root:
   ```bash
   vercel
   ```
3. Follow the prompts. First deploy creates a preview URL.
4. Add environment variables in the Vercel dashboard under **Settings → Environment Variables**
5. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option B: GitHub + Vercel (recommended for teams)

1. Push your code to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Add environment variables
5. Click **Deploy**

Every push to `main` auto-deploys. PRs get preview deployments.

---

## Deploying to Other Platforms

### Netlify
```bash
npm run build
# Deploy the `.next` folder using Netlify's Next.js adapter
```
Use the [Netlify Next.js plugin](https://docs.netlify.com/integrations/frameworks/next-js/) for full App Router support.

### Railway / Render
Both support Next.js natively. Set build command to `npm run build` and start command to `npm run start`.

---

## SEO & Open Graph

Each page has its own `metadata` export with:
- `title` and `description`
- `openGraph` image and text
- Twitter card

Update `metadataBase` in `app/layout.tsx` to your production domain:
```js
metadataBase: new URL('https://yourdomain.com'),
```

Add an `og-image.png` (1200×630px) to the `/public` folder for social sharing thumbnails.

---

## Performance Notes

- Fonts loaded via Google Fonts with `display=swap` — no render blocking
- `next/image` used for all images with lazy loading
- `AnimateOnScroll` uses Intersection Observer — no GSAP/heavy animation libraries
- No client-side routing libraries — standard Next.js Link
- CSS-only hover/focus states — minimal JS footprint

---

## License

MIT — use freely for client projects.
