# 🌌 Stellar Love

<div align="center">

**An immersive, cinematic 3D web experience that takes you on a journey through a galaxy of memories**

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.181.0-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[Live Demo](#) • [Documentation](#getting-started) • [Report Bug](https://github.com/samranjithpaul/stellar-love/issues) • [Request Feature](https://github.com/samranjithpaul/stellar-love/issues)

</div>

---

## ✨ Features

- 🎬 **Cinematic Intro Scene** - Beautiful awakening with floating particles and poetic text
- ⭐ **Interactive 3D Starfield** - Explore a universe with clickable stars revealing personalized messages
- 🔗 **Dynamic Constellation Formation** - Watch stars connect as you discover them
- 🎆 **Finale Scene** - Reveals "You're My Universe" message with stunning visuals
- 💝 **Thank You Scene** - Heart nebula animation with final message
- 🎭 **Secret Constellation** - Hidden sequence discovery (click stars 1, 3, 5 in order)
- 📱 **Mobile Responsive** - Fully optimized for desktop and mobile devices
- 🎨 **Post-processing Effects** - Bloom, vignette, and depth effects for cinematic quality
- 🎵 **Audio Support** - Ambient music and sound effects with fallback generation
- 🎯 **Touch Controls** - Optimized touch interactions for mobile devices

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/samranjithpaul/stellar-love.git
   cd stellar-love
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add audio files** (optional but recommended)
   - Place `ambient.mp3` in `public/audio/`
   - Place `click.mp3` in `public/audio/`
   
   > The app will work without these files using fallback audio generation.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personalize Star Data

Edit `data/stars.json` to customize your experience:

```json
{
  "id": 1,
  "name": "Your Memory Name",
  "message": "Your personalized message here...",
  "image": "/images/your-image.jpg",
  "position": { "x": -2, "y": 1, "z": -3 }
}
```

**Customization Options:**
- ✏️ **Star names** - Change titles for each memory
- 💬 **Messages** - Write your own poetic messages
- 📍 **3D Positions** - Adjust coordinates (x, y, z) to create custom constellation shapes
- 🖼️ **Images** - Add image URLs for visual memories

### Color Themes

Customize colors in component files:
- **Purple theme**: `#a855f7` (in `Starfield.tsx`)
- **Gold accent**: `#ffd700` (for clicked stars)
- **Text glow**: Customize in `globals.css`

### Secret Constellation

The secret sequence is currently set to stars 1, 3, 5. Modify the logic in `app/page.tsx` to change this behavior.

## 📱 Mobile Support

- ✅ Touch controls enabled
- ✅ Optimized particle counts for performance
- ✅ Responsive UI elements
- ✅ Touch-friendly star interactions
- ✅ Mobile-optimized rendering

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework with SSR support |
| [Three.js](https://threejs.org/) | 3D graphics rendering |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | React renderer for Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | Useful helpers for react-three-fiber |
| [@react-three/postprocessing](https://github.com/pmndrs/postprocessing) | Post-processing effects |
| [Framer Motion](https://www.framer.com/motion/) | Smooth animations |
| [TailwindCSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [Howler.js](https://howlerjs.com/) | Audio management |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |

## 📂 Project Structure

```
stellar-love/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page orchestrator
│   └── globals.css         # Global styles and animations
├── components/
│   ├── IntroScene.tsx      # Introduction scene component
│   ├── Starfield.tsx       # 3D starfield component
│   ├── StarModal.tsx       # Star message modal
│   ├── FinaleScene.tsx     # Finale scene component
│   └── ThankYouScene.tsx   # Thank you scene component
├── data/
│   └── stars.json          # Star data configuration
├── hooks/
│   └── useAudio.ts         # Audio management hook
└── public/
    └── audio/              # Audio files directory
```

## 🎬 Scene Flow

1. **Intro Scene** (6 seconds)
   - Fade in with poetic text
   - Particle effects
   - Smooth transition to starfield

2. **Starfield Scene** (Interactive)
   - Explore 3D universe
   - Click stars to reveal messages
   - Watch constellation form dynamically
   - Progress indicator shows completion

3. **Finale Scene** (10 seconds)
   - Reveals "You're My Universe" message
   - Cinematic text overlay
   - Smooth transition to thank you scene

4. **Thank You Scene** (Persistent)
   - Heart nebula animation
   - Final message
   - Option to restart experience

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/samranjithpaul/stellar-love)

Or use the CLI:

```bash
npm install -g vercel
vercel
```

### Other Platforms

This project can be deployed to any platform that supports Next.js:
- **Netlify** - Automatic deployments
- **Railway** - Simple deployment
- **AWS Amplify** - Cloud deployment
- **Docker** - Containerized deployment

## 💡 Usage Tips

1. **Secret Constellation**: Click stars 1, 3, 5 in order to trigger (check console)
2. **Constellation Shapes**: Adjust star positions to spell names or create shapes
3. **Performance**: Reduce star count in `Starfield.tsx` if needed on lower-end devices
4. **Animations**: Customize transition timings in component files
5. **Audio**: Include your own ambient music and sound effects for a personalized experience

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

### Performance Issues
- Reduce particle count in `Starfield.tsx` (line 28)
- Disable post-processing effects if needed
- Check browser WebGL support

For more troubleshooting help, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created as a personal gift. Feel free to use and modify for your own purposes.

## 🙏 Acknowledgments

- Built with love using amazing open-source libraries
- Special thanks to the [Three.js](https://threejs.org/) community
- Thanks to [React](https://reactjs.org/) and [Next.js](https://nextjs.org/) teams
- Inspired by the beauty of the cosmos and human connection

## 📞 Contact & Support

- **GitHub**: [@samranjithpaul](https://github.com/samranjithpaul)
- **Email**: [samranjithpaul71@gmail.com](mailto:samranjithpaul71@gmail.com)
- **Issues**: [GitHub Issues](https://github.com/samranjithpaul/stellar-love/issues)
- **Discussions**: [GitHub Discussions](https://github.com/samranjithpaul/stellar-love/discussions)

---

<div align="center">

**Made with ❤️ and ✨ for someone special**

⭐ Star this repo if you find it helpful!

</div>
