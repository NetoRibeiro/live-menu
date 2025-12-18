# Assets Folder

This folder contains all images and videos used in the Live Menu application.

## Structure

```
assets/
├── images/
│   ├── categories/      # Category card images
│   ├── subcategories/   # Sub-category card images
│   └── products/        # Product card images
└── videos/              # Product demonstration videos
```

## Quick Reference

- **Categories**: 3 images (breakfast, dinner, drinks)
- **Sub-categories**: 3 images (appetizers, main, dessert)
- **Products**: 6 images + 6 videos

See [IMAGE_GUIDE.md](IMAGE_GUIDE.md) for detailed specifications and instructions.

## Adding New Assets

1. Place images in the appropriate subfolder
2. Update `data/menu.json` with the correct path
3. Follow naming conventions (lowercase, no spaces)
4. Optimize images before adding (< 300KB for images, < 5MB for videos)

## Image Specifications

- **Format**: JPG for images, MP4 for videos
- **Categories/Subcategories**: 800x600px
- **Products**: 1200x800px
- **Videos**: 1080x1920px (vertical)
