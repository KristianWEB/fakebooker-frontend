import styled from "styled-components";

export const AboutInfoContainer = styled.div`
  display: flex;
  font-family: Roboto;
  justify-content: center;
  padding: 28px 0;
`;

export const AboutContainer = styled.div`
  display: flex;
  width: 876px;
  background-color: #fff;
  border-radius: 6px;
  @media only screen and (max-width: 575px) {
    border-radius: 0;
  }
  box-shadow: ${(props) => props.theme.boxShadow2};
`;

export const AboutSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  border-right: 1px solid ${(props) => props.theme.secondaryBackground};
  padding: 6px;
`;

export const AboutHeading = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.secondaryText};
  margin: 20px 10px;
`;

export const SidebarButton = styled.button`
  border: none;
  width: 100%;
  text-align: left;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Overview = styled(SidebarButton)`
  color: ${(props) => props.theme.tertiaryText};
  background-color: #fff;

  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.secondaryBackground};
    outline: none;
  }
`;

export const WorkAndEducation = styled(SidebarButton)`
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.primaryBackground};

  &:focus {
    outline: none;
  }
`;

export const ContactAndBasicInfo = styled(SidebarButton)`
  color: ${(props) => props.theme.tertiaryText};
  background-color: #fff;

  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.secondaryBackground};
    outline: none;
  }
`;

export const AboutBodyContainer = styled.div`
  padding: 16px;
  flex-direction: column;
  width: 67%;
  display: flex;
  justify-content: center;
`;

export const WorkplaceContainer = styled.div`
  width: 100%;
`;
export const ActionHeading = styled.h1`
  color: ${(props) => props.theme.secondaryText};
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 1;
  margin: 0;
`;

export const ActionButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-left: -5px;
  margin-top: 10px;
  &:focus {
    outline: none;
  }
`;
export const SchoolContainer = styled.div`
  width: 100%;
  margin-top: 32px;
`;

export const ActionSpan = styled.span`
  color: ${(props) => props.theme.primaryText};
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const School = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionBody = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const WorkPlace = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: ${(props) => props.theme.secondaryText};
`;

export const SettingsContainer = styled.button`
  margin-left: auto;
  border: none;
  border-radius: 50%;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.01s;
  padding: 5px;
  background-color: ${(props) => props.theme.secondaryBackground};

  &:focus {
    background-color: ${(props) => props.theme.secondaryBackground};
    outline: none;
  }
  &:active {
    transform: scale(0.96);
  }
  &:hover {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
  }
`;

export const WorkplaceActionContainer = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const SchoolActionContainer = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const ActionInput = styled.input`
  border: 1px solid #ced0d4;
  margin-top: 15px;
  padding: 16px;
  border-radius: 6px;
  font-size: 1.5rem;
  ::placeholder {
    font-size: 1.5rem;
  }
  &:hover {
    border: 1px solid #8a8d91;
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.primaryText};
  }
`;

export const FooterButton = styled.button`
  font-weight: 500;
  border: none;
  font-size: 1.5rem;
  border-radius: 6px;
  padding: 8px 12px;
  transition: 0.1s;
  cursor: pointer;
`;

export const CancelButton = styled(FooterButton)`
  margin-right: 8px;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.secondaryText};

  &&:focus {
    border-color: none;
    background-color: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.secondaryText};
    outline: none;
  }

  &&:active {
    transform: scale(0.96);
  }

  &&:hover {
    border-color: none;
    color: ${(props) => props.theme.secondaryText};
    background-color: ${(props) => props.theme.secondaryHoverBackground};
  }
`;

export const SaveButton = styled(FooterButton)`
  background-color: ${(props) => props.theme.primaryText};
  color: #fff;

  &&:focus,
  &&:hover {
    background-color: ${(props) => props.theme.primaryText};
    color: #fff;
    outline: none;
  }

  &&:active {
    color: #fff;
    transform: scale(0.96);
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: flex-end;
`;

export const AboutSkeleton = styled.div`
  display: flex;
`;
