import Link from "next/link";
import Button from "../Button/Button";
import * as IconLink from "../Icon/IconLink";

export default function GetInTouch(parms) {
  return (
    <div
      id="contacts"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "50%",
      }}
    >
      <div>Get In Touch</div>
      <div
        style={{
          display: "flex",
          width: "70%",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {Object.keys(IconLink).map((key, i) => {
          if (key === "Icon") return null;
          const IconComponent = IconLink[key];
          return (
            <div
              key={i}
              style={{
                width: "75px",
                height: "75px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                border: "1px solid white",
              }}
            >
              <IconComponent color="white" />
            </div>
          );
        })}
      </div>
      <Link href={"mailto:shreeshsrvstv@gmail.com"}>
        <Button
          text="Say Hello!"
          style={{
            backgroundColor: "rgba(217, 217, 217, 0.19)",
            color: "white",
            border: "3px solid white",
          }}
        />
      </Link>
    </div>
  );
}
