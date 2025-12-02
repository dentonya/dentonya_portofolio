import React, { useEffect, useState } from "react";
import HeroImage from "../assets/hero.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp, FaCloudDownloadAlt, FaTwitter } from "react-icons/fa";

export default function Home() {
  const [text, setText] = useState("");
  const [additional, setAdditional] = useState("");
  const fullText = "A Software Engineer.";
  const additionalText = "A Code A Day | Ever Learning 😊.";

  useEffect(() => {
    let index = 0;
    setText("");
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          let additionalIndex = 0;
          const additionalTypingInterval = setInterval(() => {
            if (additionalIndex < additionalText.length) {
              setAdditional(additionalText.slice(0, additionalIndex + 1));
              additionalIndex++;
            } else {
              clearInterval(additionalTypingInterval);
            }
          }, 100);
        }, 500);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const handleWhatsAppMessage = () => {
    const phoneNumber = "+254743460871";
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  const links = [
    {
      id: 1,
      icon: <FaLinkedin className="hover:text-blue-400 cursor-pointer" size={30} />,
      href: "https://www.linkedin.com/in/dennis-atonya",
    },
    {
      id: 2,
      icon: <FaGithub className="hover:text-gray-400 cursor-pointer" size={30} />,
      href: "https://github.com/dentonya",
    },
    {
      id: 3,
      icon: <HiOutlineMail className="hover:text-blue-300 cursor-pointer" size={30} />,
      href: "mailto:denatonya@gmail.com",
    },
    {
      id: 4,
      icon: <FaTwitter className="hover:text-blue-300 cursor-pointer" size={30} />,
      href: "https://twitter.com/i/flow/login?redirect_after_login=%2Fden_atonya%3Ft%3DZS8ITQOlyCPTgW_r2DEY3w%26s%3D09",
    },
  ];

  const handleResumeDownload = async () => {
    const resumePath = process.env.PUBLIC_URL + "/DENNIS ATONYA CV.pdf";

    try {
      const response = await fetch(resumePath);
      const blob = await response.blob();
      const blobURL = URL.createObjectURL(blob);

      // Open in a new tab
      window.open(blobURL, "_blank");

      // Create a temporary link to trigger download
      // const a = document.createElement("a");
      // a.href = blobURL;
      // a.download = "DENNIS ATONYA CV.pdf";
      // document.body.appendChild(a);
      // a.click();
      // document.body.removeChild(a);

      // Cleanup the blob URL after download
      setTimeout(() => URL.revokeObjectURL(blobURL), 100);
    } catch (error) {
      console.error("Error downloading the resume:", error);
    }
  };

  return (
    <div name="home" className="relative min-h-screen overflow-hidden bg-neutral-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-orange rounded-full blur-3xl opacity-20 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-accent-blue/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 animate-slide-right">
              {/* Badge */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-brand-peach text-brand-orange-dark rounded-full text-xs sm:text-sm font-semibold">
                  SOFTWARE ENGINEER
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-black leading-tight">
                  Hello, my name is{" "}
                  <span className="text-gradient">Dennis Atonya</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-gray-600 font-medium">
                  {text || "A Software Engineer"}
                </p>
                <p className="text-base sm:text-lg text-neutral-gray-500">
                  {additional || "A Code A Day | Ever Learning 😊"}
                </p>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-neutral-gray-600 leading-relaxed max-w-xl">
                Passionate about creating scalable, efficient applications. Specialized in full-stack development 
                with expertise in Python, JavaScript/TypeScript, and modern web technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                <button
                  className="btn-primary flex items-center gap-2"
                  onClick={() => {
                    const projectsSection = document.querySelector('[name="projects"]');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Projects
                </button>

                <button
                  onClick={handleResumeDownload}
                  className="btn-secondary flex items-center gap-2"
                >
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 pt-4">
                {links.map(({ id, icon, href }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-neutral-gray-100 text-neutral-gray-700 
                             hover:bg-brand-orange hover:text-white transition-all duration-300 hover:scale-110 text-lg sm:text-xl"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative flex justify-center lg:justify-end animate-slide-up mt-8 lg:mt-0">
              {/* Large circular background */}
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div className="absolute inset-0 bg-gradient-orange rounded-full transform scale-110"></div>
                <div className="relative aspect-square rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white shadow-soft-xl">
                  <img
                    src={HeroImage}
                    alt="Dennis Atonya"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating decoration circles */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-accent-blue rounded-full opacity-80 animate-float"></div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-brand-yellow rounded-full opacity-60 animate-float animation-delay-400"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
