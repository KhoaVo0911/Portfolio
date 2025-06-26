import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BallCanvas from "./canvas/BallCanvas";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import bgTech from "../assets/bg_tech.jpg";

const Tech = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="px-6 sm:py-16 py-10 w-full relative z-0"
      style={{
        backgroundImage: `url(${bgTech})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(1)",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="w-full max-w-6xl mx-auto px-2 text-left mb-8"
        >
          <p className="text-[26px] text-white uppercase tracking-wider font-semibold font-mova mb-2">
            My skills
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-beckman">
            Technologies
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-10 mt-14">
          {technologies.map((technology, idx) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + idx * 0.08,
                duration: 0.6,
                type: "spring",
              }}
              className="w-28 h-28"
            >
              <BallCanvas icon={technology.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
