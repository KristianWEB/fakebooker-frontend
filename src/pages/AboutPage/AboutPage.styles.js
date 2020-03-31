import styled from "styled-components";
import { Row } from "antd";

export const AboutPageContainer = styled(Row)`
  height: 100%;
  width: 100%;
  background-color: #f0f2f5;
`;

export const AboutInfoContainer = styled(Row)`
  display: flex;
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
  width: 286px;
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
  margin: 6px;
  margin-bottom: 8px;
`;

export const WorkAndEducation = styled.p`
  color: #65676b;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 6px;
  padding: 10px;
  margin: 6px;
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
  margin: 6px;
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
