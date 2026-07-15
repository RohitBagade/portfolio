import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";

function Blob() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!ref.current) return;
    ref.current.rotation.x = t * 0.12;
    ref.current.rotation.y = t * 0.18;
    // ease toward the pointer for a subtle interactive feel
    ref.current.position.x += (state.pointer.x * 0.4 - ref.current.position.x) * 0.04;
    ref.current.position.y += (state.pointer.y * 0.4 - ref.current.position.y) * 0.04;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.6}>
      {/* radius small enough to stay inside the frustum with margin; detail 12 = smooth silhouette */}
      <Icosahedron ref={ref} args={[1.05, 12]}>
        <MeshDistortMaterial
          color="#6ea8ff"
          emissive="#241a4d"
          roughness={0.18}
          metalness={0.55}
          distort={0.3}
          speed={1.4}
        />
      </Icosahedron>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 3, 4]} intensity={1.5} color="#b892ff" />
      <pointLight position={[-4, -2, -2]} intensity={2.4} color="#6ea8ff" />
      <Suspense fallback={null}>
        <Blob />
      </Suspense>
    </Canvas>
  );
}
