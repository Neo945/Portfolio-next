export default function Button(props) {
  return (
    <>
      <button
        onClick={props.onClick}
        style={{
          backgroundColor: "white",
          border: "5px solid rgba(212, 212, 212, 1)",
          borderRadius: "10px",
          padding: "10px 40px",
          fontSize: "0.7em",
          ...props.style,
        }}
      >
        <div>{props.text}</div>
      </button>
    </>
  );
}
