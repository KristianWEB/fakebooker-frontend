import styled from "styled-components";
import { Row } from "antd";

export const InfoContainer = styled(Row)`
  display: flex;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 28px;
  background-color: #f0f2f5;
`;

export const PostsSection = styled(Row)`
  margin-left: 16px;
  @media only screen and (max-width: 575px) {
    margin: 0 5px;
    width: 100%;
  }
`;
