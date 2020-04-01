import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AboutInfoContainer,
  AboutContainer,
  AboutSidebar,
  AboutHeading,
  Overview,
  WorkAndEducation,
  ContactAndBasicInfo,
  AboutBodyContainer,
  WorkplaceContainer,
  WorkplaceHeading,
  WorkplaceAction,
  WorkplaceSpan,
  SchoolContainer,
  SchoolHeading,
  SchoolAction,
  SchoolSpan,
  School,
  SchoolImage,
  SchoolBody,
  SettingsContainer,
  WorkplaceActionContainer,
  WorkplaceInput,
  CancelButton,
  SaveButton,
  Footer
} from "./AboutWorkAndEducation.styles";
import { ReactComponent as PlusIcon } from "../../assets/icons/add-circle-outline.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/three-dots-icon.svg";

const AboutPageWorkAndEducation = () => {
  const [addWorkplace, setAddWorkplace] = useState(false);

  const [addSchool, setAddSchool] = useState(false);

  const AddWorkplace = () => (
    <WorkplaceActionContainer>
      <WorkplaceInput type="text" placeholder="Company" />
      <Footer>
        <CancelButton onClick={() => setAddWorkplace(false)}>
          Cancel
        </CancelButton>
        <SaveButton type="link">Save</SaveButton>
      </Footer>
    </WorkplaceActionContainer>
  );

  const AddSchool = () => (
    <WorkplaceActionContainer>
      <WorkplaceInput type="text" placeholder="School" />
      <Footer>
        <CancelButton onClick={() => setAddSchool(false)}>Cancel</CancelButton>
        <SaveButton type="link">Save</SaveButton>
      </Footer>
    </WorkplaceActionContainer>
  );

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
        <AboutBodyContainer>
          <WorkplaceContainer>
            <WorkplaceHeading>Work</WorkplaceHeading>
            {addWorkplace && <AddWorkplace />}
            {!addWorkplace && (
              <WorkplaceAction
                type="link"
                data-testid="addWorkplace"
                onClick={() => setAddWorkplace(true)}
              >
                <PlusIcon width={30} height={30} />
                <WorkplaceSpan>Add a workplace</WorkplaceSpan>
              </WorkplaceAction>
            )}
          </WorkplaceContainer>
          <SchoolContainer>
            <SchoolHeading>High School</SchoolHeading>
            {addSchool && <AddSchool />}
            {!addSchool && (
              <SchoolAction type="link" onClick={() => setAddSchool(true)}>
                <PlusIcon width={30} height={30} />
                <SchoolSpan>Add a high school</SchoolSpan>
              </SchoolAction>
            )}
            {/* <School>
              <SchoolImage />
              <SchoolBody>Studied at New York University</SchoolBody>
              <SettingsContainer type="link">
                <SettingsIcon width={20} height={20} />
              </SettingsContainer>
            </School> */}
          </SchoolContainer>
        </AboutBodyContainer>
      </AboutContainer>
    </AboutInfoContainer>
  );
};

export default AboutPageWorkAndEducation;
