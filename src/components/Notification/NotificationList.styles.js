import styled from "styled-components";

export const NotificationListContainer = styled.div`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NotificationListHeading = styled.h3`
  color: ${(props) => props.theme.secondaryText};
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1;
  padding: 16px 18px 12px 18px;
`;

export const NotificationRow = styled.div`
  padding: 8px;
`;
