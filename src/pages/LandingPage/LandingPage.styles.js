import styled from "styled-components";
import { Col, Row } from "antd";

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const AuthDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledCol = styled(Col)`
  background-color: ${props => props.background};
  height: 100vh;
  flex-grow: 1;
`;

export const LandingContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const LandingPageContainer = styled(Row)`
  && {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
