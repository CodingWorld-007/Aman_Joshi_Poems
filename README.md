# Aman Joshi - Poetry & Reflections

A professional poetry portfolio website showcasing personal reflections and creative expressions based on life experiences and introspection.

## 🎨 Features

- **Modern & Professional Design** - Minimalist dark theme with elegant animations
- **Responsive Layout** - Fully responsive design that works on all devices
- **Poem Gallery** - Interactive modal-based poem display
- **SEO Optimized** - Complete meta tags for social sharing and search engines
- **Fast Performance** - Built with Vite for lightning-fast development and production builds
- **Vercel Ready** - Deploy seamlessly with one click to Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

1. Clone or download this project
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open `http://localhost:3000` in your browser

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your project
4. Vercel will automatically detect the Vite configuration
5. Deploy!

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Header.jsx     # Navigation header
│   ├── Hero.jsx       # Hero section
│   ├── PoemsGallery.jsx # Poems display
│   ├── PoemCard.jsx   # Individual poem card
│   ├── About.jsx      # About section
│   └── Footer.jsx     # Footer with links
├── styles/            # CSS stylesheets
│   └── global.css     # Global styles
├── data/              # Data files
│   └── poems.js       # Poems collection
├── App.jsx            # Main app component
└── main.jsx           # React entry point
```

## 🎯 Adding Your Poems

1. Open `src/data/poems.js`
2. Add your poem to the `poemsData` array:

```javascript
{
  id: 5,
  title: "Your Poem Title",
  excerpt: "First few lines or summary...",
  content: `Full poem text here
with line breaks...`,
  date: "2024",
  theme: "theme-name"
}
```

3. The poem will automatically appear in the gallery!

## 🎨 Customization

### Colors
Edit `src/styles/global.css` to change the color scheme:
```css
:root {
  --accent: #ff6b6b;      /* Change primary accent */
  --primary: #0a0a0a;     /* Change background */
  /* ... other colors */
}
```

### Content
- Update `index.html` for SEO meta tags
- Edit component files in `src/components/` for content changes
- Modify styles in `.css` files alongside components

### Social Links
Update links in `src/components/Footer.jsx` to your actual profiles

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

All poem content is copyrighted © Aman Joshi. Website code is available for personal use.

## 🔗 Connect

- **Portfolio**: [amanjoshi.vercel.app](https://amanjoshi.vercel.app)
- **LinkedIn**: [Your LinkedIn]
- **Twitter**: [Your Twitter]

## 💡 Tips

- Keep poems between 4-8 stanzas for optimal display
- Use themes like: personal growth, reflection, hope, transformation, love, resilience
- Add new poems regularly to keep the collection fresh
- Test on mobile devices before each update

---

**Crafted with passion and introspection** ✨
