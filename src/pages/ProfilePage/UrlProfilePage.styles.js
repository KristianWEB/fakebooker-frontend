import styled from "styled-components";
import { Row } from "antd";

export const UrlProfilePageContainer = styled(Row)`
  height: 100%;
  width: 100%;
  background-color: #f0f2f5;
`;

export const UrlInfoContainer = styled(Row)`
  display: flex;
  padding: 28px 0;
  background-color: #f0f2f5;
`;

export const UrlPostsSection = styled(Row)`
  margin-left: 16px;
  @media only screen and (max-width: 575px) {
    margin: 0 5px;
    width: 100%;
  }
`;

export const FixedContainer = styled(Row)`
  width: 866px;
  height: 100%;
  display: flex;
  margin: 0 auto;
`;
