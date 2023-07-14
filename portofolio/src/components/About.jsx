import React, { useState } from "react";
import bgImage from "../assets/bgImage.jpg";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const paragraphs = [
    `I am a passionate and self-motivated individual with a strong focus on technology.
    I have extensive experience in software development, networking, and freelancing projects.`,

    `My enthusiasm extends to fields like Machine Learning and AI.
    With expertise in web development and proficiency in languages such as JavaScript, HTML, CSS, Python, Django, ReactJS, SQL, MySQL, and Delphi for desktop app development,
    I am always eager to learn and expand my skill set.`,

    `I am well-versed in utilizing agile methodologies, including tools like Jira,
    and I have experience with version control systems like Git and SVN.
    Continuous growth and delivering exceptional results drive my commitment to excellence.`,
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === paragraphs.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? paragraphs.length - 1 : prevSlide - 1
    );
  };
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white
    md:h-screen"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(230, 240, 250,0.8), rgba(230, 240, 250,0.8)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full"
      >
        <div className="px-12 sm:px-0">
          <p className="text-4xl font-bold inline text-black border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="p-20 px-12 sm:px-0">
          <div className="text-xl py-6 text-gray-500   md:text-justify-center">
            {paragraphs[currentSlide]}
          </div>
          <div className="flex justify-center mt-4 ">
            {paragraphs.map((paragraph, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-4 h-1 rounded-full mx-1 ${
                  index === currentSlide ? "bg-gray-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between  bottom-0 left-0 right-0">
            <button
              onClick={goToPreviousSlide}
              className="w-8 h-8 rounded-full bg-gray-500 ml-4"
            >
              {/* Previous arrow icon */}
              &lt;
            </button>

            <button
              onClick={goToNextSlide}
              className="w-8 h-8 rounded-full bg-gray-500 mr-4"
            >
              {/* Next arrow icon */}
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
