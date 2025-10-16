#!/bin/bash

# France Map Deployment Helper Script
# This script will help you prepare your project for deployment

echo "🗺️  France Map Deployment Helper"
echo "=================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
    echo "✓ Git initialized"
else
    echo "✓ Git already initialized"
fi

# Check if there's a remote
if ! git remote | grep -q origin; then
    echo ""
    echo "⚠️  No remote repository configured"
    echo "Please create a repository on GitHub and run:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/france-map.git"
    echo ""
    read -p "Press Enter to continue..."
fi

# Build the project
echo ""
echo "🔨 Building production version..."
npm run build

if [ $? -eq 0 ]; then
    echo "✓ Build successful!"
    echo ""
    echo "📁 Build output created in: dist/"
    echo ""
    echo "🚀 Next Steps - Choose ONE option:"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Option 1: VERCEL (Recommended - Easiest)"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "1. Commit and push your code:"
    echo "   git add ."
    echo "   git commit -m 'Deploy France Map'"
    echo "   git push -u origin main"
    echo ""
    echo "2. Go to https://vercel.com"
    echo "3. Click 'Import Project'"
    echo "4. Select your repository"
    echo "5. Click 'Deploy'"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Option 2: NETLIFY (Drag & Drop)"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "1. Go to https://netlify.com"
    echo "2. Drag and drop the 'dist' folder"
    echo "3. Done!"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Option 3: GITHUB PAGES"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Run: npm install --save-dev gh-pages"
    echo "Then: npm run deploy (after configuring package.json)"
    echo ""
    echo "📖 For detailed instructions, see DEPLOYMENT_GUIDE.md"
    echo ""
else
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

# Check if dist folder exists
if [ -d "dist" ]; then
    echo "✅ Your production build is ready in the 'dist' folder!"
    echo ""
    echo "📊 Build size:"
    du -sh dist/
    echo ""
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 Your website is ready to deploy!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
