import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
      "Cumbria Innovations Platform 2": {
        jobTitle: "Software Developer @",
        duration: "JAN 2023 - MAR 2023",
        desc: [
          "Led and developed a learning management system aimed at assisting the business through innovation.",
          "Worked closely with the business to identify project needs and solutions. Developed several prototypes and presented them to the business, ultimately delivering a solution that increased customer satisfaction.",
        ]
      },
      "Lancashire Cyber Foundry": {
        jobTitle: "Software Developer Intern @",
        duration: "NOV 2022 - FEB 2022",
        desc: [
          "Collaborated with an SME to develop and implement technical solutions for onboarding new clients, resulting in a streamlined and efficient process that improved the company's bottom line, including a 50% reduction in onboarding time while demonstrating strong collaboration skills, technical expertise, and a drive for innovation.",
          "Spearheaded the development of a customer onboarding system using a combination of technologies such as React, Bootstrap, MongoDB, GraphQL, NextJS, and Apollo Client.",
          "Employed a user-centred approach throughout the entire development cycle.",
        ]
      },
      "Lancaster University": {
        jobTitle: "ITPI Full Stack Developer @",
        duration: "NOV 2021 - FEB 2022",
        desc: [
          "Handled essential university services and researched Azure MxChip for introduction of next-gen features in lecture halls.",
  
          "Developed and successfully implemented proof of work on campus parking using blazor web assembly",
          "Collaborated actively with team using Agile methodologies to deliver a high quality product.",
          "Built essential applications for students using variety of technologies with focus on backend development using .NET and frontend development using react."
        ]
      }
    
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
