# GitHub Pages Deployment Guide

## ✅ Project Structure (Updated for GitHub Pages)

Your project is now structured for direct GitHub Pages deployment:

```
live-menu/
├── index.html              ← Main entry point (GitHub Pages looks here!)
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   ├── images/
│   │   ├── categories/
│   │   ├── subcategories/
│   │   └── products/
│   ├── videos/
│   ├── IMAGE_GUIDE.md
│   └── README.md
├── data/
│   ├── menu.json
│   └── theme.json
├── README.md
└── Other documentation files
```

## 🚀 Deploying to GitHub Pages

### Step 1: Commit Your Changes

```bash
git add .
git commit -m "Restructure for GitHub Pages - move to root"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/NetoRibeiro/live-menu`
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**

### Step 3: Wait for Deployment

- GitHub will build and deploy your site (usually takes 1-2 minutes)
- You'll see a green checkmark when it's ready
- Your site will be available at: `https://netoriibeiro.github.io/live-menu/`

## 🌐 Accessing Your Site

Once deployed, your live menu will be accessible at:

**URL**: `https://netoriibeiro.github.io/live-menu/`

## 🔧 Custom Domain (Optional)

If you want to use a custom domain:

1. In GitHub Pages settings, add your custom domain
2. Create a `CNAME` file in root with your domain name
3. Configure DNS settings with your domain provider

## ✅ Verification Checklist

Before deploying, ensure:

- [x] `index.html` is in the root directory
- [x] All paths in `index.html` are correct (css/, js/)
- [x] All paths in `app.js` are correct (data/, assets/)
- [x] Images are in `assets/images/` folders
- [x] Videos are in `assets/videos/` folder
- [ ] All images and videos are uploaded
- [ ] Tested locally with a web server

## 🧪 Testing Locally

Before pushing to GitHub, test locally:

```bash
# Navigate to project root
cd c:\Antigravity\live-menu

# Start local server (Python)
python -m http.server 8000

# OR using Node.js
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

## 📝 What Changed

### Previous Structure:
```
live-menu/
└── webapp/
    ├── index.html
    ├── css/
    ├── js/
    └── assets/
```

### New Structure:
```
live-menu/
├── index.html    ← Moved to root
├── css/          ← Moved to root
├── js/           ← Moved to root
└── assets/       ← Moved to root
```

## 🔄 Path Updates

All file paths remain the same because they were already relative:

- `css/style.css` ✅ (unchanged)
- `js/app.js` ✅ (unchanged)
- `data/menu.json` ✅ (unchanged)
- `assets/images/...` ✅ (unchanged)

## ⚠️ Important Notes

1. **GitHub Pages is case-sensitive**: Make sure file names match exactly
2. **HTTPS only**: GitHub Pages serves over HTTPS
3. **Public repository**: Your code will be publicly visible
4. **Build time**: Changes may take 1-2 minutes to appear
5. **Cache**: Use Ctrl+F5 to force refresh if changes don't appear

## 🐛 Troubleshooting

### Site shows 404
- Check that GitHub Pages is enabled
- Verify `main` branch and `/ (root)` folder are selected
- Wait 1-2 minutes for deployment

### Images not loading
- Check file paths are correct (case-sensitive)
- Verify images are committed and pushed to GitHub
- Check browser console for errors

### CSS/JS not loading
- Verify paths in `index.html` are relative (no leading `/`)
- Check files are in correct folders
- Clear browser cache

## 📊 Monitoring Deployments

To see deployment status:

1. Go to your repository
2. Click **Actions** tab
3. Look for "pages build and deployment" workflows
4. Green checkmark = successful deployment

## 🎉 Next Steps

After deployment:

1. Share your menu URL with others
2. Add images to `assets/images/` folders
3. Update menu data in `data/menu.json`
4. Customize theme in `data/theme.json`
5. Monitor for any issues

---

**Your live menu is now ready for GitHub Pages!** 🚀
