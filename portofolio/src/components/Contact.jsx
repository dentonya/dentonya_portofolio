import React from "react";
import bgImage from "../assets/bgImage.jpg";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(38,40,46,0.8), rgba(38,40,46,0.8)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full">

        <div className="px-12 sm:px-0">

          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="text-white-500  text-justify md:text-left text-xl py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="px-12 sm:px-0 flex justify-center items-center">
          <form
            action="https://getform.io/f/14044879-d9c9-4a66-9a71-113df7e1f239"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white rounded-md bg-gradient-to-r from-gray-500 to-gray-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;