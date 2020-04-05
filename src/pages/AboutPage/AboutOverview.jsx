import React from "react";
import { useQuery } from "@apollo/react-hooks";
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
import { LOAD_USER_FROM_DB } from "../../utils/queries";
import { ReactComponent as WorkplaceIcon } from "../../assets/icons/briefcase.svg";
import { ReactComponent as SchoolIcon } from "../../assets/icons/school.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

const AboutPageOverview = () => {
  const { data } = useQuery(LOAD_USER_FROM_DB);

  if (!data) {
    return null;
  }
  const { loadUserFromDB: user } = data;

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
            <WorkplaceIcon width={20} height={20} fill="#65676b" />
            <WorkplaceBody>
              {user.workPlace ? (
                <>
                  Works at
                  <span style={{ fontWeight: "bold" }}> {user.workPlace}</span>
                </>
              ) : (
                <span style={{ color: "#65676b " }}>No workplace to show</span>
              )}
            </WorkplaceBody>
          </WorkplaceContainer>
          <SchoolContainer>
            <SchoolIcon width={20} height={20} fill="#65676b" />
            <SchoolBody>
              {user.school ? (
                <>
                  Studies at{" "}
                  <span style={{ fontWeight: "bold" }}>{user.school}</span>
                </>
              ) : (
                <span style={{ color: "#65676b" }}>No school to show</span>
              )}
            </SchoolBody>
          </SchoolContainer>
          <HomeContainer>
            <HomeIcon width={20} height={20} fill="#65676b" />
            <HomeBody>
              {user.homePlace ? (
                <>
                  Lives in{" "}
                  <span style={{ fontWeight: "bold" }}>{user.homePlace}</span>
                </>
              ) : (
                <span style={{ color: "#65676b" }}>No homeplace to show</span>
              )}
            </HomeBody>
          </HomeContainer>
        </AboutBodyContainer>
      </AboutContainer>
    </AboutInfoContainer>
  );
};

export default AboutPageOverview;
