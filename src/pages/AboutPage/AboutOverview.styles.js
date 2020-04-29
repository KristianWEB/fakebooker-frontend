import styled from "styled-components";
import { Row } from "antd";

export const AboutPageContainer = styled(Row)``;

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
  color: ${props => props.theme.primaryText};
  font-size: 1.5rem;
  background-color: ${props => props.theme.primaryBackground};
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  margin: 0 6px;
  margin-bottom: 8px;
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
  color: ${props => props.theme.tertiaryText};
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 6px;
  padding: 10px;
  border-radius: 6px;
  margin-left: 6px;
  margin-bottom: 20px;
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
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WorkplaceContainer = styled(Row)`
  display: flex;
  align-items: center;
`;

export const WorkplaceBody = styled.h1`
  color: ${props => props.theme.secondaryText};
  font-size: 1.5rem;
  font-weight: 400;
  margin-left: 16px;
`;

export const SchoolContainer = styled(Row)`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

export const SchoolBody = styled.h1`
  color: ${props => props.theme.secondaryText};
  font-size: 1.5rem;
  margin-left: 16px;
  font-weight: 400;
`;

export const HomeContainer = styled(Row)`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

export const HomeBody = styled.h1`
  color: ${props => props.theme.secondaryText};
  font-size: 1.5rem;
  margin-left: 16px;
  font-weight: 400;
`;