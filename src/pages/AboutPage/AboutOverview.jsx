import React from "react";
import { Link } from "react-router-dom";
import {
  AboutInfoContainer,
  AboutContainer,
  AboutSidebar,
  AboutHeading,
  AboutBodyContainer,
  Overview,
  WorkAndEducation,
  ContactAndBasicInfo,
  WorkplaceContainer,
  WorkplaceBody,
  SchoolContainer,
  SchoolBody,
  HomeContainer,
  HomeBody
} from "./AboutOverview.styles";
import { ReactComponent as WorkplaceIcon } from "../../assets/icons/briefcase.svg";
import { ReactComponent as SchoolIcon } from "../../assets/icons/school.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

const AboutPageOverview = () => {
  return (
    <AboutInfoContainer>
      <AboutContainer>
        <AboutSidebar>
          <AboutHeading>About</AboutHeading>
          <Link to="/about_overview">
            <Overview>Overview</Overview>
          </Link>
          <Link to="/about_work_and_education" data-testid="aboutWorkLink">
            <WorkAndEducation>Work and Education</WorkAndEducation>
          </Link>
          <Link to="/about_contact_and_basic_info">
            <ContactAndBasicInfo>Contact and Basic Info</ContactAndBasicInfo>
          </Link>
        </AboutSidebar>
        <AboutBodyContainer>
          <WorkplaceContainer>
            <WorkplaceIcon width={20} height={20} fill="#8a8d91" />
            <WorkplaceBody>No workplaces to show</WorkplaceBody>
          </WorkplaceContainer>
          <SchoolContainer>
            <SchoolIcon width={20} height={20} fill="#8a8d91" />
            <SchoolBody>
              Studied at{" "}
              <span style={{ fontWeight: "bold" }}>New York University</span>
            </SchoolBody>
          </SchoolContainer>
          <HomeContainer>
            <HomeIcon width={20} height={20} fill="#8a8d91" />
            <HomeBody>
              Lives in <span style={{ fontWeight: "bold" }}>New York</span>
            </HomeBody>
          </HomeContainer>
        </AboutBodyContainer>
      </AboutContainer>
    </AboutInfoContainer>
  );
};

export default AboutPageOverview;
