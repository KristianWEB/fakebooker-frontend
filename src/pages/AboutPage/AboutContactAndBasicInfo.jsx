import React from "react";
import { Link } from "react-router-dom";
import {
  AboutInfoContainer,
  AboutContainer,
  AboutSidebar,
  AboutHeading,
  Overview,
  WorkAndEducation,
  ContactAndBasicInfo,
  AboutBodyContainer
} from "./AboutContactAndBasicInfo.styles";
// import { ReactComponent as PlusIcon } from "../../assets/icons/add-circle-outline.svg";
// import { ReactComponent as CloseIcon } from "../../assets/icons/close-outline.svg";

const AboutContactAndBasicInfo = () => {
  return (
    <AboutInfoContainer>
      <AboutContainer>
        <AboutSidebar>
          <AboutHeading>About</AboutHeading>
          <Link to="/about_overview">
            <Overview>Overview</Overview>
          </Link>
          <Link to="/about_work_and_education">
            <WorkAndEducation>Work and Education</WorkAndEducation>
          </Link>
          <Link to="/about_contact_and_basic_info">
            <ContactAndBasicInfo>Contact and Basic Info</ContactAndBasicInfo>
          </Link>
        </AboutSidebar>
        <AboutBodyContainer>Contact and Basic Info</AboutBodyContainer>
      </AboutContainer>
    </AboutInfoContainer>
  );
};

export default AboutContactAndBasicInfo;
