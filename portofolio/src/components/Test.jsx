import React from 'react'
import bgImage from '../assets/bgImage.jpg'
import pagination from '../assets/portfolio/pagination.jpg'

import { Carousel } from 'flowbite-react';

export default function Test() {
  return (
      <div name="about" className='bg-gradient-to-b from-black to-gray-800 w-full text-white
      md:h-screen'
      style={{
        backgroundImage: `linear-gradient(to right, rgba(230, 240, 250,0.8), rgba(230, 240, 250,0.8)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>  

      <Carousel className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
              <div className='px-12 sm:px-0'>
                  <p className='text-4xl font-bold inline text-black border-b-4 border-gray-500'>About</p>
              </div>
  
              <div className='text-xl py-6 px-12 sm:px-0 text-gray-500   md:text-left'>
  
              <img src={pagination}></img>
              </div>
  
              <div className='text-xl px-12 sm:px-0 text-gray-500  md:text-left'>
               <p>Hello</p>
              </div>
          </div>
          </Carousel>
      </div>

    )
  }


