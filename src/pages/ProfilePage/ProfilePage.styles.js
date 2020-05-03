import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 28px 8px;
  justify-content: center;
`;

export const PostsSection = styled.div`
  margin-left: 8px;
  width: 500px;
  @media only screen and (max-width: 575px) {
    margin: 0 5px;
    width: 100%;
  }
`;

export const FixedContainer = styled.div`
  height: 100%;
  display: flex;
  @media only screen and (max-width: 991px) {
    width: 100%;
    justify-content: center;
  }
`;
