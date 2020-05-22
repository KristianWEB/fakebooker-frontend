import React, { useState } from "react";
import moment from "moment/moment";
import ContentLoader from "react-content-loader";
import Loader from "react-loader-spinner";
import { useQuery, useMutation } from "@apollo/react-hooks";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import {
  AboutInfoContainer,
  AboutContainer,
  BirthdayInput,
  AboutSidebar,
  Label,
  ActionButton,
  AboutHeading,
  Overview,
  WorkAndEducation,
  ContactAndBasicInfo,
  AboutBodyContainer,
  BasicInfoHeading,
  ActionContainer,
  GenderActionContainer,
  BirthdayActionContainer,
  Footer,
  CancelButton,
  SaveButton,
  Gender,
  SettingsContainer,
  HomeplaceActionContainer,
  HomeplaceInput,
  UserGender,
  GenderCaption,
  UserBirthday,
  BirthdayCaption,
  ActionBodyContainer,
  UserHomeplace,
  HomeplaceCaption,
  BirthdayBody,
  FemaleContainer,
  MaleContainer,
  GenderContainer,
  ActionBody,
  ActionSpan,
} from "./AboutContactAndBasicInfo.styles";
import {
  LOAD_USER,
  ADD_GENDER,
  DELETE_GENDER,
  ADD_BIRTHDAY,
  DELETE_BIRTHDAY,
  ADD_HOMEPLACE,
  DELETE_HOMEPLACE,
  LOAD_FROM_URL_USER,
} from "../../utils/queries";
import { ReactComponent as PlusIcon } from "../../assets/icons/add-circle-outline.svg";
import { ReactComponent as GenderIcon } from "../../assets/icons/person.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as BirthdayIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

