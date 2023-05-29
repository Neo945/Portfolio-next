export default function Page(props) {
  return (
    <div
      style={{
        scrollSnapAlign: "start",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "40px",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}
