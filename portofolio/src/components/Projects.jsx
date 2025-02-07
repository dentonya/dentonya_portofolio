import React from "react";
import bgImage from "../assets/bgImage.jpg";
import AnimationLottie from "../components/AnimationLottie";
import animationFile from "../assets/projects.json";

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
    <div
      name="projects"
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
          {/* Project Cards */}
          <div className="w-full md:w-3/4 text-center">
            <div className="relative inline-block mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white px-6 py-2 bg-orange-500 rounded-md">
                PROJECTS
              </h2>
              <div className="absolute w-full border-t-2 border-orange-500 top-1/2 left-0 transform -translate-x-full"></div>
              <div className="absolute w-full border-t-2 border-orange-500 top-1/2 right-0 transform translate-x-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-[#131a2a] p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-orange-400">{project.title}</h3>
                  <p className="text-gray-400 text-base mt-2">{project.description}</p>
                  <div className="mt-2">
                    <strong className="text-green-400">Stack:</strong>
                    <p className="text-gray-400 text-base">{project.stack.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animation Section - On the Right */}
          <div className="hidden md:flex w-full md:w-1/4 md:justify-end md:ml-12 lg:ml-16 pt-16 md:pt-0">
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

export default Projects;
