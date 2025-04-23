import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ screenWidth, onRotationComplete }) => {
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
      if (onRotationComplete) {
        onRotationComplete();
      }
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
          screenWidth >= 1025
            ? 0.75
            :screenWidth >= 1024
            ? 0.65
            : screenWidth >= 768
            ? 0.6
            : screenWidth >= 640
            ? 0.5
            : screenWidth >= 550
            ? 0.45
            : screenWidth >= 490
            ? 0.35
            : screenWidth >= 350
            ? 0.3
            : screenWidth >= 300
            ? 0.22
            : 0.2
        }
        position={
          screenWidth >= 1025
            ? [0, -2.5, -1.0]
            : screenWidth >= 1024
            ? [0, -2.5, -1.0]
            : screenWidth >= 768
            ? [0, -2.0, -0.75]
            : screenWidth >= 640
            ? [0, -1.75, -0.7]
            : screenWidth >= 550
            ? [0, -1.5, -0.6]
            : screenWidth >= 490
            ? [0, -1.45, -0.45]
            : screenWidth >= 350
            ? [0, -1.85, -0.35]
            : screenWidth >= 300
            ? [0, -1.75, -0.35]
            : [0, -0.75, -0.3]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};



const ComputersCanvas = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);

  // Effect to update the screen width on resize, this is so the computer model can scale responsively
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



  // function to display modal after rotation is complete
  const handleRotationComplete = () => {
    setShowModal(true);

    const timer = setTimeout(() => {
      setShowModal(false);
    }, 10000); // hide the modal after 10 seconds

    const hideModal = () => {
      setShowModal(false);
      clearTimeout(timer);
      window.removeEventListener("mousedown", hideModal);
      window.removeEventListener("scroll", hideModal);
    };

    window.addEventListener("mousedown", hideModal);
    window.addEventListener("scroll", hideModal);
  };



  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Canvas
        style={{ width: "100%", height: "100%" }}
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
          <Computers
            screenWidth={screenWidth}
            onRotationComplete={handleRotationComplete}
          />
        </Suspense>

        <Preload all />
      </Canvas>

      {showModal && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "12px",
            zIndex: 10,
            fontSize: "1rem",
            textAlign: "center",
            pointerEvents: "none", 
            transition: "opacity 0.5s ease", 
          }}
        >
          All 3D models on this site can be rotated — drag them around
          to try it out!
        </div>
      )}
    </div>
  );
};

export default ComputersCanvas;
