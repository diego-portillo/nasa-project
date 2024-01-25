'use client'
import { useEffect, useState } from "react"
import Apod from "@/components/Apod";

export default function DynamicDatePage({ params }: { params: { date: string } }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='+params.date)
    .then(res => {
      if (res.ok) {
        setFound(true);
        return res.json();
      } else {
        setFound(false);
        return null;
      }
    })
    .then(data => setData(data))
    .catch(err => {
      setData(null);
      setFound(false);
    })
    .finally(() => setLoading(false));
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!found) {
    return <div style={{height:"100vh"}} className="text-center text-white bg-black h-screen">Can't find any image...</div>;
  }

  return (
    <div style={{ height: "80vh" }} className="flex flex-col items-center justify-center bg-black text-white">
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
    </div>
  );
};