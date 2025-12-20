"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cvData } from "@/data/cv-data";
import { trackResumeDownload, trackProjectView, trackProjectLinkClick, trackSocialClick } from "@/utils/analytics";

interface ProfileSectionProps {
  activeTab: string;
}

export default function ProfileSection({ activeTab }: ProfileSectionProps) {
  if (activeTab === "chat") return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 mb-6"
    >
      {activeTab === "me" && <AboutContent />}
      {activeTab === "projects" && <ProjectsContent />}
      {activeTab === "skills" && <SkillsContent />}
      {activeTab === "experience" && <ExperienceContent />}
      {activeTab === "education" && <EducationContent />}
      {activeTab === "contact" && <ContactContent />}
    </motion.div>
  );
}

function AboutContent() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
      {/* Profile Image - Hidden on mobile */}
      <div className="hidden md:flex flex-shrink-0">
        <div className="w-64 h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <span className="text-8xl">👨‍💻</span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          {cvData.personalInfo.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-2">{cvData.personalInfo.title}</p>
        <p className="text-sm md:text-base text-gray-500 mb-4">{cvData.personalInfo.location}</p>

        <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
          Hey I'm Dennis 👋,<br />
          {cvData.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["Python", "Django","Flask","FastAPI", "Node.js", "React", "TypeScript","NestJS", "AWS","Docker","PostgreSQL","MySQL/SQL","Git"].map((tag) => (
            <span
              key={tag}
              className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500 text-white rounded-full text-xs md:text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsContent() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    const nextIdx = (currentProject + 1) % cvData.projects.length;
    setCurrentProject(nextIdx);
    trackProjectView(cvData.projects[nextIdx].name);
  };

  const prevProject = () => {
    const prevIdx = (currentProject - 1 + cvData.projects.length) % cvData.projects.length;
    setCurrentProject(prevIdx);
    trackProjectView(cvData.projects[prevIdx].name);
  };

  const project = cvData.projects[currentProject];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">My Projects</h2>
      <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">A showcase of my recent work and contributions to various projects</p>
      
      <div className="relative">
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl md:rounded-3xl overflow-hidden"
        >
          {/* Project Image */}
          <div className="h-48 md:h-64 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Content */}
          <div className="p-4 md:p-6 lg:p-8 text-white">
            <div className="text-xs md:text-sm text-gray-400 mb-2">
              {project.technologies.slice(0, 2).join(" / ")}
            </div>
            <div className="flex items-start justify-between gap-3 mb-3 md:mb-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold flex-1">{project.name}</h3>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  onClick={() => trackProjectLinkClick(project.name, project.link!)}
                  className="flex items-center gap-2 px-3 md:px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors text-sm md:text-base font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="hidden md:inline">Visit</span>
                </Link>
              )}
            </div>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">{project.description}</p>
            
            {/* Technology Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
          <button
            onClick={prevProject}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-lg md:text-xl"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {cvData.projects.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentProject ? "bg-blue-500 w-6 md:w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextProject}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-lg md:text-xl"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

function SkillsContent() {
  const [currentSkill, setCurrentSkill] = useState(0);

  const skillCategories = [
    { title: "Programming Languages", skills: cvData.skills.languages, color: "blue" },
    { title: "Frontend Development", skills: cvData.skills.frontend, color: "purple" },
    { title: "API Design & Integration", skills: cvData.skills.apiDesign, color: "pink" },
    { title: "Databases", skills: cvData.skills.databases, color: "green" },
    { title: "ORMs", skills: cvData.skills.orms, color: "indigo" },
    { title: "Testing", skills: cvData.skills.testing, color: "teal" },
    { title: "Security & Identity", skills: cvData.skills.security, color: "red" },
    { title: "Version Control", skills: cvData.skills.versionControl, color: "gray" },
    { title: "DevOps", skills: cvData.skills.devops, color: "cyan" },
    { title: "Cloud", skills: cvData.skills.cloud, color: "orange" },
    { title: "Tools & Methodologies", skills: cvData.skills.tools, color: "yellow" },
    { title: "Soft Skills", skills: cvData.skills.softSkills, color: "emerald" }
  ];

  const totalPages = Math.ceil(skillCategories.length / 2);

  const nextSkill = () => {
    setCurrentSkill((prev) => (prev + 2) >= skillCategories.length ? 0 : prev + 2);
  };

  const prevSkill = () => {
    setCurrentSkill((prev) => (prev - 2) < 0 ? skillCategories.length - 2 : prev - 2);
  };

  const currentCategories = [
    skillCategories[currentSkill],
    skillCategories[currentSkill + 1]
  ].filter(Boolean);

  const colorClasses = {
    blue: "text-blue-600 bg-blue-100 text-blue-700",
    purple: "text-purple-600 bg-purple-100 text-purple-700",
    pink: "text-pink-600 bg-pink-100 text-pink-700",
    green: "text-green-600 bg-green-100 text-green-700",
    indigo: "text-indigo-600 bg-indigo-100 text-indigo-700",
    teal: "text-teal-600 bg-teal-100 text-teal-700",
    red: "text-red-600 bg-red-100 text-red-700",
    gray: "text-gray-600 bg-gray-100 text-gray-700",
    cyan: "text-cyan-600 bg-cyan-100 text-cyan-700",
    orange: "text-orange-600 bg-orange-100 text-orange-700",
    yellow: "text-yellow-600 bg-yellow-100 text-yellow-700",
    emerald: "text-emerald-600 bg-emerald-100 text-emerald-700"
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Technical Skills</h2>

      <motion.div
        key={currentSkill}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6 md:space-y-8 mb-6 md:mb-8"
      >
        {currentCategories.map((category) => {
          const titleColor = colorClasses[category.color as keyof typeof colorClasses].split(' ')[0];
          const badgeColors = colorClasses[category.color as keyof typeof colorClasses].split(' ').slice(1).join(' ');
          
          return (
            <div key={category.title}>
              <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 ${titleColor}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 md:px-5 py-2 md:py-2.5 ${badgeColors} rounded-full text-sm md:text-base font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
        <button
          onClick={prevSkill}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors text-lg md:text-xl"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-base text-gray-600 font-medium">
            {Math.floor(currentSkill / 2) + 1} / {totalPages}
          </span>
        </div>
        <button
          onClick={nextSkill}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors text-lg md:text-xl"
        >
          →
        </button>
      </div>
    </div>
  );
}

function ExperienceContent() {
  const [currentExp, setCurrentExp] = useState(0);

  const nextExp = () => {
    setCurrentExp((prev) => (prev + 1) % cvData.experience.length);
  };

  const prevExp = () => {
    setCurrentExp((prev) => (prev - 1 + cvData.experience.length) % cvData.experience.length);
  };

  const exp = cvData.experience[currentExp];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Work Experience</h2>

      <motion.div
        key={currentExp}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="border-l-4 border-blue-500 pl-4 md:pl-6 mb-6 md:mb-8"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1 md:gap-0">
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{exp.position}</h3>
            <p className="text-lg md:text-xl text-blue-600 font-semibold">{exp.company}</p>
          </div>
          <span className="text-sm md:text-base text-gray-500 md:whitespace-nowrap">{exp.duration}</span>
        </div>
        
        <p className="text-base md:text-lg text-gray-600 mb-3 md:mb-4">📍 {exp.location}</p>

        <div className="space-y-2 mb-4">
          {exp.responsibilities.map((resp, idx) => (
            <p key={idx} className="text-gray-700 text-sm md:text-base leading-relaxed">• {resp}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 md:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
        <button
          onClick={prevExp}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors text-lg md:text-xl"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-base text-gray-600 font-medium">
            {currentExp + 1} / {cvData.experience.length}
          </span>
        </div>
        <button
          onClick={nextExp}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors text-lg md:text-xl"
        >
          →
        </button>
      </div>
    </div>
  );
}

function EducationContent() {
  const [currentItem, setCurrentItem] = useState(0);
  const totalItems = 2; // 1 education + 1 certification

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % totalItems);
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Education & Certifications</h2>
      
      <motion.div
        key={currentItem}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6 md:mb-8"
      >
        {currentItem === 0 ? (
          /* Education Section */
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                <span className="text-3xl md:text-4xl">🎓</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{cvData.education.degree}</h3>
                <p className="text-base md:text-lg lg:text-xl text-blue-600 font-semibold mb-2 md:mb-3">{cvData.education.institution}</p>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-6">📅 {cvData.education.year}</p>
                
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {cvData.education.achievements.map((achievement, idx) => (
                    <p key={idx} className="text-gray-700 text-sm md:text-base flex items-start gap-2 md:gap-3">
                      <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                      <span>{achievement}</span>
                    </p>
                  ))}
                </div>

                {/* Projects */}
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-blue-200">
                  <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">Worked on various projects:</h4>
                  <div className="space-y-2">
                    {cvData.education.projects.map((project, idx) => (
                      <p key={idx} className="text-gray-700 text-xs md:text-sm flex items-start gap-2">
                        <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                        <span>{project}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Certifications Section */
          <div>
            {cvData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-xl p-4 md:p-6 lg:p-8 hover:border-green-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                    <span className="text-2xl md:text-3xl text-green-600">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1">{cert.name}</h4>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-2">{cert.title}: {cert.year}</p>
                    
                    <div className="mt-3 md:mt-4">
                      <p className="text-sm md:text-base text-gray-700 font-semibold mb-2">Gained skills in:</p>
                      <div className="space-y-2">
                        {cert.skills.map((skill, skillIdx) => (
                          <p key={skillIdx} className="text-gray-700 flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{skill}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
        <button
          onClick={prevItem}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors text-lg md:text-xl"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-base text-gray-600 font-medium">
            {currentItem + 1} / {totalItems}
          </span>
        </div>
        <button
          onClick={nextItem}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-colors text-lg md:text-xl"
        >
          →
        </button>
      </div>
    </div>
  );
}

function ContactContent() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 md:mb-8 gap-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Contact Information</h2>
        <span className="text-sm md:text-base text-gray-500">@dentonya</span>
      </div>

      <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-xl md:text-2xl">📧</span>
            <Link
              href={`mailto:${cvData.personalInfo.email}`}
              className="text-blue-600 hover:underline text-sm md:text-base lg:text-lg break-all"
            >
              {cvData.personalInfo.email}
            </Link>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-xl md:text-2xl">📱</span>
            <span className="text-sm md:text-base lg:text-lg">{cvData.personalInfo.phone}</span>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-xl md:text-2xl">📍</span>
            <span className="text-sm md:text-base lg:text-lg">{cvData.personalInfo.location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
          <Link
            href={cvData.personalInfo.linkedin}
            target="_blank"
            onClick={() => trackSocialClick('LinkedIn', cvData.personalInfo.linkedin)}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-blue-50 rounded-lg border-2 border-blue-200 hover:bg-blue-100 font-medium text-sm md:text-base text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </Link>
          <Link
            href={cvData.personalInfo.github}
            target="_blank"
            onClick={() => trackSocialClick('GitHub', cvData.personalInfo.github)}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gray-50 rounded-lg border-2 border-gray-300 hover:bg-gray-100 font-medium text-sm md:text-base text-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </Link>
          <Link
            href={cvData.personalInfo.twitter}
            target="_blank"
            onClick={() => trackSocialClick('Twitter', cvData.personalInfo.twitter)}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-sky-50 rounded-lg border-2 border-sky-200 hover:bg-sky-100 font-medium text-sm md:text-base text-sky-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Twitter
          </Link>
        </div>
      </div>

      {/* Resume Download */}
      <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 md:gap-4 flex-1">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-xl md:text-2xl">📄</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm md:text-base lg:text-lg">Dennis Atonya Resume</h3>
              <p className="text-xs md:text-sm text-gray-500 truncate">PDF • Updated December 2025 • 0.5 MB</p>
            </div>
          </div>
          <Link
            href={cvData.personalInfo.resume}
            target="_blank"
            onClick={() => trackResumeDownload()}
            className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg md:text-xl"
          >
            ⬇
          </Link>
        </div>
        <p className="text-xs md:text-sm text-gray-600 mt-3 md:mt-4 text-center">
          Click to download the resume
        </p>
      </div>

    </div>
  );
}
