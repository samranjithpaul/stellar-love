'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line, OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import starsData from '@/data/stars.json';

interface Star {
  id: number;
  name: string;
  message: string;
  image: string | null;
  position: { x: number; y: number; z: number };
}

interface StarfieldProps {
  clickedStars: Set<number>;
  onStarClick: (star: Star) => void;
}

function StarField() {
  const ref = useRef<THREE.Points>(null);
  const [isMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  
  const [positions] = useMemo(() => {
    const count = isMobile ? 2500 : 5000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return [positions];
  }, [isMobile]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.025;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={isMobile ? 0.03 : 0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

function InteractiveStar({ star, isClicked, onStarClick }: { star: Star; isClicked: boolean; onStarClick: (star: Star) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (hovered && !isClicked) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group position={[star.position.x, star.position.y, star.position.z]}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onStarClick(star);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          if (typeof document !== 'undefined') {
            document.body.style.cursor = 'pointer';
          }
        }}
        onPointerOut={() => {
          setHovered(false);
          if (typeof document !== 'undefined') {
            document.body.style.cursor = 'auto';
          }
        }}
      >
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color={isClicked ? '#ffd700' : hovered ? '#c084fc' : '#a855f7'}
          emissive={isClicked ? '#ffd700' : hovered ? '#c084fc' : '#a855f7'}
          emissiveIntensity={isClicked ? 2 : hovered ? 1.5 : 1}
        />
      </mesh>
      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial
          color={isClicked ? '#ffd700' : '#a855f7'}
          transparent
          opacity={hovered ? 0.3 : 0.2}
        />
      </mesh>
    </group>
  );
}

function InteractiveStars({ clickedStars, onStarClick }: StarfieldProps) {
  return (
    <>
      {starsData.map((star: Star) => (
        <InteractiveStar
          key={star.id}
          star={star}
          isClicked={clickedStars.has(star.id)}
          onStarClick={onStarClick}
        />
      ))}
    </>
  );
}

function ConstellationLines({ clickedStars }: { clickedStars: Set<number> }) {
  const clickedStarsArray = Array.from(clickedStars);
  const lines: Array<[number, number]> = [];

  // Connect clicked stars in order
  for (let i = 0; i < clickedStarsArray.length - 1; i++) {
    const star1Id = clickedStarsArray[i];
    const star2Id = clickedStarsArray[i + 1];
    lines.push([star1Id, star2Id]);
  }

  return (
    <>
      {lines.map(([id1, id2], index) => {
        const star1 = starsData.find((s) => s.id === id1);
        const star2 = starsData.find((s) => s.id === id2);
        if (!star1 || !star2) return null;

        const points = [
          new THREE.Vector3(star1.position.x, star1.position.y, star1.position.z),
          new THREE.Vector3(star2.position.x, star2.position.y, star2.position.z),
        ];

        return (
          <Line
            key={`${id1}-${id2}-${index}`}
            points={points}
            color="#ffd700"
            lineWidth={2}
            dashed={false}
          />
        );
      })}
    </>
  );
}

function CameraController() {
  useFrame(({ camera }) => {
    // Slow camera drift for cinematic effect
    camera.position.x += Math.sin(Date.now() * 0.0001) * 0.0001;
    camera.position.y += Math.cos(Date.now() * 0.00015) * 0.0001;
  });
  return null;
}

export default function Starfield({ clickedStars, onStarClick }: StarfieldProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 bg-black">
      <Canvas
        camera={{ position: [0, 0, 5], fov: isMobile ? 80 : 75 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 1);
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffd700" />

        {/* Background stars */}
        <StarField />
        <Stars radius={100} depth={50} count={isMobile ? 1000 : 2000} factor={4} saturation={0} fade speed={1} />

        {/* Interactive stars */}
        <InteractiveStars clickedStars={clickedStars} onStarClick={onStarClick} />

        {/* Constellation lines */}
        {clickedStars.size > 1 && <ConstellationLines clickedStars={clickedStars} />}

        {/* Camera controller */}
        <CameraController />

        {/* Controls */}
        <OrbitControls
          enableZoom={!isMobile}
          enablePan={!isMobile}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
          autoRotate={false}
          autoRotateSpeed={0.5}
          touches={{
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_PAN,
          }}
        />

        {/* Post-processing */}
        <EffectComposer>
          <Bloom intensity={0.5} luminanceThreshold={0.9} />
          <Vignette eskil={false} offset={0.1} darkness={0.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
