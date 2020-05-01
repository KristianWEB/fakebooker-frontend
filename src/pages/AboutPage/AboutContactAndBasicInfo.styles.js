import styled from "styled-components";
import { Row, Button, DatePicker, Form, Input } from "antd";

export const AboutInfoContainer = styled(Row)`
  display: flex;
  font-family: Roboto;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const AboutContainer = styled(Row)`
  display: flex;
  width: 866px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: ${props => props.theme.boxShadow2};
`;

export const AboutSidebar = styled(Row)`
  display: flex;
  flex-direction: column;
  /* flex-grow: 1; */
  width: 33%;
  border-right: 1px solid ${props => props.theme.secondaryBackground};
`;

export const AboutHeading = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.secondaryText};
  margin: 20px 16px;
`;

export const Overview = styled.p`
  color: ${props => props.theme.tertiaryText};
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 6px;
  padding: 10px;
  margin: 0 6px;
  margin-bottom: 8px;

  &:hover {
    background-color: ${props => props.theme.tertiaryBackground};
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${props => props.theme.secondaryBackground};
    outline: none;
  }
`;

export const WorkAndEducation = styled.p`
  color: ${props => props.theme.tertiaryText};
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 6px;
  padding: 10px;
  margin: 0 6px;
  margin-bottom: 8px;

  &:hover {
    background-color: ${props => props.theme.tertiaryBackground};
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${props => props.theme.secondaryBackground};
    outline: none;
  }
`;

export const ContactAndBasicInfo = styled.p`
  color: ${props => props.theme.primaryText};
  font-size: 1.5rem;
  background-color: ${props => props.theme.primaryBackground};
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  margin: 0 6px;
`;

export const AboutBodyContainer = styled(Row)`
  padding: 16px;
  flex-direction: column;
  width: 67%;
  display: flex;
`;

export const BasicInfoHeading = styled.h1`
  color: ${props => props.theme.secondaryText};
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 1;
  margin: 0;
`;

export const GenderAction = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: -5px;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const GenderSpan = styled.span`
  color: ${props => props.theme.primaryText};
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const BirthdayAction = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: -5px;
  margin-top: 15px;
`;

export const BirthdaySpan = styled.span`
  color: ${props => props.theme.primaryText};
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const HomeplaceAction = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: -5px;
  margin-top: 15px;
`;

export const HomeplaceSpan = styled.span`
  color: ${props => props.theme.primaryText};
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const ActionContainer = styled(Row)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const GenderActionContainer = styled(Form)`
  margin-top: 20px;
`;

export const BirthdayActionContainer = styled(Form)`
  margin-top: 15px;
`;

export const HomeplaceActionContainer = styled(Form)`
  margin-top: 15px;
`;

export const HomeplaceInput = styled(Input)`
  border-color: #ced0d4;
  margin-top: 15px;
  padding: 20px 16px;
`;

export const BirthdayInput = styled(DatePicker)`
  && {
    width: 100%;

    .ant-calendar-picker-input {
      padding: 20px 16px;
      border-color: #ced0d4;

      &:hover {
        border-color: #8a8d91;
      }

      &:focus,
      &:active {
        border-color: ${props => props.theme.primaryText};
        outline: 0;
        box-shadow: none;
      }
    }
  }
`;

export const Footer = styled(Row)`
  display: flex;
  margin-top: 12px;
  justify-content: flex-end;
`;

export const CancelButton = styled(Button)`
  margin-right: 8px;
  font-weight: 500;
  background-color: ${props => props.theme.secondaryBackground};
  color: ${props => props.theme.secondaryText};
  border: none;
  transition: 0.1s;

  &&:focus {
    border-color: none;
    background-color: ${props => props.theme.secondaryBackground};
    color: ${props => props.theme.secondaryText};
  }

  &&:active {
    transform: scale(0.96);
  }

  &&:hover {
    border-color: none;
    color: ${props => props.theme.secondaryText};
    background-color: ${props => props.theme.secondaryHoverBackground};
  }
`;

export const SaveButton = styled(Button)`
  background-color: ${props => props.theme.primaryText};
  color: #fff;
  font-weight: 500;
  transition: 0.1s;
  border: none;

  &&:focus,
  &&:hover {
    background-color: ${props => props.theme.primaryText};
    color: #fff;
    border-color: none;
  }

  &&:active {
    color: #fff;
    border-color: none;
    transform: scale(0.96);
  }
`;

export const Gender = styled(Row)`
  font-size: 1.5rem;
  display: flex;
  color: ${props => props.theme.secondaryText};
  align-items: center;
`;

export const Birthday = styled(Row)`
  font-size: 1.5rem;
  display: flex;
  color: ${props => props.theme.secondaryText};
  align-items: center;
`;

export const Homeplace = styled(Row)`
  font-size: 1.5rem;
  display: flex;
  color: ${props => props.theme.secondaryText};
  align-items: center;
`;

export const SettingsContainer = styled(Button)`
  margin-left: auto;
  border-radius: 50%;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.secondaryBackground};
  cursor: pointer;
  transition: 0.1s;
  padding: 5px;

  &&:focus {
    background-color: ${props => props.theme.secondaryBackground};
  }
  &&:active {
    transform: scale(0.96);
  }
  &&:hover {
    background-color: ${props => props.theme.secondaryHoverBackground};
  }
`;

export const GenderBody = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
  margin-top: 20px;
`;

export const UserGender = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.secondaryText};
`;

export const GenderCaption = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.tertiaryText};
  margin: 0;
`;

export const BirthdayBody = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
  margin-top: 20px;
`;

export const UserBirthday = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.secondaryText};
`;

export const BirthdayCaption = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.tertiaryText};
  margin: 0;
`;

export const HomeplaceBody = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
  margin-top: 20px;
`;

export const UserHomeplace = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.secondaryText};
`;

export const HomeplaceCaption = styled.p`
  font-size: 1.2rem;
  color: #65676b;
  margin: 0;
`;
