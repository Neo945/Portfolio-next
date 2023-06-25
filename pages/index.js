import Head from "next/head";
import Image from "next/image";
import LeftNav from "../components/LeftNav/LeftNav";
import Navbar from "../components/Navbar/Navbar";
import Page from "../components/Page/Page";
import RightNav from "../components/RightNav/RightNav";
import styles from "../styles/Home.module.css";
import HomePage from "../components/HomePage/HomePage";
import AboutMe from "../components/AboutMe/AboutMe";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Project from "../components/Project/Project";
import { createRef, useEffect, useState } from "react";
import SideNavbar from "../components/SideNavbar/SideNavbar";

// function Cursor() {
//   useEffect(() => {
//     const cursor = document.querySelector(".cursor");
//     document.addEventListener("mousemove", (e) => {
//       cursor.style.left = e.pageX + "px";
//       cursor.style.top = e.pageY + "px";
//       // "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;";
//     });
//     // document.addEventListener("click", () => {
//     //   cursor.classList.add("expand");
//     //   setTimeout(() => {
//     //     cursor.classList.remove("expand");
//     //   }, 500);
//     // });
//   }, []);

//   return (
//     <>
//       <div
//         className="cursor"
//         style={{
//           position: "absolute",
//           top: "0px",
//           left: "0px",
//           width: "200px",
//           height: "200px",
//           borderRadius: "50%",
//           background:
//             "radial-gradient( 600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80% )",
//           transform: "translate(-50%, -50%)",
//           pointerEvents: "none",
//           zIndex: "1000",
//         }}
//       ></div>
//     </>
//   );
// }

export default function Home(props) {
  console.log(props.isWindowSize);
  const [navbarState, setNavbarState] = useState([
    { name: "About Me", link: "#aboutme", active: false },
    { name: "Experience", link: "#experience", active: false },
    { name: "Projects", link: "#projects", active: false },
    { name: "Contact Me", link: "#contacts", active: false },
  ]);
  const ref = createRef();
  const [isOnTop, setIsOnTop] = useState(true);
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", function (e) {
        if (e.target.scrollTop > 65) {
          setIsOnTop(false);
        } else {
          setIsOnTop(true);
        }
      });
    }
  }, [ref]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Shreesh&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {/* <Cursor></Cursor> */}
      <main
        ref={ref}
        className={styles.main}
        style={{
          // scrollSnapType: "y mandatory",
          overflowY: "scroll",
          height: "100vh",
          position: "relative",
          scrollBehavior: "smooth",
        }}
      >
        {isOnTop ? (
          <Navbar navbarState={navbarState}></Navbar>
        ) : (
          <SideNavbar navbarState={navbarState}></SideNavbar>
        )}
        <LeftNav></LeftNav>
        <RightNav></RightNav>
        <Page>
          <HomePage></HomePage>
        </Page>
        <Page
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <AboutMe
            navbarState={navbarState}
            setNavbarState={setNavbarState}
          ></AboutMe>
        </Page>

        <Page
          style={{
            height: "fit-content",
            margin: "20px 0px",
          }}
        >
          <Project
            navbarState={navbarState}
            setNavbarState={setNavbarState}
          ></Project>
        </Page>
        {/* {props.isWondowSize ? ( */}
        <Page
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <GetInTouch
            navbarState={navbarState}
            setNavbarState={setNavbarState}
          ></GetInTouch>
        </Page>
        {/* )  */}
        {/* : null} */}
      </main>
    </div>
  );
}
