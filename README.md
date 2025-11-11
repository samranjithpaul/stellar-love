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

## ✨ Overview

**Stellar Love** is an immersive 3D web experience where each star is a memory. It fuses astronomy and emotion using cutting-edge web technologies: **React Three Fiber**, **Three.js**, and **Framer Motion**. Each star’s position and glow reflect its real-world celestial identity and an associated message of love, pain, or hope.

---

## 🧭 Concept

This project presents a digital galaxy of personal stories:

- **Visual Layer:** Stars are mapped in 3D, inspired by their real astronomical coordinates.
- **Emotional Layer:** Each message matches the star’s meaning in astronomy and mythology.
- **Interactive Layer:** Click a star to reveal its story — together, they form a unique constellation of experiences.

It’s not just a sky — it’s a **map of love**.

---

## 🌠 The Constellation

Each star in Stellar Love is rooted in a real celestial object, with its own story and symbolism.

| Star         | Astronomical Meaning                                                                              | Symbolic Emotion                      | Project Message                                                            |
|--------------|--------------------------------------------------------------------------------------------------|---------------------------------------|----------------------------------------------------------------------------|
| **Arcturus** | K1.5III giant (orange), 36.7 ly, ancient, stable                                                 | Guidance / Rebirth                    | “You were my first sunrise after a long night — soft, bright, unforgettable.” |
| **Canopus**  | F0Ib supergiant (white), 310 ly, southern navigator                                              | Direction / Destiny                   | “We were chaos and calm — finding our way back like gravity does to stars.” |
| **Sirius**   | A1V + dwarf, 8.6 ly, brightest seen star                                                         | Devotion / Brilliance                 | “Your smile still has the power to stop whole constellations.”              |
| **Vega**     | A0V, 25 ly, Lyra’s Weaver                                                                        | Love across distance / Nostalgia      | “You made small moments feel infinite — like we stole time from the universe.” |
| **Rigel**    | B8Ia blue supergiant, 860 ly, explosive brightness                                               | Joy / Strength / Chaos                | “I still hear your laugh echoing — loud, wild, full of life.”               |
| **Betelgeuse**| M2Iab red supergiant, 642 ly, variable, nearing supernova                                       | Passion / Imperfection / Transformation| “You had that rare energy — a mix of fire and calm.”                        |
| **Altair**   | A7V, 16.7 ly, rapidly rotating, flattened                                                        | Harmony / Duality                     | “If love had a rhythm, ours was perfectly offbeat — perfectly us.”          |
| **Aldebaran**| K5III orange giant, 65 ly, warm, steady                                                          | Peace / Understanding                 | “Real love isn’t about proving — it’s about feeling. Saranghae.”            |
| **Procyon**  | F5IV-V + dwarf, 11.5 ly, herald star                                                             | Hope / Memory / Resilience            | “If memories are stars, ours are the ones that never fade.”                 |

---

## 🧩 Coordinate Mapping

Stars are mapped from real **RA/Dec** to normalized 3D coordinates for visual balance, preserving their celestial relationships.

| Star         | Real RA / Dec     | Project Coordinates `(x, y, z)`        |
|--------------|-------------------|----------------------------------------|
| Arcturus     | 14h 15m / +19°    | (4.88, 1.24, -11.48)                   |
| Canopus      | 06h 24m / -52°    | (1.8, -11.0, -7.28)                    |
| Sirius       | 06h 45m / -16°    | (4.64, -1.16, -9.36)                   |
| Vega         | 18h 37m / +38°    | (-5.12, 6.72, 10.6)                    |
| Rigel        | 05h 14m / -8°     | (2.92, -0.68, -13.84)                  |
| Betelgeuse   | 05h 55m / +7°     | (3.36, 0.52, -11.16)                   |
| Altair       | 19h 51m / +8°     | (-11.16, 1.04, 5.48)                   |
| Aldebaran    | 04h 36m / +16°    | (6.08, 1.12, -4.92)                    |
| Procyon      | 07h 39m / +5°     | (6.72, 0.36, -5.8)                     |

