import styled from "styled-components";
import { Row } from "antd";

export const InfoContainer = styled(Row)`
  display: flex;
  height: 100%;
  padding-top: 28px;
  padding-bottom: 28px;
  background-color: ${props => props.theme.inputColor};
`;

export const PostsSection = styled(Row)`
  margin-left: 16px;
  width: 500px;
  @media only screen and (max-width: 575px) {
    margin: 0 5px;
    width: 100%;
  }
`;

export const FixedContainer = styled(Row)`
  width: 866px;
  height: 100%;
  display: flex;
  @media only screen and (max-width: 767px) {
    justify-content: center;
  }
  margin: 0 auto;
`;
