import Link from "next/link";
import Button from "../Button/Button";
import {
  GithubIconLink,
  InstagramIconLink,
  LinkedInIconLink,
  TwitterIconLink,
} from "../Icon/IconLink";

function HomePageIcon(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {[
          LinkedInIconLink,
          TwitterIconLink,
          InstagramIconLink,
          GithubIconLink,
        ].map((Item, index) => (
          <div
            key={index}
            className={Item.name}
            style={{
              marginLeft: "10px",
              // border: "1px solid black",
              // borderRadius: "50%",
              width: !props.isWindowSize ? "fit-content" : "50px",
              height: !props.isWindowSize ? "fit-content" : "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Item color="black" />
          </div>
        ))}
      </div>
    </>
  );
}

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

export default function HomePage(props) {
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
        <PageText
          text="Finally you found me!!"
          style={
            !props.isWindowSize
              ? {
                  fontWeight: 200,
                  fontSize: "15px",
                  lineHeight: "18px",
                }
              : {}
          }
        />
        <PageText
          text="Hi! My name is"
          style={
            !props.isWindowSize
              ? {
                  fontWeight: 200,
                  fontSize: "15px",
                  lineHeight: "18px",
                }
              : {}
          }
        />
        <PageText
          text="Shreesh Srivastava"
          style={
            !props.isWindowSize
              ? {
                  fontWeight: 350,
                  fontSize: "20px",
                  lineHeight: "24px",
                }
              : {
                  fontWeight: 700,
                  fontSize: "40px",
                  lineHeight: "48px",
                }
          }
        />
        <PageText
          text="I live in Servers, and build cool stuffs"
          style={
            !props.isWindowSize
              ? {
                  fontWeight: 350,
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#5E5E5E",
                }
              : {
                  fontWeight: 700,
                  color: "#5E5E5E",
                }
          }
        />
        {/* <div
          style={{ color: "rgba(158, 158, 158, 1)", fontSize: "0.8em" }}
        ></div> */}
        <PageText
          style={
            !props.isWindowSize
              ? {
                  fontWeight: 200,
                  fontSize: "15px",
                  lineHeight: "18px",
                  color: "#9E9E9E",
                }
              : {
                  fontWeight: 400,
                  fontSize: "30px",
                  lineHeight: "36px",
                  color: "#9E9E9E",
                }
          }
          text={
            "I'm a software engineer specializing in building exceptional digital APIs (sometimes designing too)."
          }
        />
        {!props.isWindowSize ? (
          <HomePageIcon isWindowSize={props.isWindowSize} />
        ) : null}
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Link href={"mailto:shreeshsrvstv@gmail.com"}>
            <Button
              text={
                <PageText
                  text="Say Hello!"
                  style={
                    !props.isWindowSize
                      ? {
                          fontWeight: 200,
                          fontSize: "15px",
                          lineHeight: "18px",
                        }
                      : {}
                  }
                />
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
