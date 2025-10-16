# 🗺️ France Map - Testimony Archive

An interactive map of France for accessing PDF testimonies by city.

## ✨ Features

- Interactive Leaflet map showing French cities
- Click on map markers to view city details
- Search bar to quickly find cities
- PDF viewer and direct links to testimonies
- Responsive design (works on mobile and desktop)

## 🚀 Quick Deploy (Choose One)

### Option 1: Vercel (Easiest - RECOMMENDED)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy
5. Done! Get your URL instantly

### Option 2: Netlify
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Done!

### Option 3: GitHub Pages
1. Run `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/france-map",
   "scripts": {
     "deploy": "gh-pages -d dist",
     "predeploy": "npm run build"
   }
   ```
3. Run `npm run deploy`

**📖 See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed step-by-step instructions.**

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
france-map/
├── public/
│   └── pdfs/              # Place your PDF files here
├── src/
│   ├── App.jsx            # Main application component
│   ├── App.css            # Application styles
│   ├── Map.css            # Map-specific styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── index.html
└── package.json
```

## 🔧 Adding Cities and PDFs

Edit `SAMPLE_CITIES` in `src/App.jsx`:

```javascript
const SAMPLE_CITIES = [
  {
    id: 'paris',
    name: 'Paris',
    lat: 48.8566,
    lng: 2.3522,
    pdfs: [
      { id: 'p1', title: 'Testimony — Jean Dupont', url: '/pdfs/adham.pdf' },
    ],
  },
  // Add more cities...
]
```

Make sure PDF files are in the `public/pdfs/` folder.

## 🛠️ Technologies Used

- React 19
- Vite 7
- Leaflet & React-Leaflet
- OpenStreetMap tiles

## 📝 License

MIT
