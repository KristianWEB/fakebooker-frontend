import styled from "styled-components";
import { Row, Button, Input, Form } from "antd";

export const AboutInfoContainer = styled(Row)`
  display: flex;
  font-family: Roboto;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 28px;
  background-color: #f0f2f5;
`;

export const AboutContainer = styled(Row)`
  display: flex;
  width: 866px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const AboutSidebar = styled(Row)`
  display: flex;
  flex-direction: column;
  /* flex-grow: 1; */
  width: 33%;
  border-right: 1px solid #ced0d4;
`;

export const AboutHeading = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #050505;
  margin: 20px 16px;
`;

export const Overview = styled.p`
  color: #65676b;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  margin: 0 6px;
  margin-bottom: 8px;

  &:hover {
    background-color: #f2f2f2;
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #e4e6eb;
  }
`;

export const WorkAndEducation = styled.p`
  color: #65676b;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  margin: 0 6px;
  margin-bottom: 8px;

  &:hover {
    background-color: #f2f2f2;
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #e4e6eb;
  }
`;

export const ContactAndBasicInfo = styled.p`
  color: #1876f2;
  background-color: #e7f3ff;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 6px;
  padding: 10px;
  margin: 0 6px;
  margin-bottom: 8px;
`;

export const AboutBodyContainer = styled(Row)`
  padding: 16px;
  flex-direction: column;
  width: 66%;
  display: flex;
  /* justify-content: center; */
`;

export const BasicInfoHeading = styled.h1`
  color: #050505;
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
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const GenderSpan = styled.span`
  color: #1977f3;
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const BirthdayAction = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: -5px;
  margin-top: 10px;
`;

export const BirthdaySpan = styled.span`
  color: #1977f3;
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const HomeplaceAction = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: -5px;
  margin-top: 10px;
`;

export const HomeplaceSpan = styled.span`
  color: #1977f3;
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

export const Footer = styled(Row)`
  display: flex;
  margin-top: 12px;
  justify-content: flex-end;
`;

export const CancelButton = styled(Button)`
  margin-right: 8px;
  font-weight: 500;
  background-color: #e4e6eb;
  color: #050505;
  border: none;
  transition: 0.1s;

  &&:focus {
    background-color: #e4e6eb;
    color: #050505;
    border-color: none;
  }

  &&:active {
    background-color: #e4e6eb;
  }

  &&:hover {
    background-color: #d8dadf;
    color: #050505;
    border-color: none;
  }
`;

export const SaveButton = styled(Button)`
  background-color: #1877f2;
  color: #fff;
  font-weight: 500;
  transition: 0.1s;
  border: none;

  &&:focus {
    background-color: #1877f2;
    color: #fff;
    border: none;
  }

  &&:active {
    background-color: #1877f2;
    color: #fff;
    border: none;
  }

  &&:hover {
    background-color: #1771e6;
    color: #fff;
    border: none;
  }
`;

export const Gender = styled(Row)`
  font-size: 1.5rem;
  display: flex;
  color: #050505;
  align-items: center;
`;

export const SettingsContainer = styled(Button)`
  margin-left: auto;
  border-radius: 50%;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: #e4e6eb;
  cursor: pointer;
  transition: 0.1s;
  padding: 5px;

  &&:focus {
    background-color: #e4e6eb;
  }

  &&:active {
    background-color: #e4e6eb;
    color: ${props => props.theme.primarytextcolor};
  }

  &&:hover {
    background-color: #d8dadf;
    color: ${props => props.theme.primarytextcolor};
  }
`;
