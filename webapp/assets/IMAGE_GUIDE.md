# Image Organization Guide

## 📁 Folder Structure

Your assets are now organized in the following structure:

```
webapp/assets/
├── images/
│   ├── categories/      # Category images (3 files)
│   ├── subcategories/   # Sub-category images (3 files)
│   └── products/        # Product images (6 files)
└── videos/              # Product videos (6 files)
```

## 📋 Required Images

### Categories (3 images)
Place these in `webapp/assets/images/categories/`:

- ✅ `breakfast.jpg` - Breakfast category image
- ✅ `dinner.jpg` - Dinner category image
- ✅ `drinks.jpg` - Drinks category image

### Sub-Categories (3 images)
Place these in `webapp/assets/images/subcategories/`:

- ✅ `appetizers.jpg` - Appetizers sub-category
- ✅ `main.jpg` - Main courses sub-category
- ✅ `dessert.jpg` - Dessert sub-category

### Products (6 images)
Place these in `webapp/assets/images/products/`:

- ✅ `bruschetta.jpg` - Classic Bruschetta
- ✅ `calamari.jpg` - Crispy Calamari
- ✅ `steak.jpg` - Ribeye Steak
- ✅ `salmon.jpg` - Pan Seared Salmon
- ✅ `pasta.jpg` - Truffle Mushroom Pasta
- ✅ `cheesecake.jpg` - New York Cheesecake

### Videos (6 videos)
Place these in `webapp/assets/videos/`:

- ✅ `bruschetta.mp4` - Bruschetta preparation
- ✅ `calamari.mp4` - Calamari frying
- ✅ `steak.mp4` - Steak grilling
- ✅ `salmon.mp4` - Salmon cooking
- ✅ `pasta.mp4` - Pasta serving
- ✅ `cheesecake.mp4` - Cheesecake topping

## 📐 Image Specifications

### Recommended Sizes

**Category Images:**
- Dimensions: 800x600px (4:3 ratio)
- Format: JPG
- Quality: 80-90%
- File size: < 200KB

**Sub-Category Images:**
- Dimensions: 800x600px (4:3 ratio)
- Format: JPG
- Quality: 80-90%
- File size: < 200KB

**Product Images:**
- Dimensions: 1200x800px (3:2 ratio)
- Format: JPG
- Quality: 85-95%
- File size: < 300KB

**Product Videos:**
- Dimensions: 1080x1920px (9:16 vertical)
- Format: MP4 (H.264 codec)
- Duration: 5-15 seconds
- Bitrate: 2-4 Mbps
- File size: < 5MB per video

## 🎨 Image Guidelines

### Photography Tips
1. **Lighting**: Use natural light or soft artificial lighting
2. **Background**: Clean, simple backgrounds (dark or neutral)
3. **Composition**: Center the dish, fill the frame
4. **Focus**: Sharp focus on the main dish
5. **Styling**: Professional food styling recommended

### Video Guidelines
1. **Orientation**: Vertical (portrait mode)
2. **Content**: Show preparation, cooking, or serving
3. **Motion**: Smooth, steady shots (use tripod/stabilizer)
4. **Duration**: Keep it short and engaging (5-15 sec)
5. **Audio**: Not needed (videos play muted)

## 🔄 How to Add Your Images

### Option 1: Download from Current URLs
You can download the current placeholder images from Unsplash:

1. Open the old `menu.json` (check git history)
2. Copy each image URL
3. Download and save with the correct filename
4. Place in the appropriate folder

### Option 2: Use Your Own Photos
1. Take photos of your actual dishes
2. Edit/resize to recommended specifications
3. Name according to the list above
4. Place in the appropriate folders

### Option 3: Use Stock Photos Temporarily
1. Download from free stock photo sites:
   - Unsplash.com
   - Pexels.com
   - Pixabay.com
2. Search for relevant food terms
3. Download and rename appropriately

## 🛠️ Image Optimization Tools

### Online Tools
- **TinyPNG** (tinypng.com) - Compress images
- **Squoosh** (squoosh.app) - Resize and optimize
- **CloudConvert** (cloudconvert.com) - Format conversion

### Desktop Tools
- **Adobe Photoshop** - Professional editing
- **GIMP** - Free alternative to Photoshop
- **IrfanView** - Batch resize and convert

### Video Tools
- **HandBrake** - Free video compression
- **FFmpeg** - Command-line video processing
- **Adobe Premiere** - Professional editing

## 📝 Naming Convention

Always use:
- **Lowercase** letters
- **No spaces** (use hyphens if needed)
- **Descriptive** names matching the product
- **Correct extensions** (.jpg, .mp4)

✅ Good: `ribeye-steak.jpg`, `pasta.mp4`
❌ Bad: `IMG_1234.jpg`, `Video 1.MP4`

## 🚀 Quick Start Commands

### Create placeholder images (for testing)
If you want to create placeholder images quickly for testing:

```bash
# This will create empty files - replace with real images later
cd webapp/assets/images/categories
echo. > breakfast.jpg
echo. > dinner.jpg
echo. > drinks.jpg

cd ../subcategories
echo. > appetizers.jpg
echo. > main.jpg
echo. > dessert.jpg

cd ../products
echo. > bruschetta.jpg
echo. > calamari.jpg
echo. > steak.jpg
echo. > salmon.jpg
echo. > pasta.jpg
echo. > cheesecake.jpg
```

## ✅ Verification Checklist

Before deploying, ensure:

- [ ] All category images are present
- [ ] All sub-category images are present
- [ ] All product images are present
- [ ] All product videos are present
- [ ] Images are optimized (< 300KB each)
- [ ] Videos are optimized (< 5MB each)
- [ ] File names match exactly (case-sensitive on some servers)
- [ ] All images display correctly in local testing

## 🔗 Path Reference

The paths in `menu.json` are relative to the `webapp/` folder:

```
webapp/
├── index.html
├── assets/
│   ├── images/...
│   └── videos/...
└── data/
    └── menu.json
```

When `menu.json` references `assets/images/categories/dinner.jpg`, it resolves to:
`webapp/assets/images/categories/dinner.jpg`

---

**Note:** The app will still work with missing images, but they won't display. Make sure to add all required images before deploying to production!
