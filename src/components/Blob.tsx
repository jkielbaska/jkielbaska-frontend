import {
  Html,
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode } from "react";

export const Blob = ({
  elements,
  allDone,
}: {
  elements: ReactNode;
  allDone: boolean;
}) => {
  return (
    <Canvas camera={{ fov: 24, position: [7, 4, 3] }}>
      <OrbitControls enabled={false} enableZoom={false} />
      <ambientLight intensity={0.1} />
      <directionalLight position={[2.5, 1.5, 0.5]} />
      <Sphere args={[1.5, 100, 250]}>
        <MeshDistortMaterial
          color={`${allDone ? "#01C137" : "#FF6000"}`}
          attach="material"
          distort={0.5}
          speed={2}
        />
        <mesh>
          <Html position={[0.4, 1.5, 0.8]}>{elements}</Html>
        </mesh>
      </Sphere>
    </Canvas>
  );
};
