# SecurX Financial Website

Modern, fast, and expandable website for SecurX Financial — ATM placement services across Southwestern Ontario.

## Tech Stack

- **Framework:** Next.js 16 + React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Database:** SQLite (better-sqlite3) for contact form submissions
- **Admin:** JWT-protected admin dashboard
- **Hosting:** Fly.io (yyz region, Toronto)

## Project Structure

```
securx-financial/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── services/          # Services & Revenue Calculator
│   ├── about/             # About page
│   ├── why-us/            # Why Choose Us page
│   ├── service-areas/     # Service areas coverage
│   ├── faq/               # FAQ page
│   ├── testimonials/      # Testimonials & gallery
│   ├── contact/           # Contact form
│   ├── privacy/           # Privacy policy
│   ├── admin/             # Admin dashboard
│   ├── industries/        # Industry landing pages (bars, dispensaries, etc.)
│   └── api/               # API routes (forms, admin)
├── components/            # Reusable components
├── hooks/                 # Custom React hooks
├── lib/                   # Database and utilities
├── scripts/               # Utility scripts (password hashing)
└── public/                # Static assets

```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file:

```env
# Admin Authentication
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=your-password-hash-here
JWT_SECRET=your-jwt-secret-here
```

Generate credentials:

```bash
# Generate JWT secret
openssl rand -hex 32

# Generate password hash
npm run hash-password
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

## Features

### Pages

- **Home:** Hero, stats, service highlights, how it works, testimonials
- **Services:** Program options (free placement, rental, purchase), benefits, revenue calculator
- **Revenue Calculator:** Interactive tool to estimate monthly ATM revenue
- **About:** Company story, team, values, service area
- **Why Us:** Competitive advantages, comparison table, trust signals
- **Service Areas:** Coverage map, cities served, local advantages
- **FAQ:** Accordion-style Q&A organized by category
- **Testimonials:** Client success stories and photo gallery
- **Contact:** Form with validation, contact info, map
- **Industry Pages:** Tailored landing pages for bars, dispensaries, convenience stores, restaurants, gas stations
- **Privacy Policy:** Standard privacy policy page
- **Admin Dashboard:** View and export form submissions with JWT authentication

### Components

- **Navigation:** Sticky nav with mobile menu
- **Footer:** Contact info, quick links, service areas, social media
- **Hero:** Full-screen hero with CTA buttons
- **StatsCounter:** Animated counters on scroll
- **RevenueCalculator:** Interactive revenue estimator
- **ServiceCard:** Icon + title + description cards
- **FAQAccordion:** Expandable Q&A items
- **ContactForm:** Validated form with loading/success/error states
- **CTABanner:** Reusable call-to-action section

### Backend

- **SQLite Database:** Form submissions stored locally
- **Admin Dashboard:** View/filter/export submissions
- **JWT Authentication:** Secure admin access
- **Form API:** `/api/submit-form` endpoint

## Admin Dashboard

Access the admin dashboard at `/admin`

Login with the credentials configured in `.env.local`

Features:
- View all form submissions
- Filter by form type
- Export to CSV
- View submission stats

## Deployment

### Fly.io Setup

1. Install Fly CLI: https://fly.io/docs/hands-on/install-flyctl/

2. Login to Fly:
```bash
flyctl auth login
```

3. Deploy:
```bash
flyctl launch
flyctl deploy
```

4. Set environment variables:
```bash
flyctl secrets set ADMIN_USERNAME=your-username
flyctl secrets set ADMIN_PASSWORD_HASH=your-hash
flyctl secrets set JWT_SECRET=your-secret
```

### DNS Configuration

Point `securxatm.ca` to Fly.io:

```
CNAME @ securxatm.fly.dev
```

SSL is automatic via Fly.io.

## Content TODO

The following need to be provided by the client:

- [ ] Logo files (SVG preferred)
- [ ] Team photos (Demetri and Eleas)
- [ ] ATM installation photos for gallery
- [ ] Real client testimonials
- [ ] Actual proof metrics (ATMs installed, years in business, cities served)
- [ ] Revenue calculator parameters (industry averages)
- [ ] Social media links
- [ ] Final color scheme choice (currently using Option C - Bold Financial)

## Remaining Development

- [ ] Complete remaining 4 industry landing pages (dispensaries, convenience stores, restaurants, gas stations)
- [ ] Add Framer Motion scroll animations
- [ ] Add Open Graph images for social sharing
- [ ] Add favicon/app icons
- [ ] Integrate email service (Resend, SendGrid, etc.) for form notifications
- [ ] Add Google Analytics/tracking

## Performance

Built for speed:
- Static generation (SSG) for all content pages
- Lighthouse 90+ on mobile target
- Optimized images with next/image
- Tree-shaken Tailwind CSS
- Minimal JavaScript bundle

## Support

Questions or issues? Contact:
- Email: securxf@gmail.com
- Phone: 519-281-9923 (Demetri) or 519-535-8309 (Eleas)
