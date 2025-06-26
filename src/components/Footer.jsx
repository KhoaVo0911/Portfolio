import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-4 flex flex-col items-center justify-center border-t border-white/10">
      <div className="flex flex-row items-center justify-center mb-4">
        <div className="flex gap-4">
          <a
            href="https://github.com/KhoaVo0911"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-full w-12 h-12 flex items-center justify-center shadow hover:shadow-lg transition-transform hover:scale-110 text-black dark:text-white hover:text-[#6e5494]"
          >
            <Github size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/khoavo0911"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-full w-12 h-12 flex items-center justify-center shadow hover:shadow-lg transition-transform hover:scale-110 text-black dark:text-white hover:text-[#0077b5]"
          >
            <Linkedin size={26} />
          </a>
        </div>
      </div>
      <div className="text-xs text-gray-400 font-michroma tracking-widest">
        © {new Date().getFullYear()} Vo Dang Khoa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
