import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { projects } from "../constants";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const ProjectCard = ({ project, idx }) => {
  const [hovered, setHovered] = React.useState(false);
  const [showDetail, setShowDetail] = React.useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });

  // On mobile, only show overlay when showDetail is true
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const showOverlay = isMobile ? showDetail : hovered;

  React.useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Close overlay on mobile when clicking outside or pressing X
  React.useEffect(() => {
    if (!isMobile || !showDetail) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowDetail(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMobile, showDetail]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("up", "spring", 0.2 + idx * 0.15, 0.7)}
      initial="hidden"
      animate={controls}
      whileHover={!isMobile ? { scale: 1.07, zIndex: 2 } : {}}
      className="relative group flex-1 min-w-[90vw] max-w-[95vw] md:min-w-[320px] md:max-w-[420px] h-[420px] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => isMobile && !showDetail && setShowDetail(true)}
      style={{ perspective: 1200 }}
    >
      <Card className="w-full h-full flex flex-col overflow-hidden shadow-2xl border-2 border-black/10 dark:border-white/10 bg-gray-100 dark:bg-neutral-900/90 transition-transform duration-300 relative">
        <div className="relative h-2/5 sm:h-2/3 w-full overflow-hidden">
          <img
            src={project.image?.src || "/src/assets/logo.png"}
            alt={project.name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            draggable={false}
          />
          {/* Overlay tên project nhỏ ở góc dưới khi chưa show detail trên mobile */}
          {isMobile && !showDetail && (
            <div className="absolute bottom-0 left-0 w-full bg-black/60 py-2 px-4 text-white text-base font-bold font-beckman text-center">
              {project.name}
            </div>
          )}
        </div>
        {/* Desktop: mô tả ngắn dưới ảnh */}
        {!isMobile && (
          <motion.div
            className="flex-1 flex flex-col justify-center items-center p-4 sm:p-6"
            initial={{ opacity: 1 }}
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: hovered ? "absolute" : "static",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            <h4 className="text-lg sm:text-xl font-bold font-beckman text-center mb-2">
              <span className="text-black dark:text-white ">
                {project.name}
              </span>
            </h4>
            <p className="text-black dark:text-white text-center font-michroma text-sm sm:text-base">
              {project.description.length > 60
                ? project.description.slice(0, 60) + "..."
                : project.description}
            </p>
          </motion.div>
        )}
        {/* Overlay chi tiết: hover (desktop) hoặc tap (mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: showOverlay ? 1 : 0,
            scale: showOverlay ? 1 : 0.98,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-white px-4 sm:px-6 z-10"
          style={{ pointerEvents: showOverlay ? "auto" : "none" }}
        >
          {/* Nút đóng cho mobile */}
          {isMobile && showDetail && (
            <button
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 text-black flex items-center justify-center text-2xl font-bold shadow hover:bg-white"
              onClick={(e) => {
                e.stopPropagation();
                setShowDetail(false);
              }}
              aria-label="Close details"
            >
              ×
            </button>
          )}
          <h3 className="text-xl sm:text-2xl font-bold mb-2 font-beckman tracking-wider text-center drop-shadow-lg">
            <span className=" dark:text-white">{project.name}</span>
          </h3>
          <p className="text-xs sm:text-sm font-michroma mb-4 text-white text-center">
            <span className=" dark:text-white">{project.description}</span>
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4 font-rexlia">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`px-2 py-1 rounded text-xs bg-gray-100 dark:bg-neutral-800 text-black dark:text-white`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              asChild
              variant="default"
              className="px-4 py-2 text-xs sm:text-sm font-semibold font-rexlia border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200 shadow"
            >
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                Source
              </a>
            </Button>
            <Button
              asChild
              variant="default"
              className="px-4 py-2 text-xs sm:text-sm font-semibold font-rexlia border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200 shadow"
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

const Project = () => {
  // Heading animation
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  React.useEffect(() => {
    if (headingInView) headingControls.start({ opacity: 1, y: 0 });
    else headingControls.start({ opacity: 0, y: 40 });
  }, [headingControls, headingInView]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section
      id="projects"
      ref={ref}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white py-16 px-2 sm:px-4 transition-colors duration-300"
    >
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headingControls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10 sm:mb-16 w-full max-w-6xl px-2"
      >
        <h2 className="text-2xl sm:text-4xl font-bold font-mova tracking-widest text-center md:text-left mb-4">
          MY PROJECTS
        </h2>
        <p className="text-base sm:text-lg text-gray-700 font-beckman text-center md:text-left dark:text-white">
          Some of my featured personal work. Hover over each card to see
          details, source code and live demo.
        </p>
      </motion.div>
      <motion.div
        variants={staggerContainer(0.18, 0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-12 justify-center items-center w-full max-w-6xl"
      >
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
