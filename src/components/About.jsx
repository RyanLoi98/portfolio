import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education, services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const EducationCard = ({
  index,
  institution,
  title,
  icon,
  date,
  gpa,
  points,
  coursework,
}) => {
  return (
    <Tilt
      className="xs:w-[450px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="U of C" className="w-16 h-16 object-contain" />

          {/* Centered only headings */}
          <div className="text-center">
            <h3 className="text-white text-[29px] font-bold">{institution}</h3>
            <h3 className="text-white text-[23px] font-bold">{title}</h3>
            <p className="text-white-100 text-[17px] font-semibold mt-2">
              {date}
            </p>
            <p className="text-white-100 text-[17px] font-semibold mt-2">
              GPA: {gpa}
            </p>
          </div>

          {/* Lists section - left aligned */}
          <div className="w-full mt-4 text-left">
            {/* General points */}
            <ul className="list-disc ml-6 space-y-2">
              {points.map((point, index) => (
                <li
                  key={`education-point-${index}`}
                  className="text-white-100 text-[16px]"
                >
                  {point}
                </li>
              ))}
            </ul>

            {/* Coursework */}
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li className="text-white-100 text-[16px]">
                Relevant coursework:
              </li>
              <ul className="list-disc ml-6 space-y-1">
                {coursework.map((course, index) => (
                  <li
                    key={`education-course-${index}`}
                    className="text-white-100 text-[14px]"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const AwardCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        // fades in from the right, spring animation, 0.5 seconds delay staggered by the index
        // of each rendered component, and 0.75 second duration
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Computer Science graduate from the University of Calgary with a
        strong passion for coding, problem-solving, and building software
        solutions. I love tackling complex challenges and finding efficient,
        elegant ways to solve them. I enjoy creating web applications, mobile
        apps, and computer programs, while always aiming to write clean,
        maintainable code. I have a deep appreciation for Linux-based operating
        systems — particularly their robust permission model, powerful terminal
        environment, and overall flexibility — which is why I primarily use
        Ubuntu for all of my development work. I'm passionate about continuous
        learning, experimenting with new technologies, and improving my skills
        every day. Currently, I'm actively seeking junior software developer
        opportunities where I can apply my technical skills, grow as a
        developer, collaborate with talented teams, and contribute to
        meaningful, impactful projects. <br /> <br />
        I'm eager to bring my skills and passion to a dynamic team — if you have
        an opportunity you'd like to discuss, I'd love to connect.
      </motion.p>

      <motion.div variants={textVariant()} className="mt-10">
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <motion.div
        className="mt-20 flex flex-wrap justify-center gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {education.map((education, index) => (
          <EducationCard key={education.title} index={index} {...education} />
        ))}
      </motion.div>

      <motion.div
        className="mt-20 flex flex-wrap justify-center gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {services.map((service, index) => (
          <AwardCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
