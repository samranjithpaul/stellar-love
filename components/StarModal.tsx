'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface Star {
  id: number;
  name: string;
  message: string;
  image: string | null;
  position: { x: number; y: number; z: number };
}

interface StarModalProps {
  star: Star | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function StarModal({ star, isOpen, onClose }: StarModalProps) {
  if (!star) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-light text-purple-300 mb-6 text-glow-purple">
                  {star.name}
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                  {star.message}
                </p>
                {star.image && (
                  <div className="mt-6 rounded-2xl overflow-hidden">
                    <img
                      src={star.image}
                      alt={star.name}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </motion.div>

              {/* Holographic effect lines */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
