import { BallCanvas } from "./canvas";
import SkillCard from "./SkillCard/SkillCard";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useEffect, useState, useRef } from "react";

const Skills = () => {
  // This determines if the browser is firefox or not, the reason we need to do this
  // is because firefox allows 200 WebGL items whereas other browsers do not.
  // So for any other browser besides firefox, we must render some of the components as cards and not WebGL balls.
  const [isFirefox, setIsFirefox] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalShown, setModalShown] = useState(false);

  // Ref to track the container of the balls
  const ballsContainerRef = useRef(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes("firefox"));
  }, []);

  useEffect(() => {
    if (!isFirefox && !modalShown) {
      const observer = new IntersectionObserver(
        ([entry], observerInstance) => {
          if (entry.isIntersecting) {
            setShowModal(true);
            setModalShown(true);
  
            const hideModal = () => {
              setShowModal(false);
              window.removeEventListener("mousedown", hideModal);
  
              // VERY IMPORTANT: stop observing after hiding the modal so the modal never shows up again
              if (ballsContainerRef.current) {
                observerInstance.unobserve(ballsContainerRef.current);
              }
            };
  
            window.addEventListener("mousedown", hideModal);
          }
        },
        {
          threshold: 0.2,
        }
      );
  
      if (ballsContainerRef.current) {
        observer.observe(ballsContainerRef.current);
      }
  
      return () => {
        if (ballsContainerRef.current) {
          observer.unobserve(ballsContainerRef.current);
        }
      };
    }
  }, [isFirefox, modalShown]);
  

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={styles.sectionSubText}>What I Bring to the Table</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      {/* Display modal only for non-firefox users */}
      {!isFirefox && showModal && (
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0, 0, 0, 0.85)",
            color: "white",
            padding: "2rem 2rem",
            borderRadius: "12px",
            zIndex: 10,
            fontSize: "1.1rem",
            textAlign: "center",
            maxWidth: "600px",
            pointerEvents: "none",
            transition: "opacity 0.5s ease",
          }}
        >
          <p>
            Due to limitations in the number of WebGL items that this browser can support at one time,
            not all technical skills are displayed as interactive 3D balls. For the full experience, please use Firefox.
          </p>
          <p style={{ marginTop: "1.5rem", fontSize: "0.9rem" }}>
            (Click anywhere to close this message)
          </p>
        </div>
      )}

      {/*Mapping All the technologies (skills)*/}
      {Object.entries(technologies).map(([category, items]) => (
        <motion.div
          key={category}
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="my-10"
        >
          {/*
          This is a REGEX that takes a string (the heading of our skill from the constants
          and adds a space before any capital letters. This way any words written in camel case
          is split into its component words and becomes readable. For example frontEnd becomes front End.
          Then everything is capitalized
          */}
          <h3 className="text-center text-2xl font-bold capitalize mb-6">
            {category.replace(/([A-Z])/g, " $1")}
          </h3>

          <div
            className="flex flex-row flex-wrap justify-center gap-10"
            ref={category === "languages" || category === "frontend" ? ballsContainerRef : null}
          >
            {items.map((technology, index) => {
              if (!isFirefox) {
                // if not firefox then only render languages category and front end category as balls
                // the rest will be round skill cards
                if (category === "languages" || category === "frontend") {
                  return (
                    <div className="w-28 h-28" key={technology.name}>
                      <BallCanvas
                        icon={technology.icon}
                        link={technology.link}
                      />
                    </div>
                  );
                } else {
                  return (
                    <SkillCard
                      key={technology.name}
                      index={index}
                      icon={technology.icon}
                      link={technology.link}
                    />
                  );
                }
              }

              // if firefox render everything as balls
              return (
                <div className="w-28 h-28" key={technology.name}>
                  <BallCanvas icon={technology.icon} link={technology.link} />
                </div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </>
  );
};

const WrappedSkills = SectionWrapper(Skills, "skills");
export default WrappedSkills;
