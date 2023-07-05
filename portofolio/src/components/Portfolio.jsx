import React from 'react'

import qrcode from '../assets/portfolio/qrcode.jpg'
import watermark from '../assets/portfolio/watermark.jpg'
import vlan from '../assets/portfolio/vlan.jpg'
import pagination from '../assets/portfolio/pagination.jpg'




const Portfolio = () => {
    //array of portfolio images
    const portfolios = [
        {
            id: 1,
            src: qrcode,
            text:'QR Code Scanner User Authentication System in Computer Vision',
            link: 'https://www.section.io/engineering-education/building-qr-code-authentication-system/',
            code:'https://github.com/dentonya/QR_Code-Authentication-System',
        },
        {
            id: 2,
            src: watermark,
            text:'Multiple Image Watermarking Using OpenCV With Python',
            link:'https://www.section.io/engineering-education/image-watermarking-with-opencv-python/',
            code:'https://github.com/dentonya/Image_Watermarking',
        },
        {
            id: 3,
            src: vlan,
            text:'Inter-VLAN Routing on Local Area Networks using Packet Tracer',
            link:'https://www.section.io/engineering-education/inter-vlan-routing/',
        },
        {
            id: 4,
            src: pagination,
            text:'Custom Pagination Using Django REST Framework with Vue',
            link:'https://www.section.io/engineering-education/custom-pagination-using-django-rest-framework/',
            code:'https://github.com/dentonya/Custom_Pagination_With_Django_REST_Framework',
        },

      

    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full'>
        <div className='px-12 sm:px-0'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='text-xl py-6 text-gray-500  text-justify md:text-left'>Check out some of my works: Articles and Projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0'>
        {
            portfolios.map(({id,src,text,link,code}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <p className='w-3/4 px-2 m-4 duration-200 hover:scale-105 text-gray-500  text-justify md:text-left'>{text}</p>
                <div className='flex items-center justify-center'>
                <a href={link} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                 target='_blank'
                 rel='noreferrer'>Link</a>
        <a href={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
         target='_blank'
         rel='noreferrer'>Code</a>
                </div>
            </div>

            ))
        }
         </div>       
        
      </div>
    </div>
  )
}

export default Portfolio