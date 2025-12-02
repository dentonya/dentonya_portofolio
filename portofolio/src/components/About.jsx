import React from "react";
import Marquee from "react-fast-marquee";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import git from "../assets/skills/git.svg";
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
import graphql from "../assets/skills/graphql.svg";
import linux from "../assets/skills/linux.svg";
import sqlite from "../assets/skills/sqlite.svg";

const About = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: django, title: "Django", style: "shadow-white" },
    { id: 7, src: typescript, title: "TypeScript", style: "shadow-white" },
    { id: 8, src: git, title: "GitHub", style: "shadow-gray-400" },
    { id: 9, src: python, title: "Python", style: "shadow-blue-600" },
    { id: 10, src: docker, title: "Docker", style: "shadow-sky-400" },
    { id: 11, src: postgresql, title: "Postgresql", style: "shadow-white" },
    { id: 12, src: mysql, title: "MySQL", style: "shadow-pink-400" },
    { id: 13, src: bootstrap, title: "Bootstrap", style: "shadow-purple-500" },
    { id: 14, src: fastapi, title: "FastAPI", style: "shadow-gray-400" },
    { id: 15, src: linux, title: "Linux", style: "shadow-orange-400" },
    { id: 16, src: sqlite, title: "SQLite", style: "shadow-blue-400" },
    { id: 17, src: graphql, title: "GraphQL", style: "shadow-blue-400" },

  ];

  return (
    <div name="about" className="section-container bg-neutral-gray-50">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6 text-neutral-gray-700 leading-relaxed text-base sm:text-lg">
            <p>
              I am a passionate and self-motivated <span className="text-brand-orange font-semibold">Software Engineer</span> with expertise in modern web technologies and backend systems. I specialize in building scalable, efficient, and user-centric applications.
            </p>
            <p>
              With hands-on experience in <span className="text-accent-blue font-semibold">Python (Django, FastAPI)</span>,{" "}
              <span className="text-accent-blue font-semibold">JavaScript/TypeScript (React, Node.js)</span>, and{" "}
              <span className="text-accent-blue font-semibold">database technologies (PostgreSQL, MySQL)</span>,
              I've successfully delivered solutions across various domains including ERP systems, e-commerce platforms, and data management tools.
            </p>
            <p>
              I thrive in <span className="text-accent-green font-semibold">agile environments</span>, leveraging tools like
              Jira, Git, and Docker for efficient collaboration and deployment. My commitment to
              <span className="text-accent-purple font-semibold"> continuous learning</span> keeps me at the forefront of emerging technologies,
              including Machine Learning and AI.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="card card-hover bg-gradient-to-br from-brand-peach to-neutral-white p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-black mb-5 sm:mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl">💼</span>
                  <div>
                    <p className="font-semibold text-neutral-black">Current Role</p>
                    <p className="text-neutral-gray-600">Software Engineer II at SunCulture</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-neutral-black">Focus Areas</p>
                    <p className="text-neutral-gray-600">Full-Stack Development, API Design, Cloud Solutions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="font-semibold text-neutral-black">Passion</p>
                    <p className="text-neutral-gray-600">Building innovative solutions that make a difference</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 w-full">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-neutral-black">
            Technical Skills
          </h3>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-soft-lg">
            <Marquee gradient={false} speed={50} pauseOnHover={true}>
              {techs.map((tech) => (
                <div
                  key={tech.id}
                  className="mx-3 sm:mx-4 px-4 sm:px-6 py-3 sm:py-4 bg-neutral-gray-50 rounded-xl sm:rounded-2xl min-w-[120px] sm:min-w-[140px]
                           hover:bg-brand-peach hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                      <img
                        src={tech.src}
                        alt={tech.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-neutral-gray-700 text-center">
                      {tech.title}
                    </span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
