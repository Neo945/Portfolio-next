import Link from "next/link";
import Button from "../Button/Button";
import { createRef, useEffect, useState } from "react";

function Projects(props) {
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
      <Link href={props.link} target="_blank">
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            background: `url(${props.image}) no-repeat center center / cover`,
            display: "flex",
            justifyContent: "center",
            backgroundColor: props.color,
            alignItems: "center",
          }}
          onMouseOver={(e) => {
            e.target.children[0].style.opacity = "1";
          }}
          onMouseOut={(e) => {
            e.target.children[0].style.opacity = "0";
          }}
        >
          <div
            style={{
              transition: "all 0.5s ease",
              opacity: "0",
              width: "50%",
              aspectRatio: "1/1",
              backgroundColor: "rgba(217, 217, 217, 0.76)",
              borderRadius: "50%",
              color: "white",
              pointerEvents: "none",
              fontSize: "0.4em",
              display: "flex",
              textAlign: "center",
              color: "black",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            View
          </div>
        </div>
      </Link>
    </div>
  );
}

function SideProject(props) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "400px",
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
            backgroundSize: "contain",
            position: "absolute",
            right: props.right ? 0 : null,
            left: props.left ? 0 : null,
          }}
        ></div>
        <div
          style={{
            // height: "70%",
            width: "80%",
            backgroundColor: "rgba(234, 234, 234, 0.87)",
            position: "absolute",
            left: props.right ? 0 : null,
            right: props.left ? 0 : null,
            padding: "20px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "0.6em",
            }}
          >
            {props.link ? (
              <>
                {`${props.title} | `}
                <Link href={props.link} target="_blank">
                  Github
                </Link>
              </>
            ) : (
              `${props.title}`
            )}
          </div>
          <div
            style={{
              fontSize: "0.5em",
            }}
          >
            {props.content.map((item, i) => (
              <div key={i}>- {item}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const randData = [
  {
    title: "Musica",
    image: "/musica3.png",
    link: "https://github.com/Neo945/Musica",
    color: null,
  },
  {
    title: "Pharmacy management system",
    image: "/pharm.png",
    link: "https://github.com/Neo945/Pharmacy-Management-System/",
    color: null,
  },
  {
    title: "Dev's Club",
    image: "/mad.png",
    link: "https://github.com/Neo945/MAD-Website",
    color: "black",
  },
  {
    title: "Algorithmic Trading Bot",
    image: "/stocks.jpg",
    link: "https://github.com/Neo945/Algorithmic-Trading-Bot",
  },
];

export default function Project(props) {
  const expRef = createRef();
  const projRef = createRef();
  const [deteData, _] = useState([
    {
      id: "Experience",
      ref: expRef,
      content: [
        {
          title: "Ajnalens",
          content: [
            "Contributed to a flagship remote collaborative application in Augmented Reality",
            "Revamped the front-end for the application",
            "Benchmarked the designs implemented with competitors like Mozilla Hub",
            "Gained insight into 3D graphics and researched technologies like Three Js, WebGL etc.",
            "Co-wrote Annotations which let the user place objects over the 3D model.",
            "Introduced sketching feature in Augmented Reality. This was one of the major changes which allowed the user to draw in 3D space.",
            "Improved the development process by creating a separate development environment for the application",
            "Brought down the loading time of the application by caching the necessary modules of the application in the browser",
            "Identified the need for documentation of the application and its features and co-wrote the SRS document",
          ],
          image: "/ajna3.jpg",
        },
        {
          title: "Brindley Technologies",
          content: [
            "Contributed to Customer Relationship Management software.",
            "CRM are used to maintain a company’s relationships and interactions with customers and potential customers across the entire customer lifecycle, spanning marketing, sales, presales, operations and customer service interactions",
            "Designed a workflow of data from potential customers to clients for a specific project. Co-wrote the backend APIs withrespect to the business logic",
            "Benchmarked the designs implemented with competitors like ZOHO CRM",
            "Maintained the leads and feedback of each customer at every stage of the customer lifecycle for a particular job",
            "Implemented a script for web scraping data of potential customers from LinkedIn.",
            "Designed a CI/CD pipeline using GitHub Actions and AWS EC2 servers to integrate and deploy the project",
            "Deployed backend server on EC2 Instance using NGINX server as a reverse proxy",
          ],
          image: "/brad2.png",
        },
      ],
    },
    {
      id: "Projects",
      ref: projRef,
      content: [
        {
          title: "Road Lane Line Detection",
          content: [
            "Conceptualized and contributed to an algorithm that precisely detects the road lane lines and indicates the driver information related to directions.",
            "Designed the algorithm using Haugh Transform to detect the road lane lines.",
            "Implemented an Image Segmentation method to detect the direction using histogram analysis and perspective transformations in order to work under complex circumstances.",
            "Trained the algorithm using the CuLane Dataset of videos.",
            "Published an article on Springer conferences.",
          ],
          image: "/road.avif",
          link: "https://github.com/Neo945/Road-lane-line-detection",
        },
        {
          title: "String Review",
          content: [
            "Conceptualized and contributed to a website that recommends different movies to the users based on their past activities on the website",
            "Trained the machine learning model using the cosine similarity algorithm and datasets fetched from IMDB API. 89% accuracy score achieved.",
            "Upgraded the system by adding the caching feature which reduced the cost of processing.",
            "Modified the model by integrating both the collaborative and content-based filtering algorithms together in the model.",
          ],
          image: "/movie.jpg",
          link: "https://github.com/Neo945/Movie-Recommender-System",
        },
      ],
    },
  ]);
  useEffect(() => {
    if (expRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              props.setNavbarState((prev) => {
                let newState = [...prev];
                newState[1].active = true;
                return newState;
              });
            } else {
              props.setNavbarState((prev) => {
                let newState = [...prev];
                newState[1].active = false;
                return newState;
              });
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
      observer.observe(expRef.current);
    }
    if (projRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // console.log(entry);
            if (entry.isIntersecting) {
              props.setNavbarState((prev) => {
                let newState = [...prev];
                newState[2].active = true;
                return newState;
              });
            } else {
              props.setNavbarState((prev) => {
                let newState = [...prev];
                newState[2].active = false;
                return newState;
              });
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
      observer.observe(projRef.current);
    }
  }, [props, expRef, projRef]);
  return (
    <>
      <div
        style={{
          width: "75%",
        }}
      >
        <div style={{ fontWeight: "bold" }}>Things I have Done So far</div>
        <div style={{ fontSize: "0.8em" }}>
          {deteData.map((item, i) => {
            return (
              <div ref={item.ref} key={i} id={item.id.toLocaleLowerCase()}>
                <div style={{ fontWeight: "bold", marginTop: "20px" }}>
                  {item.id}
                </div>
                <div>
                  {item.content.map((item2, i2) => (
                    <SideProject
                      key={i2}
                      title={item2.title}
                      content={item2.content}
                      image={item2.image}
                      right={i2 % 2 == 0}
                      left={i2 % 2 == 1}
                      link={item2.link}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div style={{ fontWeight: "bold", marginTop: "20px" }}>Few More:</div>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: "20px",
            }}
          >
            {randData.map((item, i) => {
              return (
                <Projects
                  key={i}
                  title={item.title}
                  image={item.image}
                  link={item.link}
                  color={item.color}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
