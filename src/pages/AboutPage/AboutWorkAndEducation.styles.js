import styled from "styled-components";
import { Row, Button, Avatar, Input } from "antd";

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
  flex-grow: 1;
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
  color: #1876f2;
  background-color: #e7f3ff;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 6px;
  padding: 10px;
  margin: 0 6px;
  margin-bottom: 8px;
`;

export const ContactAndBasicInfo = styled.p`
  color: #65676b;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 6px;
  padding: 10px;
  border-radius: 6px;
  margin-left: 6px;
  margin-bottom: 20px;

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

export const AboutBodyContainer = styled(Row)`
  padding: 16px;
  flex-direction: column;
  flex-grow: 4;
  display: flex;
`;

export const WorkplaceContainer = styled(Row)`
  width: 100%;
`;
export const WorkplaceHeading = styled.h1`
  color: #050505;
  font-weight: bold;
  font-size: 1.7rem;
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
  color: #1977f3;
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const SchoolContainer = styled(Row)`
  margin-top: 32px;
  width: 100%;
`;
export const SchoolHeading = styled.h1`
  color: #050505;
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
  color: #1977f3;
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const School = styled(Row)`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const SchoolImage = styled(Avatar)``;

export const SchoolBody = styled.h1`
  font-size: 1.5rem;
  margin-left: 12px;
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

export const WorkplaceActionContainer = styled(Row)``;

export const WorkplaceInput = styled(Input)`
  margin-top: 15px;
  padding: 20px 16px;
`;

export const CancelButton = styled(Button)`
  margin-right: 8px;
  font-weight: 500;
  background-color: #e4e6eb;
  color: #050505;
  border: none;

  &&:hover,
  &&:active,
  &&:focus {
    background-color: #e4e6eb;
    color: #050505;
    border-color: none;
  }
`;

export const SaveButton = styled(Button)`
  background-color: #1876f2;
  color: #fff;
  font-weight: 500;

  &&:hover,
  &&:active,
  &&:focus {
    background-color: #1876f2;
    color: #fff;
  }
`;

export const Footer = styled(Row)`
  display: flex;
  margin-top: 12px;
  justify-content: flex-end;
`;
