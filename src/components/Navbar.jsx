import React, { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import ThemeToggle from "./ui/theme-toggle";
import { Github, Linkedin, Facebook, Mail, X } from "lucide-react";
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
  {
    href: "https://facebook.com/yourusername",
    icon: Facebook,
    label: "Facebook",
  },
  { href: "mailto:your@email.com", icon: Mail, label: "Email" },
];

const AnimatedHamburger = ({ open, onClick }) => (
  <button
    className={`md:hidden fixed top-6 right-6 z-[200] p-2 flex flex-col items-center justify-center bg-black/40 dark:bg-white/10 rounded-full transition-all duration-500 ${
      open ? "bg-black/60 dark:bg-white/20" : ""
    }`}
    style={{
      transition:
        "opacity 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s cubic-bezier(0.4,0,0.2,1)",
    }}
    onClick={onClick}
    aria-label={open ? "Close menu" : "Open menu"}
  >
    <div
      className="w-7 h-0.5 bg-black dark:bg-white mb-1.5 transition-transform duration-500"
      style={{
        transform: open ? "rotate(45deg) translate(6px, 6px)" : "none",
      }}
    ></div>
    <div
      className="w-7 h-0.5 bg-black dark:bg-white mb-1.5 transition-opacity duration-500"
      style={{ opacity: open ? 0 : 1 }}
    ></div>
    <div
      className="w-7 h-0.5 bg-black dark:bg-white transition-transform duration-500"
      style={{
        transform: open ? "rotate(-45deg) translate(6px, -6px)" : "none",
      }}
    ></div>
  </button>
);

const Navbar = ({ onMobileMenuOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Thêm class vào body khi mở menu
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => document.body.classList.remove("mobile-menu-open");
  }, [mobileOpen]);

  // Close menu on route change/hash change (optional UX improvement)
  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <nav className="px-6 w-full flex items-center pt-0.5 py-1 min-h-[80px] fixed top-0 z-20 bg-white/75 backdrop-blur-md font-[mova] dark:bg-zinc-900/80 dark:text-white">
      <div className="w-full flex items-center max-w-7xl mx-auto">
        <div
          className="flex-1 flex items-center ml-2 gap-3"
          style={{ minWidth: 120 }}
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center outline-none focus:outline-none group transition-transform duration-150 hover:scale-110 active:scale-105"
            aria-label="Go to top"
          >
            <img
              src={logo}
              alt="Logo KV"
              className="w-10 h-10 object-contain mr-2 drop-shadow-sm dark:invert"
              draggable="false"
            />
            <span
              className="pt-2 pl-2 text-4xl font-black font-mova tracking-widest select-none align-middle text-black dark:text-white"
              style={{ lineHeight: 1, letterSpacing: 2 }}
            >
              KV
            </span>
          </button>
        </div>
        {/* Desktop menu only */}
        <div className="flex-[2] items-center justify-end hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-16">
              {navLinks.map((nav) => (
                <NavigationMenuItem key={nav.id} className="px-2 py-0">
                  <NavigationMenuLink
                    href={`#${nav.id}`}
                    className="uppercase font-bold text-2xl no-underline tracking-widest relative transition-transform duration-300 hover:scale-150 hover:text-[#6c757d] after:content-[''] after:block after:h-[3px] after:bg-black after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center flash-on-hover dark:text-white dark:after:bg-white"
                  >
                    {nav.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Hamburger menu for mobile (right) with animation */}
        <div className="flex md:hidden items-center justify-end flex-1">
          <button
            className={`md:hidden fixed top-6 right-6 z-[200] p-2 flex flex-col items-center justify-center rounded-full transition-all duration-500 ${
              mobileOpen ? "bg-black/60 dark:bg-white/20" : ""
            }`}
            style={{
              transition:
                "opacity 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s cubic-bezier(0.4,0,0.2,1)",
              background: mobileOpen ? undefined : "transparent",
            }}
            onClick={onMobileMenuOpen}
            aria-label="Open menu"
          >
            <div
              className="w-7 h-0.5 bg-black dark:bg-white mb-1.5 transition-transform duration-500"
              style={{
                transform: mobileOpen
                  ? "rotate(45deg) translate(6px, 6px)"
                  : "none",
              }}
            ></div>
            <div
              className="w-7 h-0.5 bg-black dark:bg-white mb-1.5 transition-opacity duration-500"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            ></div>
            <div
              className="w-7 h-0.5 bg-black dark:bg-white transition-transform duration-500"
              style={{
                transform: mobileOpen
                  ? "rotate(-45deg) translate(6px, -6px)"
                  : "none",
              }}
            ></div>
          </button>
        </div>
      </div>
      {/* Theme toggle desktop */}
      <div className="pb-2 absolute right-0 top-1/2 -translate-y-1/2 pr-4 group-hover:scale-110 transition-transform duration-200 hidden md:block">
        <ThemeToggle className="w-12 h-12" />
      </div>
    </nav>
  );
};

export default Navbar;
