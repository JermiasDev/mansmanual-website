# Deployment Guide - Man's Manual Website

Complete step-by-step guide to deploy your website to production.

## Pre-Deployment Checklist

Before deploying, ensure you've completed these tasks:

### Required Customizations

- [ ] Updated App Store link in `components/DownloadButton.tsx`
- [ ] Configured Formspree for contact form in `components/ContactForm.tsx`
- [ ] Updated social media links in `components/Footer.tsx`
- [ ] Added all required images to `public/` folder:
  - [ ] favicon.ico
  - [ ] apple-touch-icon.png
  - [ ] icon-192.png
  - [ ] icon-512.png
  - [ ] og-image.png
- [ ] Replaced app screenshot placeholders with actual images
- [ ] Updated domain in `app/layout.tsx` metadataBase
- [ ] Reviewed and customized Terms of Service (state/country)
- [ ] Verified all email addresses are correct

### Testing

- [ ] Tested website locally (`npm run dev`)
- [ ] Tested production build (`npm run build && npm run start`)
- [ ] Verified all pages load correctly
- [ ] Tested dark/light mode toggle
- [ ] Tested mobile responsiveness
- [ ] Checked all links work
- [ ] Tested contact form submission (if configured)
- [ ] Ran Lighthouse performance audit (target: 90+)

## Option 1: Deploy to Vercel (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js.

### Step 1: Prepare Your Repository

1. Initialize git (if not already done):
```bash
cd MansManual_Website
git init
git add .
git commit -m "Initial commit: Man's Manual website"
```

