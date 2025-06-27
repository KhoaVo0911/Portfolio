import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { X, Github, Linkedin, Facebook, Mail } from "lucide-react";
import ThemeToggle from "./ui/theme-toggle";
import logo from "../assets/logo.svg";

const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/KhoaVo0911", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/khoavo0911",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

const MobileMenuOverlay = ({ open, onClose }) => {
  const [show, setShow] = useState(open);
  const [animateOpen, setAnimateOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setShow(true);
      setTimeout(() => setAnimateOpen(true), 10);
    } else {
      setAnimateOpen(false);
      const timeout = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!show && !open) return null;
  return ReactDOM.createPortal(
    <>
      <div
        className={`fixed inset-0 z-[10001] bg-black/60 transition-opacity duration-500 ${
          animateOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          pointerEvents: animateOpen ? "auto" : "none",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-screen w-[80vw] max-w-xs z-[10002] flex flex-col bg-white dark:bg-black shadow-2xl transition-transform duration-500 ease-in-out ${
          animateOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ boxShadow: "-8px 0 32px 0 rgba(0,0,0,0.20)" }}
      >
        <div className="flex items-center px-6 py-4 border-b relative">
          <img
            src={logo}
            alt="Logo KV"
            className="w-10 h-10 object-contain mr-2 drop-shadow-sm dark:invert"
            draggable="false"
          />
          <span className="text-3xl font-bold font-mova tracking-widest pt-2 dark:text-white">
            KV
          </span>
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none rounded-full border border-black/20 dark:border-white/30 w-11 h-11 flex items-center justify-center bg-white dark:bg-black text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition shadow-lg"
            aria-label="Close menu"
            style={{ fontSize: 28 }}
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6 py-8 font-mova">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className="uppercase font-bold text-xl tracking-widest py-2 transition-colors duration-200 hover:text-[#6c757d] dark:text-white "
              onClick={onClose}
            >
              {nav.title}
            </a>
          ))}
        </nav>
        <div className="mt-auto px-6 pb-6 flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4 pt-2 pb-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-full w-12 h-12 flex items-center justify-center shadow hover:shadow-lg transition-transform hover:scale-110 text-black dark:text-white"
              >
                {React.createElement(item.icon, { size: 22 })}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <ThemeToggle className="w-10 h-10 dark:text-white" />
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default MobileMenuOverlay;
