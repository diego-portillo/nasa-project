'use client'
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Apod  from '../../components/Apod';
const HomePage = () => {
  const [nasaImages, setNasaImages] = useState(null)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const fetchData = async () => {
    try {
      // make a get request to the nasa api to get the images https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
      const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
      const data = await res.json();
      // set the data to the nasaImages state
      setNasaImages(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, [loading, setNasaImages]);
  return (
    <Layout>
     {loading  ? (
 
  <div style={{textAlign: 'center', padding:'6rem', fontSize:'1rem'}}>Loading...</div>
) : nasaImages !=null ? (
  <Apod data={nasaImages}/>
) : (
  <div style={{textAlign: 'center', padding:'6rem', fontSize:'1rem'}}>No images found...</div>
)}
    </Layout>
  );
};

export default HomePage;