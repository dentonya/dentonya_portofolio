import React from 'react'
import HeroImage from '../assets/heroImage.jpg';
import {FiArrowRightCircle} from 'react-icons/fi';

export const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'> 
        <div className='max-w-screen-lg mx-auto flex flex-col items justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> Hey I'm Atonya Dennis</h2>
                <p className='text-gray-500 py-4 mx-w-md'>
                A software developer focused building the Frontend and
                 Backend of Websites and Web Applications that leads to the success of the overall product
                </p>
                <div>
                    <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500
                    to-blue-500 cursor-pointer'>
                        Portofolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <FiArrowRightCircle size={20} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                {/* <img src={HeroImage} alt="My Profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/> */}
                <img src={HeroImage} alt="My Profile" className='rounded-2xl mx-auto w-3/4 md:w-full hidden md:block' />
            </div>
        </div>
    </div>
  )
}
