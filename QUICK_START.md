# 🚀 QUICK START - Deploy in 5 Minutes!

## ✅ Your website is built and ready! 

Your `dist` folder contains the production-ready website.

---

## 🎯 Easiest Method: VERCEL (Recommended)

### Step 1: Create GitHub Repository
```bash
# In your terminal, run these commands:

git add .
git commit -m "Ready to deploy France Map"
git push -u origin main
```

**Don't have GitHub remote yet?**
1. Go to https://github.com/new
2. Create a new repository called "france-map"
3. Copy the URL (e.g., `https://github.com/yourname/france-map.git`)
4. Run:
```bash
git remote add origin https://github.com/YOURNAME/france-map.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to **https://vercel.com/signup**
2. Click "Continue with GitHub"
3. Click "Import Project" or "New Project"
4. Find and select your `france-map` repository
5. Click "Deploy" (don't change any settings!)
6. Wait 1-2 minutes... ☕

### Step 3: Done! 🎉
You'll get a URL like: **https://france-map-xyz.vercel.app**

Share this URL with anyone!

---

## 🎯 Alternative: NETLIFY (Drag & Drop)

### Super Simple - No GitHub Needed!

1. Go to **https://app.netlify.com/drop**
2. Drag the **`dist`** folder from your project
3. Drop it on the Netlify page
4. Wait 30 seconds... ☕
5. Done! You'll get a URL like: **https://amazing-name-123.netlify.app**

**Want a better URL?**
- Click "Site settings" → "Change site name"
- Change to: `france-map-yourname`

---

## 📱 Updating Your Website

### On Vercel:
Just push to GitHub - it updates automatically!
```bash
git add .
git commit -m "Updated cities"
git push
```

### On Netlify:
- Rebuild: `npm run build`
- Drag the new `dist` folder again
- Or connect to GitHub for auto-updates

---

## ❓ Troubleshooting

### "PDFs not loading"
✅ Make sure PDF files are in `public/pdfs/` folder before building

### "Map not showing"
✅ Check browser console (F12) for errors
✅ Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### "Build fails"
✅ Run: `npm install` then `npm run build` again

---

## 🔒 Making Updates

### Add a new city:
1. Edit `src/App.jsx` → `SAMPLE_CITIES` array
2. Add your PDF to `public/pdfs/`
3. Build: `npm run build`
4. Deploy updated `dist` folder

---

## 💰 Costs

**ALL THREE OPTIONS ARE 100% FREE!**

- Vercel: Free for personal projects
- Netlify: Free (100GB bandwidth/month)
- GitHub Pages: Free forever

---

## 🎊 You're Done!

Your interactive France Map is now online and accessible to everyone!

**Share your URL:**
- Send to friends
- Add to your portfolio
- Share on social media

---

**Need more help?** Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.
