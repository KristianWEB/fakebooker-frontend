import React from "react";
import {
  AboutContainer,
  ProfileInfoContainer,
  PersonalQuotes,
  ProfileDescriptionContainer,
  ProfileInfoHeading,
  ProfileHeadingIcon,
  AboutMeContainer,
  IntroContainer,
  IntroIcon,
  IntroHeading,
  AboutMeInfo,
  LocationContainer,
  LocationHeading,
  LocationInfo,
  SocialStatusContainer,
  SocialStatusHeading,
  SocialStatusInfo,
  DateOfBirthContainer,
  DateOfBirthHeading,
  DateOfBirthInfo,
  RelationshipContainer,
  RelationshipHeading,
  RelationshipInfo
} from "./About.styles";
import NewsFeedIcon from "../../assets/icons/newsfeed-icon.svg";
import BadgeIcon from "../../assets/icons/badge-icon.svg";
import StarIcon from "../../assets/icons/star-icon.svg";
import CupcakeIcon from "../../assets/icons/cupcake-icon.svg";
import HeartIcon from "../../assets/icons/heart-icon.svg";

const About = () => {
  return (
    <AboutContainer>
      <ProfileInfoContainer>
        <ProfileHeadingIcon src={NewsFeedIcon} />
        <ProfileInfoHeading>Profile Intro</ProfileInfoHeading>
      </ProfileInfoContainer>
      <PersonalQuotes>Personal Quotes for this person</PersonalQuotes>
      <ProfileDescriptionContainer>
        <AboutMeContainer>
          <IntroContainer>
            <IntroIcon src={BadgeIcon} alt="badge-icon" />
            <IntroHeading>About Me:</IntroHeading>
          </IntroContainer>
          <AboutMeInfo>
            Hi, I am James, I am 36 and I work as a Digital Designer for the
            Daydreams Agency in Pier 56.
          </AboutMeInfo>
        </AboutMeContainer>
        <LocationContainer>
          <IntroContainer>
            <IntroIcon src={BadgeIcon} alt="badge-icon" />
            <LocationHeading>Location: </LocationHeading>
          </IntroContainer>
          <LocationInfo>New York, US </LocationInfo>
        </LocationContainer>
        <SocialStatusContainer>
          <IntroContainer>
            <IntroIcon src={StarIcon} alt="star-icon" />
            <SocialStatusHeading>Social Status: </SocialStatusHeading>
          </IntroContainer>
          <SocialStatusInfo> Works at Facebook</SocialStatusInfo>
        </SocialStatusContainer>
        <DateOfBirthContainer>
          <IntroContainer>
            <IntroIcon src={CupcakeIcon} alt="cupcake-icon" />
            <DateOfBirthHeading>Date of Birth: </DateOfBirthHeading>
          </IntroContainer>
          <DateOfBirthInfo>27 July 1983</DateOfBirthInfo>
        </DateOfBirthContainer>
        <RelationshipContainer>
          <IntroContainer>
            <IntroIcon src={HeartIcon} alt="heart-icon" />
            <RelationshipHeading>Relationship:</RelationshipHeading>
          </IntroContainer>
          <RelationshipInfo>Single</RelationshipInfo>
        </RelationshipContainer>
      </ProfileDescriptionContainer>
    </AboutContainer>
  );
};

export default About;
