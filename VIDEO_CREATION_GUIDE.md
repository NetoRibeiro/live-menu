# Creating Videos from Product Images

## 📸 Generated Images

I've created 6 professional product images for you. Now you need to convert them to short animated videos.

## 🎬 Option 1: Online Video Makers (Easiest)

### **Canva** (Free, No Watermark)
1. Go to https://canva.com
2. Create account (free)
3. Click "Video" → "Blank video"
4. Set size to **1080x1920** (vertical/portrait)
5. Upload your product image
6. Add simple animations:
   - **Zoom in slowly** (Ken Burns effect)
   - **Fade in/out**
   - **Subtle pan**
7. Set duration to **5-10 seconds**
8. Download as MP4

### **Kapwing** (Free)
1. Go to https://kapwing.com
2. Click "Start Creating"
3. Upload product image
4. Add animation: Zoom, Pan, or Fade
5. Set to 1080x1920 (9:16 ratio)
6. Duration: 5-10 seconds
7. Export as MP4

### **Clipchamp** (Microsoft, Free)
1. Go to https://clipchamp.com
2. Create new video (9:16 portrait)
3. Upload image
4. Add zoom/pan animation
5. Export as MP4

## 🎬 Option 2: FFmpeg (Command Line - Advanced)

If you have FFmpeg installed, you can create simple zoom animations:

```bash
# Install FFmpeg first (if not installed)
# Windows: winget install FFmpeg.FFmpeg

# Create zoom-in video from image
ffmpeg -loop 1 -i salmon_product.png -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0015,1.5)':d=250:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920" -t 8 -c:v libx264 -pix_fmt yuv420p salmon.mp4
```

## 🎬 Option 3: Use Static Images as "Videos"

For a quick solution, you can use the same images for both image and video:

1. Copy each product image 
2. Save as both `.jpg` and `.mp4` (rename)
3. The app will still work (just won't animate)

**Quick PowerShell script:**
```powershell
# This creates placeholder "videos" (actually images renamed)
Copy-Item salmon_product.png assets/images/products/salmon.jpg
Copy-Item salmon_product.png assets/videos/salmon.mp4
```

## 📋 Recommended Workflow

### For Best Results (Canva):

1. **Download the generated images** from the artifacts folder
2. **Go to Canva.com** (free account)
3. **For each product:**
   - Create 1080x1920 video
   - Upload product image
   - Add "Zoom In" animation (slow, 8 seconds)
   - Download as MP4
4. **Rename files** to match menu.json:
   - `salmon.mp4`
   - `steak.mp4`
   - `pasta.mp4`
   - `bruschetta.mp4`
   - `calamari.mp4`
   - `cheesecake.mp4`
5. **Place in** `assets/videos/` folder

## 🎨 Animation Suggestions

**For each product type:**

- **Salmon, Steak, Pasta**: Slow zoom in (8 sec)
- **Bruschetta, Calamari**: Gentle pan left-to-right (8 sec)
- **Cheesecake**: Zoom in with slight rotation (8 sec)

## 📐 Video Specifications

- **Format**: MP4 (H.264)
- **Dimensions**: 1080x1920 (9:16 vertical)
- **Duration**: 5-10 seconds
- **Frame rate**: 30 fps
- **Bitrate**: 2-4 Mbps
- **File size**: Target < 2MB per video

## ✅ Quick Test

After creating videos, test locally:

```bash
python -m http.server 8000
```

Navigate to a product and scroll - the video should fade in and autoplay!

## 🚀 Alternative: Use Stock Videos

If you prefer, you can download free stock food videos:

- **Pexels Videos**: https://pexels.com/videos
- **Pixabay Videos**: https://pixabay.com/videos
- **Coverr**: https://coverr.co

Search for: "salmon cooking", "steak grilling", "pasta serving", etc.

---

**Note:** I've generated the images for you. You just need to convert them to simple animated videos using one of the methods above!
