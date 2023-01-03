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
        }}
      >
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          shreeshsrvstv@gmail.com
        </div>
        <div
          style={{
            width: "1px",
            height: "150px",
            backgroundColor: "black",
          }}
        ></div>
      </div>
    </>
  );
}