const AboutContactAndBasicInfo = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [addGender, setAddGender] = useState(false);
  const [addBirthday, setAddBirthday] = useState(false);
  const [addHomeplace, setAddHomeplace] = useState(false);

  const [saveGender, { loading: saveGenderLoading }] = useMutation(ADD_GENDER, {
    variables: {
      gender: getValues("gender"),
    },
  });

  const [saveBirthday, { loading: saveBirthdayLoading }] = useMutation(
    ADD_BIRTHDAY,
    {
      variables: {
        birthday: getValues("birthday"),
      },
    }
  );

  const [saveHomeplace, { loading: saveHomeplaceLoading }] = useMutation(
    ADD_HOMEPLACE,
    {
      variables: {
        homePlace: getValues("homePlace"),
      },
    }
  );

  const [deleteGender, { loading: deleteGenderLoading }] = useMutation(
    DELETE_GENDER
  );

  const [deleteBirthday, { loading: deleteBirthdayLoading }] = useMutation(
    DELETE_BIRTHDAY
  );

  const [deleteHomeplace, { loading: deleteHomeplaceLoading }] = useMutation(
    DELETE_HOMEPLACE
  );

  const { data: userData, loading: authLoading } = useQuery(LOAD_USER);

  const { username } = useParams();

  const { data: profileData, loading: profileLoading } = useQuery(
    LOAD_FROM_URL_USER,
    {
      variables: {
        username,
      },
    }
  );

  /* eslint-disable consistent-return */
  const readOnly = () => {
    if (userData) {
      if (userData.loadUser.username !== username) {
        return true;
        // eslint-disable-next-line no-else-return
      } else {
        return false;
      }
    }
  };

  const onSubmitGender = async () => {
    await saveGender();
    setAddGender(false);
  };

  const deleteGenderCb = () => {
    deleteGender();
    setAddGender(false);
  };

  const onSubmitBirthday = async () => {
    await saveBirthday();
    setAddBirthday(false);
  };

  const deleteBirthdayCb = () => {
    deleteBirthday();
    setAddBirthday(false);
  };

  const onSubmitHomePlace = async () => {
    await saveHomeplace();
    setAddHomeplace(false);
  };

  const deleteHomeplaceCb = () => {
    deleteHomeplace();
    setAddHomeplace(false);
  };

  return (
    <AboutInfoContainer>
      <AboutContainer>
        {!authLoading && !profileLoading ? (
          <>
            <AboutSidebar>
              <AboutHeading>About</AboutHeading>
              <Link to="about_overview">
                <Overview>Overview</Overview>
              </Link>
              <Link to="about_work_and_education">
                <WorkAndEducation>Work and Education</WorkAndEducation>
              </Link>
              <Link to="about_contact_and_basic_info">
                <ContactAndBasicInfo>
                  Contact and Basic Info
                </ContactAndBasicInfo>
              </Link>
            </AboutSidebar>
            <AboutBodyContainer>
              <BasicInfoHeading>Basic Info</BasicInfoHeading>
              {readOnly() ? (
                <ActionContainer>
                  {profileData.loadFromUrlUser.gender && (
                    <Gender>
                      <GenderIcon width={20} height={20} fill="#65676b" />
                      <ActionBodyContainer>
                        <UserGender>
                          {profileData.loadFromUrlUser.gender}
                        </UserGender>
                        <GenderCaption>Gender</GenderCaption>
                      </ActionBodyContainer>
                    </Gender>
                  )}
                  {profileData.loadFromUrlUser.birthday && (
                    <ActionBody>
                      <BirthdayIcon width={20} height={20} fill="#65676b" />
                      <BirthdayBody>
                        <UserBirthday>
                          {moment(
                            Number(profileData.loadFromUrlUser.birthday)
                          ).format("DD MMMM YYYY")}
                        </UserBirthday>
                        <BirthdayCaption>Birthday</BirthdayCaption>
                      </BirthdayBody>
                    </ActionBody>
                  )}
                  {profileData.loadFromUrlUser.homePlace && (
                    <ActionBody>
                      <HomeIcon width={20} height={20} fill="#65676b" />
                      <ActionBodyContainer>
                        <UserHomeplace>
                          {profileData.loadFromUrlUser.homePlace}
                        </UserHomeplace>
                        <HomeplaceCaption>Homeplace</HomeplaceCaption>
                      </ActionBodyContainer>
                    </ActionBody>
                  )}
                </ActionContainer>
              ) : (
                <ActionContainer>
                  {addGender && (
                    <GenderActionContainer
                      onSubmit={handleSubmit(onSubmitGender)}
                    >
                      <GenderContainer>
                        <FemaleContainer>
                          <Gender
                            name="gender"
                            value="Female"
                            type="radio"
                            ref={register}
                          />
                          <Label htmlFor="female">Female</Label>
                        </FemaleContainer>
                        <MaleContainer>
                          <Gender
                            value="Male"
                            name="gender"
                            type="radio"
                            ref={register}
                          />
                          <Label htmlFor="male">Male</Label>
                        </MaleContainer>
                      </GenderContainer>
                      <Footer>
                        <CancelButton onClick={() => setAddGender(false)}>
                          Cancel
                        </CancelButton>
                        <SaveButton htmlType="submit">
                          Save
                          {saveGenderLoading && (
                            <Loader
                              type="TailSpin"
                              color="#fff"
                              style={{
                                position: "absolute",
                                top: "5px",
                                right: "3px",
                              }}
                              height={20}
                              width={20}
                            />
                          )}
                        </SaveButton>
                      </Footer>
                    </GenderActionContainer>
                  )}
                  {!addGender && userData && !userData.loadUser.gender && (
                    <ActionButton onClick={() => setAddGender(true)}>
                      <PlusIcon width={30} height={30} />
                      <ActionSpan>Gender</ActionSpan>
                    </ActionButton>
                  )}
                  {userData && userData.loadUser.gender && (
                    <ActionBody>
                      <GenderIcon width={20} height={20} fill="#65676b" />
                      <ActionBodyContainer>
                        <UserGender>{userData.loadUser.gender}</UserGender>
                        <GenderCaption>Gender</GenderCaption>
                      </ActionBodyContainer>
                      <SettingsContainer onClick={deleteGenderCb}>
                        {!deleteGenderLoading ? (
                          <CloseIcon width={20} height={20} />
                        ) : (
                          <Loader
                            type="TailSpin"
                            color="#050505"
                            height={20}
                            width={20}
                          />
                        )}
                      </SettingsContainer>
                    </ActionBody>
                  )}
                  {addBirthday && (
                    <BirthdayActionContainer
                      onSubmit={handleSubmit(onSubmitBirthday)}
                    >
                      <BirthdayInput
                        name="birthday"
                        type="date"
                        placeholder="Birthday"
                        ref={register}
                      />
                      <Footer>
                        <CancelButton onClick={() => setAddBirthday(false)}>
                          Cancel
                        </CancelButton>
                        <SaveButton htmlType="submit">
                          Save
                          {saveBirthdayLoading && (
                            <Loader
                              type="TailSpin"
                              color="#fff"
                              style={{
                                position: "absolute",
                                top: "5px",
                                right: "3px",
                              }}
                              height={20}
                              width={20}
                            />
                          )}
                        </SaveButton>
                      </Footer>
                    </BirthdayActionContainer>
                  )}
                  {!addBirthday && userData && !userData.loadUser.birthday && (
                    <ActionButton onClick={() => setAddBirthday(true)}>
                      <PlusIcon width={30} height={30} />
                      <ActionSpan>Birthday</ActionSpan>
                    </ActionButton>
                  )}
                  {userData && userData.loadUser.birthday && (
                    <ActionBody>
                      <BirthdayIcon width={20} height={20} fill="#65676b" />
                      <BirthdayBody>
                        <UserBirthday>
                          {moment(Number(userData.loadUser.birthday)).format(
                            "DD MMMM YYYY"
                          )}
                        </UserBirthday>
                        <BirthdayCaption>Birthday</BirthdayCaption>
                      </BirthdayBody>
                      <SettingsContainer onClick={deleteBirthdayCb}>
                        {!deleteBirthdayLoading ? (
                          <CloseIcon width={20} height={20} />
                        ) : (
                          <Loader
                            type="TailSpin"
                            color="#050505"
                            height={20}
                            width={20}
                          />
                        )}
                      </SettingsContainer>
                    </ActionBody>
                  )}
                  {addHomeplace && (
                    <HomeplaceActionContainer
                      onSubmit={handleSubmit(onSubmitHomePlace)}
                    >
                      <HomeplaceInput
                        type="text"
                        name="homePlace"
                        placeholder="Homeplace"
                        ref={register}
                      />
                      {saveHomeplaceLoading && (
                        <Loader
                          type="TailSpin"
                          color="#1876f2"
                          style={{
                            marginTop: "15px",
                            position: "absolute",
                            top: "15px",
                            right: "16px",
                          }}
                          height={20}
                          width={20}
                        />
                      )}
                      <Footer>
                        <CancelButton onClick={() => setAddHomeplace(false)}>
                          Cancel
                        </CancelButton>
                        <SaveButton htmlType="submit">Save</SaveButton>
                      </Footer>
                    </HomeplaceActionContainer>
                  )}
                  {!addHomeplace && userData && !userData.loadUser.homePlace && (
                    <ActionButton onClick={() => setAddHomeplace(true)}>
                      <PlusIcon width={30} height={30} />
                      <ActionSpan>Homeplace</ActionSpan>
                    </ActionButton>
                  )}
                  {userData && userData.loadUser.homePlace && (
                    <ActionBody>
                      <HomeIcon width={20} height={20} fill="#65676b" />
                      <ActionBodyContainer>
                        <UserHomeplace>
                          {userData.loadUser.homePlace}
                        </UserHomeplace>
                        <HomeplaceCaption>Homeplace</HomeplaceCaption>
                      </ActionBodyContainer>
                      <SettingsContainer onClick={deleteHomeplaceCb}>
                        {!deleteHomeplaceLoading ? (
                          <CloseIcon width={20} height={20} />
                        ) : (
                          <Loader
                            type="TailSpin"
                            color="#050505"
                            height={20}
                            width={20}
                          />
                        )}
                      </SettingsContainer>
                    </ActionBody>
                  )}
                </ActionContainer>
              )}
            </AboutBodyContainer>
          </>
        ) : (
          <ContentLoader
            speed={1}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="20" y="20" rx="3" ry="6" width="100" height="21" />
            <rect x="21" y="60" rx="3" ry="6" width="304" height="15" />
            <rect x="21" y="90" rx="0" ry="6" width="303" height="15" />
            <rect x="21" y="120" rx="0" ry="6" width="303" height="15" />
          </ContentLoader>
        )}
      </AboutContainer>
    </AboutInfoContainer>
  );
};

export default AboutContactAndBasicInfo;
