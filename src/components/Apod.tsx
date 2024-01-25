import React from 'react';
import { ApodResponse } from '../../index';

const Apod: React.FC<ApodResponse> = ({ date, explanation, hdurl, media_type, service_version, title, url }) => {
  return (
    <div className="bg-gray-800 text-white p-8 shadow-md flex flex-col sm:flex-row p-3">
      <div className="sm:w-2/3 pr-8 h-100">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-sm mb-2">{date}</p>
        <p className="text-sm mb-2">{explanation}</p>
        <a
          href={hdurl}
          download={`${title}_hd.jpg`}
          className="mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Download HD
        </a>
      </div>
      <div className="sm:w-1/3 h-full flex items-center justify-center mb-14">
        <img
          style={{ maxHeight: '27rem' }}
          className="w-auto object-cover rounded-md shadow-md max-h-50"
          src={hdurl}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Apod;
