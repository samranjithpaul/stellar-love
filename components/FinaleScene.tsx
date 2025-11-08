'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface FinaleSceneProps {
  onComplete: () => void;
}

export default function FinaleScene({ onComplete }: FinaleSceneProps) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const [particlePositions, setParticlePositions] = useState<Array<{ x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      
      // Generate particle positions once on client mount
      const positions = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2,
      }));
      setParticlePositions(positions);
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
        const newPositions = Array.from({ length: 100 }).map(() => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 2,
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
    }, 10000); // 10 seconds for finale

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black z-50 flex items-center justify-center overflow-hidden" suppressHydrationWarning>
      {/* Animated background */}
      {mounted && (
        <div className="absolute inset-0">
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
                opacity: [0, 1, 0],
                scale: [0, 2, 0],
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

      {/* Main message */}
      <motion.div
        className="text-center px-8 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 text-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2 }}
        >
          You're My Universe
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-purple-200 font-light mt-8 text-glow-purple"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 4 }}
        >
          Every star, every moment — all orbit around you.
        </motion.p>
      </motion.div>

      {/* Floating nebula effects */}
      {mounted && Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          initial={{
            x: dimensions.width * 0.3 + (i * dimensions.width * 0.2),
            y: dimensions.height * 0.3 + (i * dimensions.height * 0.2),
            scale: 0,
          }}
          animate={{
            scale: [0, 1.5, 0],
            x: dimensions.width * 0.3 + (i * dimensions.width * 0.2) + Math.sin(Date.now() * 0.0005 + i) * 200,
            y: dimensions.height * 0.3 + (i * dimensions.height * 0.2) + Math.cos(Date.now() * 0.0005 + i) * 200,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}
