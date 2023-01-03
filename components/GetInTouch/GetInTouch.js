import Button from "../Button/Button";
import * as Icon from "../Icon/Icon";

export default function GetInTouch(parms) {
  return (
    <div
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
        {Object.keys(Icon).map((key, i) => {
          if (key === "Icon") return null;
          const IconComponent = Icon[key];
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
      <Button
        text="Say Hello!"
        style={{
          backgroundColor: "rgba(217, 217, 217, 0.19)",
          color: "white",
          border: "3px solid white",
        }}
      />
    </div>
  );
}
