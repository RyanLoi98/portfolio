import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

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

      {Object.entries(technologies).map(([category, items]) => (
        <motion.div
          key={category}
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="my-10"
        >
          <h3 className="text-center text-2xl font-bold capitalize mb-6">
            {category.replace(/([A-Z])/g, " $1")}
          </h3>

          <div className="flex flex-row flex-wrap justify-center gap-10">
            {items.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} link={technology.link} />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </>
  );
};

const WrappedSkills = SectionWrapper(Skills, "skills");
export default WrappedSkills;
