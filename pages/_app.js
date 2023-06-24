import Head from "next/head";
import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isWindowSize, setIsWindowSize] = useState(false);
  useEffect(() => {
    const loader = document.getElementById("globalLoader");
    if (loader) loader.style.display = "none";
    if (window.innerWidth < 896) {
      setIsWindowSize(false);
    } else {
      const opps = document.getElementById("opps");
      if (opps) opps.style.display = "none";
      setIsWindowSize(true);
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} isWindowSize={isWindowSize} />
    </>
  );
}

export default MyApp;
