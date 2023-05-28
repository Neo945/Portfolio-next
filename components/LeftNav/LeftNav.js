import Link from "next/link";
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
        {[
          {
            name: "linkedin",
            link: "https://www.linkedin.com/in/shreesh-srivastava/",
            icon: <LinkedInIcon color="black" />,
          },
          {
            name: "twitter",
            link: "https://www.linkedin.com/in/shreesh-srivastava/",
            icon: <TwitterIcon color="black" />,
          },
          {
            name: "instagram",
            link: "https://www.linkedin.com/in/shreesh-srivastava/",
            icon: <InstagramIcon color="black" />,
          },
          {
            name: "github",
            link: "https://www.linkedin.com/in/shreesh-srivastava/",
            icon: <GithubIcon color="black" />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={item.name}
            style={{
              marginBottom: "10px",
            }}
          >
            <Link href={item.link} target={"_blank"}>
              {item.icon}
            </Link>
          </div>
        ))}
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
