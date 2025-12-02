import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HeroImage from "../assets/hero.jpg";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "projects" },
    { id: 5, link: "articles" },
    { id: 6, link: "contact" },
  ];

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  // Close menu when clicking a link
  const closeMenu = () => setNav(false);

  return (
    <nav className="flex justify-between items-center w-full h-16 sm:h-20 px-4 sm:px-6 lg:px-12 bg-neutral-white/95 backdrop-blur-sm border-b border-neutral-gray-200 fixed top-0 left-0 z-50 shadow-soft">
      {/* Logo Section */}
      <Link to="home" smooth={true} duration={500} className="cursor-pointer">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-black hover:text-brand-orange transition-colors duration-300">
          Dennis Atonya
        </h1>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center gap-1">
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link
              to={link}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-brand-orange font-semibold bg-brand-peach/50"
              className="px-4 lg:px-5 py-2 cursor-pointer capitalize font-medium text-neutral-gray-700
                       hover:text-brand-orange transition-all duration-300 rounded-lg
                       hover:bg-brand-peach/50 text-sm lg:text-base"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 text-neutral-black md:hidden"
        aria-label="Toggle navigation"
      >
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        } flex flex-col justify-center items-center fixed top-0 right-0 w-full h-screen
           bg-neutral-white
           transition-all duration-500 ease-in-out overflow-hidden md:hidden z-40`}
      >
        {links.map(({ id, link }, index) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-semibold py-5 sm:py-6 text-2xl sm:text-3xl
                     text-neutral-black hover:text-brand-orange transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Link onClick={closeMenu} to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