2. Create a GitHub repository:
   - Go to [github.com/new](https://github.com/new)
   - Name it: `mans-manual-website`
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/mans-manual-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/sign in with GitHub

2. Click **"Add New..."** > **"Project"**

3. Import your `mans-manual-website` repository

4. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `next build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

5. Click **"Deploy"**

6. Wait 2-3 minutes for deployment to complete

7. Your site is now live at `https://your-project-name.vercel.app`

### Step 3: Add Custom Domain

1. In your Vercel dashboard, go to your project

2. Click **"Settings"** > **"Domains"**

3. Enter your domain (e.g., `mansmanual.com`)

4. Click **"Add"**

5. Vercel will provide DNS records. You'll need to add these to your domain registrar:

   **For root domain (mansmanual.com):**
   - Type: A
   - Name: @
   - Value: 76.76.21.21

   **For www subdomain (www.mansmanual.com):**
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

6. Go to your domain registrar (Namecheap, GoDaddy, etc.)

7. Add the DNS records provided by Vercel

8. Wait for DNS propagation (can take up to 48 hours, usually 1-2 hours)

9. Vercel will automatically provision SSL certificate

10. Your site is now live at your custom domain!

### Step 4: Configure Production Settings

1. In Vercel dashboard, go to **Settings** > **Environment Variables**
   - (None required for this project)

2. Go to **Settings** > **General**
   - Verify Framework Preset is "Next.js"
   - Verify Node.js Version is 18.x or later

## Option 2: Deploy to Netlify

### Step 1: Prepare Your Repository

Same as Vercel Step 1 above - push your code to GitHub.

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/sign in

2. Click **"Add new site"** > **"Import an existing project"**

3. Click **"GitHub"** and authorize Netlify

4. Select your `mans-manual-website` repository

5. Configure build settings:
   - **Branch to deploy**: main
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Base directory**: (leave empty)

6. Click **"Deploy site"**

7. Wait for deployment to complete

8. Your site is now live at `https://random-name.netlify.app`

### Step 3: Add Custom Domain

1. In Netlify dashboard, go to **Site settings** > **Domain management**

2. Click **"Add custom domain"**

3. Enter your domain (e.g., `mansmanual.com`)

4. Click **"Verify"**

5. Netlify will provide DNS settings:

   **Option A: Use Netlify DNS (Recommended)**
   - Go to your domain registrar
   - Change nameservers to Netlify's nameservers (provided in dashboard)

   **Option B: Use External DNS**
   - Add CNAME record:
     - Name: www
     - Value: your-site-name.netlify.app
   - Add A record for root domain (IP provided by Netlify)

6. Wait for DNS propagation

7. Netlify will automatically provision SSL certificate

## Option 3: Deploy to Other Platforms

### Cloudflare Pages

1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Build command: `npm run build`
4. Build output directory: `.next`
5. Add custom domain in Cloudflare dashboard

### Railway

1. Push code to GitHub
2. Create new project in Railway
3. Connect GitHub repository
4. Railway auto-detects Next.js
5. Add custom domain in Railway dashboard

## Post-Deployment Tasks

### Verify Website

- [ ] Visit your live website and test all pages
- [ ] Verify all images load correctly
- [ ] Test dark/light mode toggle
- [ ] Test navigation on mobile devices
- [ ] Submit contact form (if configured)
- [ ] Check social media preview (share link on Twitter/Facebook)

### SEO Setup

1. **Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your property (domain)
   - Verify ownership (use DNS verification or HTML tag)
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Bing Webmaster Tools**
   - Go to [bing.com/webmasters](https://www.bing.com/webmasters)
   - Add your site
   - Submit sitemap

3. **Analytics (Optional)**
   - Set up Google Analytics 4
   - Add tracking code to `app/layout.tsx`
   - Or use privacy-friendly alternative (Plausible, Fathom)

### Performance Monitoring

1. **Run Lighthouse Audit**
   - Open site in Chrome
   - Press F12 > Lighthouse tab
   - Run audit for Desktop and Mobile
   - Target: 90+ on all metrics

2. **Monitor Core Web Vitals**
   - Use Google Search Console
   - Or use [web.dev/measure](https://web.dev/measure/)

### Security

- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Verify SSL certificate is active
- [ ] Test mixed content warnings (none should appear)
- [ ] Enable security headers (Vercel/Netlify handle this)

## Updating Your Website

### Make Changes Locally

1. Edit files in your local project
2. Test changes: `npm run dev`
3. Build production version: `npm run build`
4. Commit changes:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

### Automatic Deployment

Both Vercel and Netlify automatically deploy when you push to GitHub:
- Push to `main` branch = automatic production deployment
- Usually takes 2-3 minutes
- You'll receive email notification when deployment completes

### Rollback (If Needed)

**Vercel:**
1. Go to Deployments tab
2. Find previous successful deployment
3. Click "..." menu > "Promote to Production"

**Netlify:**
1. Go to Deploys tab
2. Find previous successful deploy
3. Click "Publish deploy"

## Domain Registrar Guides

### Namecheap

1. Login to Namecheap
2. Go to Domain List > Manage
3. Advanced DNS tab
4. Add records provided by Vercel/Netlify
5. Save changes

### GoDaddy

1. Login to GoDaddy
2. My Products > Domains
3. Click DNS next to your domain
4. Add records (may need to remove existing ones first)
5. Save changes

### Google Domains

1. Login to Google Domains
2. Click on your domain
3. DNS tab on left sidebar
4. Scroll to Custom resource records
5. Add records provided by Vercel/Netlify

## Troubleshooting

### Deployment Failed

**Check build logs** in Vercel/Netlify dashboard for specific errors.

Common issues:
- Missing dependencies: Run `npm install` locally
- TypeScript errors: Run `npm run build` locally to find them
- Environment variables: Verify in platform settings

### Domain Not Working

- Wait 24-48 hours for DNS propagation
- Use [whatsmydns.net](https://www.whatsmydns.net/) to check DNS propagation
- Verify DNS records are correct
- Try clearing browser cache
- Try incognito/private browsing mode

### Images Not Loading

- Verify images are in `public/` folder
- Check file names match exactly (case-sensitive)
- Verify image paths in code
- Re-deploy if you added images after deployment

### SSL Certificate Issues

- Both Vercel and Netlify auto-provision SSL
- May take 24 hours after domain is added
- Verify domain DNS is pointing correctly
- Contact platform support if issue persists

## Support Resources

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Netlify Support**: [answers.netlify.com](https://answers.netlify.com)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Man's Manual**: mansmanualapp@gmail.com

## Apple Developer Program Submission

Once your website is live:

1. **Update App Store Connect**
   - Add marketing URL: `https://yourdomain.com`
   - Add support URL: `https://yourdomain.com/support`
   - Add privacy policy URL: `https://yourdomain.com/privacy`

2. **App Review Notes**
   - Mention website in app review notes
   - Provide any test accounts if needed

3. **Verify All Links Work**
   - Apple reviewers will check your website
   - Ensure all pages load correctly
   - Verify contact email is working

---

**Congratulations!** Your website is now live and ready for the App Store review process.
