import React from "react";
import { certifications } from "../constants/index";
import { Card } from "./ui/card";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 0.8, delay },
  },
});

const Tooltip = ({ children, content }) => (
  <TooltipPrimitive.Root delayDuration={200}>
    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        side="top"
        align="center"
        className="z-50 px-3 py-2 rounded-lg bg-black text-white text-xs font-semibold shadow-lg max-w-xs break-words"
      >
        {content}
        <TooltipPrimitive.Arrow className="fill-black" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  </TooltipPrimitive.Root>
);

const Certifications = () => {
  const headingControls = useAnimation();
  const [headingRef, headingInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  React.useEffect(() => {
    if (headingInView) headingControls.start({ opacity: 1, y: 0 });
    else headingControls.start({ opacity: 0, y: 40 });
  }, [headingControls, headingInView]);

  // hiển thị tooltip khi text bị cắt
  const nameRefs = React.useRef([]);
  const isTruncated = (idx) => {
    const el = nameRefs.current[idx];
    if (!el) return false;
    return el.scrollWidth > el.clientWidth;
  };

  return (
    <section className="w-full py-20 px-2 flex flex-col items-center justify-center relative bg-white dark:bg-black transition-colors duration-300 overflow-x-hidden">
      {/* Gradient overlay cho section */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-transparent to-gray-200 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-white/10 z-0" />
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingControls}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-black font-mova tracking-tight mb-12 text-black dark:text-white text-left"
        >
          MY CERTIFICATIONS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certifications.map((cert, idx) => {
            // Animation cho từng card
            const controls = useAnimation();
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.18,
            });
            React.useEffect(() => {
              if (inView) controls.start("show");
              else controls.start("hidden");
            }, [controls, inView]);
            // Tooltip
            const nameRef = (el) => (nameRefs.current[idx] = el);
            const nameContent = (
              <div
                ref={nameRef}
                className="font-bold text-lg text-black dark:text-white mb-1 truncate font-beckman cursor-help"
                style={{ maxWidth: "100%" }}
              >
                {cert.name}
              </div>
            );
            return (
              <motion.div
                key={idx}
                ref={ref}
                variants={fadeInUp(0.1 + idx * 0.1)}
                initial="hidden"
                animate={controls}
              >
                <Card className="flex items-center gap-6 p-7 bg-white dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 border border-gray-200 dark:border-white/10 shadow-2xl rounded-3xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-3xl group relative overflow-hidden dark:shadow-white/20">
                  <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-white/30 to-transparent dark:from-white/5 dark:to-transparent" />
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-black/80 to-white/80 flex items-center justify-center overflow-hidden border-2 border-white/40 shadow-xl ">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-12 h-12 object-contain rounded-full bg-white group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    {isTruncated(idx) ? (
                      <Tooltip content={cert.name}>{nameContent}</Tooltip>
                    ) : (
                      nameContent
                    )}
                    <div className="text-sm text-gray-700 dark:text-gray-300 font-michroma mb-1 truncate">
                      {cert.issuer}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-rexlia mb-1">
                      {cert.issueDate}
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-black dark:text-white underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors font-michroma"
                      >
                        Show credential
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
