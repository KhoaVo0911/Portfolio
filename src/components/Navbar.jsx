import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import logo from "../assets/logo.png";

const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="px-6 w-full flex items-center pt-0.5 py-1 fixed top-0 z-40 bg-white/60 backdrop-blur-md font-[mova]">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center ml-2" style={{ minWidth: 120 }}>
          <img
            src={logo}
            alt="Logo"
            className="w-[100px] h-[100px] object-contain"
          />
        </div>
        <div className="flex items-center mr-2">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-16">
              {navLinks.map((nav) => (
                <NavigationMenuItem key={nav.id} className="px-2 py-0">
                  <NavigationMenuLink
                    href={`#${nav.id}`}
                    className="uppercase font-bold text-2xl no-underline tracking-widest relative transition-transform duration-300 hover:scale-150 hover:text-[#6c757d] after:content-[''] 
                    after:block after:h-[3px] after:bg-black after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center flash-on-hover"
                  >
                    {nav.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
