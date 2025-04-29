import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      test
    </motion.div>
  );
};

const Work = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my technical skills and hands-on
          experience through real-world applications. Each includes a brief
          description, along with links to the GitHub repository and live demo
          where available. Together, they demonstrate my ability to solve
          complex problems, work across a range of technologies, and manage
          projects from concept to completion.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

const WrappedWork = SectionWrapper(Work, "projects");
export default WrappedWork;
