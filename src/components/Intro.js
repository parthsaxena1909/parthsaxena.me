import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hi, "}
            <span className="intro-name">{"Parth"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
            I'm a software engineer in United Kingdom. I have great interest in full-stack development, artificial intelligence, human-computer interactions, and everything in between.
          </div>
          <a
            href="mailto:p.saxena@lancaster.ac.uk"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
