export default function ComingSoon() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "1px",
            margin: "0 20px",
            backgroundColor: "white",
          }}
        ></div>
        <h1>Opps!! Website coming soon in your size</h1>
      </div>
    </div>
  );
}
