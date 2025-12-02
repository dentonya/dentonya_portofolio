import React from 'react';
import qrcode from '../assets/articles/qrcode.jpg';
import vlan from '../assets/articles/vlan.jpg';
import pagination from '../assets/articles/pagination.jpg';

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
    <div name="articles" className="section-container bg-neutral-white">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">Articles</h2>
          <div className="w-20 sm:w-24 h-1.5 bg-brand-orange mx-auto mt-4 rounded-full"></div>
          <p className='text-neutral-gray-600 mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4'>
            Technical articles exploring networking, web development, and software engineering topics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map(({ id, src, text, link }) => (
            <div key={id} className="card card-hover group bg-white flex flex-col">
              <div className="overflow-hidden rounded-2xl mb-4">
                <img
                  src={src}
                  alt={text}
                  className="rounded-2xl w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-neutral-black font-semibold text-base sm:text-lg mb-4 leading-tight group-hover:text-brand-orange transition-colors duration-300">{text}</h3>
              <div className="mt-auto">
                <a
                  href={link}
                  className="btn-primary w-full inline-block text-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read Article
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.cloudzilla.ai/dev-education/author/atonya-dennis/"
            className="btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            View All Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articles;
