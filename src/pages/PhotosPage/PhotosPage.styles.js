import styled from "styled-components";
import { Row } from "antd";

export const InfoContainer = styled(Row)`
  display: flex;
  height: 100%;
  padding-top: 28px;
  padding-bottom: 28px;
  background-color: #f0f2f5;
  font-family: Roboto;
`;

export const FixedContainer = styled(Row)`
  width: 882px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  @media only screen and (max-width: 767px) {
    justify-content: center;
  }
  margin: 0 auto;
  padding: 16px;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 8px;
`;

export const PhotosHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 10px;
`;
export const Photo = styled.img`
  width: 100%;
  min-height: 20rem;
  object-fit: cover;
`;
