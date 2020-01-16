import React from "react";
import {
  AboutContainer,
  AboutHeading,
  HomeContainer,
  HomeContainerHeading,
  HomeContainerParagraph,
  StyledButton
} from "./About.styles";
import HomeIcon from "../../assets/icons/_ionicons_svg_md-home.svg";
import JobIcon from "../../assets/icons/_ionicons_svg_md-briefcase.svg";
import LocationIcon from "../../assets/icons/_ionicons_svg_md-pin.svg";

const About = () => {
  return (
    <AboutContainer>
      <AboutHeading>About</AboutHeading>
      <HomeContainer>
        <JobIcon width="20" height="20" fill="#8C939D" />
        <HomeContainerParagraph>Blogger at</HomeContainerParagraph>
        <HomeContainerHeading>Josephine Williams</HomeContainerHeading>
      </HomeContainer>
      <HomeContainer>
        <HomeIcon width="20" height="20" fill="#8C939D" />
        <HomeContainerParagraph>Lives in</HomeContainerParagraph>
        <HomeContainerHeading>Chicago, Illinois</HomeContainerHeading>
      </HomeContainer>
      <HomeContainer>
        <LocationIcon width="20" height="20" fill="#8C939D" />
        <HomeContainerParagraph>From</HomeContainerParagraph>
        <HomeContainerHeading>New York, New York</HomeContainerHeading>
      </HomeContainer>
      <StyledButton type="button">Edit Details</StyledButton>
    </AboutContainer>
  );
};

export default About;
