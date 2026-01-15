# Man's Manual Website

Professional website for Man's Manual iOS app, built to meet Apple Developer Program requirements and establish business legitimacy.

## Overview

This is a production-ready Next.js 14 website featuring:
- Responsive design (mobile-first)
- Dark/light mode support
- SEO optimized
- Apple Developer Program compliant
- Comprehensive legal pages (Privacy Policy, Terms of Service)
- Fast loading and performance optimized

## Tech Stack

- **Framework**: Next.js 14 (React with App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel (recommended) or Netlify

## Project Structure

```
MansManual_Website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── features/
│   │   └── page.tsx        # Features page
│   ├── pricing/
│   │   └── page.tsx        # Pricing page
│   ├── privacy/
│   │   └── page.tsx        # Privacy Policy
│   ├── terms/
│   │   └── page.tsx        # Terms of Service
│   ├── support/
│   │   └── page.tsx        # Support page with FAQ
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Footer.tsx          # Footer component
│   ├── ThemeProvider.tsx   # Dark mode provider
│   ├── CookieConsent.tsx   # Cookie consent banner
│   ├── DownloadButton.tsx  # App Store button
│   ├── FeatureCard.tsx     # Feature display card
│   ├── FeatureSection.tsx  # Feature section layout
│   └── ContactForm.tsx     # Contact form
├── public/
│   ├── robots.txt          # SEO crawler instructions
│   └── manifest.json       # PWA manifest
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd MansManual_Website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Checklist

Before deploying, customize these items:

### 1. App Store Link
**File**: `components/DownloadButton.tsx`
- Replace `[YOUR_APP_ID]` with your actual App Store app ID
- Line: `const appStoreUrl = "https://apps.apple.com/app/mans-manual/id[YOUR_APP_ID]"`

### 2. Contact Form
**File**: `components/ContactForm.tsx`
- Sign up for [Formspree](https://formspree.io/) (free tier available)
- Replace `YOUR_FORM_ID` with your Formspree form ID
- Line: `const response = await fetch('https://formspree.io/f/YOUR_FORM_ID'`

### 3. Social Media Links
**File**: `components/Footer.tsx`
- Update Twitter/X URL (line ~50)
- Update Instagram URL (line ~59)
- Add your actual social media handles

### 4. Google Analytics (Optional)
**File**: `app/layout.tsx`
- Uncomment the verification section
- Add your Google Search Console verification code

### 5. Images to Add
Create and add these images to the `public/` folder:

- **favicon.ico** (32x32px) - Browser tab icon
- **apple-touch-icon.png** (180x180px) - iOS home screen icon
- **icon-192.png** (192x192px) - PWA icon
- **icon-512.png** (512x512px) - PWA icon
- **og-image.png** (1200x630px) - Social media preview image

### 6. App Screenshots
Add actual app screenshots to replace placeholders:
- Home page hero section
- Features page (8 feature screenshots)
- Look for `[App Screenshot Placeholder]` and `[TODO: Add screenshot]` comments

### 7. Legal Information
**Files**: `app/terms/page.tsx`
- Update `[YOUR STATE]` with your actual state/country for governing law
- Verify all legal content with an attorney if needed

### 8. Domain Configuration
**File**: `app/layout.tsx`
- Update `metadataBase` URL from `https://mansmanual.com` to your actual domain

### 9. Update Company Information
If needed, update:
- Company name
- Email address
- Founded year
- Location details

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Visit [vercel.com](https://vercel.com) and sign up/sign in

3. Click "New Project" and import your GitHub repository

4. Vercel will auto-detect Next.js and configure settings

5. Click "Deploy"

6. Once deployed, add your custom domain in Project Settings > Domains

**Environment Variables**: None required for this project

### Deploy to Netlify

1. Push your code to GitHub

2. Visit [netlify.com](https://netlify.com) and sign up/sign in

3. Click "Add new site" > "Import an existing project"

4. Connect your GitHub repository

5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: (leave empty)

6. Click "Deploy site"

7. Add custom domain in Site Settings > Domain management

### Custom Domain Setup

After deployment:

1. Go to your domain registrar (Namecheap, GoDaddy, etc.)

2. Add these DNS records:
   - **Vercel**: Add A record and CNAME as instructed by Vercel
   - **Netlify**: Add CNAME record pointing to your Netlify subdomain

3. SSL certificate will be automatically provisioned

## Performance Optimization

This website is optimized for performance:

- **Lighthouse Score Target**: 90+ on all metrics
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic via Next.js
- **Font Loading**: Optimized Google Fonts with `display: swap`
- **CSS**: Tailwind CSS with PurgeCSS (automatic)
- **Minification**: Automatic in production builds

### Test Performance

```bash
npm run build
npm run start
```

Then run Lighthouse in Chrome DevTools (F12 > Lighthouse tab)

## SEO Features

- Dynamic sitemap at `/sitemap.xml`
- Robots.txt for crawler instructions
- Open Graph meta tags for social sharing
- Twitter Card meta tags
- Structured schema.org markup (in layout)
- Semantic HTML with proper heading hierarchy
- Alt text for all images (add when you replace placeholders)
- Mobile-friendly and responsive

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari 15.0+
- Chrome Android (last 2 versions)

## Development Tips

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add `page.tsx` file with your content
3. Add page link to `components/Navigation.tsx`
4. Add to `app/sitemap.ts` for SEO

### Styling Guidelines

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Use the color scheme defined in `tailwind.config.js`
- Use custom classes from `globals.css` (btn-primary, card, etc.)

### Dark Mode

Dark mode is implemented with:
- Tailwind's `dark:` variant
- `ThemeProvider.tsx` for state management
- Persists user preference in localStorage

## Troubleshooting

### Build Errors

**Error**: "Cannot find module"
- Run `npm install` to ensure all dependencies are installed

**Error**: Type errors
- Ensure TypeScript is properly configured
- Run `npm run lint` to check for issues

### Deployment Issues

**Error**: "Build failed"
- Check build logs for specific errors
- Ensure all imports are correct
- Verify no TypeScript errors

**Images not loading**
- Ensure images are in `public/` directory
- Check file paths are correct
- Verify image file extensions

## Support

For questions or issues:
- Email: mansmanualapp@gmail.com
- Review the Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Review the Tailwind CSS documentation: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## License

Copyright © 2026 Man's Manual LLC. All rights reserved.

---

**Built with Next.js 14, Tailwind CSS, and TypeScript**
