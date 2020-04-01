import styled from "styled-components";
import { Row } from "antd";

export const AboutPageContainer = styled(Row)``;

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
  color: #1876f2;
  font-size: 1.5rem;
  background-color: #e7f3ff;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  margin: 0 6px;
  margin-bottom: 8px;
`;

export const WorkAndEducation = styled.p`
  color: #65676b;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 6px;
  padding: 10px;
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
  padding: 32px;
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WorkplaceContainer = styled(Row)`
  display: flex;
  align-items: center;
`;

export const WorkplaceBody = styled.h1`
  color: #8a8d91;
  font-size: 1.5rem;
  margin-left: 16px;
`;

export const SchoolContainer = styled(Row)`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

export const SchoolBody = styled.h1`
  color: #050505;
  font-size: 1.5rem;
  margin-left: 16px;
`;

export const HomeContainer = styled(Row)`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

export const HomeBody = styled.h1`
  color: #050505;
  font-size: 1.5rem;
  margin-left: 16px;
`;
