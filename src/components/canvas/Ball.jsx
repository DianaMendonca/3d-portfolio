import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; // Import useFrame
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  // Update the rotation using useFrame
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const rotationSpeed = 0.02;
    props.setBallRotation([0, elapsedTime * rotationSpeed, 0]);
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} rotation={props.ballRotation}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [ballRotation, setBallRotation] = useState([0, 0, 0]);

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} setBallRotation={setBallRotation} /> {/* Pass the setBallRotation function */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
