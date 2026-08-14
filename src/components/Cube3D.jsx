import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Edges } from '@react-three/drei';

function RubiksCubeModel({ position = [0, 0, 0] }) {
  const groupRef = useRef(null);

  // Slowly rotate the entire 3x3 group
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.05;
      // Gentle floating effect
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  // Calculate positions for 27 smaller cubes (3x3x3 grid)
  const cubes = useMemo(() => {
    const list = [];
    const offset = 1.05; // Spacing between cubes
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          list.push([x * offset, y * offset, z * offset]);
        }
      }
    }
    return list;
  }, []);

  return (
    <group ref={groupRef} position={position}>
      {cubes.map((pos, index) => (
        <mesh key={index} position={pos}>
          <boxGeometry args={[1, 1, 1]} />
          {/* Main material: ICA Gold with metallic sheen */}
          <meshStandardMaterial 
            color="#C8A24A" 
            metalness={0.7} 
            roughness={0.2} 
            clearcoat={1}
            envMapIntensity={2}
          />
          {/* Edges highlight in dark blue for contrast */}
          <Edges 
            linewidth={2} 
            threshold={15} 
            color="#05183B"
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Cube3D({ className = '' }) {
  return (
    <div className={`w-full h-full relative cursor-grab active:cursor-grabbing ${className}`}>
      {/* 
        Optimization: 
        - dpr={[1, 2]} limits resolution on ultra-high-res screens to maintain 60fps
        - gl={{ antialias: true }} provides smooth edges
      */}
      <Canvas 
        camera={{ position: [5, 4, 7], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#DFBF73" />
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#16489C" />
        
        <RubiksCubeModel />
        
        {/* OrbitControls allow the user to manually spin the cube */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
