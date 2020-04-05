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
  BirthdayInput,
  HomeplaceAction,
  HomeplaceSpan,
  GenderActionContainer,
  BirthdayActionContainer,
  Footer,
  CancelButton,
  SaveButton,
  Gender,
  Birthday,
  SettingsContainer,
  HomeplaceActionContainer,
  HomeplaceInput,
  Homeplace
} from "./AboutContactAndBasicInfo.styles";
import {
  LOAD_USER_FROM_DB,
  ADD_GENDER,
  DELETE_GENDER,
  ADD_BIRTHDAY,
  DELETE_BIRTHDAY,
  ADD_HOMEPLACE,
  DELETE_HOMEPLACE
} from "../../utils/queries";
import { ReactComponent as PlusIcon } from "../../assets/icons/add-circle-outline.svg";
import { ReactComponent as GenderIcon } from "../../assets/icons/person.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-outline.svg";
import { ReactComponent as BirthdayIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

const AboutContactAndBasicInfo = () => {
  const [addGender, setAddGender] = useState(false);
  const [addBirthday, setAddBirthday] = useState(false);
  const [addHomeplace, setAddHomeplace] = useState(false);

  const [birthdayBody, setBirthdayBody] = useState(null);
  const [genderBody, setGenderBody] = useState("");
  const [homePlaceBody, setHomePlaceBody] = useState("");

  const [saveGender] = useMutation(ADD_GENDER, {
    variables: {
      gender: genderBody
    }
  });

  const [saveBirthday] = useMutation(ADD_BIRTHDAY, {
    variables: {
      birthday: birthdayBody
    }
  });

  const [saveHomeplace] = useMutation(ADD_HOMEPLACE, {
    variables: {
      homePlace: homePlaceBody
    }
  });

  const [deleteGender] = useMutation(DELETE_GENDER);

  const [deleteBirthday] = useMutation(DELETE_BIRTHDAY);

  const [deleteHomeplace] = useMutation(DELETE_HOMEPLACE);

  const { data: userData } = useQuery(LOAD_USER_FROM_DB);

  if (!userData) {
    return null;
  }

  const { loadUserFromDB: user } = userData;

  const onSubmitGender = e => {
    e.preventDefault();
    saveGender();
    setAddGender(false);
  };

  const deleteGenderCb = () => {
    deleteGender();
    setAddGender(false);
    setGenderBody("");
  };

  const onSubmitBirthday = e => {
    e.preventDefault();
    saveBirthday();
    setAddBirthday(false);
  };

  const deleteBirthdayCb = () => {
    deleteBirthday();
    setAddBirthday(false);
    setBirthdayBody(null);
  };

  const onSubmitHomePlace = e => {
    e.preventDefault();
    saveHomeplace();
    setAddHomeplace("");
  };

  const deleteHomeplaceCb = () => {
    deleteHomeplace();
    setAddHomeplace(false);
    setHomePlaceBody("");
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
                onChange={e => setGenderBody(e.target.value)}
                value={genderBody}
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
            {addBirthday && (
              <BirthdayActionContainer onSubmit={onSubmitBirthday}>
                <BirthdayInput
                  format="MMMM DD YYYY"
                  type="text"
                  placeholder="Birthday"
                  name="birthday"
                  onChange={e => setBirthdayBody(e && e.format())}
                />
                <Footer>
                  <CancelButton onClick={() => setAddBirthday(false)}>
                    Cancel
                  </CancelButton>
                  <SaveButton type="link" htmlType="submit">
                    Save
                  </SaveButton>
                </Footer>
              </BirthdayActionContainer>
            )}
            {!addBirthday && !user.birthday && (
              <BirthdayAction type="link" onClick={() => setAddBirthday(true)}>
                <PlusIcon width={30} height={30} />
                <BirthdaySpan>Birthday</BirthdaySpan>
              </BirthdayAction>
            )}
            {user.birthday && (
              <Birthday>
                <BirthdayIcon width={20} height={20} fill="#8a8d91" />
                <span
                  style={{
                    marginLeft: "12px",
                    marginTop: "3px",
                    lineHeight: "1"
                  }}
                >
                  {user.birthday}
                </span>
                <SettingsContainer type="link" onClick={deleteBirthdayCb}>
                  <CloseIcon width={20} height={20} />
                </SettingsContainer>
              </Birthday>
            )}
            {addHomeplace && (
              <HomeplaceActionContainer onSubmit={onSubmitHomePlace}>
                <HomeplaceInput
                  type="text"
                  placeholder="Homeplace"
                  onChange={e => setHomePlaceBody(e.target.value)}
                />
                <Footer>
                  <CancelButton onClick={() => setAddHomeplace(false)}>
                    Cancel
                  </CancelButton>
                  <SaveButton type="link" htmlType="submit">
                    Save
                  </SaveButton>
                </Footer>
              </HomeplaceActionContainer>
            )}
            {!addHomeplace && !user.homePlace && (
              <HomeplaceAction
                type="link"
                onClick={() => setAddHomeplace(true)}
              >
                <PlusIcon width={30} height={30} />
                <HomeplaceSpan>Homeplace</HomeplaceSpan>
              </HomeplaceAction>
            )}
            {user.homePlace && (
              <Homeplace>
                <HomeIcon width={20} height={20} fill="#8a8d91" />
                <span
                  style={{
                    marginLeft: "12px",
                    marginTop: "3px",
                    lineHeight: "1"
                  }}
                >
                  {user.homePlace}
                </span>
                <SettingsContainer type="link" onClick={deleteHomeplaceCb}>
                  <CloseIcon width={20} height={20} />
                </SettingsContainer>
              </Homeplace>
            )}
          </ActionContainer>
        </AboutBodyContainer>
      </AboutContainer>
    </AboutInfoContainer>
  );
};

export default AboutContactAndBasicInfo;
