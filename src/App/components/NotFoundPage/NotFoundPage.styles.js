import styled from "styled-components";

export const NotFoundContainer = styled.div`
  position: relative;
  height: 100vh;
`;
export const NotFound = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-width: 410px;
  width: 100%;
  text-align: center;

  & > h2 {
    font-family: "Montserrat", sans-serif;
    color: #000;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 5vh;
  }

  & > p {
    font-family: "Montserrat", sans-serif;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 20px;
    margin-top: 0px;
  }

  & > a {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    background: #0046d5;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 40px;
    color: #fff;
    font-weight: 700;
    -webkit-box-shadow: 0px 4px 15px -5px #0046d5;
    box-shadow: 0px 4px 15px -5px #0046d5;
  }
`;
export const NotFound404 = styled.div`
  height: 280px;
  position: relative;
  z-index: -1;

  @media only screen and (max-width: 767px) {
    height: 142px;
    & > h1 {
      font-size: 112px;
    }
  }
`;

export const Msg404 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 230px;
  margin: 0px;
  font-weight: 900;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background: url(${props => props.img}) no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;
`;