> 🧠 **Note:** All positions are tuned for 3D cinematic viewing. The mapping preserves relationships but spaces stars for clarity.

---

## 🧠 How Coordinates Were Created

1. **Collect Data:** Gather real RA (hours), Dec (degrees), and Distance (light years).
2. **Convert to Radians:**
   ```js
   RA_radians = (RA_hours / 24) * 2 * Math.PI;
   Dec_radians = (Dec_degrees * Math.PI) / 180;
   ```
3. **Convert to Cartesian:**
   ```js
   x = distance * Math.cos(Dec_radians) * Math.cos(RA_radians);
   y = distance * Math.sin(Dec_radians);
   z = distance * Math.cos(Dec_radians) * Math.sin(RA_radians);
   ```
4. **Normalize & Scale:** Scale so all stars fit nicely in a cube of ±15 units.
5. **Artistic Adjustments:** Rotate and tweak for cinematic composition, avoiding overlap.
6. **Review in 3D:** Ensure emotional “rightness” and balance.
7. **Save:** Results exported to `stars.json` for use in the app.

> **In essence:** Real stars give us truth, but emotion shapes the sky.

---

## 💫 Behavior & Symbolism

Each star’s appearance and animation mirrors its true character:

| Star        | Visual Behavior              | Meaning                        |
|-------------|-----------------------------|-------------------------------|
| Arcturus    | Gentle golden glow          | Warmth after darkness         |
| Canopus     | White flicker, subtle drift | Guidance / navigation         |
| Sirius      | Bright pulse                | Devotion & clarity            |
| Vega        | Soft shimmer                | Distance & memory             |
| Rigel       | Blue radiance, sharp bloom  | Energy / vitality             |
| Betelgeuse  | Red-orange pulse            | Burning passion, imperfection  |
| Altair      | Rotational shimmer          | Balance & connection          |
| Aldebaran   | Soft steady light           | Peace / maturity              |
| Procyon     | Faint twinkle before Sirius | Hope before closure           |

---

## ✨ Features

- 🎬 **Cinematic Intro Scene:** Animated particles and poetic text.
- ⭐ **Interactive 3D Starfield:** Explore and click stars for hidden messages.
- 🔗 **Dynamic Constellation Formation:** Watch stars connect as you discover them.
- 🎆 **Finale Scene:** Dramatic “You’re My Universe” reveal.
- 💝 **Thank You Scene:** Heart nebula and closing message.
- 🎭 **Secret Constellation:** Unlock secret by clicking stars 1, 3, 5 in order.
- 📱 **Mobile Responsive:** Seamless on desktop and mobile.
- 🎨 **Post-processing Effects:** Bloom, vignette, depth.
- 🎵 **Audio Support:** Ambient music and sounds, with fallback generation.
- 🎯 **Touch Controls:** Optimized for mobile interaction.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0+
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samranjithpaul/stellar-love.git
   cd stellar-love
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add audio files** (optional but recommended):
   - Place `ambient.mp3` in `public/audio/`
   - Place `click.mp3` in `public/audio/`
   > App falls back to generated audio if files are missing.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

---

## 🎨 Customization

### Personalize Star Data

Edit `data/stars.json`:

```json
{
  "id": 1,
  "name": "Your Memory Name",
  "message": "Your personalized message here...",
  "image": "/images/your-image.jpg",
  "position": { "x": -2, "y": 1, "z": -3 }
}
```

**Options:**

- ✏️ Change star names
- 💬 Write your own messages
- 📍 Adjust 3D position (x, y, z)
- 🖼️ Add custom image URLs

### Color Themes

- Main theme: `#a855f7` (purple) in `Starfield.tsx`
- Clicked star: `#ffd700` (gold)
- Text glow: Edit in `globals.css`

### Secret Constellation

- Default: stars 1, 3, 5 in order
- Change logic in `app/page.tsx`

---

## 📱 Mobile Support

- ✅ Touch controls
- ✅ Optimized particles
- ✅ Responsive layout
- ✅ Mobile rendering

---

## 🛠️ Tech Stack

