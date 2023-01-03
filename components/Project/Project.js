import Button from "../Button/Button";

function RightProject(props) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "200px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "44%",
            borderRadius: "10px",
            background: `url(${props.image}) no-repeat center center / cover`,
            position: "absolute",
            left: 0,
          }}
        ></div>
        <div
          style={{
            height: "70%",
            width: "80%",
            backgroundColor: "rgba(234, 234, 234, 0.87)",
            position: "absolute",
            right: 0,
            textAlign: "right",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "0.8em",
            }}
          >
            {props.title}
          </div>
          <div
            style={{
              fontSize: "0.6em",
            }}
          >
            {props.content}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

function LeftProject(props) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "200px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "44%",
            borderRadius: "10px",
            background: `url(${props.image}) no-repeat center center / cover`,
            position: "absolute",
            right: 0,
          }}
        ></div>
        <div
          style={{
            height: "70%",
            width: "80%",
            backgroundColor: "rgba(234, 234, 234, 0.87)",
            position: "absolute",
            left: 0,
            padding: "20px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "0.8em",
            }}
          >
            {props.title}
          </div>
          <div
            style={{
              fontSize: "0.6em",
            }}
          >
            {props.content}
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "10px",
          background: `url(/download.png) no-repeat center center / cover`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseOver={(e) => {
          // e.target.style.filter = "blur(1.5em)";
          e.target.children[0].style.opacity = "1";
        }}
        onMouseOut={(e) => {
          // e.target.style.filter = "blur(0px)";
          e.target.children[0].style.opacity = "0";
        }}
      >
        <div
          style={{
            transition: "all 0.5s ease",
            opacity: "0",
            width: "70%",
            aspectRatio: "1/1",
            backgroundColor: "rgba(217, 217, 217, 0.76)",
            borderRadius: "50%",
            color: "white",
            pointerEvents: "none",
            fontSize: "0.7em",
            display: "flex",
            textAlign: "center",
            color: "black",
            alignItems: "center",
          }}
        >
          View Porject
        </div>
      </div>
    </div>
  );
}

export default function Project(parms) {
  return (
    <>
      <div
        style={{
          width: "75%",
        }}
      >
        <div style={{ fontWeight: "bold" }}>Things I have Done So far</div>
        <div style={{ fontSize: "0.8em" }}>
          {["Experience", "Projects", "Blogs"].map((item, i) => {
            return (
              <div key={i}>
                <div style={{ fontWeight: "bold" }}>{item}</div>
                <div>
                  <RightProject
                    title="Ajnalens"
                    content="Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development"
                    image="/download.png"
                  />
                  <LeftProject
                    title="Ajnalens"
                    content="Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development"
                    image="/download.png"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div style={{ fontWeight: "bold" }}>Few More:</div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: "20px",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => {
              return <Projects key={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
