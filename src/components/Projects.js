import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Xuja": {
        title: "Xuja",
        desc:
          "A 2D platformer game where you play as a knight and fight the enemies to reach Xuja",
        techStack: "Java LibGdx",
        link: "",
        open: "",
        image: "/assets/xujasample.jpg"
      },
      "Solar System": {
        title: "Solar System",
        desc:
          "A Java simulation of the planet system revolving around the sun.",
        techStack: "Java Libgdx ",
        link: "",
        open: "",
        image: "/assets/sys1.jpg"
      }
    };
    const projects = {
      "Project Management": {
        desc:
          "A project management website which allows the user to do basic CRUD functions.",
        techStack: "Javascript, Node.js, Express.js, MongoDB, Bootstrap,Apollo, React,HTML",
        link: "",
        open: ""
      },
      "Performance Database Management System": {
        desc:
          "An application associated with Lancaster University, with a Java JDBC API and SQLite.",
        techStack: "Java JDBC API, SQLite",
        link: "",
        open: ""
      },
      "DNA Sequence Identification": {
        desc:
          "DNA sequence matching with DNA nucleotides using Javascript based algorithm.",
        techStack: "Javascript",
        link: "",
        open: ""
      },
      "Smart Fridge Mobile App Prototype": {
        desc:
          "A system built in considering human-computer interactions and following user-centered approach.",
        techStack: "Figma and Balsamiq",
        link:
          ""
      },
      
      "Campus Parking System for Lancaster University": {
        desc:
          "Developed the proof of concept for the University's campus parking system used by thousands of students and staff, during my time working as a full-stack developer.",
        techStack: "Blazor web assembly, .NET5, React.",
        link: "",
        open: ""
      },
      "OSPF routing and web server with proxy": {
        desc:
          "Built networking tools in python, such as ping, traceroute, web server, and web proxy. Moreover built an OSPF routing topology using IMUNES.",
        techStack: "Python, IMUNES",
        link: "",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg dark">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
