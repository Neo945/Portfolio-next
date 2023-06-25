import Image from "next/image";
import Button from "../Button/Button";
import { useEffect, useRef, useState } from "react";
import HighlightText from "../HighlightText/HighlightText";

function TextContent(props) {
  return (
    <div style={props.style}>
      <br /> Hello there fellow visitors
      <br />- Welcome to my portfolio website! I am{" "}
      <HighlightText>Shreesh Srivastava</HighlightText>, a passionate and
      skilled <HighlightText>Software Engineer</HighlightText> with a deep love
      for creating innovative solutions. I specialize in building backend web
      services and developing some cool web applications.
      <br />
      - Over the years, I have honed my skills in front-end and back-end
      development, database management, and system architecture. Constant
      learning and staying up-to-date with industry trends are essential to my
      approach.
      <br />
      - As an engineer, Currently, I am trying to learn everything I can because
      there is no end for us.
      <br />- When I&apos;m not immersed in code, you can find me exploring new
      hiking trails, reading some random books or comics, or enjoying a{" "}
      <HighlightText>cup of coffee</HighlightText>. I believe in maintaining a
      healthy work-life balance, as it fuels my creativity and keeps me
      inspired.
      <br></br>That&apos;s all about it.
      <br></br>
      Thank you for visiting my portfolio website. I hope you enjoy it!
    </div>
  );
}

export default function AboutMe(props) {
  const ref = useRef();
  const aboutMeRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
    if (aboutMeRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          // console.log(entries);
          if (entries[0].isIntersecting && !props.navbarState[0].active) {
            props.setNavbarState((prev) => {
              let newState = [...prev];
              newState[0].active = true;
              return newState;
            });
          } else if (
            !entries[0].isIntersecting &&
            props.navbarState[0].active
          ) {
            props.setNavbarState((prev) => {
              let newState = [...prev];
              newState[0].active = false;
              return newState;
            });
          }
        },
        {
          threshold: 0.5,
        }
      );
      observer.observe(aboutMeRef.current);
    }
  }, [props]);
  return (
    <>
      <div
        ref={aboutMeRef}
        id="aboutme"
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: !props.isWindowSize ? "100%" : "70%",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "0.8em",
            }}
          >
            About Me
          </div>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            <TextContent style={{ fontSize: "0.8em" }} />
          </div>
        </div>
        <div
          ref={ref}
          style={{
            width: "30%",
            position: "relative",
            display: !props.isWindowSize ? "none" : "inline-block",
          }}
        >
          <div
            style={{
              width: dimensions.width * 0.75,
              height: dimensions.width * 0.75,
              background: "url(/image.png) center center / cover no-repeat",
              // paddingTop: "100%",
              borderRadius: "50%",
              position: "absolute",
              top: "0%",
              right: "0%",
            }}
          ></div>
          {/* <Image
            style={{
              borderRadius: "50%",
            }}
            src="/image.png"
            alt="Picture of the author"
            width={400}
            height={400}
          /> */}
        </div>
      </div>
    </>
  );
}
