import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import django from '../assets/django.png'
import react from '../assets/react.png'
import sql from '../assets/sql.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import mysql from '../assets/mysql.png'
import svn from '../assets/svn.jpeg'
import python from '../assets/python.png'
import docker from '../assets/docker.png'
import delphi from '../assets/delphi.png'
import bootstrap from '../assets/bootstrap.jpeg'
import linux from '../assets/linux.jpeg'
import sqlite from '../assets/sqlite.png'
import bgImage from '../assets/bgImage.jpg'
const Experience = () => {
    const techs = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        id: 4,
        src: react,
        title: "React",
        style: "shadow-blue-600",
      },
      {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-sky-400",
      },
      {
        id: 6,
        src: django,
        title: "Django",
        style: "shadow-white",
      },
      {
        id: 7,
        src: svn,
        title: "SVN",
        style: "shadow-pink-400",
      },
      {
        id: 8,
        src: github,
        title: "GitHub",
        style: "shadow-gray-400",
      },
      {
        id: 9,
        src: python,
        title: "Python",
        style: "shadow-blue-600",
      },
      {
        id: 10,
        src: docker,
        title: "Docker",
        style: "shadow-sky-400",
      },
      {
        id: 11,
        src: sql,
        title: "SQL",
        style: "shadow-white",
      },
      {
        id: 12,
        src: mysql,
        title: "MySQL",
        style: "shadow-pink-400",
      },
      {
        id: 13,
        src: bootstrap,
        title: "Bootstrap",
        style: "shadow-purple-500",
      },
      {
        id: 14,
        src: delphi,
        title: "Delphi",
        style: "shadow-gray-400",
      },
      {
        id: 15,
        src: linux,
        title: "Linux",
        style: "shadow-orange-400",
      },
      {
        id: 16,
        src: sqlite,
        title: "SQLite",
        style: "shadow-blue-400",
      },
    ];
  
    return (
      <div
        name="experience"
        className=" bg-gradient-to-b from-black to-gray-800 w-full text-white
        md:h-screen"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(38,40,46,0.8), rgba(38,40,46,0.8)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
      
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full">

          <div className='px-12 sm:px-0'>

            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Experience
            </p>
            <p className="text-xl py-6 text-white-500  text-justify md:text-left">Some of the technologies I've worked with</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;