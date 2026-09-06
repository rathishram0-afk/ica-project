import React, { useEffect, useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Edges } from '@react-three/drei';
import useReducedMotion from '../hooks/useReducedMotion';

function RubiksCubeModel({ position = [0, 0, 0], spin = true }) {
  const groupRef = useRef(null);

  // Slowly rotate the entire 3x3 group. `useFrame` is motion the same as any
  // anime.js tween, so it stops when the visitor has asked for less of it.
  useFrame((state, delta) => {
    if (groupRef.current && spin) {
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
          {/* A metalness this high reflects an environment map, and there
              isn't one in this scene — so the gold was being suppressed to
              near-black against the navy hero. Keep a little sheen and let
              the diffuse colour actually show. (clearcoat and envMapIntensity
              were also set here; both belong to other setups and did
              nothing.) */}
          <meshStandardMaterial
            color="#C8A24A"
            metalness={0.25}
            roughness={0.35}
            emissive="#3A2E12"
            emissiveIntensity={0.35}
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
  const reduced = useReducedMotion();
  const wrapperRef = useRef(null);
  const [onScreen, setOnScreen] = useState(true);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);

  // Rendering a WebGL scene that has scrolled out of view, or that sits in a
  // background tab, is pure cost. Stop the loop instead.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0 });
    observer.observe(el);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  const live = onScreen && pageVisible;
  // 'demand' still paints once when React asks, so a still cube stays visible
  // rather than going blank.
  const frameloop = live && !reduced ? 'always' : 'demand';

  return (
    <div ref={wrapperRef} className={`w-full h-full relative cursor-grab active:cursor-grabbing ${className}`}>
      {/* 
        Optimization: 
        - dpr={[1, 2]} limits resolution on ultra-high-res screens to maintain 60fps
        - gl={{ antialias: true }} provides smooth edges
      */}
      <Canvas
        camera={{ position: [5, 4, 7], fov: 45 }}
        frameloop={frameloop}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#DFBF73" />
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#16489C" />
        
        <RubiksCubeModel spin={live && !reduced} />
        
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
