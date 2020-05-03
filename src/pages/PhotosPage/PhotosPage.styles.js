import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 28px 8px;
  font-family: Roboto;
`;

export const FixedContainer = styled.div`
  width: 876px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  @media only screen and (max-width: 767px) {
    justify-content: center;
  }
  margin: 0 auto;
  padding: 16px;
  box-shadow: ${props => props.theme.boxShadow2};
  border-radius: 6px;
`;

export const PhotosHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${props => props.theme.secondaryText};
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
