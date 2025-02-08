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
    <div className="flex justify-between items-center w-full h-14 py-2 px-4 text-white bg-gradient-to-b from-gray-800 to-black fixed top-0 left-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={HeroImage} alt="my profile" className="rounded-full h-auto w-12" />
        <h1 className="text-xl font-bold text-orange-400 ml-4">ATONYA DENNIS</h1>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-lg px-4 cursor-pointer capitalize md:uppercase font-normal text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
        aria-label="Toggle navigation"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${nav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          } flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-gray-800 to-black text-white transition-transform duration-300 ease-in-out overflow-hidden`}
      >


        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize md:uppercase font-normal  py-6 text-4xl">
            <Link onClick={closeMenu} to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
