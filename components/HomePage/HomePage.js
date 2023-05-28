import Link from "next/link";
import Button from "../Button/Button";

function PageText({ text, style }) {
  return (
    <div
      style={{
        fontWeight: 400,
        fontSize: "30px",
        lineHeight: "36px",
        ...style,
      }}
    >
      {text}
    </div>
  );
}

export default function HomePage(parms) {
  return (
    <div
      style={{
        width: "75%",
      }}
    >
      <div
        style={{
          width: "80%",
        }}
      >
        <PageText text="Finally you found me!!" />
        <PageText text="Hi! My name is" />
        <PageText
          text="Shreesh Srivastava"
          style={{
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "48px",
          }}
        />
        <PageText
          text="I live in Servers, and build cool stuffs"
          style={{
            fontWeight: 700,
            color: "#5E5E5E",
          }}
        />
        <div
          style={{ color: "rgba(158, 158, 158, 1)", fontSize: "0.8em" }}
        ></div>
        <PageText
          style={{
            fontWeight: 400,
            fontSize: "30px",
            lineHeight: "36px",
            color: "#9E9E9E",
          }}
          text={
            "I'm a software engineer specializing in building exceptional digital APIs (sometimes designing too)."
          }
        />
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Link href={"mailto:shreeshsrvstv@gmail.com"}>
            <Button text={<PageText text="Say Hello!" />} />
          </Link>
        </div>
      </div>
    </div>
  );
}
