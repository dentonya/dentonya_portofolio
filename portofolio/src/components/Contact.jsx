import React from "react";
import bgImage from "../assets/bgImage.jpg";
import AnimationLottie from "../components/AnimationLottie";
import animationFile from "../assets/contact.json";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center text-white bg-[#0b0f19] px-6 sm:px-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-6xl w-full text-center sm:text-left">
        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Contact Form Section */}
          <div className="md:col-span-2 text-center">
            {/* Header */}
            <div className="relative inline-block mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white px-6 py-2 bg-orange-500 rounded-md">
                CONTACT ME
              </h2>
              <div className="absolute w-full border-t-2 border-orange-500 top-1/2 left-0 transform -translate-x-full"></div>
              <div className="absolute w-full border-t-2 border-orange-500 top-1/2 right-0 transform translate-x-full"></div>
            </div>

            {/* Contact Text */}
            <p className="text-gray-400 text-base mt-2">
              If you have any questions or concerns, please don't hesitate to get in touch.
            </p>
            <p className="text-gray-400 text-base mt-2">
              I'm open to collaborations, partnerships, and opportunities that align with my skills and interests.
            </p>
            <p className="text-gray-400 text-base mt-2">
              Let's connect!
            </p>
            <br />

            {/* Form */}
            <div className="px-6 sm:px-0 flex justify-center items-center">
              <form
                action="https://getform.io/f/14044879-d9c9-4a66-9a71-113df7e1f239"
                method="POST"
                className="flex flex-col w-full md:w-3/4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="6"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></textarea>

                <button className="text-white bg-orange-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Let's Talk
                </button>
              </form>
            </div>
          </div>

          {/* Animation Section */}
          <div className="flex md:col-span-1 justify-center md:justify-end pt-6 md:pt-0">
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

export default Contact;
