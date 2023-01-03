import Button from "../Button/Button";

export default function AboutMe(parms) {
  return (
    <>
      <div
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "60%",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            About Me
          </div>
          <div
            style={{
              fontSize: "20px",
            }}
          >
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! <br></br>
            <br></br> Here are a few technologies I&apos;ve been working with
            recently:
            <br></br>
            <br></br>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
              }}
            >
              {[1, 2, 3, 4].map((item, i) => (
                <div key={i}>&rarr; {item}</div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "30%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              paddingTop: "100%",
              borderRadius: "50%",
            }}
          ></div>
        </div>
      </div>
      <div></div>
    </>
  );
}
