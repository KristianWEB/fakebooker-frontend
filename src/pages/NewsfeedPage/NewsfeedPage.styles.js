import styled from "styled-components";
import { Row } from "antd";

export const InfoContainer = styled(Row)`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  padding-top: 8px;
`;

export const PostContainer = styled(Row)`
  display: flex;
  flex-basis: 75%;
  padding: 0 32px;
  justify-content: center;

  @media only screen and (max-width: 992px) {
    flex-basis: 100%;
    padding: 0;
    width: 100%;
  }
`;
export const PostsSection = styled(Row)`
  width: 680px;
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0 5px;
  }
`;

export const ContactsSidebar = styled(Row)`
  display: none;
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-basis: 25%;
    margin-top: 50px;
    max-width: 320px;
  }
`;
export const ContactsContainer = styled(Row)`
  position: fixed;
  max-width: 320px;
  width: 320px;
  @media only screen and (max-width: 1250px) {
    width: 250px;
  }
`;

export const ContactsHeader = styled(Row)`
  display: flex;
  margin-right: 18px;
  margin-bottom: 16px;
`;

export const ContactsHeading = styled.h1`
  font-size: 1.7rem;
  font-weight: medium;
  margin-right: auto;
  color: ${props => props.theme.tertiaryText};
`;

export const ContactsBody = styled(Row)`
  display: flex;
  align-items: center;
  margin-right: 8px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &&:hover {
    background-color: ${props => props.theme.secondaryBackground};
  }
  &&:active {
    background-color: ${props => props.theme.secondaryHoverBackground};
  }
`;

export const ContactAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  object-fit: cover;
`;

export const ContactFullName = styled.h1`
  font-size: 1.5rem;
  margin-left: 12px;
  color: ${props => props.theme.secondaryText};
  font-weight: medium;
`;
