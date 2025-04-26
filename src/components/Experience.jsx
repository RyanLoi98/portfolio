import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { experiences, volunteering } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant,  fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const VolunteeringCard = ({ index, Organization, icon, Position, points, link }) => {
  return (
    <Tilt
      className="w-[475px]"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full h-[580px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
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
                alt={Organization}
                className="object-contain xs:mb-4 mb-3 max-h-[100px] max-w-[175px]"
              />
              <h3 className="text-white xs:text-[30px] xxs:text-[25px] text-[20px] font-bold text-center xs:mb-4 mb-2">
                {Organization}
              </h3>
              <p className="text-white-100 xs:text-[21px] xxs:text-[19px] text-[17px] text-center font-medium">{Position}</p>
            </div>

            {/* Middle Section: Points (only if present) */}
            {points && points.length > 0 && (
              <div className="xs:mt-6 mt-4 flex-grow">
                <ul className="list-disc ml-6 space-y-2">
                  {points.map((point, index) => (
                    <li
                      key={`volunteering-point-${index}`}
                      className="text-white-100 xs:text-[18px] xxs:text-[15px] text-[14px]"
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

const Experience = () => {
  return (
    <>
      {/* Work Experience Timeline */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

      {/*Volunteering Section*/}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-30"
      >
        <h2 className={styles.sectionHeadText}>Volunteering.</h2>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {volunteering.map((volunteer, index) => (
          <VolunteeringCard
            key={`${volunteer.Organization}-${index}`}
            index={index}
            {...volunteer}
          />
        ))}
      </motion.div>
    </>
  );
};

const WrappedExperience = SectionWrapper(Experience, "work");

export default WrappedExperience;
