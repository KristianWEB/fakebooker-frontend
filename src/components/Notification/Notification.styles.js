import styled from "styled-components";

export const NotificationContainer = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 8px;
  transition: 0.1s;
  font-family: Roboto;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
  }

  &:last-child {
    margin-bottom: 12px;
  }

  &:active {
    background-color: ${(props) => props.theme.secondaryBackground};
  }
`;

export const CreatorAvatar = styled.img`
  && {
    width: 56px;
    height: 56px;
    border-radius: 100%;
    object-fit: cover;
    margin-right: 12px;
  }
`;

export const CreatorFullName = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.secondaryText};
`;

export const TextContainer = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondaryText};
`;

export const Body = styled(TextContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: normal;
`;

export const Timestamp = styled.h3`
  color: ${(props) => props.theme.primaryText};
  font-weight: bold;
  font-size: 1.3rem;
  display: flex;
  margin-top: 5px;
`;

export const NotificationHeading = styled(TextContainer)`
  font-weight: medium;
  padding: 0 16px;
  margin-bottom: 8px;
  margin-top: 8px;
`;
