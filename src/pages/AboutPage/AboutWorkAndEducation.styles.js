import styled from "styled-components";
import { Row, Button, Input, Form } from "antd";

export const AboutInfoContainer = styled(Row)`
  display: flex;
  font-family: Roboto;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 28px;
  background-color: ${props => props.theme.inputColor};
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
  color: ${props => props.theme.primaryText};
  font-size: 1.5rem;
  background-color: ${props => props.theme.primaryBackground};
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  margin: 0 6px;
  margin-bottom: 8px;
`;

export const ContactAndBasicInfo = styled.p`
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

export const AboutBodyContainer = styled(Row)`
  padding: 16px;
  flex-direction: column;
  width: 67%;
  display: flex;
  justify-content: center;
`;

export const WorkplaceContainer = styled(Row)`
  width: 100%;
`;
export const WorkplaceHeading = styled.h1`
  color: ${props => props.theme.secondaryText};
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 1;
  margin: 0;
`;

export const WorkplaceAction = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-left: -5px;
  margin-top: 10px;
`;

export const WorkplaceSpan = styled.span`
  color: ${props => props.theme.primaryText};
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const SchoolContainer = styled(Row)`
  width: 100%;
  margin-top: 32px;
`;
export const SchoolHeading = styled.h1`
  color: ${props => props.theme.secondaryText};
  font-weight: bold;
  font-size: 1.7rem;
  margin: 0;
`;

export const SchoolAction = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-left: -5px;
  margin-top: 10px;
`;

export const SchoolSpan = styled.span`
  color: ${props => props.theme.primaryText};
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const School = styled(Row)`
  display: flex;
  align-items: center;
`;

export const SchoolBody = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const WorkPlace = styled(Row)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: ${props => props.theme.secondaryText};
`;

export const WorkPlaceBody = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const SettingsContainer = styled(Button)`
  margin-left: auto;
  border-radius: 50%;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.01s;
  padding: 5px;
  background-color: ${props => props.theme.secondaryBackground};

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

export const WorkplaceActionContainer = styled(Form)``;

export const WorkplaceInput = styled(Input)`
  border-color: #ced0d4;
  margin-top: 15px;
  padding: 20px 16px;
`;

export const SchoolActionContainer = styled(Form)``;

export const SchoolInput = styled(Input)`
  border-color: #ced0d4;
  margin-top: 15px;
  padding: 20px 16px;
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
  border-color: none;

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

export const Footer = styled(Row)`
  display: flex;
  margin-top: 12px;
  justify-content: flex-end;
`;
