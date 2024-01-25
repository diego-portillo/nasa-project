import React from 'react';

const Footer = () => (
  <footer style={{ height: '10vh' }} className="fixed bottom-0 left-0 right-0 bg-black text-white w-full p-3">
    <div className="max-w-screen-xl mx-auto flex flex-col items-center sm:flex-row sm:justify-center">
      <a className=' sm:mr-2 text-xs' href="https://www.nasa.gov/">Made with NASA API</a>
      <a className=' sm:mr-2 text-xs' href="https://approachapp.com/">Developed for Approach.app</a>
      <p className=' sm:mr-2 text-xs'>&copy; {new Date().getFullYear()} Diego Portillo</p>
    </div>
  </footer>
);

export default Footer;
