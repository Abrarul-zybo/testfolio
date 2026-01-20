"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingCore({ progress }: { progress: React.MutableRefObject<number> }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.2 + progress.current * Math.PI * 0.6;
      coreRef.current.rotation.x = t * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.35;
      ringRef.current.position.y = Math.sin(t * 0.8) * 0.25;
    }

    const camera = state.camera as THREE.PerspectiveCamera;
    camera.position.x = THREE.MathUtils.lerp(0, 1.4, progress.current);
    camera.position.y = THREE.MathUtils.lerp(0.6, 1.1, progress.current);
    camera.position.z = THREE.MathUtils.lerp(4.2, 3.2, progress.current);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshStandardMaterial
            color="#0c1224"
            roughness={0.2}
            metalness={0.6}
            emissive="#7cf0ff"
            emissiveIntensity={0.15}
          />
        </mesh>
      </Float>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.08, 12, 64]} />
        <meshStandardMaterial color="#f76f8e" roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
        <circleGeometry args={[6, 64]} />
        <meshStandardMaterial color="#05070d" roughness={0.8} />
      </mesh>
    </group>
  );
}

export default function HeroScene({
  progress,
}: {
  progress: React.MutableRefObject<number>;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 1, 4.2], fov: 45 }}
    >
      <color attach="background" args={["#06080f"]} />
      <fog attach="fog" args={["#06080f", 6, 14]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[4, 6, 2]} intensity={1.2} color="#7cf0ff" />
      <pointLight position={[-4, 2, -2]} intensity={0.8} color="#f76f8e" />
      <FloatingCore progress={progress} />
      <Environment preset="city" />
    </Canvas>
  );
}
