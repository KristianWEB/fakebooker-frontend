import styled from "styled-components";

export const AboutPageContainer = styled.div``;

export const AboutInfoContainer = styled.div`
  display: flex;
  font-family: Roboto;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const AboutContainer = styled.div`
  display: flex;
  width: 866px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: ${props => props.theme.boxShadow2};
`;

export const AboutSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  border-right: 1px solid ${props => props.theme.secondaryBackground};
  padding: 6px;
`;

export const AboutHeading = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.secondaryText};
  margin: 20px 10px;
`;

export const Overview = styled.button`
  color: ${props => props.theme.primaryText};
  border: none;
  width: 100%;
  text-align: left;
  font-size: 1.5rem;
  background-color: ${props => props.theme.primaryBackground};
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 8px;

  &:focus {
    outline: none;
  }
`;

export const WorkAndEducation = styled.button`
  color: ${props => props.theme.tertiaryText};
  cursor: pointer;
  border: none;
  text-align: left;
  width: 100%;
  background-color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px;
  border-radius: 6px;
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

export const ContactAndBasicInfo = styled.button`
  color: ${props => props.theme.tertiaryText};
  cursor: pointer;
  border: none;
  text-align: left;
  width: 100%;
  background-color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px;
  border-radius: 6px;
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

export const AboutBodyContainer = styled.div`
  padding: 16px;
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WorkplaceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const WorkplaceBody = styled.h1`
  color: ${props => props.theme.secondaryText};
  font-size: 1.5rem;
  font-weight: 400;
  margin-left: 16px;
`;

export const SchoolContainer = styled.div`
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

export const HomeContainer = styled.div`
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
