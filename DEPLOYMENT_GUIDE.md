# Deployment Guide - France Map Website

This guide will help you deploy your France Map website so anyone can access it online.

## 🚀 Three Best Options for Deployment

---

## Option 1: Vercel (RECOMMENDED - Easiest & Free)

Vercel is the easiest way to deploy Vite/React apps and it's FREE!

### Steps:

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com and sign up

2. **Push your code to GitHub:**
   ```bash
   cd /Users/adham/france-map/france-map
   git init
   git add .
   git commit -m "Initial commit - France Map"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/france-map.git
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "Sign up with GitHub"
   - Click "Import Project"
   - Select your `france-map` repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! You'll get a URL like: `https://france-map.vercel.app`

### Automatic Updates:
Every time you push to GitHub, Vercel will automatically redeploy!

---

## Option 2: Netlify (Also Easy & Free)

Netlify is another great free option with drag-and-drop deployment.

### Steps:

1. **Build your project:**
   ```bash
   npm run build
   ```
   This creates a `dist` folder with your website files.

2. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Sign up (free)
   - Drag and drop the `dist` folder onto Netlify
   - Done! You'll get a URL like: `https://france-map.netlify.app`

### Alternative - Connect to GitHub:
   - Link your GitHub repository
   - Netlify will auto-deploy on every push

---

## Option 3: GitHub Pages (Free)

Host directly on GitHub for free!

### Steps:

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** - Add these lines:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/france-map",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Select `gh-pages` branch
   - Your site will be at: `https://YOUR_USERNAME.github.io/france-map`

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All PDF files are in the `public/pdfs/` folder
- [ ] Build works without errors: `npm run build`
- [ ] Test the build locally: `npm run preview`
- [ ] Update city data in `App.jsx` if needed
- [ ] Check that PDF paths are correct (they should start with `/pdfs/`)

---

## 🔧 Custom Domain (Optional)

If you want your own domain like `www.yoursite.com`:

1. Buy a domain from Namecheap, GoDaddy, etc. (~$10-15/year)
2. In Vercel/Netlify dashboard:
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS configuration instructions
3. Done! Your site will be at `www.yoursite.com`

---

## 💰 Pricing Comparison

| Service | Free Tier | Best For |
|---------|-----------|----------|
| **Vercel** | Unlimited personal projects | Best for React/Vite apps |
| **Netlify** | 100GB bandwidth/month | Drag-and-drop simplicity |
| **GitHub Pages** | 1GB storage | Open source projects |

All three are FREE for projects like yours!

---

## 🆘 Troubleshooting

### Build fails:
```bash
npm install
npm run build
```

### PDFs not loading:
- Make sure PDFs are in `public/pdfs/` folder
- Check paths start with `/pdfs/` not `./pdfs/`

### Map not showing:
- Check browser console for errors (F12)
- Verify Leaflet CSS is loading

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages: https://pages.github.com

---

## ✅ Quick Start (Vercel - Recommended)

```bash
# 1. Build and test locally
npm run build
npm run preview

# 2. Push to GitHub
git init
git add .
git commit -m "Deploy France Map"
git remote add origin https://github.com/YOUR_USERNAME/france-map.git
git push -u origin main

# 3. Go to vercel.com, import repository, click Deploy!
```

**That's it! Your website will be live in ~2 minutes! 🎉**
