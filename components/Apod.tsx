// components/Apod.tsx
import React from 'react';

interface ApodProps {
  data: {
    title: string;
    url: string;
    explanation: string;
    // Add more types if needed
  };
}

const Apod: React.FC<ApodProps> = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.url} alt={data.title} />
      <p>{data.explanation}</p>
    </div>
  );
};

export default Apod;
