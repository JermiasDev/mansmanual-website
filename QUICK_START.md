# Quick Start Guide - Man's Manual Website

## Immediate Next Steps

### 1. Install Dependencies (5 minutes)

```bash
cd MansManual_Website
npm install
```

### 2. Start Development Server (1 minute)

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your website.

### 3. Must-Do Customizations Before Deploying

#### A. App Store Link (Required)
**File**: `components/DownloadButton.tsx` (Line 11)

Replace:
```typescript
const appStoreUrl = "https://apps.apple.com/app/mans-manual/id[YOUR_APP_ID]"
```

With your actual App Store link when available.

#### B. Contact Form Setup (Required)
**File**: `components/ContactForm.tsx` (Line 22)

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free plan is fine)
3. Create a new form
4. Copy your form ID
5. Replace `YOUR_FORM_ID` in the code

#### C. Add Images (Required)

Add these to the `public/` folder:

**Essential:**
- `favicon.ico` (32x32px) - Shows in browser tab
- `apple-touch-icon.png` (180x180px) - iOS bookmark icon
- `og-image.png` (1200x630px) - Social media preview

**PWA Icons:**
- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)

**App Screenshots:**
Replace placeholder text in these files with actual `<Image>` components:
- `app/page.tsx` (Hero section, line ~90)
- `app/features/page.tsx` (All 8 feature sections)

#### D. Social Media Links (Optional)
**File**: `components/Footer.tsx` (Lines 50-70)

Update Twitter and Instagram URLs with your actual handles.

#### E. Update Domain (Required before deploying)
**File**: `app/layout.tsx` (Line 17)

Change:
```typescript
metadataBase: new URL('https://mansmanual.com'),
```

To your actual domain.

## Testing Checklist

Before deploying, test these:

```bash
# Build production version
npm run build

# Run production server
npm run start

# Visit http://localhost:3000 and check:
```

- [ ] All pages load (Home, Features, Pricing, About, Support, Privacy, Terms)
- [ ] Dark/light mode toggle works
- [ ] Mobile menu opens/closes on phone screen
- [ ] All links work
- [ ] Cookie consent banner appears
- [ ] Contact form validates input

## Deploy in 3 Steps

### Option 1: Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
# Create repo on GitHub, then:
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"

3. **Add Domain:**
   - In Vercel dashboard: Settings > Domains
   - Add your domain
   - Update DNS records at your domain registrar

Done! Your site is live.

### Option 2: Netlify

Same process as Vercel, but at [netlify.com](https://netlify.com).

## File Structure Overview

```
Key Files You'll Edit:
├── components/DownloadButton.tsx    # App Store link
├── components/ContactForm.tsx       # Contact form setup
├── components/Footer.tsx            # Social media links
├── app/layout.tsx                   # Domain and SEO
└── public/                          # Images go here

Pages (Pre-built, ready to use):
├── app/page.tsx                     # Home
├── app/features/page.tsx            # Features
├── app/pricing/page.tsx             # Pricing
├── app/about/page.tsx               # About
├── app/support/page.tsx             # Support + FAQ
├── app/privacy/page.tsx             # Privacy Policy
└── app/terms/page.tsx               # Terms of Service
```

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Run production build locally
npm run lint         # Check for code issues

# Deployment (auto-handled by Vercel/Netlify)
git push origin main # Triggers automatic deployment
```

## Where to Add Your Content

### App Screenshots
Search for: `[App Screenshot Placeholder]` or `TODO: Add screenshot`

Replace with:
```tsx
<Image
  src="/screenshots/your-image.png"
  alt="Description"
  width={375}
  height={812}
  className="rounded-3xl shadow-2xl"
/>
```

### Testimonials
**File**: `app/page.tsx` (Line ~135)

Replace the placeholder testimonials with real user feedback.

### Company Info
**File**: `app/about/page.tsx`

Update:
- Founded year
- Location
- Team information (if desired)

## Apple App Store Submission

Once live, add these URLs to App Store Connect:

- **Marketing URL**: `https://yourdomain.com`
- **Support URL**: `https://yourdomain.com/support`
- **Privacy Policy**: `https://yourdomain.com/privacy`

## Getting Help

- **Documentation**: See [README.md](README.md) for detailed info
- **Deployment**: See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step guide
- **Support**: Email mansmanualapp@gmail.com

## What's Included

✅ **7 Complete Pages**: Home, Features, Pricing, About, Support, Privacy, Terms
✅ **Mobile Responsive**: Works perfectly on all devices
✅ **Dark Mode**: Automatic with user preference
✅ **SEO Optimized**: Sitemap, meta tags, Open Graph
✅ **Performance**: Built for 90+ Lighthouse score
✅ **Apple Compliant**: Privacy Policy, Terms, Support page
✅ **Contact Form**: Ready for Formspree integration
✅ **Cookie Consent**: EU compliance built-in

## Pro Tips

1. **Test on Mobile**: Use Chrome DevTools device mode
2. **Check Performance**: Run Lighthouse audit in Chrome DevTools
3. **Preview Dark Mode**: Click moon/sun icon in navigation
4. **Fast Edits**: Use VSCode with Tailwind CSS IntelliSense extension

---

**You're ready to go!** Install dependencies, customize the essentials, and deploy. Your professional website will be live in under an hour.
