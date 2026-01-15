# Image Assets Checklist

This document lists all images you need to create and add to complete the website.

## Required Images (Priority: HIGH)

These are essential for the website to function properly:

### 1. Favicon & Icons

**Location**: `public/` folder

- [ ] **favicon.ico** (32x32px)
  - Format: ICO
  - Shows in browser tab
  - Tool: [favicon.io](https://favicon.io)

- [ ] **apple-touch-icon.png** (180x180px)
  - Format: PNG
  - Shows when users bookmark on iOS
  - Should match app icon design

- [ ] **icon-192.png** (192x192px)
  - Format: PNG
  - PWA icon for Android
  - Should match app icon design

- [ ] **icon-512.png** (512x512px)
  - Format: PNG
  - PWA icon for high-res displays
  - Should match app icon design

### 2. Social Media Preview Image

**Location**: `public/` folder

- [ ] **og-image.png** (1200x630px)
  - Format: PNG or JPG
  - Shows when sharing link on social media
  - Should include: App name, tagline, and app preview
  - Tool: [Canva](https://canva.com) (use "Facebook Post" template)

**Recommended content for og-image:**
- Man's Manual logo/app icon
- Tagline: "Build Discipline. Strengthen Faith. Transform Your Life."
- Screenshot of app
- Your brand colors (sage green/amber orange)

## App Screenshots (Priority: MEDIUM)

These replace placeholders throughout the site. Add to `public/screenshots/` folder:

### Home Page (1 screenshot needed)

**Location**: `app/page.tsx` line ~90

- [ ] **hero-screenshot.png** (375x812px - iPhone aspect ratio)
  - Main app dashboard or welcome screen
  - Should look clean and professional
  - Consider using mockup with device frame

### Features Page (8 screenshots needed)

**Location**: `app/features/page.tsx`

Each feature needs a screenshot (375x812px each):

- [ ] **task-management.png** - Daily tasks screen with streak
- [ ] **bible-study.png** - Bible reading view with highlights
- [ ] **prayer-journal.png** - Prayer list or journal entry
- [ ] **ai-assistant.png** - AI chat conversation
- [ ] **workout-planning.png** - Workout plan or exercise list
- [ ] **notes.png** - Notes and folders view
- [ ] **badges.png** - Badges/achievements screen
- [ ] **progress.png** - Progress charts and stats

## Screenshot Tips

### Taking Screenshots from Your App

1. **iOS Simulator** (if using Xcode):
   - Run app in simulator
   - Cmd + S to save screenshot
   - Saves to Desktop

2. **Real iPhone**:
   - Take screenshot (Volume Up + Side Button)
   - AirDrop to Mac
   - Or email to yourself

3. **Mockup Tools** (make them look professional):
   - [Screely](https://screely.com) - Free, browser-based
   - [Mockuphone](https://mockuphone.com) - Device frames
   - [Previewed](https://previewed.app) - Premium mockups

### Screenshot Best Practices

✅ **Do:**
- Use actual app content (not Lorem Ipsum)
- Show the app in use (filled with sample data)
- Use light mode for consistency (or both light/dark)
- Crop to device screen size (no device frames needed)
- Use PNG format for quality

❌ **Don't:**
- Include personal/real user data
- Show empty states or placeholder screens
- Include status bar if it shows carrier/battery
- Use blurry or low-quality images

### Recommended Dimensions

```
iPhone Screenshot Sizes:
- iPhone 14/15: 1170 x 2532px (3x)
- iPhone SE: 750 x 1334px (2x)

For web display, scale to:
- 375 x 812px (standard web display)
```

## Optional Images (Priority: LOW)

These can enhance the website but aren't critical:

### Team Photos

**Location**: `app/about/page.tsx`

- [ ] Founder/team member photos (if you want to add a team section)
  - 400x400px
  - Professional headshots
  - Circular crop looks good

### Logo Variations

**Location**: `public/` folder

- [ ] **logo-light.png** - Logo for light backgrounds
- [ ] **logo-dark.png** - Logo for dark backgrounds
- [ ] **logo-icon.png** - Just the icon (no text)

Currently using "MM" text logo, but you may want to replace with actual logo design.

## Image Optimization

Before adding images:

1. **Compress images**:
   - [TinyPNG](https://tinypng.com) - Lossless compression
   - [Squoosh](https://squoosh.app) - Advanced compression

2. **Convert to WebP** (optional, Next.js handles this):
   - Better compression than PNG/JPG
   - Use Squoosh or Photoshop

3. **Name files properly**:
   - Use lowercase
   - Use hyphens not spaces
   - Be descriptive: `task-management-screenshot.png`

## After Adding Images

### Update Code

Replace placeholders in these files:

1. **Home page hero**: `app/page.tsx` line ~90
```tsx
<Image
  src="/screenshots/hero-screenshot.png"
  alt="Man's Manual app dashboard"
  width={375}
  height={812}
  className="rounded-3xl shadow-2xl"
/>
```

2. **Features page**: `app/features/page.tsx`

Update the `screenshot` field in each feature object:
```typescript
screenshot: "/screenshots/task-management.png"
```

3. **Update metadata**: `app/layout.tsx`

Verify og-image path is correct (line ~35):
```typescript
images: [
  {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: "Man's Manual App",
  }
]
```

### Test Images

After adding images:

```bash
npm run dev
```

Check:
- [ ] Images load on all pages
- [ ] No broken image icons
- [ ] Images look sharp on retina displays
- [ ] Images load quickly
- [ ] Dark mode doesn't affect image quality

## Quick Reference: File Locations

```
public/
├── favicon.ico                    # Browser tab icon
├── apple-touch-icon.png          # iOS bookmark
├── icon-192.png                  # PWA icon
├── icon-512.png                  # PWA icon
├── og-image.png                  # Social preview
└── screenshots/
    ├── hero-screenshot.png       # Home page
    ├── task-management.png       # Features page
    ├── bible-study.png           # Features page
    ├── prayer-journal.png        # Features page
    ├── ai-assistant.png          # Features page
    ├── workout-planning.png      # Features page
    ├── notes.png                 # Features page
    ├── badges.png                # Features page
    └── progress.png              # Features page
```

## Free Design Tools

If you need to create images:

- **Canva** ([canva.com](https://canva.com)) - Easy social media graphics
- **Figma** ([figma.com](https://figma.com)) - Professional design tool
- **Photopea** ([photopea.com](https://photopea.com)) - Free Photoshop alternative
- **Favicon.io** ([favicon.io](https://favicon.io)) - Generate favicons
- **Screely** ([screely.com](https://screely.com)) - Screenshot mockups

## Need Help?

If you don't have app screenshots yet:

**Option 1**: Use placeholder images temporarily
- Deploy with current placeholders
- Update with real screenshots later
- Website will still function

**Option 2**: Create mockup screenshots
- Use Figma or Sketch
- Design what the screens will look like
- Better than empty placeholders

**Option 3**: Wait until app is ready
- Website code is ready
- Add screenshots when app development is complete
- Won't affect deployment timeline

---

**Pro Tip**: Start with the 5 required images (favicon, icons, og-image) to get your site live quickly. Add app screenshots as they become available.
