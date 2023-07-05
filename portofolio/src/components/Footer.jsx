import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter,FaInstagram} from 'react-icons/fa';


const Footer = () => {
  const socialLinks = [
    
    {
      id: 1,
      icon: <FaGithub />,
      url: 'https://github.com/dentonya',
    },
    {
      id: 2,
      icon: <FaTwitter />,
      url: 'https://twitter.com/i/flow/login?redirect_after_login=%2Fden_atonya%3Ft%3DZS8ITQOlyCPTgW_r2DEY3w%26s%3D09',
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/dennis-atonya-0992151a3',
    },
    {
      id: 4,
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/atonyadenis/?igshid=ZDc4ODBmNjlmNQ==',
    },
   
   
  ];

  return (
    <div className="font-general-regular flex justify-center  text-center bg-slate-200 text-gray-500 w-full h-10 px-4">
      <div className="text-lg text-ternary-dark dark:text-ternary-light flex items-center">
       
        <ul className="flex gap-4 sm:gap-8 ml-4">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl md:text-3xl"
              >
                {link.icon}
              </a>
            </li>
          ))}
         <p className='flex items-center'> &copy; {new Date().getFullYear()}</p>
        </ul>
         
        
        
      </div>
    </div>
  );
};

export default Footer;
