import React from "react";
import { Link } from "react-router-dom";
import {
  AboutInfoContainer,
  AboutContainer,
  AboutSidebar,
  AboutHeading,
  Overview,
  WorkAndEducation,
  ContactAndBasicInfo
} from "./WorkAndEducation.styles";

const AboutPageWorkAndEducation = () => {
  return (
    <AboutInfoContainer>
      <AboutContainer>
        <AboutSidebar>
          <AboutHeading>About</AboutHeading>
          <Link to="about_overview">
            <Overview>Overview</Overview>
          </Link>
          <Link to="about_work_and_education">
            <WorkAndEducation>Work and Education</WorkAndEducation>
          </Link>
          <ContactAndBasicInfo>Contact and Basic Info</ContactAndBasicInfo>
        </AboutSidebar>
        <h1 style={{ margin: "auto", fontSize: "20px" }}>Work and Education</h1>
      </AboutContainer>
    </AboutInfoContainer>
  );
};

export default AboutPageWorkAndEducation;
