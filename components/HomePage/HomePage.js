import Button from "../Button/Button";

export default function HomePage(parms) {
  return (
    <div
      style={{
        width: "75%",
      }}
    >
      <div
        style={{
          width: "70%",
        }}
      >
        <div>Finally you found me!!</div>
        <div>Hi! My name is</div>
        <div style={{ fontWeight: "bolder" }}>Shreesh Srivastava</div>
        <div style={{ fontWeight: "bolder", color: "rgba(94, 94, 94, 1)" }}>
          I am a Full Stack Developer
        </div>
        {/* <div>I live in web servers and build some cool stuffs</div> */}
        <div style={{ color: "rgba(158, 158, 158, 1)" }}>
          I&apos;m a software engineer specializing in building (and
          occasionally designing) exceptional digital experiences.
        </div>
        <Button text="Hello" />
      </div>
    </div>
  );
}
