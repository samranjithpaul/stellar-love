'use client';

import { useState, useEffect } from 'react';
import IntroScene from '@/components/IntroScene';
import Starfield from '@/components/Starfield';
import StarModal from '@/components/StarModal';
import FinaleScene from '@/components/FinaleScene';
import ThankYouScene from '@/components/ThankYouScene';
import { useAudio } from '@/hooks/useAudio';
import starsData from '@/data/stars.json';

type Scene = 'intro' | 'starfield' | 'finale' | 'thankyou';

interface Star {
  id: number;
  name: string;
  message: string;
  image: string | null;
  position: { x: number; y: number; z: number };
}

export default function Home() {
  const [currentScene, setCurrentScene] = useState<Scene>('intro');
  const [clickedStars, setClickedStars] = useState<Set<number>>(new Set());
  const [selectedStar, setSelectedStar] = useState<Star | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [secretSequence, setSecretSequence] = useState<number[]>([]);
  const { playAmbient, stopAmbient, playClick } = useAudio();

  useEffect(() => {
    if (currentScene === 'starfield') {
      playAmbient();
    } else {
      stopAmbient();
    }
  }, [currentScene, playAmbient, stopAmbient]);

  const handleStarClick = (star: Star) => {
    if (clickedStars.has(star.id)) return;

    playClick();
    setClickedStars((prev) => new Set([...prev, star.id]));
    setSelectedStar(star);
    setIsModalOpen(true);

    // Check for secret sequence (clicking stars 1, 3, 5 in order)
    setSecretSequence((prev) => {
      const newSeq = [...prev, star.id];
      if (newSeq.length >= 3) {
        const lastThree = newSeq.slice(-3);
        if (lastThree[0] === 1 && lastThree[1] === 3 && lastThree[2] === 5) {
          console.log('Secret constellation discovered!');
          // You can add special logic here
        }
      }
      return newSeq;
    });

    // Check if all stars are clicked
    if (clickedStars.size + 1 === starsData.length) {
      setTimeout(() => {
        setCurrentScene('finale');
      }, 2000);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStar(null);
  };

  const handleIntroComplete = () => {
    setCurrentScene('starfield');
  };

  const handleFinaleComplete = () => {
    setCurrentScene('thankyou');
  };

  const handleRestart = () => {
    setCurrentScene('intro');
    setClickedStars(new Set());
    setSelectedStar(null);
    setSecretSequence([]);
  };

  return (
    <main className="fixed inset-0 overflow-hidden">
      {currentScene === 'intro' && <IntroScene onComplete={handleIntroComplete} />}
      
      {currentScene === 'starfield' && (
        <>
          <Starfield clickedStars={clickedStars} onStarClick={handleStarClick} />
          <StarModal
            star={selectedStar}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
          {/* Progress indicator */}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 glass rounded-full px-6 py-3">
            <p className="text-white/80 text-sm">
              {clickedStars.size} / {starsData.length} stars discovered
          </p>
        </div>
        </>
      )}

      {currentScene === 'finale' && <FinaleScene onComplete={handleFinaleComplete} />}
      
      {currentScene === 'thankyou' && <ThankYouScene onRestart={handleRestart} />}
      </main>
  );
}