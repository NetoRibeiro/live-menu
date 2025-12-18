# 📋 Image & Video Checklist

## Required Files: 18 Total (12 images + 6 videos)

### 📁 Categories (3 images)
Place in: `assets/images/categories/`

- [ ] `breakfast.jpg` - Breakfast category image
- [ ] `dinner.jpg` - Dinner category image  
- [ ] `drinks.jpg` - Drinks category image

### 📁 Sub-Categories (3 images)
Place in: `assets/images/subcategories/`

- [ ] `appetizers.jpg` - Appetizers sub-category
- [ ] `main.jpg` - Main courses sub-category
- [ ] `dessert.jpg` - Dessert sub-category

### 📁 Products (6 images)
Place in: `assets/images/products/`

- [ ] `bruschetta.jpg` - Classic Bruschetta
- [ ] `calamari.jpg` - Crispy Calamari
- [ ] `steak.jpg` - Ribeye Steak
- [ ] `salmon.jpg` - Pan Seared Salmon
- [ ] `pasta.jpg` - Truffle Mushroom Pasta
- [ ] `cheesecake.jpg` - New York Cheesecake

### 🎥 Videos (6 videos)
Place in: `assets/videos/`

- [ ] `bruschetta.mp4` - Bruschetta preparation
- [ ] `calamari.mp4` - Calamari frying
- [ ] `steak.mp4` - Steak grilling
- [ ] `salmon.mp4` - Salmon cooking
- [ ] `pasta.mp4` - Pasta serving
- [ ] `cheesecake.mp4` - Cheesecake topping

## 📐 Image Specifications

### Images
- **Format**: JPG
- **Categories/Subcategories**: 800x600px (4:3 ratio)
- **Products**: 1200x800px (3:2 ratio)
- **Quality**: 80-90%
- **File size**: < 300KB each

### Videos
- **Format**: MP4 (H.264 codec)
- **Dimensions**: 1080x1920px (9:16 vertical - portrait mode)
- **Duration**: 5-15 seconds
- **Bitrate**: 2-4 Mbps
- **File size**: < 5MB each

## 🎨 Where to Get Images

### Option 1: Download Current Placeholders
The old Unsplash URLs are in git history:

```bash
git log -p data/menu.json
```

Then download from the URLs shown.

### Option 2: Free Stock Photos
- **Unsplash**: https://unsplash.com (search for food terms)
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

### Option 3: Your Own Photos
Take photos of your actual dishes and optimize them.

## 🚀 Quick Start

1. **Create folders** (already done ✅):
   ```
   assets/
   ├── images/
   │   ├── categories/
   │   ├── subcategories/
   │   └── products/
   └── videos/
   ```

2. **Add your images/videos** to the appropriate folders

3. **Verify file names match exactly** (case-sensitive!)

4. **Test locally**:
   ```bash
   python -m http.server 8000
   ```
   Visit: http://localhost:8000

5. **Commit and push**:
   ```bash
   git add assets/
   git commit -m "Add menu images and videos"
   git push
   ```

## ✅ Verification

After adding files, check:
- [ ] All 18 files are in correct folders
- [ ] File names match exactly (lowercase, correct extensions)
- [ ] Images display in local testing
- [ ] Videos play when scrolled into view
- [ ] File sizes are optimized

## 🔗 Current Paths in menu.json

Your `menu.json` expects these exact paths:

**Categories:**
- `assets/images/categories/breakfast.jpg`
- `assets/images/categories/dinner.jpg`
- `assets/images/categories/drinks.jpg`

**Sub-categories:**
- `assets/images/subcategories/appetizers.jpg`
- `assets/images/subcategories/main.jpg`
- `assets/images/subcategories/dessert.jpg`

**Products:**
- `assets/images/products/bruschetta.jpg`
- `assets/images/products/calamari.jpg`
- `assets/images/products/steak.jpg`
- `assets/images/products/salmon.jpg`
- `assets/images/products/pasta.jpg`
- `assets/images/products/cheesecake.jpg`

**Videos:**
- `assets/videos/bruschetta.mp4`
- `assets/videos/calamari.mp4`
- `assets/videos/steak.mp4`
- `assets/videos/salmon.mp4`
- `assets/videos/pasta.mp4`
- `assets/videos/cheesecake.mp4`

---

**Once you add these files, your menu will be complete!** 🎉
