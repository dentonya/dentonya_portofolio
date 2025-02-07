import React from "react";
import bgImage from "../assets/bgImage.jpg";
import { GrDeploy } from "react-icons/gr";
import AnimationLottie from "../components/AnimationLottie";
import animationFile from "../assets/experience.json";

const experiences = [
  {
    id: 1,
    title: "SOFTWARE ENGINEER II",
    company: "SunCulture",
    duration: "Jan 2025 - Present",
  },
  {
    id: 2,
    title: "BACKEND SOFTWARE ENGINEER",
    company: "Savannah Informatics",
    duration: "May 2024 - Jan 2025",
  },
  {
    id: 3,
    title: "SOFTWARE ENGINEER",
    company: "eProd Solutions Limited",
    duration: "April 2023  - April 2024",
  },
  {
    id: 4,
    title: "SOFTWARE ENGINEER INTERNSHIP – PART-TIME",
    company: "eProd Solutions Limited",
    duration: "June 2022 - March 2023",
  },
  {
    id: 5,
    title: "STUDENT ATTACHMENT – SOFTWARE ENGINEER",
    company: "eProd Solutions Limited",
    duration: "Jan 2022 - April 2022",
  },
  {
    id: 6,
    title: "TECHNICAL WRITER- FREELANCE",
    company: "Section.io",
    duration: "Feb 2021 - April 2022",
  },
];

const Experience = () => {
  return (
    <div
      name="experience"
      className="min-h-screen flex items-center justify-center text-white bg-[#0b0f19] px-6 sm:px-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-6xl w-full text-center sm:text-left">
        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center">

          {/* Experience Cards */}
          <div className="w-full md:w-3/4 text-center">

            <div className="relative inline-block mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white px-6 py-2 bg-orange-500 rounded-md">
                EXPERIENCES
              </h2>
              <div className="absolute w-full border-t-2 border-orange-500 top-1/2 left-0 transform -translate-x-full"></div>
              <div className="absolute w-full border-t-2 border-orange-500 top-1/2 right-0 transform translate-x-full"></div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="w-full bg-gradient-to-br from-[#161b30] to-[#0b0f19] p-6 rounded-lg shadow-md border border-[#1f2940] min-h-[150px] md:min-h-[170px]"
                >
                  <p className="text-green-400 font-semibold mb-2">
                    {exp.duration}
                  </p>
                  <div className="flex items-center gap-4">
                    <GrDeploy className="text-red-500 text-2xl" />
                    <div>
                      <h3 className="text-lg font-bold">{exp.title}</h3>
                      <p className="text-gray-400 text-base">{exp.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animation Section */}
          <div className="md:flex w-full md:w-1/4 md:justify-end md:ml-12 lg:ml-16 pt-16 md:pt-0">
            <AnimationLottie
              animationFile={animationFile}
              className="scale-125 sm:scale-150 md:scale-175 lg:scale-200"
              style={{ background: "#0b0f19" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
