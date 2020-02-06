import styled from "styled-components";
import { Row } from "antd";

export const ProfilePageContainer = styled(Row)`
  height: 100%;
`;

export const InfoContainer = styled(Row)`
  display: flex;
  justify-content: center;
  background-color: #f0f2f5;
  padding-top: 28px;
  height: 100%;
`;

export const PostsSection = styled.div`
  margin-left: 16px;
  @media only screen and (max-width: 575px) {
    margin: 0 5px;
    width: 100%;
  }
`;
