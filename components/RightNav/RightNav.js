import Link from "next/link";

export default function RightNav(porps) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          right: "20px",
          top: 0,
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            marginBottom: "10px",
            animation: "leftbounce 1s ease-out forwards",
            animationDelay: "1s",
            transform: "translateY(1000px)",
          }}
        >
          <Link href={"mailto:shreeshsrvstv@gmail.com"}>
            shreeshsrvstv@gmail.com
          </Link>
        </div>
        <div
          style={{
            width: "1px",
            height: "150px",
            backgroundColor: "black",
            transform: "translateY(1000px)",
            animation: "drop 1s ease-out forwards",
          }}
        ></div>
      </div>
    </>
  );
}
