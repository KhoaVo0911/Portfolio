import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Ẩn khi menu mobile mở
  const isMobileMenuOpen =
    typeof window !== "undefined" &&
    document.body.classList.contains("mobile-menu-open");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible || isMobileMenuOpen) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hidden md:block`}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={scrollToTop}
            className="rounded-full shadow-xl border border-black/30 dark:border-white/30 bg-white/80 dark:bg-black/70 w-12 h-12 flex items-center justify-center text-2xl transition-colors duration-200 hover:bg-gray-200/90 dark:hover:bg-gray-800/80"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19V5m0 0l-7 7m7-7l7 7"
              />
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" sideOffset={8}>
          Back to top
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default BackToTop;
