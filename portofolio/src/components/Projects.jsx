import React from "react";

const projects = [
  {
    title: "eLIMAERP- Web App",
    stack: ["React JS", "Python", "Django RestFramework", "PostgreSQL", "Docker"],
    description:
      "A comprehensive ERP system designed for farmer registration, produce collection, and farmer payments. It streamlines operations for small-scale farmer organizations by enhancing data management, ensuring traceability, and facilitating seamless transactions."
  },
  {
    title: "Web Service - Backend",
    stack: ["Python", "Django RestFramework", "PostgreSQL"],
    description:
      "Developed this Python web service to explore OAuth2 authentication and SMS integration for a simple customer-order workflow. Implemented OAuth2 for secure access and integrated Africa's Talking SMS Gateway to notify customers after placing an order."
  },
  {
    title: "Data Keeping Management System - Web App",
    stack: ["React JS", "Python", "Django RestFramework", "SQLite"],
    description:
      "In my final year at university, I volunteered and collaborated with a team to develop a data management system for the Christian Union society. This system streamlined data storage for various ministries and evangelistic teams within the union, eliminating the need for manual record-keeping."
  },
  {
    title: "GraphQL Web service - Backend",
    stack: ["Python", "Graphene-Django", "Postgresql"],
    description:
      "Built this GraphQL-powered web service with Django and graphene-django as part of my learning journey of GraphQL. It features user authentication (JWT), link management, and voting, enabling seamless data interaction through GraphQL queries and mutations."
  },
  {
    title: "Inventory Forecasting Management System - Web App",
    stack: ["Python", "Django RestFramwork", "XGBoost ML Model", "React JS", "PostgreSQL"],
    description:
      "I did this project as my final year project. Leveraging on XGBoost machine learning model, the system analyzes historical sales and demand data to predict future product demand, optimizing inventory levels and reducing the risk of stock-outs, dead stock or excess inventory for small businesses."
  },
  {
    title: "My Portfolio- Web",
    stack: ["React JS", "Tailwind CSS"],
    description:
      "Just thought of creating a personal portfolio site to showcase who I am and what I do. This also formed part of my learning journey with JavaScript, React JS, and Tailwind CSS. The site highlights my skills, projects, and experience, allowing me to demonstrate my software development expertise while gaining hands-on experience with modern technologies."
  },
];

const Projects = () => {
  return (
    <div name="projects" className="section-container bg-neutral-white">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">Projects</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full"></div>
          <p className="text-neutral-gray-600 mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card card-hover group bg-white"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-black mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-neutral-gray-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 text-sm font-medium bg-brand-peach text-brand-orange-dark
                                 rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
