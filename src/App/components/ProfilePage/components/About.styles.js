import styled from "styled-components";
import { Row } from "antd";

export const AboutContainer = styled(Row)`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    width: 18.43rem;
    height: 25.75rem;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    margin: 0 0.93rem;
  }
`;

export const ProfileInfoContainer = styled(Row)`
  display: flex;
  padding: 1rem 0.81rem;
  background-color: #f6f6f6;
`;

export const ProfileHeadingIcon = styled.img`
  width: 22.4px;
  height: 22.9px;
  object-fit: contain;
  margin-right: 11px;
`;
export const ProfileInfoHeading = styled.p`
  font-family: Roboto;
  font-size: 0.93rem;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #515365;
  margin: 0;
`;

export const PersonalQuotes = styled.p`
  font-family: Roboto;
  font-size: 13px;
  line-height: 1.15;
  color: #444444;
  padding: 13px;
  border-bottom: 1px solid #f6f6f6;
`;

export const ProfileDescriptionContainer = styled(Row)`
  margin: 31.5px 13px;
`;

export const AboutMeContainer = styled(Row)``;

export const IntroContainer = styled(Row)`
  display: flex;
  align-items: center;
`;
export const IntroIcon = styled.img`
  width: 0.93rem;
  height: 0.93rem;
`;
export const IntroHeading = styled.p`
  margin: 0;
  margin-left: 8px;
  font-family: Roboto;
  font-size: 13px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #444444;
`;

export const AboutMeInfo = styled.p`
  margin-top: 3px;
  margin-left: 1.31rem;
  margin-bottom: 0;
  font-family: Roboto;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #515365;
`;

export const LocationContainer = styled(Row)`
  display: flex;
  align-items: center;
  margin-top: 1.18rem;
`;

export const LocationHeading = styled.p`
  margin: 0;
  margin-left: 8px;
  font-family: Roboto;
  line-height: 1;
  font-size: 13px;
  font-weight: bold;
  color: #444444;
`;
export const LocationInfo = styled.p`
  margin: 0;
  margin-left: 5px;
  font-family: Roboto;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #515365;
`;

export const SocialStatusContainer = styled(Row)`
  display: flex;
  margin-top: 1.18rem;
  align-items: center;
`;
export const SocialStatusHeading = styled.p`
  margin: 0;
  margin-left: 8px;
  font-family: Roboto;
  line-height: 1;
  font-size: 13px;
  font-weight: bold;
  color: #444444;
`;
export const SocialStatusInfo = styled.p`
  margin: 0;
  margin-left: 5px;
  font-family: Roboto;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #515365;
`;

export const DateOfBirthContainer = styled(Row)`
  display: flex;
  margin-top: 1.18rem;
  align-items: center;
`;
export const DateOfBirthHeading = styled.p`
  margin: 0;
  margin-left: 8px;
  font-family: Roboto;
  line-height: 1;
  font-size: 13px;
  font-weight: bold;
  color: #444444;
`;
export const DateOfBirthInfo = styled.p`
  margin: 0;
  margin-left: 5px;
  font-family: Roboto;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #515365;
`;

export const RelationshipContainer = styled(Row)`
  display: flex;
  align-items: center;
  margin-top: 1.18rem;
`;
export const RelationshipHeading = styled.p`
  margin: 0;
  margin-left: 8px;
  font-family: Roboto;
  line-height: 1;
  font-size: 13px;
  font-weight: bold;
  color: #444444;
`;
export const RelationshipInfo = styled.p`
  margin: 0;
  margin-left: 5px;
  font-family: Roboto;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #515365;
`;