| Technology                       | Purpose                          |
|-----------------------------------|----------------------------------|
| [Next.js 16](https://nextjs.org/) | React framework (SSR)            |
| [Three.js](https://threejs.org/)  | 3D rendering                     |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | React/Three.js bridge |
| [@react-three/drei](https://github.com/pmndrs/drei) | Helpers for react-three-fiber |
| [@react-three/postprocessing](https://github.com/pmndrs/postprocessing) | Effects |
| [Framer Motion](https://www.framer.com/motion/) | Animations                    |
| [TailwindCSS](https://tailwindcss.com/) | Utility CSS                   |
| [Howler.js](https://howlerjs.com/) | Audio management                |
| [TypeScript](https://www.typescriptlang.org/) | Type safety                  |

---

## 📂 Project Structure

```
stellar-love/
├── app/
│   ├── layout.tsx          # Root layout and metadata
│   ├── page.tsx            # Main page orchestration
│   └── globals.css         # Global styles
├── components/
│   ├── IntroScene.tsx      # Intro scene
│   ├── Starfield.tsx       # 3D starfield
│   ├── StarModal.tsx       # Star message modal
│   ├── FinaleScene.tsx     # Finale scene
│   └── ThankYouScene.tsx   # Thank you scene
├── data/
│   └── stars.json          # Star data
├── hooks/
│   └── useAudio.ts         # Audio hook
└── public/
    └── audio/              # Audio files
```

---

## 🎬 Scene Flow

1. **Intro Scene**  
   - 6 seconds, poetic text, floating particles  
   - Smooth fade to starfield

2. **Starfield Scene**  
   - Interactive: click stars for messages  
   - Constellation forms as stars are clicked  
   - Progress bar

3. **Finale Scene**  
   - 10 seconds, “You’re My Universe” message  
   - Cinematic overlay, transition to thank you

4. **Thank You Scene**  
   - Heart nebula, final message  
   - Option to restart

---

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/samranjithpaul/stellar-love)

Or via CLI:
```bash
npm install -g vercel
vercel
```

### Other Platforms

- **Netlify** – Automatic CI/CD
- **Railway** – Simple deployment
- **AWS Amplify** – Cloud
- **Docker** – Containerized

---

## 💡 Usage Tips

- **Secret Constellation:** Click stars 1, 3, 5 in order (see console)
- **Custom Constellations:** Adjust positions for names or shapes
- **Performance:** Lower star count in `Starfield.tsx` for low-end devices
- **Animations:** Tune timings in components
- **Audio:** Add your own files for a unique touch

---

## 🐛 Troubleshooting

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Clear cache: `rm -rf .next node_modules && npm install`

### Audio Issues

- Check browser console for errors
- Place files in `public/audio/`
- Fallback audio works if missing

### Stars Not Clickable

- Check console for Three.js errors
- Verify WebGL support
- Try another browser

### Performance

- Lower particle count in `Starfield.tsx` (see line 28)
- Disable post-processing if needed

For more, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

---

## 🤝 Contributing

Contributions welcome!

1. Fork the repository
2. `git checkout -b feature/AmazingFeature`
3. `git commit -m 'Add some AmazingFeature'`
4. `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📝 License

Personal gift — feel free to use or remix.

---

## 🙏 Acknowledgments

- Made possible by open-source libraries
- Thanks to [Three.js](https://threejs.org/) community
- Thanks to [React](https://reactjs.org/) and [Next.js](https://nextjs.org/) teams
- Inspired by the cosmos and human connection

---

## 📞 Contact & Support

- **GitHub:** [@samranjithpaul](https://github.com/samranjithpaul)
- **Email:** [samranjithpaul71@gmail.com](mailto:samranjithpaul71@gmail.com)
- **Issues:** [GitHub Issues](https://github.com/samranjithpaul/stellar-love/issues)
- **Discussions:** [GitHub Discussions](https://github.com/samranjithpaul/stellar-love/discussions)

---

<div align="center">

**Made with ❤️ and ✨ for someone special**

⭐ Star this repo if you find it helpful!

</div>
