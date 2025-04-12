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

  // Control rotation state
  const rotationSpeed = 0.02; // adjust speed here
  const targetRotation = Math.PI * 2;
  let currentRotation = 0;

  // this effect ensures the model does not rotate on load, and there is a small delay
  useEffect(() => {
    if (computer && computer.scene && computerRef.current) {
      // Delay 850ms before starting rotation
      const timer = setTimeout(() => {
        setFirstRotation(true);
      }, 850);

      // Cleanup timeout if component unmounts early
      return () => clearTimeout(timer);
    }
  }, [computer]);

  // Function to Rotate the computer model once upon load
  useFrame(() => {
    if (
      firstRotation &&
      computerRef.current &&
      currentRotation < targetRotation
    ) {
      const deltaRotation = Math.min(
        rotationSpeed,
        targetRotation - currentRotation
      );
      computerRef.current.rotation.y += deltaRotation;
      currentRotation += deltaRotation;
    } else {
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
        /* Changing scale based on screen width in px eg. >= 1024 px -> 0.75 scale,  >=768 px but <1025 px -> 0.65 scale, all else 0.45 scale*/
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
        /*Changing positioning of the computer model based on screen width*/
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
    // function that sets the screen width to the screenWidth state
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up by removing the listener to avoid memory leaks
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
