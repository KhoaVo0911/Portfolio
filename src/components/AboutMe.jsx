import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import KV from "../assets/KV.png";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

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
      className="w-full min-h-screen flex items-center justify-center bg-black text-white"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row gap-24 max-w-6xl w-full px-12 mx-auto"
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex-shrink-0"
        >
          <Card className="relative w-96 h-96 group transition-transform duration-300 hover:scale-105">
            <img src={KV} alt="Avatar" className="w-full h-full object-cover" />
          </Card>
        </motion.div>
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex-[1.5] text-left"
        >
          <h2 className="text-4xl font-bold mb-12 font-mova tracking-widest">
            ABOUT ME
          </h2>
          <p className="text-lg mb-8 text-gray-300 font-beckman">
            I am a passionate Front End Developer with a love for crafting
            beautiful and functional web experiences. I enjoy turning complex
            problems into simple, elegant solutions.
          </p>
          <div className="mb-8 flex flex-col sm:flex-row gap-6 font-rexlia">
            <div className="flex-1 flex flex-col gap-3 ">
              {info.map((item) => (
                <div key={item.label} className="flex flex-row items-start">
                  <span className="w-24 min-w-[6rem] font-semibold text-gray-400">
                    {item.label}:
                  </span>
                  <span className="ml-4 text-white break-words flex-1 min-w-0">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Button
            asChild
            className="mt-2 px-8 py-3 text-lg font-bold font-rexlia"
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
