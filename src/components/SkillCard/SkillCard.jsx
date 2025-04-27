import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const SkillCard = ({ index, icon, link }) => {
  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      className="w-28 h-28"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", delay: 0.2 * index, duration: 0.75 },
          },
        }}
        initial="hidden"
        animate="show"
        className="w-full h-full rounded-full bg-tertiary p-2 flex items-center justify-center shadow-card"
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src={icon}
            alt="tech-icon"
            className="w-[80%] h-[80%] object-contain"
          />
        </a>
      </motion.div>
    </Tilt>
  );
};

export default SkillCard;
