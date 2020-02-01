import React from "react";
import {
  AboutFormContainer,
  HeadingContainer,
  Heading,
  CloseContainer,
  ActionsContainer,
  ActionsHeading,
  ActionsParagraph,
  WorkContainer,
  WorkHeading,
  WorkActionBtn,
  ButtonActionHeading,
  AboutFormFooter,
  UpdateInformationBtn,
  FooterActions,
  FooterCloseBtn,
  FooterSaveBtn
} from "./AboutForm.styles";
import FormCloseIcon from "../../assets/icons/_ionicons_svg_md-close.svg";
import AddIcon from "../../assets/icons/_ionicons_svg_md-add-circle-outline.svg";

const AboutForm = ({ showModal }) => {
  return (
    <>
      <AboutFormContainer>
        <HeadingContainer>
          <Heading>Edit details</Heading>
          <CloseContainer>
            <FormCloseIcon width="20" height="20" fill="#62626A" />
          </CloseContainer>
        </HeadingContainer>
        <ActionsContainer>
          <ActionsHeading>Customize your presentation</ActionsHeading>
          <ActionsParagraph>
            Details you select will be public and won’t post to News Feed.
          </ActionsParagraph>
          <WorkContainer>
            <WorkHeading>Work</WorkHeading>
            <WorkActionBtn>
              <AddIcon width="35" height="35" fill="#1977F3" />
              <ButtonActionHeading>Add Jobs</ButtonActionHeading>
            </WorkActionBtn>
          </WorkContainer>
          <WorkContainer>
            <WorkHeading>Education</WorkHeading>
            <WorkActionBtn>
              <AddIcon width="35" height="35" fill="#1977F3" />
              <ButtonActionHeading>Add high-school</ButtonActionHeading>
            </WorkActionBtn>
            <WorkActionBtn>
              <AddIcon width="35" height="35" fill="#1977F3" />
              <ButtonActionHeading>Add college</ButtonActionHeading>
            </WorkActionBtn>
          </WorkContainer>
          <WorkContainer>
            <WorkHeading>Current city</WorkHeading>
            <WorkActionBtn>
              <AddIcon width="35" height="35" fill="#1977F3" />
              <ButtonActionHeading>Add Current city</ButtonActionHeading>
            </WorkActionBtn>
          </WorkContainer>
          <WorkContainer>
            <WorkHeading>Home city</WorkHeading>
            <WorkActionBtn>
              <AddIcon width="35" height="35" fill="#1977F3" />
              <ButtonActionHeading>Add Home city</ButtonActionHeading>
            </WorkActionBtn>
          </WorkContainer>
        </ActionsContainer>
        <AboutFormFooter>
          <UpdateInformationBtn>Update your Information</UpdateInformationBtn>
          <FooterActions>
            <FooterCloseBtn>Cancel</FooterCloseBtn>
            <FooterSaveBtn>Save</FooterSaveBtn>
          </FooterActions>
        </AboutFormFooter>
      </AboutFormContainer>
    </>
  );
};

export default AboutForm;
