import styled, { keyframes } from "styled-components";
import { Row } from "antd";
import BgImg from "../../assets/icons/undraw_processing_qj6a.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RegisterPageContainer = styled(Row)`
  && {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
export const SVGImgBackground = styled(BgImg)`
  /* .undraw_processing_qj6a_svg__gear1 {
    animation: ${rotate} infinite 20s linear;
  } */
  width: 100%;
  display: none;
  @media only screen and (min-width: 1100px) {
    display: block;
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
