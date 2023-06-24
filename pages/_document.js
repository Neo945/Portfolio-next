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
.loader-icon {
  animation: beat 0.8s infinite ease-out;
  height: 100px;
}
@keyframes beat {
  0% { transform: scale(0.8) }
    14% { transform: scale(1.1) }
    96% { transform: scale(1) }
    100% { transform: scale(0.8) }
}

`;

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
            <img className="loader-icon" src="/icon.svg" alt="logo" />
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
