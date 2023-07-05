import React from 'react';
import { FaGithub, FaLinkedin,FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export const SocialLinks = () => {
  // array for social links
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />{' '}
        </>
      ),
      href: 'https://www.linkedin.com/in/dennis-atonya-0992151a3',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />{' '}
        </>
      ),
      href: 'https://github.com/dentonya',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />{' '}
        </>
      ),
      href: 'mailto:denatonya@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Twitter <FaTwitter size={30} />{' '}
        </>
      ),
      href: 'https://twitter.com/i/flow/login?redirect_after_login=%2Fden_atonya%3Ft%3DZS8ITQOlyCPTgW_r2DEY3w%26s%3D09',
    },
    {
    id: 5,
      child:(
        <>
        Twitter <FaInstagram size={30} />{' '}
      </>),
      href: 'https://www.instagram.com/atonyadenis/?igshid=ZDc4ODBmNjlmNQ==',
    },
    {
      id: 6,
      child: (
        <>
          Resume/Cv <BsFillPersonLinesFill size={30} />{' '}
        </>
      ),

      href: process.env.PUBLIC_URL + '/Atonya_Dennis_Resume.pdf',

      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className='flex flex-col top-[25%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' +
              ' ' +
              style
            }
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
              rel='noreferrer'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
