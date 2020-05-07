import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const ProfileHeaderSkeleton = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 13px;

  svg {
    width: 940px;
    height: 350px;
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
