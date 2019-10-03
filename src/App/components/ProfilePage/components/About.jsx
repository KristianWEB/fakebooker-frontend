import React from "react";
import {
  AboutContainer,
  ProfileInfoContainer,
  PersonalQuotes,
  ProfileDescriptionContainer,
  ProfileInfoHeading,
  ProfileHeadingIcon,
  AboutMeContainer,
  AboutMeHeading,
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
import NewsFeedIcon from "../../../../assets/icons/newsfeed-icon.svg";

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
          <AboutMeHeading>About Me:</AboutMeHeading>
          <AboutMeInfo>
            Hi, I am James, I am 36 and I work as a Digital Designer for the
            Daydreams Agency in Pier 56.
          </AboutMeInfo>
        </AboutMeContainer>
        <LocationContainer>
          <LocationHeading>Location: </LocationHeading>
          <LocationInfo>New York, US </LocationInfo>
        </LocationContainer>
        <SocialStatusContainer>
          <SocialStatusHeading>Social Status: </SocialStatusHeading>
          <SocialStatusInfo> Works at Facebook</SocialStatusInfo>
        </SocialStatusContainer>
        <DateOfBirthContainer>
          <DateOfBirthHeading>Date of Birth: </DateOfBirthHeading>
          <DateOfBirthInfo>27 July 1983</DateOfBirthInfo>
        </DateOfBirthContainer>
        <RelationshipContainer>
          <RelationshipHeading>Relationship:</RelationshipHeading>
          <RelationshipInfo>Single</RelationshipInfo>
        </RelationshipContainer>
      </ProfileDescriptionContainer>
    </AboutContainer>
  );
};

export default About;
