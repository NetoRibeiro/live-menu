# 🍽️ Live Menu

A modern, visual-first digital menu application designed for restaurants. Browse categories, explore dishes, and watch TikTok-style vertical videos showcasing each item—all with smooth animations and a stunning dark theme.

![Live Menu Demo](https://img.shields.io/badge/status-production--ready-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎯 Core Functionality
- **Three-Level Navigation**: Categories → Sub-Categories → Products
- **Visual-First Design**: High-quality images and videos for every item
- **Live Videos**: TikTok-style vertical videos that autoplay on scroll
- **Themeable**: Fully customizable via JSON configuration
- **Mobile-First**: Responsive design optimized for all devices
- **Performance Optimized**: Lazy loading, efficient video observation, smooth animations

### 🎨 User Experience
- **Smooth Transitions**: 0.4s fade + slide animations between screens
- **Persistent Navigation**: Home and Back buttons always accessible
- **Dark Theme**: Modern, eye-friendly dark mode with vibrant accents
- **Touch-Optimized**: Native-feeling interactions for mobile devices

### 🎥 Video Features
- Autoplay when scrolled into view (60% visibility threshold)
- Smooth fade transition from static image to video
- Auto-pause when out of view (saves bandwidth)
- Mobile-friendly muted autoplay

## 🚀 Quick Start

### Option 1: Local Development Server

**Using Python:**
```bash
cd c:\Antigravity\live-menu
python -m http.server 8000
```

**Using Node.js:**
```bash
cd c:\Antigravity\live-menu
npx http-server -p 8000
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

Then visit: `http://localhost:8000`

### Option 2: GitHub Pages

1. Push your code to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch, `/ (root)` folder
4. Access at: `https://YOUR_USERNAME.github.io/live-menu/`

See [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md) for detailed instructions.

## 📁 Project Structure

```
live-menu/
├── index.html          # Main application
├── css/
│   └── style.css       # Styles with CSS variables
├── js/
│   └── app.js          # Application logic
├── assets/             # Static assets
│   ├── images/
│   │   ├── categories/
│   │   ├── subcategories/
│   │   └── products/
│   ├── videos/
│   ├── IMAGE_GUIDE.md
│   └── README.md
├── data/
│   ├── menu.json       # Menu data (categories, products)
│   └── theme.json      # Theme configuration
├── category_selection_screen/
├── sub-category_selection_screen/
├── product_list_screen/
└── README.md
```

## 🎨 Customization

### Theming

Edit `data/theme.json` to customize colors, fonts, and animations:

```json
{
  "theme": {
    "colors": {
      "primary": "#ff4d4d",
      "background": "#121212",
      "surface": "#1e1e1e",
      "text_primary": "#ffffff",
      "text_secondary": "#a0a0a0",
      "accent": "#ffcc00"
    },
    "fonts": {
      "heading": "'Outfit', sans-serif",
      "body": "'Inter', sans-serif"
    },
    "borderRadius": "16px",
    "animationSpeed": "0.4s"
  }
}
```

### Menu Content

Edit `data/menu.json` to add/modify categories, sub-categories, and products:

```json
{
  "categories": [
    {
      "id": "cat_dinner",
      "name": "Dinner",
      "image": "https://...",
      "subcategories": [
        {
          "id": "sub_main",
          "name": "Main",
          "image": "https://...",
          "products": [
            {
              "id": "prod_steak",
              "name": "Ribeye Steak",
              "price": "$45.00",
              "description": "Premium grass-fed ribeye...",
              "image": "https://...",
              "video": "https://..."
            }
          ]
        }
      ]
    }
  ]
}
```

## 🛠️ Technical Details

### Technologies
- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, CSS Variables, Animations
- **Vanilla JavaScript**: ES6+, Async/Await, IntersectionObserver

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- Lazy loading for images (`loading="lazy"`)
- Video preload optimization (`preload="none"`)
- IntersectionObserver for efficient video management
- GPU-accelerated CSS transitions
- Minimal DOM manipulation

## 📱 Navigation Flow

```
Home/Start
    ↓
Categories (Breakfast, Brunch, Lunch, Dinner, Drinks)
    ↓
Sub-Categories (Appetizers, Main, Dessert, etc.)
    ↓
Products (Individual dishes with details)
```

**Controls:**
- **Home Button**: Return to categories from anywhere
- **Back Button**: Navigate to previous screen

## 🎯 Design Philosophy

This app follows a **visual-first, speed-focused** approach:

1. **Immersive Content**: High-quality images and videos showcase dishes
2. **Instant Feedback**: Smooth animations and transitions
3. **Never Lost**: Clear hierarchy with persistent navigation
4. **Mobile-Optimized**: Touch-friendly, portrait-first design
5. **Performance**: Fast loading, efficient resource usage

## 🔧 Development

### Adding New Categories

1. Add category to `data/menu.json`
2. Include high-quality image URL
3. Add subcategories with products
4. Each product needs: name, price, description, image, video

### Video Requirements

- **Format**: MP4 (H.264)
- **Orientation**: Vertical (9:16 or similar)
- **Duration**: 5-15 seconds recommended
- **Size**: Optimize for web (< 5MB per video)

### Customizing Styles

All styles use CSS variables defined in `:root`. Override in `style.css`:

```css
:root {
  --primary: #your-color;
  --background: #your-color;
  /* ... */
}
```

## 📝 To-Do / Roadmap

- [ ] Add Brunch and Lunch categories
- [ ] Populate Breakfast and Drinks categories
- [ ] Add loading states during data fetch
- [ ] Implement error handling UI
- [ ] Add accessibility features (ARIA labels, keyboard nav)
- [ ] Add search/filter functionality
- [ ] Implement favorites/bookmarks
- [ ] Add dietary filters (vegan, gluten-free, etc.)

## 🐛 Known Issues

- **CORS Restriction**: Must use a local server; won't work with `file://` protocol
- **Incomplete Data**: Some categories need content (Breakfast, Drinks)
- **Missing Categories**: Brunch and Lunch not yet added

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ for restaurants who want to showcase their dishes beautifully**
