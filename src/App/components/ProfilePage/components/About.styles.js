import styled from "styled-components";
import { Row } from "antd";

export const AboutContainer = styled(Row)`
  width: 295px;
  height: 412px;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;

export const ProfileInfoContainer = styled(Row)`
  display: flex;
  padding: 16px 0;
  background-color: grey;
`;

export const ProfileHeadingIcon = styled.img`
  width: 22.4px;
  height: 22.9px;
  object-fit: contain;
`;
export const ProfileInfoHeading = styled.p`
  width: 79px;
  height: 18px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #515365;
`;

export const PersonalQuotes = styled.p``;

export const ProfileDescriptionContainer = styled(Row)``;

export const AboutMeContainer = styled(Row)``;

export const AboutMeHeading = styled.p``;

export const AboutMeInfo = styled.p``;

export const LocationContainer = styled(Row)`
  display: flex;
`;

export const LocationHeading = styled.p``;
export const LocationInfo = styled.p`
  margin-left: 5px;
`;

export const SocialStatusContainer = styled(Row)`
  display: flex;
`;
export const SocialStatusHeading = styled.p``;
export const SocialStatusInfo = styled.p``;

export const DateOfBirthContainer = styled(Row)`
  display: flex;
`;
export const DateOfBirthHeading = styled.p``;
export const DateOfBirthInfo = styled.p``;

export const RelationshipContainer = styled(Row)`
  display: flex;
`;
export const RelationshipHeading = styled.p``;
export const RelationshipInfo = styled.p``;
