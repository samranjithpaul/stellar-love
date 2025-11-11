'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ThankYouSceneProps {
  onRestart?: () => void;
}

export default function ThankYouScene({ onRestart }: ThankYouSceneProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const [particlePositions, setParticlePositions] = useState<Array<{ x: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      
      // Generate particle positions once on client mount
      const positions = Array.from({ length: 30 }).map(() => ({
        x: Math.random() * window.innerWidth,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 3,
      }));
      setParticlePositions(positions);
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
        const newPositions = Array.from({ length: 30 }).map(() => ({
          x: Math.random() * window.innerWidth,
          delay: Math.random() * 5,
          duration: 5 + Math.random() * 3,
        }));
        setParticlePositions(newPositions);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black z-50 flex items-center justify-center overflow-hidden" suppressHydrationWarning>
      {/* Heart nebula effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Heart shape made of particles */}
          <div className="relative w-64 h-64">
            {Array.from({ length: 50 }).map((_, i) => {
              // Use a classic parametric heart curve so particles form a real heart
              // Parametric: x = 16 sin^3(t), y = 13 cos(t) - 5 cos(2t) - 2 cos(3t) - cos(4t)
              const t = (i / 50) * Math.PI * 2;
              const hx = 16 * Math.pow(Math.sin(t), 3);
              const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

              // scale and flip Y so the heart appears upright and sized to fit the container
              const scale = 3.2; // adjust for desired size
              const x = hx * scale;
              const y = -hy * scale; // negate so positive goes down in DOM coordinates

              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-pink-400 rounded-full"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (i / 50) * 2,
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Text content */}
      <motion.div
        className="text-center px-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-light text-white mb-6 text-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          For you, my universe
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-purple-200 font-light text-glow-purple"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          forever and always
        </motion.p>

        {onRestart && (
          <motion.button
            onClick={onRestart}
            className="mt-12 px-8 py-4 glass rounded-full text-white hover:bg-white/10 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
          >
            Experience Again
          </motion.button>
        )}
      </motion.div>

      {/* Floating particles */}
      {mounted && particlePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          initial={{
            x: pos.x,
            y: dimensions.height + 50,
            opacity: 0,
          }}
          animate={{
            y: -50,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            delay: pos.delay,
          }}
        />
      ))}
    </div>
  );
}
