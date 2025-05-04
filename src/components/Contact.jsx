import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { github, linkedin } from "../assets";

// these are the keys for email.js, it comes from our .env file
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Google Recaptcha
import ReCAPTCHA from "react-google-recaptcha";
const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const Contact = () => {
  const formRef = useRef();
  const recaptchaRef = useRef(null);

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

  const handleSubmit = async (e) => {
    // this stops the browser from resetting
    e.preventDefault();
    setLoading(true);

    try {
      // Manually execute reCAPTCHA when the user submits
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset(); // Reset the reCAPTCHA widget after successful validation

      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            "g-recaptcha-response": token,
            time: new Date().toLocaleString("en-US", {
              hour12: true,
              timeZoneName: "short",
            }),
          },
          publicKey
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
    } catch (error) {
      setLoading(false);
      console.error("Recaptcha error:", error);
      alert(
        "Google reCAPTCHA verification failed. Please try again and ensure you have a valid email address and message."
      );
    }
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
              required
              minLength={2}
              maxLength={50}
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
              required
              pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
              maxLength={320}
              className="bg-tertiary py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Please enter a valid email address in the format: name@example.com"
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
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
              required
              maxLength={1500}
              minLength={10}
              className="bg-tertiary py-4 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            <p className="text-sm text-gray-400 text-right">
              {form.message.length}/1,500 characters
            </p>
          </label>

          <ReCAPTCHA
            sitekey={recaptchaSiteKey}
            size="invisible"
            ref={recaptchaRef}
          />

          <button
            type="submit"
            className="py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer transform transition active:scale-90 hover:scale-100 bg-[#1b143d] hover:bg-[#2c1d5c]"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* reCAPTCHA badge message which is required when you make the reCAPTCHA badge invisible 
        Source: https://developers.google.com/recaptcha/docs/faq#id-like-to-hide-the-recaptcha-badge.-what-is-allowed*/}
        <p className="text-white mt-4 text-sm">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-500"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" className="text-blue-500">
            Terms of Service
          </a>{" "}
          apply.
        </p>
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
