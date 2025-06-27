import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "./ui/card";
import { experiences } from "../constants";

const fadeInVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.8, delay },
  },
});

const slideInVariant = (direction = "left", delay = 0) => ({
  hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.8, delay },
  },
});

const TimelineItem = ({ exp, idx }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  React.useEffect(() => {
    if (inView) controls.start("show");
    else controls.start("hidden");
  }, [controls, inView]);
  const isLeft = idx % 2 === 0;
  return (
    <div className="relative w-full mb-10 md:mb-16 flex flex-col md:flex-row items-center md:items-stretch">
      <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 h-full flex-col items-center z-0">
        <div className="w-1 h-full from-gray-300 to-gray-500 rounded-full bg-gradient-to-b" />
      </div>
      <div className="z-20 flex md:block md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mb-4 md:mb-0">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-black bg-white flex items-center justify-center shadow-lg mx-auto">
          <img
            src={exp.icon}
            alt={exp.company_name}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        </div>
      </div>
      <div
        className={`w-full md:flex-1 flex ${
          isLeft ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12"
        } relative z-10 justify-center`}
      >
        <motion.div
          ref={ref}
          variants={slideInVariant(isLeft ? "left" : "right", 0.1 + idx * 0.1)}
          initial="hidden"
          animate={controls}
          className="relative w-full max-w-md md:max-w-lg"
        >
          <Card
            className={`py-4 px-4 sm:py-6 sm:px-8 dark:bg-white bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border-white/10 shadow-white/20 dark:border-gray-200 dark:shadow-2xl border shadow-2xl rounded-3xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-3xl group relative overflow-hidden dark:shadow-white/20`}
          >
            <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-white/5 to-transparent dark:from-white/30 dark:to-transparent" />
            <h3 className="text-lg sm:text-xl font-bold font-beckman mb-1 uppercase text-white dark:text-black">
              {exp.title}
            </h3>
            <p className="text-white dark:text-black font-michroma mb-2 text-base sm:text-lg">
              {exp.company_name}
            </p>
            <div className="mt-4 text-xs sm:text-sm text-gray-400 dark:text-gray-600 font-rexlia text-right">
              {exp.date}
            </div>
          </Card>
        </motion.div>
      </div>
      {idx === 0 && (
        <div className="hidden md:block absolute left-0 top-0 z-0 opacity-10">
          <svg width="100" height="140">
            {Array.from({ length: 7 }).map((_, i) => (
              <circle key={i} cx={20} cy={20 + i * 18} r={4} fill="#888" />
            ))}
          </svg>
        </div>
      )}
    </div>
  );
};

const Experience = () => {
  // heading animation
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  React.useEffect(() => {
    if (headingInView) headingControls.start({ opacity: 1, y: 0 });
    else headingControls.start({ opacity: 0, y: 40 });
  }, [headingControls, headingInView]);
  return (
    <section
      id="experience"
      className="w-full min-h-screen py-16 sm:py-20 px-2 flex flex-col items-center justify-center relative bg-neutral-900 text-white overflow-x-hidden transition-colors duration-300 dark:bg-white dark:text-black"
    >
      <div
        className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full z-0"
        style={{ minHeight: "100%" }}
      />
      <div className="hidden md:block absolute right-0 bottom-0 z-0 opacity-10">
        <svg width="120" height="180">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx={100} cy={20 + i * 20} r={5} fill="#222" />
          ))}
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingControls}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 sm:mb-12 px-2 sm:px-0"
        >
          <p className="text-base sm:text-lg font-michroma text-white dark:text-black mb-2 uppercase tracking-widest text-center sm:text-left">
            What I've done so far
          </p>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black font-mova tracking-tight mb-2 text-white dark:text-black text-center sm:text-left">
            WORK EXPERIENCE
          </h2>
        </motion.div>
        <div className="flex flex-col w-full items-center">
          {experiences.map((exp, idx) => (
            <TimelineItem key={exp.title} exp={exp} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
