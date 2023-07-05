import React from "react";
import HeroImage from "../assets/heroImage.png";
import bgImage from "../assets/bgImage.jpg";
import { FiArrowRightCircle } from "react-icons/fi";

export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b bg-neutral-300 py-8 px-12 sm:px-0"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(38,40,46,0.8), rgba(38,40,46,0.8)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center md:mr-8">
          <h2 className=" text-5xl sm:text-7xl font-bold text-white mb-4 md:mb-8">
            Hey, I'm Atonya Dennis
          </h2>
          <p className=" text-xl text-white max-w-md  md:text-left">
            A software developer focused on building the Frontend and Backend of
            Websites and Web Applications that lead to the success of the
            overall product.
          </p>
          <div className="mt-4">
            <a
              href={process.env.PUBLIC_URL + "/Atonya_Dennis_Resume.pdf"}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-500 cursor-pointer"
              download
            >
              Resume/CV
              <span className="group-hover:rotate-90 duration-300">
                <FiArrowRightCircle size={20} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto my-7 w-full"
          />
        </div>
      </div>
    </div>
  );
};
