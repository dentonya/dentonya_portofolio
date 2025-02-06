import React from 'react';
import bgImage from '../assets/bgImage.jpg';
import qrcode from '../assets/articles/qrcode.jpg';
import vlan from '../assets/articles/vlan.jpg';
import pagination from '../assets/articles/pagination.jpg';
import AnimationLottie from "../components/AnimationLottie";
import animationFile from "../assets/writing.json";

const Articles = () => {
  // Array of articles images
  const articles = [
    { id: 1, 
      src: pagination, 
      text: 'Custom Pagination Using Django REST Framework with Vue', 
      link: 'https://www.cloudzilla.ai/dev-education/custom-pagination-using-django-rest-framework/'
    },
    { id: 2, 
      src: qrcode, 
      text: 'QR Code Scanner User Authentication System in Computer Vision', 
      link: 'https://www.cloudzilla.ai/dev-education/building-qr-code-authentication-system/'
    },
    { id: 3, 
      src: vlan,
      text: 'Inter-VLAN Routing on Local Area Networks using Packet Tracer', 
      link: 'https://www.cloudzilla.ai/dev-education/inter-vlan-routing/' 
    },
  ];


  return (
    <div
      name="articles"
      className="min-h-screen flex items-center justify-center text-white bg-[#0b0f19] px-6 sm:px-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="max-w-6xl w-full text-center sm:text-left">
        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          {/* Articles Cards */}
          <div className="w-full md:w-3/4 text-center">
            <div className="relative inline-block mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white px-6 py-2 bg-orange-500 rounded-md">
                ARTICLES
              </h2>
              <div className="absolute w-full border-t-2 border-orange-500 top-1/2 left-0 transform -translate-x-full"></div>
              <div className="absolute w-full border-t-2 border-orange-500 top-1/2 right-0 transform translate-x-full"></div>
            </div>
            <p className='text-gray-400 text-base mt-2'>Some of the articles I wrote while a technical writer at Section</p>
            <p className='text-gray-400 text-base mt-2'>My love for Networking was just something else...😄</p> <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
              {articles.map(({ id, src, text, link }) => (
                <div key={id} className="w-full bg-gradient-to-br from-[#161b30] to-[#0b0f19] p-6 rounded-lg shadow-md border border-[#1f2940] min-h-[200px]">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 mb-4"
                  />
                  <p className="text-white font-semibold text-center mb-4">{text}</p>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={link}
                      className="w-full px-6 py-3 m-2 text-center duration-200 hover:scale-105 text-white bg-orange-500 rounded-md"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <a
                href="https://www.cloudzilla.ai/dev-education/author/atonya-dennis/"
                className="text-white bg-orange-500 px-4 py-2 rounded-full duration-200 hover:scale-105 hover:bg-orange-600"
              >
                View More
              </a>
            </div>
          </div>

          {/* Animation Section */}
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

export default Articles;
