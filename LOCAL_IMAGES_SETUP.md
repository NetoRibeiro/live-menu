# Local Image Setup - Summary

## ✅ What Was Done

### 1. Updated `data/menu.json`
All external image and video URLs have been replaced with local asset paths:

**Before:**
```json
"image": "https://images.unsplash.com/photo-1533089862017-5614ecb3f25c?..."
"video": "https://cdn.coverr.co/videos/coverr-slicing-bread-2524/1080p.mp4"
```

**After:**
```json
"image": "assets/images/categories/breakfast.jpg"
"video": "assets/videos/bruschetta.mp4"
```

### 2. Created Folder Structure
```
webapp/assets/
├── images/
│   ├── categories/      ← 3 category images
│   ├── subcategories/   ← 3 sub-category images
│   └── products/        ← 6 product images
└── videos/              ← 6 product videos
```

### 3. Created Documentation
- ✅ `IMAGE_GUIDE.md` - Comprehensive guide with specifications
- ✅ `README.md` - Quick reference for assets folder

## 📋 Required Files

You need to add **18 total files**:

### Images (12 files)
**Categories (3):**
- `webapp/assets/images/categories/breakfast.jpg`
- `webapp/assets/images/categories/dinner.jpg`
- `webapp/assets/images/categories/drinks.jpg`

**Sub-categories (3):**
- `webapp/assets/images/subcategories/appetizers.jpg`
- `webapp/assets/images/subcategories/main.jpg`
- `webapp/assets/images/subcategories/dessert.jpg`

**Products (6):**
- `webapp/assets/images/products/bruschetta.jpg`
- `webapp/assets/images/products/calamari.jpg`
- `webapp/assets/images/products/steak.jpg`
- `webapp/assets/images/products/salmon.jpg`
- `webapp/assets/images/products/pasta.jpg`
- `webapp/assets/images/products/cheesecake.jpg`

### Videos (6 files)
- `webapp/assets/videos/bruschetta.mp4`
- `webapp/assets/videos/calamari.mp4`
- `webapp/assets/videos/steak.mp4`
- `webapp/assets/videos/salmon.mp4`
- `webapp/assets/videos/pasta.mp4`
- `webapp/assets/videos/cheesecake.mp4`

## 🎯 Next Steps

### Option 1: Download Current Placeholder Images
The old URLs are still in git history. You can:
1. Check git history: `git log -p data/menu.json`
2. Download images from the Unsplash URLs
3. Save with the correct filenames

### Option 2: Use Your Own Photos
1. Take photos of your actual dishes
2. Resize to recommended specs (see IMAGE_GUIDE.md)
3. Name according to the list above
4. Place in appropriate folders

### Option 3: Use Stock Photos
Download from:
- Unsplash.com
- Pexels.com
- Pixabay.com

## 📐 Image Specifications

**Images:**
- Format: JPG
- Categories/Subcategories: 800x600px
- Products: 1200x800px
- File size: < 300KB

**Videos:**
- Format: MP4 (H.264)
- Dimensions: 1080x1920px (vertical)
- Duration: 5-15 seconds
- File size: < 5MB

## 🚀 Testing

Once you add the images:

1. Start local server:
   ```bash
   cd webapp
   python -m http.server 8000
   ```

2. Open: `http://localhost:8000`

3. Verify all images and videos load correctly

## 📝 Git Commit

After adding your images:

```bash
git add webapp/assets/
git commit -m "Add local images and videos for menu items"
git push
```

## ⚠️ Important Notes

- **File names are case-sensitive** on some servers (GitHub Pages)
- **Use exact names** as specified in menu.json
- **Optimize images** before adding to keep load times fast
- The app will work without images, but they won't display

---

See [IMAGE_GUIDE.md](webapp/assets/IMAGE_GUIDE.md) for detailed specifications and tips!
