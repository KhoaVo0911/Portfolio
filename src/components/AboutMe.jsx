import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import KV from "../assets/KV.png";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Github, Linkedin, Facebook, Twitter, Mail } from "lucide-react";

const info = [
  { label: "Name", value: "Vo Dang Khoa" },
  { label: "Role", value: "Front End Developer" },
  { label: "Email", value: "khoavd0911@gmail.com" },
  { label: "Location", value: "Ho Chi Minh City, Vietnam" },
  { label: "Language", value: "English, Vietnamese" },
  { label: "Freelance", value: "Available" },
];

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [controls, inView]);

  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-black text-white dark:bg-white dark:text-black transition-colors duration-300"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row gap-24 max-w-6xl w-full px-12 mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex-shrink-0"
        >
          <div className="relative w-80 h-80 flex items-center justify-center group">
            <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-400 group-hover:blur-md group-hover:opacity-90 opacity-70 transition-all duration-300"></div>
            <img
              src={KV}
              alt="Avatar"
              className="relative w-80 h-80 object-cover rounded-full border-4 border-white dark:border-neutral-900 shadow-2xl group-hover:scale-105 group-hover:shadow-[0_0_40px_10px_rgba(124,58,237,0.3)] transition-transform duration-300"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex-[1.5] text-left"
        >
          <h2 className="text-4xl font-bold mb-10 font-mova tracking-widest">
            ABOUT ME
          </h2>
          <p className="text-lg mb-6 pb-4 text-white dark:text-gray-600 font-beckman">
            I am a passionate Front End Developer with a love for crafting
            beautiful and functional web experiences. I enjoy turning complex
            problems into simple, elegant solutions.
          </p>
          <div className="mb-8 flex flex-col sm:flex-row gap-6 font-rexlia">
            <div className="flex-1 flex flex-col gap-3 ">
              {info.map((item) => (
                <div key={item.label} className="flex flex-row items-start">
                  <span className="w-24 min-w-[6rem] font-semibold text-gray-300 dark:text-gray-600">
                    {item.label}:
                  </span>
                  <span className="ml-4 text-white dark:text-black break-words flex-1 min-w-0">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8 flex flex-row items-center justify-start">
            <div className="flex gap-4">
              <a
                href="https://github.com/KhoaVo0911"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-full w-12 h-12 flex items-center justify-center shadow hover:shadow-lg hover:scale-110 text-black dark:text-white hover:text-[#6e5494] transition-colors duration-200 dark:hover:text-[#6e5494]"
              >
                <Github size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/khoavo0911"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-full w-12 h-12 flex items-center justify-center shadow hover:shadow-lg  hover:scale-110 text-black dark:text-white hover:text-[#0077b5] transition-colors duration-200 dark:hover:text-[#0077b5]"
              >
                <Linkedin size={26} />
              </a>
            </div>
          </div>
          <Button
            asChild
            className="mt-2 px-8 py-3 text-lg font-bold font-rexlia border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200 shadow"
          >
            <a href="/CV_Vo Dang Khoa.pdf" download>
              Download CV
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
