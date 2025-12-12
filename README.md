# adapt by design Microsite

A targeted single-page microsite positioning otherstuff.ai workshops and custom work as complementary to adapt by design's Succession Thinking framework.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Deployment:** Vercel (planned subdomain: adaptbydesign.otherstuff.ai)

## Project Structure

```
adapt-microsite/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main page component
│   └── globals.css        # Global styles + Tailwind
├── components/
│   └── [Components TBD]   # Reusable UI components
├── lib/
│   └── content.js         # All website copy centralized
├── public/                # Static assets
└── [config files]         # Next.js, Tailwind, ESLint configs
```

## Development

```bash
# Install dependencies (already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Design Principles

- **Tone:** Collegial, warm, insight-driven (not salesy)
- **Mobile-first:** Fully responsive design
- **Performance:** Lighthouse score > 90
- **Accessibility:** WCAG AA compliant

## Key Sections

1. Hero - Core positioning statement
2. The Gap - Problem framing
3. Philosophy Alignment - Approach alignment
4. Speedrun Workshop - Workshop offering
5. Wingman System - Infrastructure explanation
6. Custom Work - Bespoke solutions
7. Quick Wins - Velocity demonstration
8. Dual CTAs - Clear next steps
9. Footer - Contact info

## Color Palette

- Primary Blue: #2563EB
- Slate Dark: #1E293B
- Slate: #64748B
- Background White: #FFFFFF
- Background Light: #F8FAFC
- Background Blue: #EFF6FF
- Accent Green: #10B981

## Components

All sections are fully implemented:
- Header (sticky navigation with smooth scroll)
- Hero (headline with accent + dual CTAs)
- GapSection (problem framing with pull quote)
- PhilosophySection (3-column alignment cards)
- SpeedrunSection (workshop details with checklist)
- WingmanSection (2-column + capabilities grid)
- CustomWorkSection (3 opportunity cards)
- QuickWinsSection (timeline format)
- DualCTASection (two paths with CTAs)
- Footer (contact info)

## Deployment to Vercel

### Option 1: CLI Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Option 2: GitHub Integration
1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Configure custom subdomain: `adaptbydesign.otherstuff.ai`
4. Deploy

### Custom Domain Setup
In Vercel dashboard:
1. Go to Project Settings > Domains
2. Add domain: `adaptbydesign.otherstuff.ai`
3. Configure DNS:
   - Type: CNAME
   - Name: adaptbydesign
   - Value: cname.vercel-dns.com

## Build Output
- Build successfully compiles
- First Load JS: ~103 kB
- Static generation enabled
- All pages pre-rendered
