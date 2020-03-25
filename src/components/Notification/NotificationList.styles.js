import styled from "styled-components";
import { Row } from "antd";

export const NotificationListContainer = styled(Row)`
  font-family: "Roboto";
`;

export const NotificationListHeading = styled.h3`
  color: ${props => props.theme.primaryTextColor};
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1;
`;

export const NotificationRow = styled(Row)``;
