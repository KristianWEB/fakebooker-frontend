import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 28px 0;
  justify-content: center;
`;

export const PostsSection = styled.div`
  width: 500px;
  @media only screen and (max-width: 575px) {
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

export const CreatePostSkeleton = styled.div`
  display: flex;
  background-color: #fff;
  padding: 13px;
  border-radius: 8px;
  @media only screen and (max-width: 575px) {
    border-radius: 0;
  }

  svg {
    width: 100%;
    height: 56px;
    rect {
      width: 100%;
      height: 56px;
    }
  }
`;

export const PostSectionSkeleton = styled.div`
  display: flex;
  margin-top: 20px;

  svg {
    width: 100%;
    height: 56px;
    rect {
      width: 100%;
      height: 56px;
    }
  }
`;

export const AboutSkeleton = styled.div`
  background-color: #fff;
  display: flex;
  height: 100%;
  padding: 13px;
  border-radius: 8px;
  margin-right: 16px;
  @media only screen and (max-width: 767px) {
    display: none;
  }

  svg {
    width: 100%;
    height: 100%;
    rect {
      width: 100%;
      height: 100%;
    }
  }
`;

export const PostSkeleton = styled.div`
  display: flex;
  margin-top: 20px;
  background: #fff;
  border-radius: 8px;
  @media only screen and (max-width: 575px) {
    border-radius: 0;
  }
  padding: 13px;
`;
