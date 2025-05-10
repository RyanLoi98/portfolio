import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, externalLink, youtube } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
  youtube_link,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      // we are using remainder division here for the index, so if there are alot of cards the delay doesn't make loading take forever)
      variants={fadeIn("up", "spring", (index % 3) * 0.5, 0.75)}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl xl:w-[365px] lg:w-[434px] sm:w-[570px] w-full xl:min-h-[831px] lg:min-h-[760px] mb-5"
      >
        <div className="relative w-fill h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* This is For the Github link icon */}
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>

            {/* This is For the external link icon */}
            {live_site_link !== "" && (
              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2.5"
                onClick={() => window.open(live_site_link, "_blank")}
              >
                <img
                  src={externalLink}
                  alt="site"
                  className="w-3/5 h-3/5 object-contain"
                />
              </div>
            )}

            {/* This is For the youtube link icon */}
            {youtube_link !== "" && (
              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2.5"
                onClick={() => window.open(youtube_link, "_blank")}
              >
                <img
                  src={youtube}
                  alt="youtube"
                  className="w-3/5 h-3/5 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* This is For the project description */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* This is For the project tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
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
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] !opacity-100"
        >
          The projects below showcase my technical skills and practical
          experience through real-world applications. Each project includes: a
          brief description, along with links to the GitHub repository (via the
          GitHub icon), a live demo (via the external link icon) when available,
          and a demonstration video (via the YouTube icon) when available.
          Together, these projects highlight my ability to solve complex
          problems, work with a variety of technologies, and see projects
          through from initial concept to final deployment.
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
