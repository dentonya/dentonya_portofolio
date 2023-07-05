import React from 'react'
import bgImage from '../assets/bgImage.jpg'

const About = () => {
  return (
    <div name="about" className='bg-gradient-to-b from-black to-gray-800 w-full text-white
    md:h-screen'
    style={{
      backgroundImage: `linear-gradient(to right, rgba(230, 240, 250,0.8), rgba(230, 240, 250,0.8)), url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full'>
            <div className='px-12 sm:px-0'>
                <p className='text-4xl font-bold inline text-black border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl py-6 px-12 sm:px-0 text-gray-500   md:text-left'>

            I am a passionate and self-motivated individual with a strong focus on technology. 
            I have extensive experience in software development, networking, and freelancing projects. 
            My enthusiasm extends to fields like Machine Learning and AI.
             With expertise in web development and proficiency in languages such as 
             JavaScript, HTML, CSS, Python, Django, ReactJS,SQL,MySql and Delphi for desktop app development, 
             I am always eager to learn and expand my skill set.
            </p>

            <p className='text-xl px-12 sm:px-0 text-gray-500  md:text-left'>

            I am well-versed in utilizing agile methodologies,
              including tools like Jira, and I have experience with version control systems like Git and SVN.
               Continuous growth and delivering exceptional results drive my commitment to excellence.
            </p>
        </div>
    </div>
  )
}

export default About