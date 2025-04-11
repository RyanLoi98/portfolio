import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor='black' />
      <pointLight intensity={4} />
      <spotLight position = {[-20, 50, 10]}
      angle={0.12}
      intensity={10000}
      penumbra={1}
      castShadow
      shadow-mapSize={1024}/>
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -0.65] : [0, -2.5, -1.0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);  

  useEffect( () => {
    // Event listener that checks if the screen size is less than 850px
    const mediaQuery = window.matchMedia('(max-width: 850px)');

    // .matches is a property of the MediaQueryList object that tells you if the media query you wrote is currently true or false
    // This sets the initial state of isMobile to true or false
    setIsMobile(mediaQuery.matches);

    // callback function that will be called whenever the screen size changes
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
     }

     // add the callback function as an even listener to changes in the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

     // cleanup function to prevent memory leaks
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  
  return (
    <Canvas
      frameLoop='demand'
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
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
