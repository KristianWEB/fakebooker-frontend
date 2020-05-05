import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
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
  WorkPlace,
  WorkPlaceBody,
  SchoolBody,
  SettingsContainer,
  WorkplaceActionContainer,
  WorkplaceInput,
  SchoolActionContainer,
  SchoolInput,
  CancelButton,
  SaveButton,
  Footer,
} from "./AboutWorkAndEducation.styles";
import {
  ADD_WORKPLACE,
  ADD_SCHOOL,
  LOAD_USER,
  DELETE_WORKPLACE,
  DELETE_SCHOOL,
  LOAD_FROM_URL_USER,
} from "../../utils/queries";
import { ReactComponent as PlusIcon } from "../../assets/icons/add-circle-outline.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

const AboutPageWorkAndEducation = () => {
  const { register, getValues, handleSubmit } = useForm();
  const [addWorkplace, setAddWorkplace] = useState(false);

  // const [workplaceBody, setWorkplaceBody] = useState("");
  // const [schoolBody, setSchoolBody] = useState("");

  const [addSchool, setAddSchool] = useState(false);

  const [saveWorkplace] = useMutation(ADD_WORKPLACE, {
    variables: {
      body: getValues("workplace"),
    },
  });

  const [deleteWorkplace] = useMutation(DELETE_WORKPLACE);

  const [saveSchool] = useMutation(ADD_SCHOOL, {
    variables: {
      body: getValues("school"),
    },
  });

  const [deleteSchool] = useMutation(DELETE_SCHOOL);

  const deleteWorkplaceCb = () => {
    deleteWorkplace();
    setAddWorkplace(false);
  };

  const deleteSchoolCb = () => {
    deleteSchool();
    setAddSchool(false);
  };

  const { data: userData } = useQuery(LOAD_USER);
  const { username } = useParams();

  // skip this when on auth page
  const { data: profileData } = useQuery(LOAD_FROM_URL_USER, {
    variables: {
      username,
    },
  });

  if (!userData || !profileData) {
    return null;
  }

  const { loadUser: user } = userData;
  const { loadFromUrlUser: profileUser } = profileData;

  /* eslint-disable consistent-return */
  const readOnly = () => {
    if (userData) {
      if (user.username !== username) {
        return true;
        // eslint-disable-next-line no-else-return
      } else {
        return false;
      }
    }
  };

  const onSubmitWorkplace = () => {
    saveWorkplace();
    setAddWorkplace(false);
  };

  const onSubmitSchool = () => {
    saveSchool();
    setAddSchool(false);
  };

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
          <Link to="about_contact_and_basic_info">
            <ContactAndBasicInfo>Contact and Basic Info</ContactAndBasicInfo>
          </Link>
        </AboutSidebar>
        {readOnly() ? (
          <AboutBodyContainer>
            <WorkplaceContainer>
              <WorkplaceHeading>Work</WorkplaceHeading>
              {profileUser.workPlace && (
                <WorkPlace>
                  <WorkPlaceBody data-testid="workplace">
                    Works at{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {profileUser.workPlace}
                    </span>
                  </WorkPlaceBody>
                </WorkPlace>
              )}
            </WorkplaceContainer>
            <SchoolContainer>
              <SchoolHeading>High School</SchoolHeading>
              {profileUser.school && (
                <School>
                  <SchoolBody>
                    Studies at{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {profileUser.school}
                    </span>
                  </SchoolBody>
                </School>
              )}
            </SchoolContainer>
          </AboutBodyContainer>
        ) : (
          <AboutBodyContainer>
            <WorkplaceContainer>
              <WorkplaceHeading>Work</WorkplaceHeading>
              {addWorkplace && (
                <WorkplaceActionContainer
                  onSubmit={handleSubmit(onSubmitWorkplace)}
                >
                  <WorkplaceInput
                    type="text"
                    name="workplace"
                    placeholder="Company"
                    ref={register}
                  />
                  <Footer>
                    <CancelButton onClick={() => setAddWorkplace(false)}>
                      Cancel
                    </CancelButton>
                    <SaveButton htmlType="submit">Save</SaveButton>
                  </Footer>
                </WorkplaceActionContainer>
              )}
              {!addWorkplace && !user.workPlace && (
                <WorkplaceAction onClick={() => setAddWorkplace(true)}>
                  <PlusIcon width={30} height={30} />
                  <WorkplaceSpan>Add a workplace</WorkplaceSpan>
                </WorkplaceAction>
              )}
              {user.workPlace && (
                <WorkPlace>
                  <WorkPlaceBody data-testid="workplace">
                    Works at{" "}
                    <span style={{ fontWeight: "bold" }}>{user.workPlace}</span>
                  </WorkPlaceBody>
                  <SettingsContainer onClick={deleteWorkplaceCb}>
                    <CloseIcon width={20} height={20} />
                  </SettingsContainer>
                </WorkPlace>
              )}
            </WorkplaceContainer>
            <SchoolContainer>
              <SchoolHeading>High School</SchoolHeading>
              {addSchool && (
                <SchoolActionContainer onSubmit={handleSubmit(onSubmitSchool)}>
                  <SchoolInput
                    type="text"
                    placeholder="School"
                    name="school"
                    ref={register}
                  />
                  <Footer>
                    <CancelButton onClick={() => setAddSchool(false)}>
                      Cancel
                    </CancelButton>
                    <SaveButton type="link" htmlType="submit">
                      Save
                    </SaveButton>
                  </Footer>
                </SchoolActionContainer>
              )}
              {!addSchool && !user.school && (
                <SchoolAction onClick={() => setAddSchool(true)}>
                  <PlusIcon width={30} height={30} />
                  <SchoolSpan>Add a high school</SchoolSpan>
                </SchoolAction>
              )}
              {user.school && (
                <School>
                  <SchoolBody>
                    Studies at{" "}
                    <span style={{ fontWeight: "bold" }}>{user.school}</span>
                  </SchoolBody>
                  <SettingsContainer onClick={deleteSchoolCb}>
                    <CloseIcon width={20} height={20} />
                  </SettingsContainer>
                </School>
              )}
            </SchoolContainer>
          </AboutBodyContainer>
        )}
      </AboutContainer>
    </AboutInfoContainer>
  );
};

export default AboutPageWorkAndEducation;
