import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../Icon/Icon";

export default function LeftNav(props) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "20px",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          className={`linkedin`}
          style={{
            marginBottom: "10px",
          }}
        >
          <LinkedInIcon color="black" />
        </div>
        <div
          className={`twitter`}
          style={{
            marginBottom: "10px",
          }}
        >
          <TwitterIcon color="black" />
        </div>
        <div
          className={`instagram`}
          style={{
            marginBottom: "10px",
          }}
        >
          <InstagramIcon color="black" />
        </div>
        <div
          className={`github`}
          style={{
            marginBottom: "10px",
          }}
        >
          <GithubIcon color="black" />
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
