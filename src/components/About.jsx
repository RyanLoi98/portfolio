import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education, awards } from "../constants";

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
  titleSize,
  link,
}) => {
  return (
    <Tilt
      className="w-[450px] min-w-[290px]"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full xxs:h-[685px] h-[580px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-5 h-full flex flex-col justify-start">
            {/* Top Section: Icon + Titles */}
            <div className="flex flex-col items-center">
              <img
                src={icon}
                alt="U of C"
                className="xxs:w-20 w-15  xxs:h-20 h-15 object-contain xxs:mb-4 mb-2"
              />
              <h3 className="text-white xxs:text-[29px] text-[22.5px] font-bold text-center">
                {institution}
              </h3>
              <h4
                className={`text-white ${
                  titleSize || "xxs:text-[23px] text-[19px]"
                } font-semibold text-center`}
              >
                {title}
              </h4>
              <p className="text-white-100 xxs:text-[17px] text-[14px] font-medium">
                {date}
              </p>
              <p className="text-white-100 xxs:text-[17px] text-[14px] font-medium">
                GPA: {gpa}
              </p>
            </div>

            {/* Middle Section: Points */}
            <div className="xxs:mt-6 mt-3 flex">
              <ul className="list-disc ml-6 space-y-2">
                {points.map((point, index) => (
                  <li
                    key={`education-point-${index}`}
                    className="text-white-100 xxs:text-[16px] text-[13px]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Section: Coursework (only if present) */}
            {coursework.length > 0 && (
              <div className="mt-4">
                <p className="text-white-100 xxs:text-[16px] text-[13px] font-semibold ml-6">
                  Relevant coursework:
                </p>
                <ul className="list-disc ml-12 space-y-1 mt-2">
                  {coursework.map((course, index) => (
                    <li
                      key={`education-course-${index}`}
                      className="text-white-100 xxs:text-[15px] text-[12px]"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </a>
      </motion.div>
    </Tilt>
  );
};

const AwardCard = ({ index, title, icon, date, points, link }) => {
  return (
    <Tilt
      className="max-w-[275px] min-w-[275px]"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full h-[305px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-5 h-full flex flex-col justify-start">
            {/* Top Section: Icon + Titles */}
            <div className="flex flex-col items-center">
              <img
                src={icon}
                alt={title}
                className="object-contain mb-4 max-h-[100px] max-w-[175px]"
              />
              <h3 className="text-white text-[20px] font-bold text-center mb-4">
                {title}
              </h3>
              <p className="text-white-100 text-[18px] font-medium">({date})</p>
            </div>

            {/* Middle Section: Points (only if present) */}
            {points && points.length > 0 && (
              <div className="mt-6 flex-grow">
                <ul className="list-disc ml-6 space-y-2">
                  {points.map((point, index) => (
                    <li
                      key={`award-point-${index}`}
                      className="text-white-100 text-[18px]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </a>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      {/*About and Overview Titles*/}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/*Overview Text */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary xxs:text-[20px] text-[16px] max-w-3xl leading-[30px]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
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
        an opportunity you'd like to discuss, I'd love to{" "}
        <a
          href="#contact"
          className="text-blue-400 underline hover:text-blue-600"
        >
          connect
        </a>
        .
      </motion.p>

      {/*Education Title */}
      <motion.div
        variants={textVariant()}
        className="mt-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      {/*Education Cards */}
      <motion.div
        className="xxs:mt-10 mt-6 flex flex-wrap justify-center gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {education.map((education, index) => (
          <EducationCard key={education.title} index={index} {...education} />
        ))}
      </motion.div>

      {/*Awards Title */}
      <motion.div
        variants={textVariant()}
        className="mt-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className={styles.sectionHeadText}>Awards.</h2>
      </motion.div>

      {/*Awards Cards */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {awards.map((award, index) => (
          <AwardCard key={award.title} index={index} {...award} />
        ))}
      </motion.div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
