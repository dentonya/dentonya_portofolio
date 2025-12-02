import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      url: "https://github.com/dentonya",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      url: "https://twitter.com/i/flow/login?redirect_after_login=%2Fden_atonya%3Ft%3DZS8ITQOlyCPTgW_r2DEY3w%26s%3D09",
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/dennis-atonya-0992151a3",
    },
    {
      id: 4,
      icon: <FaInstagram />,
      url: "https://www.instagram.com/atonyadenis/?igshid=ZDc4ODBmNjlmNQ==",
    },
  ];

  return (
    <footer className="bg-neutral-black text-white w-full py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Dennis Atonya</h3>
            <p className="text-neutral-gray-400 text-sm">Software Engineer</p>
          </div>

          {/* Social Links */}
          <ul className="flex gap-3 sm:gap-4">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-neutral-gray-800 text-neutral-gray-400
                           hover:bg-brand-orange hover:text-white transition-all duration-300 hover:scale-110 text-lg sm:text-xl"
                  aria-label={`Visit my ${link.id} profile`}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <div className="text-neutral-gray-400 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Dennis Atonya</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
