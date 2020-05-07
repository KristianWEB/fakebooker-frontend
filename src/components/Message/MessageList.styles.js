import styled from "styled-components";

export const MessageListContainer = styled.div`
  font-family: "Roboto";
  width: 100%;
`;

export const MessageListHeading = styled.h3`
  color: ${(props) => props.theme.secondaryText};
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1;
  padding: 16px 18px 12px 18px;
`;
export const MessageRow = styled.div`
  padding: 8px;
  max-height: 350px;
  overflow-y: auto;
`;

export const MessageListSkeleton = styled.div`
  padding: 16px;
`;
