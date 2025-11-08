# Quick Start Guide

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personalize Your Stars

Edit `data/stars.json` to customize:
- **Star names** - Change the titles for each memory
- **Messages** - Write your own poetic messages
- **Positions** - Adjust 3D coordinates (x, y, z) to create custom constellation shapes
- **Images** - Add image URLs for visual memories

Example:
```json
{
  "id": 1,
  "name": "Our First Date",
  "message": "The moment everything changed...",
  "image": "/images/first-date.jpg",
  "position": { "x": -2, "y": 1, "z": -3 }
}
```

### Change Colors

Edit component files to change color schemes:
- Purple theme: `#a855f7` (in Starfield.tsx)
- Gold accent: `#ffd700` (for clicked stars)
- Customize in `globals.css` for text glow effects

### Add Audio

1. Place `ambient.mp3` in `public/audio/`
2. Place `click.mp3` in `public/audio/`
3. The app works without these (uses fallback), but adds atmosphere!

## 🎬 Scene Timing

- **Intro Scene**: 6 seconds
- **Starfield**: Interactive (until all stars clicked)
- **Finale Scene**: 10 seconds
- **Thank You**: Persistent (with restart option)

## 📱 Mobile Tips

- Optimized for touch controls
- Reduced particle count for performance
- Touch-friendly star interactions
- Responsive UI elements

## 🐛 Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Clear cache: `rm -rf .next node_modules && npm install`

### Audio Not Playing
- Check browser console for errors
- Ensure audio files are in `public/audio/`
- Fallback audio will work if files are missing

### Stars Not Clickable
- Check browser console for Three.js errors
- Ensure WebGL is supported in your browser
- Try a different browser if issues persist

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## 💡 Tips

1. **Secret Constellation**: Click stars 1, 3, 5 in order to trigger (check console)
2. **Constellation Shapes**: Adjust star positions to spell names or create shapes
3. **Performance**: Reduce star count in Starfield.tsx if needed
4. **Animations**: Customize transition timings in component files

Enjoy creating your cinematic universe! ✨
