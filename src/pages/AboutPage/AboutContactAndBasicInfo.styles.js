import styled from "styled-components";

export const AboutInfoContainer = styled.div`
  display: flex;
  font-family: Roboto;
  justify-content: center;
  padding: 28px 8px;
`;

export const AboutContainer = styled.div`
  display: flex;
  width: 876px;
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

export const AboutBodyContainer = styled.div`
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

export const GenderAction = styled.button`
  border: none;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: -5px;
  margin-top: 10px;
  margin-right: auto;
  &:focus {
    outline: none;
  }
`;

export const GenderSpan = styled.span`
  color: ${props => props.theme.primaryText};
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const BirthdayAction = styled.button`
  border: none;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: -5px;
  margin-top: 10px;
  margin-right: auto;
  &:focus {
    outline: none;
  }
`;

export const BirthdaySpan = styled.span`
  color: ${props => props.theme.primaryText};
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const BirthdayContainer = styled.div`
  display: flex;
`;

export const DayInput = styled.input`
  width: 20%;
  height: 40px;
  background-color: ${props => props.theme.secondaryBackground};
  color: ${props => props.theme.secondaryText};
  border: none;
  border-radius: 6px;
  padding: 8px;
  margin-right: 16px;
  font-size: 1.5rem;

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;

export const MonthInput = styled.input`
  width: 20%;
  height: 40px;
  color: ${props => props.theme.secondaryText};
  background-color: ${props => props.theme.secondaryBackground};
  border: none;
  border-radius: 6px;
  padding: 8px;
  margin-right: 16px;
  font-size: 1.5rem;
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;

export const YearInput = styled.input`
  width: 20%;
  height: 40px;
  color: ${props => props.theme.secondaryText};
  background-color: ${props => props.theme.secondaryBackground};
  border: none;
  border-radius: 6px;
  padding: 8px;
  font-size: 1.5rem;
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }
`;

export const HomeplaceAction = styled.button`
  border: none;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: -5px;
  margin-top: 10px;
  margin-right: auto;
  &:focus {
    outline: none;
  }
`;

export const HomeplaceSpan = styled.span`
  color: ${props => props.theme.primaryText};
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 12px;
`;

export const ActionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const GenderActionContainer = styled.form`
  margin-top: 20px;
`;

export const BirthdayActionContainer = styled.form`
  margin-top: 15px;
`;

export const HomeplaceActionContainer = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const HomeplaceInput = styled.input`
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
    border: 1px solid ${props => props.theme.primaryText};
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  margin-right: 8px;
  font-weight: 500;
  background-color: ${props => props.theme.secondaryBackground};
  color: ${props => props.theme.secondaryText};
  border: none;
  font-size: 1.5rem;
  border-radius: 6px;
  padding: 8px 12px;
  transition: 0.1s;
  cursor: pointer;

  &&:focus {
    border-color: none;
    background-color: ${props => props.theme.secondaryBackground};
    color: ${props => props.theme.secondaryText};
    outline: none;
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

export const SaveButton = styled.button`
  background-color: ${props => props.theme.primaryText};
  color: #fff;
  font-weight: 500;
  transition: 0.1s;
  font-size: 1.5rem;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;

  &&:focus,
  &&:hover {
    background-color: ${props => props.theme.primaryText};
    color: #fff;
    outline: none;
  }

  &&:active {
    color: #fff;
    transform: scale(0.96);
  }
`;

export const Gender = styled.div`
  font-size: 1.5rem;
  display: flex;
  color: ${props => props.theme.secondaryText};
  align-items: center;
`;

export const Birthday = styled.div`
  font-size: 1.5rem;
  display: flex;
  color: ${props => props.theme.secondaryText};
  align-items: center;
`;

export const Homeplace = styled.div`
  font-size: 1.5rem;
  display: flex;
  color: ${props => props.theme.secondaryText};
  align-items: center;
`;

export const SettingsContainer = styled.button`
  margin-left: auto;
  border: none;
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
    outline: none;
  }
  &&:active {
    transform: scale(0.96);
  }
  &&:hover {
    background-color: ${props => props.theme.secondaryHoverBackground};
  }
`;

export const GenderBody = styled.div`
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

export const BirthdayBody = styled.div`
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

export const HomeplaceBody = styled.div`
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

export const FemaleGender = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

export const MaleGender = styled.input`
  margin-right: 8px;
  cursor: pointer;
`;

export const FemaleLabel = styled.label`
  line-height: 1;
  font-size: 1.5rem;
  color: ${props => props.theme.secondaryText};
`;

export const MaleLabel = styled.label`
  line-height: 1;
  font-size: 1.5rem;
  color: ${props => props.theme.secondaryText};
`;

export const FemaleContainer = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const MaleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const GenderContainer = styled.div`
  display: flex;
`;
