import Link from "next/link";
import {
  GithubIconLink,
  InstagramIconLink,
  LinkedInIconLink,
  TwitterIconLink,
} from "../Icon/IconLink";

export default function LeftNav(props) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "20px",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {[
          LinkedInIconLink,
          TwitterIconLink,
          InstagramIconLink,
          GithubIconLink,
        ].map((Item, index) => (
          <div
            key={index}
            className={Item.name}
            style={{
              marginBottom: "10px",
              animation: "leftbounce 1s ease-out forwards",
              animationDelay: `${1 + 0.25 * index}s`,
              transform: "translateY(1000px)",
            }}
          >
            <Item color="black" />
          </div>
        ))}
        <div
          style={{
            width: "1px",
            height: "150px",
            backgroundColor: "black",
            animation: "drop 1s ease-out forwards",
          }}
        ></div>
      </div>
    </>
  );
}
