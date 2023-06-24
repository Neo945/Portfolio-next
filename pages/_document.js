import { Html, Head, Main, NextScript } from "next/document";

const loaderStyle = `
body{
display: block;
}
#oppsbg {
  width: 1px;
  margin: 0 20px;
  background-color: white;
}
#opps {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: white;
  z-index: 1600;
}
#flex {
  display: flex;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.loader {
 --clr: #3498db;
 /* color of spining  */
 width: 50px;
 height: 50px;
 position: relative;
}

.loader div:nth-child(1), .loader div:nth-child(2) {
 content: "";
 position: absolute;
 top: -10px;
 left: -10px;
 width: 100%;
 height: 100%;
 border-radius: 100%;
 border: 10px solid transparent;
 border-top-color: var(--clr);
}

.loader div:nth-child(1) {
 z-index: 100;
 animation: spin 1s infinite;
}

.loader div:nth-child(2) {
 border: 10px solid #ccc;
}

@keyframes spin {
 0% {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
 }
 100% {
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
 }
}`;

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <head>
        <style>{loaderStyle}</style>
      </head>
      <body>
        {/* loader */}
        <div id={"globalLoader"}>
          <div className="loader">
            <div />
            <div />
          </div>
        </div>

        {/* opps */}
        <div id={"opps"}>
          <div id="flex">
            <div id="oppsbg"></div>
            <h1>Opps!! Website coming soon in your size</h1>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
