import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ screenWidth }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

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
        object={computer.scene}

        /* Changing scale based on screen width in px eg. >= 1024 px -> 0.75 scale,  >=768 px but <1025 px -> 0.65 scale, all else 0.45 scale*/
        scale ={screenWidth >= 1024 ? 0.75 : 
                screenWidth >= 768 ? 0.60 :
                screenWidth >= 640 ? 0.50 :
                screenWidth >= 550 ? 0.45 :
                screenWidth >= 425 ? 0.35 :
                screenWidth >= 350 ? 0.30 : 
                screenWidth >= 300 ? 0.22 : 0.20}

        /*Changing positioning of the computer model based on screen width*/        
        position ={screenWidth >= 1024 ? [0, -2.5, -1.0] : 
                screenWidth >= 768 ? [0, -2.0, -0.75] :
                screenWidth >= 640 ? [0, -1.75, -0.70] :
                screenWidth >= 550 ? [0, -1.50, -0.60] :
                screenWidth >= 425 ? [0, -1.00, -0.45] : 
                screenWidth >= 350 ? [0, -0.55, -0.35] : 
                screenWidth >= 300 ? [0, -0.75, -0.35] : [0, -0.75, -0.30]}     

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
