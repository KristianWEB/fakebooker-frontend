import styled from "styled-components";
import { Row } from "antd";

export const NotificationListContainer = styled(Row)`
  font-family: "Roboto";
`;

export const NotificationListHeading = styled.h3`
  color: ${props => props.theme.secondaryText};
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1;
  padding: 16px 18px 12px 18px;
`;

export const NotificationRow = styled(Row)`
  padding: 0 8px;
`;
