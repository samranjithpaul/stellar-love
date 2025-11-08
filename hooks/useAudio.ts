'use client';

import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

export function useAudio() {
  const ambientRef = useRef<Howl | null>(null);
  const clickSoundRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Ambient music - using a simple tone generator for demo
    // In production, replace with actual audio file
    ambientRef.current = new Howl({
      src: ['/audio/ambient.mp3'], // You'll need to add this file
      loop: true,
      volume: 0.3,
      html5: true,
      // Fallback: generate a simple ambient tone if file doesn't exist
    });

    // Click sound effect
    clickSoundRef.current = new Howl({
      src: ['/audio/click.mp3'], // You'll need to add this file
      volume: 0.5,
      html5: true,
    });

    return () => {
      ambientRef.current?.unload();
      clickSoundRef.current?.unload();
    };
  }, []);

  const playAmbient = () => {
    try {
      ambientRef.current?.play();
    } catch (error) {
      console.log('Ambient audio not available');
    }
  };

  const stopAmbient = () => {
    ambientRef.current?.stop();
  };

  const playClick = () => {
    try {
      clickSoundRef.current?.play();
    } catch (error) {
      // Fallback: create a simple tone
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    }
  };

  return { playAmbient, stopAmbient, playClick };
}
