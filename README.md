# Managed Web Services Website

A professional website for a cloud and website management service, built with Next.js and inspired by Squarespace's modern aesthetic.

## Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS v3** for styling
- **shadcn/ui** components for consistent UI
- **Responsive design** - mobile-first approach
- **Squarespace-inspired design** with generous spacing and clean aesthetics

## Design System

The website follows a comprehensive design system defined in `design.json`, featuring:

- **Typography**: Inter font with generous line-heights and negative letter-spacing for headlines
- **Colors**: High-contrast black/white foundation with minimal color accents
- **Spacing**: Extremely generous whitespace (2-3x more than typical websites)
- **Components**: Clean, minimal design with proper button sizing and padding

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with Inter font
│   └── page.tsx         # Homepage with all sections
├── components/
│   ├── ui/              # shadcn/ui components (Button, Card, Badge, etc.)
│   ├── sections/        # Page sections (Hero, Services, Pricing, etc.)
│   ├── Navigation.tsx   # Sticky navigation with scroll behavior
│   └── icons.tsx        # Icon components from lucide-react
├── lib/
│   └── utils.ts        # Utility functions (cn for className merging)
└── design.json         # Complete design system and layout structure
```

## Sections

1. **Navigation** - Transparent on hero, white on scroll
2. **Hero** - Full viewport height with blurred background
3. **Stats Bar** - Key metrics display
4. **Services** - Grid of service cards
5. **Comparison** - DIY vs Managed comparison table
6. **Process** - Step-by-step guide
7. **Pricing** - Three-tier pricing table
8. **Testimonials** - Customer testimonials
9. **CTA** - Call-to-action section
10. **Footer** - Multi-column footer with links

## Key Design Principles

- **Generous Spacing**: Sections use 6-10rem vertical padding
- **Centered Content**: Max-width containers with mx-auto
- **Proper Button Sizing**: Buttons have substantial padding, text doesn't stretch edge-to-edge
- **Large Typography**: Bold headlines with clamp() for responsive sizing
- **High Contrast**: Black/white foundation with minimal color

## Customization

All design tokens are defined in `design.json`. Update this file to customize:
- Colors
- Typography scale
- Spacing values
- Component styles
- Layout structure

## Technologies

- Next.js 15.1.0
- React 19.0.0
- TypeScript 5.6.3
- Tailwind CSS 3.4.0
- shadcn/ui components
- Framer Motion (optional, for animations)
- Lucide React (icons)

## License

Private project - All rights reserved.
