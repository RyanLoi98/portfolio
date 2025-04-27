import { BallCanvas } from "./canvas";
import SkillCard from "./SkillCard/SkillCard";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useEffect, useState } from "react";

const Skills = () => {
  // This determines if the browser is firefox or not, the reason we need to do this
  // is because firefox allows 200 WebGL items whereas other browsers do not.
  // So for any other browser besides firefox, we must render some of the components as cards and not WebGL balls.
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes("firefox"));
  }, []);

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
          and adds as space before any capital letters. This way any words written in camel case
          is split into its component words and becomes readable. For example frontEnd becomes front End.
          Then everything is capitalized
          */}
          <h3 className="text-center text-2xl font-bold capitalize mb-6">
            {category.replace(/([A-Z])/g, " $1")}
          </h3>

          <div className="flex flex-row flex-wrap justify-center gap-10">
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
