'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface IntroSceneProps {
  onComplete: () => void;
}

export default function IntroScene({ onComplete }: IntroSceneProps) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const [particlePositions, setParticlePositions] = useState<Array<{ x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      
      // Generate particle positions once on client mount
      const positions = Array.from({ length: 50 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      }));
      setParticlePositions(positions);
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
        // Regenerate positions on resize
        const newPositions = Array.from({ length: 50 }).map(() => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: Math.random() * 2,
          duration: 3 + Math.random() * 2,
        }));
        setParticlePositions(newPositions);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onComplete();
    }, 6000); // 6 seconds for intro

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center" suppressHydrationWarning>
      {/* Particle background */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: pos.x,
                y: pos.y,
                opacity: 0,
              }}
              animate={{
                y: [null, pos.y + Math.sin(i) * 200],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Main text */}
      <motion.div
        className="text-center px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-light text-white mb-8 text-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          In a sky of a billion stars,
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-5xl font-light text-purple-300 text-glow-purple"
          
          
          
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
        >
          only one feels like home...
        </motion.h2>
      </motion.div>

      {/* Floating orbs */}
      {mounted && Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full bg-purple-500/20 blur-3xl"
          initial={{
            x: dimensions.width * 0.2 + (i * dimensions.width * 0.15),
            y: dimensions.height * 0.2 + (i * dimensions.height * 0.15),
            scale: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            x: dimensions.width * 0.2 + (i * dimensions.width * 0.15) + Math.sin(Date.now() * 0.001 + i) * 100,
            y: dimensions.height * 0.2 + (i * dimensions.height * 0.15) + Math.cos(Date.now() * 0.001 + i) * 100,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
}
