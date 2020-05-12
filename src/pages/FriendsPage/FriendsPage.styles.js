import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  height: 100%;
  font-family: Roboto;
  padding: 28px 0;
`;
export const FriendsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FixedContainer = styled.div`
  width: 876px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  @media only screen and (max-width: 767px) {
    justify-content: center;
    width: 100%;
  }
  margin: 0 auto;
  padding: 16px;
  box-shadow: ${(props) => props.theme.boxShadow2};
  border-radius: 6px;
  @media only screen and (max-width: 575px) {
    border-radius: 0;
  }
`;

export const FriendsHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${(props) => props.theme.secondaryText};
`;

export const FriendSkeleton = styled.div`
  display: flex;
  width: calc(50% - 10px);
  height: 112px;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  padding: 13px 0;

  @media only screen and (max-width: 700px) {
    margin-top: 10px;
    width: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
