import Head from "next/head";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import ComingSoon from "../components/ComingSoon";

function MyApp({ Component, pageProps }) {
  const [isWindowSize, setIsWindowSize] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 896) {
        setIsWindowSize(false);
      } else {
        setIsWindowSize(true);
      }
    });
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/vercel.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isWindowSize ? <Component {...pageProps} /> : <ComingSoon />}
    </>
  );
}

export default MyApp;
