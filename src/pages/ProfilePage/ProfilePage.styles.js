import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const PostsSection = styled.div`
  margin-left: 16px;
  width: 500px;
  @media only screen and (max-width: 575px) {
    margin: 0 5px;
    width: 100%;
  }
`;

export const FixedContainer = styled.div`
  width: 866px;
  height: 100%;
  display: flex;
  @media only screen and (max-width: 767px) {
    justify-content: center;
  }
  margin: 0 auto;
`;
