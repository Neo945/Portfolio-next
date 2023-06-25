export default function Page(props) {
  return (
    <div
      style={{
        // scrollSnapAlign: "start",
        // height: props.isWindowSize ? "100vh" : "fit-content",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "40px",
        ...props.style,
        marginBottom: props.isWindowSize ? "0px" : "100px",
      }}
    >
      {props.children}
    </div>
  );
}
