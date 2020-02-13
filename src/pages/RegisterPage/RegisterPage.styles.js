import styled from "styled-components";
import { Row } from "antd";

export const RegisterPageContainer = styled(Row)`
  && {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

export const RegisterPageBackground = styled(Row)`
  @media only screen and (min-width: 1100px) {
    && {
      display: flex;
      width: 85%;
      background-color: rgba(25, 119, 243, 0.1);
    }
  }
`;

export const FormContainer = styled(Row)`
  && {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`;
