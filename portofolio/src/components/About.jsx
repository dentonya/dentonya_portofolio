import React from "react";
import Marquee from "react-fast-marquee";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import github from "../assets/skills/git.svg";
import django from "../assets/skills/django.svg";
import react from "../assets/skills/react.svg";
import typescript from "../assets/skills/typescript.svg";
import postgresql from "../assets/skills/postgresql.svg";
import javascript from "../assets/skills/javascript.svg";
import tailwind from "../assets/skills/tailwind.svg";
import mysql from "../assets/skills/mysql.svg";
import python from "../assets/skills/python.svg";
import docker from "../assets/skills/docker.svg";
import fastapi from "../assets/skills/fastapi.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import linux from "../assets/skills/linux.svg";
import sqlite from "../assets/skills/sqlite.svg";
import bgImage from "../assets/bgImage.jpg";
import AnimationLottie from "../components/AnimationLottie";
import animationFile from "../assets/animation.json";

const About = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: django, title: "Django", style: "shadow-white" },
    { id: 7, src: typescript, title: "TypeScript", style: "shadow-white" },
    { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
    { id: 9, src: python, title: "Python", style: "shadow-blue-600" },
    { id: 10, src: docker, title: "Docker", style: "shadow-sky-400" },
    { id: 11, src: postgresql, title: "Postgresql", style: "shadow-white" },
    { id: 12, src: mysql, title: "MySQL", style: "shadow-pink-400" },
    { id: 13, src: bootstrap, title: "Bootstrap", style: "shadow-purple-500" },
    { id: 14, src: fastapi, title: "FastAPI", style: "shadow-gray-400" },
    { id: 15, src: linux, title: "Linux", style: "shadow-orange-400" },
    { id: 16, src: sqlite, title: "SQLite", style: "shadow-blue-400" },
  ];

  return (
    <div
      name="about"
      className="min-h-screen flex items-center justify-center text-white bg-[#0b0f19] bg-cover bg-center px-6 sm:px-12 lg:px-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-6xl w-full text-center sm:text-left">
        {/* Text Section */}
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-400 border-b-4 border-green-500 inline-block pb-2">
              ABOUT ME
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 text-justify">
              I am a passionate and self-motivated software engineer with expertise in a range of technologies, including Python-Django, FastAPI, JavaScript-TypeScript, ReactJS, Databases-SQL, MySQL, Postgres, API development with GraphQL and REST, Linux Systems, and containerization using Docker.
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 text-justify">
              I have successfully contributed to various projects, demonstrating my ability to problem-solve, innovate, and deliver high-quality solutions. I am also deeply interested in Machine Learning and AI, constantly expanding my knowledge to stay ahead in the ever-evolving tech industry.
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 text-justify">
              I am an effective communicator and a team player, well-versed in agile development methodologies, utilizing tools like Jira, Git, and Trello for efficient project management and version control. Committed to continuous learning and growth, I take pride in delivering scalable and efficient software solutions that meet client and business needs while staying up to date with emerging technologies.
            </p>
          </div>

          <div className="hidden md:flex w-full md:w-1/3 md:justify-end pt-16 mt-8 md:mt-0 overflow-hidden relative">
            <AnimationLottie
              animationFile={animationFile}
              className="scale-125 sm:scale-150 md:scale-175 lg:scale-200"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-2xl text-orange-400 font-bold mb-4">Skills</h3>
          <Marquee gradient={false} speed={40} className="flex gap-6">
            {techs.map((tech) => (
              <div
                key={tech.id}
                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg ${tech.style}`}
              >
                <div className="relative flex flex-col items-center">
                  <img
                    src={tech.src}
                    alt={tech.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="bg-black bg-opacity-50 text-white py-1 mt-2 w-full text-center">
                    {tech.title}
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </div>
  );
};

export default About;
