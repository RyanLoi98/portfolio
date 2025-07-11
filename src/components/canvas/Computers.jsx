import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { styles } from "../../styles";

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
      <pointLight position={[-0.5, 2.25, 1.9]} intensity={4} />
      <spotLight
        position={[-30, 50, 10]}
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
          screenWidth >= 1100
            ? 1.0
            : screenWidth >= 850
            ? 0.85
            : screenWidth >= 701
            ? 0.8
            : screenWidth >= 640
            ? 0.7
            : screenWidth >= 500
            ? 0.55
            : screenWidth >= 400
            ? 0.5
            : screenWidth >= 320
            ? 0.4
            : 0.3
        }
        position={
          screenWidth >= 1100
            ? [0, -1.7, -1.6]
            : screenWidth >= 850
            ? [0, -1.7, -1.6]
            : screenWidth >= 701
            ? [0, -0.6, -0.9]
            : screenWidth >= 640
            ? [0, 0.0, -0.9]
            : screenWidth >= 500
            ? [0, 0.0, -0.8]
            : screenWidth >= 400
            ? [0, 0.65, -0.7]
            : screenWidth >= 320
            ? [0, 0.95, -0.55]
            : [0, 1.5, -0.55]
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
    };

    window.addEventListener("mousedown", hideModal);
  };

  return (
    <div
      className={`${styles.paddingX} 
        flex flex-col flex-grow xl:h-[600px] lg:h-[500px] md:h-[400px] h-[300px]
        w-full mx-auto justify-center items-center max-w-7xl`}
    >
      <Canvas
        style={{ width: "150%", height: "100%" }}
        frameLoop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
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
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "1rem 1rem",
            borderRadius: "12px",
            zIndex: 10,
            fontSize: "1rem",
            textAlign: "center",
            pointerEvents: "none",
            transition: "opacity 0.5s ease",
          }}
        >
          Interact with the 3D models and animated cards throughout the site by
          dragging, rotating, or hovering over them. Some cards are clickable
          and provide additional information when selected.
        </div>
      )}
    </div>
  );
};

export default ComputersCanvas;
