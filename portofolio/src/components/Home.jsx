import React, { useEffect, useState } from "react";
import bgImage from "../assets/bgImage.jpg";
import AnimationLottie from "../components/AnimationLottie";
import animationFile from "../assets/development.json";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp, FaCloudDownloadAlt, FaTwitter } from "react-icons/fa";

export default function Home() {
  const [text, setText] = useState("");
  const [additional, setAdditional] = useState("");
  const fullText = "A Software Engineer.";
  const additionalText = "A Code A Day | Ever Learning.";

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
    <div
      name="home"
      className="min-h-screen flex flex-col items-center justify-center text-white bg-[#0b0f19] bg-cover bg-center px-8 sm:px-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex flex-col md:flex-row items-center max-w-7xl w-full gap-12 pt-20 sm:pt-32">
        {/* Left Section - Text Content */}
        <div className="w-full md:w-2/3 text-left space-y-6">
          <h5 className="text-3xl sm:text-4xl md:text-5xl mt-4 font-bold">
            Hello, This is <span className="text-pink-400">ATONYA DENNIS</span>. <br />
            <span className="text-green-400">{text}</span> <br />
            <span className="text-gray-400 text-2xl sm:text-3xl tracking-widest">
              ••••••••••••••••
            </span>{" "}
            <br />
            <span className="text-orange-400">{additional}</span>
          </h5>

          {/* Social Icons & Buttons */}
          <div className="flex  gap-6 mt-6 flex-wrap">
            {links.map(({ id, icon, href }) => (
              <a key={id} href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            ))}
          </div>

          <div className="mt-6 flex gap-4 flex-wrap">
            <button
              className="flex items-center gap-2 border-2 border-pink-500 px-6 py-2 rounded-lg hover:bg-pink-500"
            >
              <BsFillPersonLinesFill size={20} />
              CONTACT ME
            </button>
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-lg cursor-pointer"
            >
              <FaCloudDownloadAlt size={20} />
              GET RESUME
            </button>

            <button
              className="flex items-center gap-2 bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600"
              onClick={handleWhatsAppMessage}
            >
              <FaWhatsapp size={20} />
              WhatsApp Me
            </button>
          </div>

          {/* Code Block */}
          <div className="mt-8 bg-gray-900 p-6 rounded-lg text-left text-sm">
            <code className="text-pink-400">const</code> softwareEngineer = {"{"} <br />
            <span className="pl-4 text-green-400">name:</span>{" "}
            <span className="text-yellow-500">'Dennis Atonya'</span>, <br />
            <span className="pl-4 text-green-400">skilled_in:</span> [<br />
            <span className="pl-8 text-yellow-400">'Python'</span>,
            <span className="pl-8 text-yellow-400">'JavaScript/TypeScript/ReactJS'</span>,
            <span className="pl-8 text-yellow-400">'GraphQL'</span>,
            <span className="pl-8 text-yellow-400">'Django REST Framework'</span>,
            <span className="pl-8 text-yellow-400">'Docker'</span>, <br />
            <span className="pl-8 text-yellow-400">'HTML/CSS/Tailwind'</span>,
            <span className="pl-8 text-yellow-400">'Fast API '</span>,
            <span className="pl-8 text-yellow-400">'Postgres/SQL/MySQL'</span>,
            <span className="pl-8 text-yellow-400">'Jira'</span>,
            <span className="pl-8 text-yellow-400">'Git & GitHub'</span>,
            <span className="pl-8 text-yellow-400">'Linux'</span>, <br />
            ],<br />
            <span className="pl-4 text-green-400">hardWorker:</span>{" "}
            <span className="text-orange-400">true</span>, <br />
            <span className="pl-4 text-green-400">problemSolver:</span>{" "}
            <span className="text-orange-400">true</span>, <br />
            <span className="pl-4 text-green-400">teamPlayer:</span>{" "}
            <span className="text-orange-400">true</span>, <br />
            <span className="pl-4 text-green-400">effectiveCommunicator:</span>{" "}
            <span className="text-orange-400">true</span>, <br />
            <span className="pl-4 text-green-400">eagerToLearn:</span>{" "}
            <span className="text-orange-400">true</span>, <br />
            {"};"}
          </div>
        </div>

        {/* Right Side - Animation Lottie */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end pt-16 mt-8 md:mt-0 overflow-hidden relative hidden sm:flex">
          <AnimationLottie
            animationFile={animationFile}
            className="scale-110 sm:scale-100 md:scale-110 lg:scale-125"
          />
        </div>
      </div>
    </div>
  );
}
