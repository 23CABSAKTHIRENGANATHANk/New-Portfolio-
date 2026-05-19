import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function DistortedSphere() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.1;
      ref.current.rotation.y += dt * 0.15;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={ref} args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#c47bff"
          distort={0.45}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#7dd3fc" />
      <pointLight position={[-5, -3, -2]} intensity={1.5} color="#c47bff" />
      <Stars radius={50} depth={50} count={1500} factor={4} fade speed={1} />
      <DistortedSphere />
    </Canvas>
  );
}
