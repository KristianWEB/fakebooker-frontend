import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
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
  BasicInfoHeading,
  GenderAction,
  GenderSpan,
  ActionContainer,
  BirthdayAction,
  BirthdaySpan,
  HomeplaceAction,
  HomeplaceSpan,
  GenderActionContainer,
  BirthdayActionContainer,
  Footer,
  CancelButton,
  SaveButton,
  Gender,
  Birthday,
  BirthdayContainer,
  DayInput,
  MonthInput,
  YearInput,
  SettingsContainer,
  HomeplaceActionContainer,
  HomeplaceInput,
  Homeplace,
  GenderBody,
  UserGender,
  GenderCaption,
  UserBirthday,
  BirthdayCaption,
  UserHomeplace,
  HomeplaceCaption,
  BirthdayBody,
  HomeplaceBody,
  FemaleContainer,
  FemaleGender,
  FemaleLabel,
  MaleContainer,
  MaleGender,
  MaleLabel,
  GenderContainer
} from "./AboutContactAndBasicInfo.styles";
import {
  LOAD_USER,
  ADD_GENDER,
  DELETE_GENDER,
  ADD_BIRTHDAY,
  DELETE_BIRTHDAY,
  ADD_HOMEPLACE,
  DELETE_HOMEPLACE,
  LOAD_FROM_URL_USER
} from "../../utils/queries";
import { ReactComponent as PlusIcon } from "../../assets/icons/add-circle-outline.svg";
import { ReactComponent as GenderIcon } from "../../assets/icons/person.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
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

  const { data: userData } = useQuery(LOAD_USER);

  const { username } = useParams();

  const { data: profileData } = useQuery(LOAD_FROM_URL_USER, {
    variables: {
      username
    }
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
        <AboutBodyContainer>
          <BasicInfoHeading>Basic Info</BasicInfoHeading>
          {readOnly() ? (
            <ActionContainer>
              {profileUser.gender && (
                <Gender>
                  <GenderIcon width={20} height={20} fill="#65676b" />
                  <GenderBody>
                    <UserGender>{profileUser.gender}</UserGender>
                    <GenderCaption>Gender</GenderCaption>
                  </GenderBody>
                </Gender>
              )}
              {profileUser.birthday && (
                <Birthday>
                  <BirthdayIcon width={20} height={20} fill="#65676b" />
                  <BirthdayBody>
                    <UserBirthday>{profileUser.birthday}</UserBirthday>
                    <BirthdayCaption>Birthday</BirthdayCaption>
                  </BirthdayBody>
                </Birthday>
              )}
              {profileUser.homePlace && (
                <Homeplace>
                  <HomeIcon width={20} height={20} fill="#65676b" />
                  <HomeplaceBody>
                    <UserHomeplace>{profileUser.homePlace}</UserHomeplace>
                    <HomeplaceCaption>Homeplace</HomeplaceCaption>
                  </HomeplaceBody>
                </Homeplace>
              )}
            </ActionContainer>
          ) : (
            <ActionContainer>
              {addGender && (
                <GenderActionContainer onSubmit={onSubmitGender}>
                  <GenderContainer>
                    <FemaleContainer>
                      <FemaleGender
                        name="gender"
                        onChange={e => setGenderBody(e.target.value)}
                        value="Female"
                        type="radio"
                      />
                      <FemaleLabel htmlFor="female">Female</FemaleLabel>
                    </FemaleContainer>
                    <MaleContainer>
                      <MaleGender
                        value="Male"
                        name="gender"
                        type="radio"
                        onChange={e => setGenderBody(e.target.value)}
                      />
                      <MaleLabel htmlFor="male">Male</MaleLabel>
                    </MaleContainer>
                  </GenderContainer>
                  <Footer>
                    <CancelButton onClick={() => setAddGender(false)}>
                      Cancel
                    </CancelButton>
                    <SaveButton htmlType="submit">Save</SaveButton>
                  </Footer>
                </GenderActionContainer>
              )}
              {!addGender && !user.gender && (
                <GenderAction onClick={() => setAddGender(true)}>
                  <PlusIcon width={30} height={30} />
                  <GenderSpan>Gender</GenderSpan>
                </GenderAction>
              )}
              {user.gender && (
                <Gender>
                  <GenderIcon width={20} height={20} fill="#65676b" />
                  <GenderBody>
                    <UserGender>{user.gender}</UserGender>
                    <GenderCaption>Gender</GenderCaption>
                  </GenderBody>
                  <SettingsContainer onClick={deleteGenderCb}>
                    <CloseIcon width={20} height={20} />
                  </SettingsContainer>
                </Gender>
              )}
              {addBirthday && (
                <BirthdayActionContainer onSubmit={onSubmitBirthday}>
                  <BirthdayContainer>
                    <DayInput
                      type="text"
                      placeholder="30"
                      // onChange={e => setBirthdayBody(e && e.format())}
                    />
                    <MonthInput
                      type="text"
                      placeholder="April"
                      // onChange={e => setBirthdayBody(e && e.format())}
                    />
                    <YearInput
                      type="text"
                      placeholder="1995"
                      // onChange={e => setBirthdayBody(e && e.format())}
                    />
                  </BirthdayContainer>
                  <Footer>
                    <CancelButton onClick={() => setAddBirthday(false)}>
                      Cancel
                    </CancelButton>
                    <SaveButton htmlType="submit">Save</SaveButton>
                  </Footer>
                </BirthdayActionContainer>
              )}
              {!addBirthday && !user.birthday && (
                <BirthdayAction onClick={() => setAddBirthday(true)}>
                  <PlusIcon width={30} height={30} />
                  <BirthdaySpan>Birthday</BirthdaySpan>
                </BirthdayAction>
              )}
              {user.birthday && (
                <Birthday>
                  <BirthdayIcon width={20} height={20} fill="#65676b" />
                  <BirthdayBody>
                    <UserBirthday>{user.birthday}</UserBirthday>
                    <BirthdayCaption>Birthday</BirthdayCaption>
                  </BirthdayBody>
                  <SettingsContainer onClick={deleteBirthdayCb}>
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
                    <SaveButton htmlType="submit">Save</SaveButton>
                  </Footer>
                </HomeplaceActionContainer>
              )}
              {!addHomeplace && !user.homePlace && (
                <HomeplaceAction onClick={() => setAddHomeplace(true)}>
                  <PlusIcon width={30} height={30} />
                  <HomeplaceSpan>Homeplace</HomeplaceSpan>
                </HomeplaceAction>
              )}
              {user.homePlace && (
                <Homeplace>
                  <HomeIcon width={20} height={20} fill="#65676b" />
                  <HomeplaceBody>
                    <UserHomeplace>{user.homePlace}</UserHomeplace>
                    <HomeplaceCaption>Homeplace</HomeplaceCaption>
                  </HomeplaceBody>
                  <SettingsContainer onClick={deleteHomeplaceCb}>
                    <CloseIcon width={20} height={20} />
                  </SettingsContainer>
                </Homeplace>
              )}
            </ActionContainer>
          )}
        </AboutBodyContainer>
      </AboutContainer>
    </AboutInfoContainer>
  );
};

export default AboutContactAndBasicInfo;
