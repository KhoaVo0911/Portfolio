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
      className="relative w-full h-[96vh] flex items-stretch overflow-hidden flex-col md:flex-row md:items-stretch"
    >
      {/* Nền bản đồ mờ phía sau */}
      <img
        src={bwMap}
        alt="bw map"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
        style={{ filter: "grayscale(1) blur(10px)" }}
      />
      {/* Mobile: Avatar tròn lớn ở giữa, text bên dưới, background blur */}
      <div className="flex md:hidden flex-col items-center justify-center h-full w-full pt-24 z-10 relative">
        <div className="relative flex items-center justify-center mb-8">
          <img
            src={KV}
            alt="KV"
            className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 object-cover rounded-full shadow-2xl border-4 border-white"
            style={{ objectPosition: "center 80%" }}
          />
          <div
            className="absolute inset-0 rounded-full blur-md bg-white/30"
            style={{ zIndex: -1 }}
          ></div>
        </div>
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black leading-tight font-mova mb-2 text-center">
          HI, I'M
        </h1>
        <h2
          className="text-4xl xs:text-5xl sm:text-6xl font-black mb-3 text-center"
          style={{ fontFamily: "Mova, sans-serif", letterSpacing: 2 }}
        >
          KHOA (KESHI) VO
        </h2>
        <p className="text-lg xs:text-xl sm:text-2xl text-gray-800 max-w-xs font-beckman text-center">
          Front End Developer
        </p>
      </div>
      <img
        src={KV}
        alt="KV"
        className="absolute right-0 top-0 h-2/5 xs:h-1/2 md:h-full object-contain z-10 hidden md:block"
        style={{
          width: "85%",
          objectPosition: "100% 80%",
          clipPath: "polygon(75% 0, 100% 0, 100% 100%, 45% 100%)",
          pointerEvents: "none",
          filter: "grayscale(1)",
        }}
      />
      {/* Desktop: Text layout cũ */}
      <div className="absolute z-10 flex flex-col justify-center h-full md:pl-[8vw] w-full md:w-1/2 top-0 left-0 items-center md:items-start text-center md:text-left px-4 pt-24 md:pt-0 md:flex md:static">
        <h1 className="hidden md:block text-6xl font-black leading-tight mb-2 font-mova">
          HI, I'M
        </h1>
        <h2
          className="hidden md:block text-7xl font-black mb-4"
          style={{ fontFamily: "Mova, sans-serif", letterSpacing: 2 }}
        >
          KHOA (KESHI) VO
        </h2>
        <p className="hidden md:block text-3xl text-gray-800 max-w-lg font-beckman">
          Front End Developer
        </p>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
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
