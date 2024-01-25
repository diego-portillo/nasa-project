import React from 'react';
import { Metadata } from 'next';
import Layout from '../layout';
import Apod from '@/components/Apod';
import { ApodResponse } from '../../../index';

export const metadata: Metadata = {
  title: 'NASA Project',
};

interface PageProps {
  data: ApodResponse;
}

const Page: React.FC<PageProps> = async () => {
  let data = null;
  try {
    data = await getData();

  } catch (error) {
    console.error(error);
  }
  return (
    <div style={{ height: "80vh" }} className="flex flex-col items-center justify-center bg-black text-white">
      {data === null ? (
        <div style={{height:"100%"}}>Can't find any image...</div>
      ) : (
      <div style={{height:"100%"}}>
        <h1 className='text-center text-4xl p-2'>APOD: Astronomy Picture of the Day</h1>
      <Apod
        date={data.date}
        explanation={data.explanation}
        hdurl={data.hdurl}
        media_type={data.media_type}
        service_version={data.service_version}
        title={data.title}
        url={data.url}
      />
      </div>)
      }
    </div>
  );
};

export default Page;

async function getData() {
  const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}