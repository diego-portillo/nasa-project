// pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head'; // Import Head from next/head
import '../global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* Add the viewport meta tag here */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Other head elements go here */}
      </Head>
     <Component {...pageProps} />
      
    </>
  );
};

export default MyApp;