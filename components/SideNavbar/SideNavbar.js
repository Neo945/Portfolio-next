import Link from "next/link";
import { useState } from "react";

function StrokeText(props) {
  const [mouseOver, setMouseOver] = useState(props.active);

  return (
    <>
      <Link href={props.link}>
        <div
          onMouseOver={() => {
            setMouseOver(true);
          }}
          onMouseLeave={() => {
            setMouseOver(false);
          }}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="stroke"
            style={{
              transition: "all 0.25s ease",
              backgroundColor: props.active || mouseOver ? "black" : "#A6A6A6",
              width: props.active || mouseOver ? "40px" : "20px",
              height: "2px",
            }}
          ></div>
          <div
            style={{
              transition: "all 0.25s ease",
              textAlign: "left",
              margin: "5px 10px",
              color: props.active || mouseOver ? "black" : "#A6A6A6",
            }}
          >
            {props.text}
          </div>
        </div>
      </Link>
    </>
  );
}

export default function SideNavbar(props) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "30px",
          left: "0",
        }}
        className="side-navbar"
      >
        <div
          style={{
            display: "relative",
          }}
        >
          {props.navbarState.map((item, i) => {
            return (
              <StrokeText
                key={i}
                text={item.name}
                link={item.link}
                active={item.active}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
