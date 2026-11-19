import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// ─── Materials ───────────────────────────────────────────────────────────────
function useEducationalMaterials() {
  return useMemo(() => {
    return {
      capBlack: new THREE.MeshStandardMaterial({
        color: '#1e293b',
        roughness: 0.3,
        metalness: 0.1,
      }),
      goldMetal: new THREE.MeshStandardMaterial({
        color: '#f59e0b',
        roughness: 0.2,
        metalness: 0.85,
      }),
      blueBook: new THREE.MeshStandardMaterial({
        color: '#0b3b8c',
        roughness: 0.35,
        metalness: 0.2,
      }),
      redBook: new THREE.MeshStandardMaterial({
        color: '#dc2626',
        roughness: 0.35,
        metalness: 0.2,
      }),
      paperWhite: new THREE.MeshStandardMaterial({
        color: '#f8fafc',
        roughness: 0.7,
        metalness: 0.05,
      }),
      glassCyan: new THREE.MeshPhysicalMaterial({
        color: '#38bdf8',
        transmission: 0.6,
        roughness: 0.1,
        transparent: true,
        opacity: 0.8,
      }),
    };
  }, []);
}

// ─── 3D Graduation Cap Component ─────────────────────────────────────────────
function GraduationCap({ materials }: { materials: ReturnType<typeof useEducationalMaterials> }) {
  return (
    <group position={[0, 0.7, 0]} rotation={[0.15, -0.2, 0.05]}>
      {/* Top Square Plate (Mortarboard) */}
      <mesh material={materials.capBlack} position={[0, 0.25, 0]}>
        <boxGeometry args={[1.6, 0.06, 1.6]} />
      </mesh>
      {/* Skull Cap Base */}
      <mesh material={materials.capBlack} position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.55, 0.62, 0.36, 32]} />
      </mesh>
      {/* Button on Top */}
      <mesh material={materials.goldMetal} position={[0, 0.29, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
      </mesh>
      {/* Tassel String */}
      <mesh material={materials.goldMetal} position={[0.3, 0.26, 0.3]} rotation={[0, 0, -0.4]}>
        <cylinderGeometry args={[0.012, 0.012, 0.7, 8]} />
      </mesh>
      {/* Tassel Fringe */}
      <mesh material={materials.goldMetal} position={[0.52, -0.05, 0.52]}>
        <coneGeometry args={[0.06, 0.2, 16]} />
      </mesh>
    </group>
  );
}

// ─── 3D Books Stack Component ────────────────────────────────────────────────
function BookStack({ materials }: { materials: ReturnType<typeof useEducationalMaterials> }) {
  return (
    <group position={[0, -0.6, 0]}>
      {/* Bottom Book - Blue */}
      <group position={[0, 0, 0]} rotation={[0, 0.2, 0]}>
        {/* Cover */}
        <mesh material={materials.blueBook} position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 0.2, 1.3]} />
        </mesh>
        {/* Pages */}
        <mesh material={materials.paperWhite} position={[0.04, 0, 0]}>
          <boxGeometry args={[1.68, 0.16, 1.2]} />
        </mesh>
      </group>

      {/* Middle Book - Red */}
      <group position={[-0.1, 0.22, 0.05]} rotation={[0, -0.25, 0]}>
        {/* Cover */}
        <mesh material={materials.redBook} position={[0, 0, 0]}>
          <boxGeometry args={[1.6, 0.18, 1.2]} />
        </mesh>
        {/* Pages */}
        <mesh material={materials.paperWhite} position={[0.04, 0, 0]}>
          <boxGeometry args={[1.48, 0.14, 1.1]} />
        </mesh>
      </group>
    </group>
  );
}

// ─── 3D Certified Medallion Emblem ───────────────────────────────────────────
function CertifiedMedallion({ materials }: { materials: ReturnType<typeof useEducationalMaterials> }) {
  return (
    <group position={[1.1, 0.2, 0.3]} rotation={[0.2, -0.4, 0.1]}>
      {/* Gold Ring Outer Rim */}
      <mesh material={materials.goldMetal}>
        <cylinderGeometry args={[0.45, 0.45, 0.08, 32]} />
      </mesh>
      {/* Blue Inset Badge */}
      <mesh material={materials.blueBook} position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.36, 0.36, 0.08, 32]} />
      </mesh>
      {/* Star Emblem in Center */}
      <mesh material={materials.goldMetal} position={[0, 0.07, 0]}>
        <octahedronGeometry args={[0.15]} />
      </mesh>
    </group>
  );
}

// ─── Interactive Mouse Rig Group ─────────────────────────────────────────────
function InteractiveRig({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRot = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current) return;
    const { pointer } = state;
    // Mouse hover tilt calculation
    targetRot.current.x = pointer.y * 0.25;
    targetRot.current.y = pointer.x * 0.35;

    // Smooth lerp for liquid motion
    groupRef.current.rotation.x += (targetRot.current.x - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetRot.current.y - groupRef.current.rotation.y) * 0.05;
  });

  return <group ref={groupRef}>{children}</group>;
}

// ─── Main 3D Educational Scene ───────────────────────────────────────────────
export function Hero3DEducationalScene() {
  const materials = useEducationalMaterials();

  return (
    <InteractiveRig>
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.8} floatingRange={[-0.1, 0.1]}>
        <group scale={1.3}>
          <GraduationCap materials={materials} />
          <BookStack materials={materials} />
          <CertifiedMedallion materials={materials} />
        </group>
      </Float>
    </InteractiveRig>
  );
}

export default function Hero3DEducationalCanvas() {
  return (
    <div className="w-full h-[320px] sm:h-[400px] relative rounded-3xl overflow-hidden pointer-events-auto">
      {/* Glowing backdrop halo */}
      <div className="absolute inset-0 bg-radial from-blue-500/20 via-red-500/10 to-transparent blur-2xl pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.1;
        }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.8} castShadow />
        <directionalLight position={[-5, -4, -2]} intensity={0.6} color="#38bdf8" />
        <pointLight position={[0, 2, 3]} intensity={1.2} color="#f59e0b" />
        <Environment preset="city" />

        <React.Suspense fallback={null}>
          <Hero3DEducationalScene />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
