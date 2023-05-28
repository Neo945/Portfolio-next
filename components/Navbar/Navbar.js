import Link from "next/link";
import { Icon } from "../Icon/Icon";

export default function Navbar(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 40px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <Icon color="#000"></Icon>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "40%",
          justifyContent: "space-evenly",
        }}
      >
        {[
          { name: "About Me", link: "#aboutme" },
          { name: "Experience", link: "#experience" },
          { name: "Projects", link: "#projects" },
          { name: "Contact Me", link: "#contacts" },
        ].map((item, i) => {
          return (
            <Link href={item.link} key={i}>
              <div>{item.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
