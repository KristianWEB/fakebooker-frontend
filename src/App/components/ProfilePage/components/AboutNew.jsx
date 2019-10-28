import React from "react";
import {
  AboutContainer,
  ProfileInfoContainer,
  PersonalQuotes,
  ProfileInfoHeading,
  ProfileHeadingIcon,
  ModalLink
} from "./AboutNew.styles";
import NewsFeedIcon from "../../../../assets/icons/newsfeed-icon.svg";

const About = () => {
  return (
    <AboutContainer>
      <ProfileInfoContainer>
        <ProfileHeadingIcon src={NewsFeedIcon} />
        <ProfileInfoHeading>Profile Intro</ProfileInfoHeading>
      </ProfileInfoContainer>
      <PersonalQuotes>
        People will know more about you if you provide us with some data.
      </PersonalQuotes>
      <ModalLink type="link">Let&apos;s do it!</ModalLink>
    </AboutContainer>
  );
};

export default About;
