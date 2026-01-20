"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Lattice({ progress }: { progress: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.3 + progress.current * 0.8;
    meshRef.current.rotation.y = t * 0.2 + progress.current * 0.5;
    meshRef.current.position.y = Math.sin(t * 0.6) * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color="#0b1226"
        roughness={0.25}
        metalness={0.8}
        emissive="#7cf0ff"
        emissiveIntensity={0.2}
        wireframe
      />
    </mesh>
  );
}

export default function ChapterScene({
  progress,
}: {
  progress: React.MutableRefObject<number>;
}) {
  return (
    <Canvas
      dpr={[1, 1.25]}
      camera={{ position: [0, 0.6, 3.5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[2, 4, 2]} intensity={1} color="#f76f8e" />
      <Lattice progress={progress} />
    </Canvas>
  );
}
