import React from "react";
import { certifications } from "../constants/index";
import { Card } from "./ui/card";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
  const [activeIndex, setActiveIndex] = React.useState(0);
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
    <section className="w-full py-14 sm:py-20 px-2 flex flex-col items-center justify-center relative bg-white dark:bg-black transition-colors duration-300 overflow-x-hidden">
      {/* Gradient overlay cho section */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-transparent to-gray-200 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-white/10 z-0" />
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingControls}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-4xl font-black font-mova tracking-tight mb-8 sm:mb-12 text-black dark:text-white text-center md:text-left"
        >
          MY CERTIFICATIONS
        </motion.h2>
        {/* Mobile: Carousel with navigation and index */}
        <div className="block md:hidden w-full">
          <Swiper
            modules={[Navigation]}
            navigation
            speed={250}
            spaceBetween={16}
            slidesPerView={1}
            className="w-full pb-8"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onInit={(swiper) => setActiveIndex(swiper.activeIndex)}
            watchOverflow={false}
            allowTouchMove={true}
          >
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
                  className="font-bold text-base text-black dark:text-white mb-1 font-beckman cursor-help text-center break-words"
                  style={{ maxWidth: "100%" }}
                >
                  {cert.name}
                </div>
              );
              return (
                <SwiperSlide key={idx}>
                  <motion.div
                    ref={ref}
                    variants={fadeInUp(0.1 + idx * 0.1)}
                    initial="hidden"
                    animate={controls}
                  >
                    <Card className="flex flex-col items-center gap-1 p-4 rounded-2xl shadow w-[98vw] max-w-[420px] mx-auto bg-white dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 border border-gray-200 dark:border-white/10 transition-transform duration-300 group relative overflow-hidden dark:shadow-white/20">
                      <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/30 to-transparent dark:from-white/5 dark:to-transparent" />
                      {/* Số thứ tự ở góc phải trên card */}
                      <div className="absolute top-3 right-4 text-xs text-gray-400 font-bold bg-white/80 dark:bg-black/60 px-2 py-0.5 rounded-full shadow">
                        {idx + 1}/{certifications.length}
                      </div>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-b from-black/80 to-white/80 flex items-center justify-center overflow-hidden border-2 border-white/40 shadow mx-auto mb-1">
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="w-8 h-8 object-contain rounded-full bg-white group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col items-center text-center">
                        {isTruncated(idx) ? (
                          <Tooltip content={cert.name}>{nameContent}</Tooltip>
                        ) : (
                          nameContent
                        )}
                        <div className="text-xs text-gray-700 dark:text-gray-300 font-michroma mb-0.5 truncate">
                          {cert.issuer}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-rexlia mb-0.5">
                          {cert.issueDate}
                        </div>
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-black dark:text-white underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors font-michroma mt-1 mb-2 block"
                          >
                            Show credential
                          </a>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <style>{`
            .swiper-button-next, .swiper-button-prev {
              color: #000 !important;
              background: rgba(255,255,255,0.85);
              border-radius: 9999px;
              width: 36px;
              height: 36px;
              top: 50%;
              transform: translateY(-50%);
              box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
              display: flex !important;
              pointer-events: auto !important;
              opacity: 1 !important;
              z-index: 50 !important;
            }
            .swiper-button-disabled {
              opacity: 0.3 !important;
              pointer-events: auto !important;
              cursor: not-allowed !important;
            }
            .swiper-button-next:after, .swiper-button-prev:after {
              font-size: 20px !important;
              font-weight: bold;
            }
            @media (prefers-color-scheme: dark) {
              .swiper-button-next, .swiper-button-prev {
                background: rgba(24,24,24,0.85);
                color: #fff !important;
              }
            }
          `}</style>
        </div>
        {/* Desktop: Grid 2 cột */}
        <div className="hidden md:grid grid-cols-1 gap-8 md:grid-cols-2">
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
                className="font-bold text-lg text-black dark:text-white mb-1 truncate font-beckman cursor-help text-left"
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
                <Card className="flex flex-row items-center gap-6 p-7 bg-white dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 border border-gray-200 dark:border-white/10 shadow-2xl rounded-3xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-3xl group relative overflow-hidden dark:shadow-white/20 w-full">
                  <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-white/30 to-transparent dark:from-white/5 dark:to-transparent" />
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-b from-black/80 to-white/80 flex items-center justify-center overflow-hidden border-2 border-white/40 shadow-xl mx-0">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-12 h-12 object-contain rounded-full bg-white group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col items-start text-left">
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
