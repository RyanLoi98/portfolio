import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { github, linkedin } from "../assets";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    // this stops the browser from resetting
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_d1g4esg",
        "template_d6118bh",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          time: new Date().toLocaleString("en-US", {
            hour12: true,
            timeZoneName: "short",
          }),
        },
        "13SQdcFxuFdiWmF8D"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thanks for your message, I will get back to you as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong... Email not sent.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Adding in some Social Links */}
        <div className="flex gap-8 mt-4">
          {/* Github */}
          <div
            style={{ backgroundColor: "#1b143d" }}
            className="text-white shadow-md outline-none shadow-primary w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() =>
              window.open("https://github.com/RyanLoi98", "_blank")
            }
          >
            <img
              src={github}
              alt="Github"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>

          {/* LinkedIn */}
          <div
            style={{ backgroundColor: "#1b143d" }}
            className="text-white shadow-md outline-none shadow-primary w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() =>
              window.open("https://www.linkedin.com/in/ryanloidev/", "_blank")
            }
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name Field */}
          <label className="flex flex-col">
            <span className="text-white mb-4">
              <span className="font-medium">Your Name</span>{" "}
              <span className="font-normal text-gray-300">(required)</span>
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Email Field */}
          <label className="flex flex-col">
            <span className="text-white mb-4">
              <span className="font-medium">Your Email</span>{" "}
              <span className="font-normal text-gray-300">(required)</span>
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Message Field */}
          <label className="flex flex-col">
            <span className="text-white mb-4">
              <span className="font-medium">Message</span>{" "}
              <span className="font-normal text-gray-300">(required)</span>
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            style={{ backgroundColor: "#1b143d" }}
            className="py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// creating a named constant enables fast refresh to work on react
const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;
