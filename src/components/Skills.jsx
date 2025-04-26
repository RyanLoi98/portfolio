import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

const Skills = () => {
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

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
            <div className = "w-28 h-28" key={technology.name}> 
                <BallCanvas icon={technology.icon}/>
            </div>

        ))}
      </div>
    </>
  );
};

const WrappedSkills = SectionWrapper(Skills, "skills");
export default WrappedSkills;
