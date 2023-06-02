export default function HighlightText({ children }) {
  return (
    <span
      style={{
        textDecoration: "underline",
        textDecorationThickness: "1px",
        color: "#5E5E5E",
        textShadow: "2px 2px 2px #868686",
      }}
    >
      {children}
    </span>
  );
}
