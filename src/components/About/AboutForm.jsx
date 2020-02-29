import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
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
import { ReactComponent as FormCloseIcon } from "../../assets/icons/_ionicons_svg_md-close.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/_ionicons_svg_md-add-circle-outline.svg";

const AboutForm = ({ theme }) => {
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
              <AddIcon width="35" height="35" fill={theme.appTextColor} />
              <ButtonActionHeading>Add Jobs</ButtonActionHeading>
            </WorkActionBtn>
          </WorkContainer>
          <WorkContainer>
            <WorkHeading>Education</WorkHeading>
            <WorkActionBtn>
              <AddIcon width="35" height="35" fill={theme.appTextColor} />
              <ButtonActionHeading>Add high-school</ButtonActionHeading>
            </WorkActionBtn>
            <WorkActionBtn>
              <AddIcon width="35" height="35" fill={theme.appTextColor} />
              <ButtonActionHeading>Add college</ButtonActionHeading>
            </WorkActionBtn>
          </WorkContainer>
          <WorkContainer>
            <WorkHeading>Current city</WorkHeading>
            <WorkActionBtn>
              {/* <AddIcon width="35" height="35" fill={theme.appTextColor} /> */}
              <ButtonActionHeading>Add Current city</ButtonActionHeading>
            </WorkActionBtn>
          </WorkContainer>
          <WorkContainer>
            <WorkHeading>Home city</WorkHeading>
            <WorkActionBtn>
              {/* <AddIcon width="35" height="35" fill={theme.appTextColor} /> */}
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

export default withTheme(AboutForm);

AboutForm.propTypes = {
  theme: PropTypes.shape({
    appTextColor: PropTypes.string
  })
};

AboutForm.defaultProps = {
  theme: null
};
