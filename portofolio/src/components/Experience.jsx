import React from "react";
import { GrDeploy } from "react-icons/gr";

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
    <div name="experience" className="section-container bg-neutral-gray-50">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">Experience</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange via-brand-yellow to-brand-orange rounded-full"></div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-0 md:pl-24"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 top-8 w-9 h-9 bg-brand-orange rounded-full border-4 border-neutral-gray-50 shadow-orange z-10 items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Experience card */}
                <div className="card card-hover group bg-white">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-black mb-2 group-hover:text-brand-orange transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-neutral-gray-700 font-medium text-base sm:text-lg">{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center px-4 py-2 text-sm font-medium bg-brand-peach text-brand-orange-dark rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
