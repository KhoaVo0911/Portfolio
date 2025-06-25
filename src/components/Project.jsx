import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { projects } from "../constants";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const ProjectCard = ({ project, idx }) => {
  const [hovered, setHovered] = React.useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });

  React.useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("up", "spring", 0.2 + idx * 0.15, 0.7)}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.07, zIndex: 2 }}
      className="relative group flex-1 min-w-[320px] max-w-[420px] h-[420px] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: 1200 }}
    >
      <Card className="w-full h-full flex flex-col overflow-hidden shadow-2xl border-2 border-black/10 bg-white/90 transition-transform duration-300 relative">
        <div className="relative h-2/3 w-full overflow-hidden">
          <img
            src={project.image?.src || "/src/assets/logo.png"}
            alt={project.name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            draggable={false}
          />
        </div>
        <motion.div
          className="flex-1 flex flex-col justify-center items-center p-6"
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
          <h4 className="text-xl font-bold font-beckman text-center mb-2">
            {project.name}
          </h4>
          <p className="text-gray-600 text-center font-michroma">
            {project.description.length > 60
              ? project.description.slice(0, 60) + "..."
              : project.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-white px-6 z-10"
          style={{ pointerEvents: hovered ? "auto" : "none" }}
        >
          <h3 className="text-2xl font-bold mb-2 font-beckman tracking-wider text-center drop-shadow-lg">
            {project.name}
          </h3>
          <p className="text-sm font-michroma mb-4 text-gray-200 text-center">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-4 font-rexlia">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`px-2 py-1 rounded text-xs ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <Button
              asChild
              variant="default"
              className="px-4 py-2 text-sm font-semibold font-rexlia"
            >
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                Source
              </a>
            </Button>
            <Button
              asChild
              variant="default"
              className="px-4 py-2 text-sm font-semibold font-rexlia"
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
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-20 px-4"
    >
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headingControls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 w-full max-w-6xl px-2"
      >
        <h2 className="text-4xl font-bold font-mova tracking-widest text-left mb-4">
          MY PROJECTS
        </h2>
        <p className="text-lg text-gray-700 font-beckman text-left">
          Some of my featured personal work. Hover over each card to see
          details, source code and live demo.
        </p>
      </motion.div>
      <motion.div
        variants={staggerContainer(0.18, 0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-wrap gap-12 justify-center items-center w-full max-w-6xl"
      >
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
