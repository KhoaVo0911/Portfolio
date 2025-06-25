import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const highlightRef = useRef();

  // Highlight động quay quanh Ball liên tục
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (highlightRef.current) {
      // Quay quanh Ball theo quỹ đạo tròn
      const angle = t * 0.7; // tốc độ quay
      const x = Math.cos(angle) * 1.1;
      const y = Math.sin(angle) * 1.1;
      const z = Math.sin(angle * 0.7) * 0.5;
      highlightRef.current.position.set(x, y, z);
      highlightRef.current.material.opacity = 0.22;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 2, 2]} intensity={0.7} />
      <pointLight position={[-2, -2, 2]} intensity={0.5} color="#fff" />
      <spotLight
        position={[0, 5, 10]}
        angle={0.3}
        penumbra={1}
        intensity={0.7}
        castShadow
      />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#333"
          metalness={0.5}
          roughness={0.3}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
      <mesh ref={highlightRef} scale={[0.5, 0.5, 0.5]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#333" transparent opacity={0.22} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} position0={0} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
