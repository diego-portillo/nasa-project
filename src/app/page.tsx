import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'NASA Project',
};

const Page: React.FC = () => {
  return (
    
      <div style={{ height: "80vh" }} className="flex flex-col items-center justify-center bg-black text-white">
        <h1 className='text-center text-4xl p-2'>Welcome to NASA Project</h1>
        <p className='text-center text-xl'>Explore the wonders of the universe with NASA's Astronomy Picture of the Day.</p>
        <p className='text-center mt-4'>
          <Link href="/today" className='bg-blue-500 p-2 border rounded'>See today's picture</Link>
        </p>
      </div>
    
  );
};

export default Page;
