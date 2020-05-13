import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  padding-top: 8px;
  font-family: Roboto;
`;

export const PostContainer = styled.div`
  display: flex;
  padding: 0 32px;
  justify-content: center;

  @media only screen and (max-width: 992px) {
    padding: 0;
    width: 100%;
  }
`;
export const PostsSection = styled.div`
  width: 680px;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const NavbarSkeleton = styled.div`
  display: flex;

  svg {
    width: 100%;
    height: 58px;
    rect {
      width: 100%;
      height: 50px;
    }
  }
`;

export const PostSkeleton = styled.div`
  display: flex;
  margin-top: 20px;
  background: #fff;
  border-radius: 8px;
  padding: 13px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
