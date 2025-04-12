import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ screenWidth }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // state to ensure the rotation only happens once
  const [firstRotation, setFirstRotation] = useState(false);

  // Ref to the computer model
  const computerRef = useRef();

  // Rotation speed and tracking current rotation
  const rotationSpeed = 0.02;
  const targetRotation = Math.PI * 2;
  const currentRotation = useRef(0);

  // this effect ensures the model does not rotate on load, and there is a small delay of 850ms
  useEffect(() => {
    if (computer && computer.scene && computerRef.current) {
      const timer = setTimeout(() => {
        setFirstRotation(true);
      }, 850);

      return () => clearTimeout(timer);
    }
  }, [computer]);

  // Function to Rotate the computer model once upon load
  useFrame(() => {
    if (
      firstRotation &&
      computerRef.current &&
      currentRotation.current < targetRotation
    ) {
      const deltaRotation = Math.min(
        rotationSpeed,
        targetRotation - currentRotation.current
      );
      computerRef.current.rotation.y += deltaRotation;
      currentRotation.current += deltaRotation;
    } else if (firstRotation) {
      setFirstRotation(false);
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={4} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        intensity={10000}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        ref={computerRef}
        object={computer.scene}
        scale={
          screenWidth >= 1024
            ? 0.75
            : screenWidth >= 768
            ? 0.6
            : screenWidth >= 640
            ? 0.5
            : screenWidth >= 550
            ? 0.45
            : screenWidth >= 425
            ? 0.35
            : screenWidth >= 350
            ? 0.3
            : screenWidth >= 300
            ? 0.22
            : 0.2
        }
        position={
          screenWidth >= 1024
            ? [0, -2.5, -1.0]
            : screenWidth >= 768
            ? [0, -2.0, -0.75]
            : screenWidth >= 640
            ? [0, -1.75, -0.7]
            : screenWidth >= 550
            ? [0, -1.5, -0.6]
            : screenWidth >= 425
            ? [0, -1.35, -0.45]
            : screenWidth >= 350
            ? [0, -1.25, -0.35]
            : screenWidth >= 300
            ? [0, -0.75, -0.35]
            : [0, -0.75, -0.3]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      frameLoop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers screenWidth={screenWidth} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
