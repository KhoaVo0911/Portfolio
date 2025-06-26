import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bwMap from "../assets/bw-map.jpeg";
import KV from "../assets/KV.png";

const Hero = () => {
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
    <motion.section
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[96vh] flex items-stretch overflow-hidden"
    >
      <img
        src={bwMap}
        alt="bw map"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
        style={{ filter: "grayscale(1)" }}
      />
      <div
        className="absolute left-0 top-0 h-full w-full z-10 pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 75% 0, 45% 100%, 0 100%)",
          background: "rgba(255,255,255,0.85)",
        }}
      ></div>
      <div
        className="absolute right-0 top-0 h-full w-full z-10 pointer-events-none"
        style={{
          clipPath: "polygon(75% 0, 100% 0, 100% 100%, 45% 100%)",
          background: "rgba(0,0,0,0.88)",
        }}
      ></div>
      <img
        src={KV}
        alt="KV"
        className="absolute right-0 top-0 h-full object-contain z-10"
        style={{
          width: "85%",
          objectPosition: "100% 80%",
          clipPath: "polygon(75% 0, 100% 0, 100% 100%, 45% 100%)",
          pointerEvents: "none",
          filter: "grayscale(1)",
        }}
      />
      <div className="absolute z-10 flex flex-col justify-center h-full pl-[8vw] w-1/2 top-0 left-0">
        <h1 className="text-6xl font-black leading-tight mb-2  font-mova">
          HI, I'M
        </h1>
        <h2
          className="text-7xl font-black mb-4"
          style={{ fontFamily: "Mova, sans-serif", letterSpacing: 2 }}
        >
          KHOA (KESHI) VO
        </h2>
        <p className="text-3xl text-gray-800 max-w-lg font-beckman">
          Front End Developer
        </p>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div
          className="w-8 h-12 border-2 border-white rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
