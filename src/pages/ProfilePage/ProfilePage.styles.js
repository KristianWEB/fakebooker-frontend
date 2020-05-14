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
export const CreatePostMobile = styled.div`
  display: none;
  @media only screen and (max-width: 1000px) {
    display: block;
    width: 500px;
    margin-bottom: 16px;
  }

  @media only screen and (max-width: 575px) {
    display: block;
    width: 100%;
  }
`;

export const CreatePostDesktop = styled.div`
  display: none;
  @media only screen and (min-width: 1000px) {
    display: block;
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const FixedContainer = styled.div`
  height: 100%;
  display: flex;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
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
  @media only screen and (min-width: 1000px) {
    margin-right: 16px;
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

export const Photos = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: Roboto;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow2};
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: 575px) {
    margin-right: 0px;
    border-radius: 0;
  }

  @media only screen and (min-width: 1000px) {
    margin-right: 16px;
  }
`;

export const PhotosGrid = styled.div`
  display: grid;
  max-width: 340px;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 5px;
  @media only screen and (max-width: 1000px) {
    max-width: 500px;
  }
  @media only screen and (max-width: 575px) {
    max-width: 100%;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 101px;
  border-radius: 8px;
  object-fit: cover;
`;

export const AboutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media only screen and (max-width: 1000px) {
    width: 500px;
  }

  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;

export const PhotosHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.secondaryText};
  margin-bottom: 12px;
`;

export const Friends = styled.div`
  font-family: Roboto;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow2};
  border-radius: 6px;
  padding: 12px;

  @media only screen and (max-width: 575px) {
    border-radius: 0;
    margin-right: 0;
  }

  @media only screen and (min-width: 1000px) {
    margin-right: 16px;
  }
`;

export const FriendsGrid = styled.div`
  display: grid;
  max-width: 340px;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 15px;
  @media only screen and (max-width: 1000px) {
    max-width: 500px;
  }
  @media only screen and (max-width: 575px) {
    max-width: 100%;
  }
`;
export const FriendsHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.secondaryText};
  margin-bottom: 12px;
`;

export const FriendContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FriendAvatar = styled.img`
  width: 100%;
  height: 101px;
  object-fit: cover;
  border-radius: 8px;
`;

export const FriendFullname = styled.h1`
  font-size: 1.5rem;
  margin-top: 8px;
  font-weight: 500;
  color: ${(props) => props.theme.secondaryText};
`;
