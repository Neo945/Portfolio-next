import Head from "next/head";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import ComingSoon from "../components/ComingSoon/ComingSoon";

function MyApp({ Component, pageProps }) {
  const [isWindowSize, setIsWindowSize] = useState(true);
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 896) {
        setIsWindowSize(false);
      } else {
        setIsWindowSize(true);
      }
    };
    window.addEventListener("load", handleSize);
    window.addEventListener("resize", handleSize);
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isWindowSize ? (
        <Component {...pageProps} isWindowSize={isWindowSize} />
      ) : (
        <ComingSoon />
      )}
    </>
  );
}

export default MyApp;
