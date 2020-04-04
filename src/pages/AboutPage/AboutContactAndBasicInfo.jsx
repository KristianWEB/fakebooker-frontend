import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { Radio } from "antd";
import {
  AboutInfoContainer,
  AboutContainer,
  AboutSidebar,
  AboutHeading,
  Overview,
  WorkAndEducation,
  ContactAndBasicInfo,
  AboutBodyContainer,
  BasicInfoHeading,
  GenderAction,
  GenderSpan,
  ActionContainer,
  BirthdayAction,
  BirthdaySpan,
  HomeplaceAction,
  HomeplaceSpan,
  GenderActionContainer,
  Footer,
  CancelButton,
  SaveButton,
  Gender,
  SettingsContainer
} from "./AboutContactAndBasicInfo.styles";
import {
  LOAD_USER_FROM_DB,
  ADD_GENDER,
  DELETE_GENDER
} from "../../utils/queries";
import { ReactComponent as PlusIcon } from "../../assets/icons/add-circle-outline.svg";
import { ReactComponent as GenderIcon } from "../../assets/icons/person.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-outline.svg";

const AboutContactAndBasicInfo = () => {
  const [addGender, setAddGender] = useState(false);
  const [contactAndBasicInfo, setContactAndBasicInfo] = useState({
    gender: ""
  });

  const [saveGender] = useMutation(ADD_GENDER, {
    variables: {
      gender: contactAndBasicInfo.gender
    }
  });

  const [deleteGender] = useMutation(DELETE_GENDER);

  const { data: userData } = useQuery(LOAD_USER_FROM_DB);

  if (!userData) {
    return null;
  }

  const { loadUserFromDB: user } = userData;

  const onChangeContact = e =>
    setContactAndBasicInfo({
      ...contactAndBasicInfo,
      [e.target.name]: e.target.value
    });

  const onSubmitGender = e => {
    e.preventDefault();
    saveGender();
    setAddGender(false);
  };

  const deleteGenderCb = () => {
    deleteGender();
    setAddGender(false);
    setContactAndBasicInfo({
      gender: ""
    });
  };

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
        <AboutBodyContainer>
          <BasicInfoHeading>Basic Info</BasicInfoHeading>
          {addGender && (
            <GenderActionContainer onSubmit={onSubmitGender}>
              <Radio.Group
                onChange={onChangeContact}
                value={contactAndBasicInfo.gender}
                name="gender"
              >
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </Radio.Group>
              <Footer>
                <CancelButton onClick={() => setAddGender(false)}>
                  Cancel
                </CancelButton>
                <SaveButton type="link" htmlType="submit">
                  Save
                </SaveButton>
              </Footer>
            </GenderActionContainer>
          )}
          <ActionContainer>
            {!addGender && !user.gender && (
              <GenderAction type="link" onClick={() => setAddGender(true)}>
                <PlusIcon width={30} height={30} />
                <GenderSpan>Gender</GenderSpan>
              </GenderAction>
            )}
            {user.gender && (
              <Gender>
                <GenderIcon width={20} height={20} fill="#8a8d91" />
                <span style={{ marginLeft: "12px", lineHeight: "1" }}>
                  {user.gender}
                </span>
                <SettingsContainer type="link" onClick={deleteGenderCb}>
                  <CloseIcon width={20} height={20} />
                </SettingsContainer>
              </Gender>
            )}
            <BirthdayAction type="link">
              <PlusIcon width={30} height={30} />
              <BirthdaySpan>Birthday</BirthdaySpan>
            </BirthdayAction>
            <HomeplaceAction type="link">
              <PlusIcon width={30} height={30} />
              <HomeplaceSpan>Homeplace</HomeplaceSpan>
            </HomeplaceAction>
          </ActionContainer>
        </AboutBodyContainer>
      </AboutContainer>
    </AboutInfoContainer>
  );
};

export default AboutContactAndBasicInfo;
