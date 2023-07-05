import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-scroll"; // npm install react-scroll

export const NavBar = () => {
  // state for mobile navigation menu
  const [nav, setNav] = useState(false);

  // array of links
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-18 py-2 px-4 text-white bg-gray fixed">
      <div className="flex items-center">
        <img
          src={HeroImage}
          alt="my profile"
          className="rounded-full h-auto w-12"
        />
        <h1 className="text-xl font-signature  ml-4">ATONYA DENNIS</h1>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex">
        {" "}
        {/* hidden on mobile*/}
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* implement mobile navigation menu */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* close the mobile navigation menu when clicked outside */}
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800
         text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
