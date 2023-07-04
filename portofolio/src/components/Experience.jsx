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
        className=" bg-black w-full h-screen"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

          <div className='pb-auto'>

            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>
  
          <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
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