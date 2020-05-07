import styled from "styled-components";

export const FriendContainer = styled.div`
  display: inline-flex;
  width: calc(50% - 10px);
  position: relative;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  margin: 3px;
  box-sizing: border-box;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const UserName = styled.h1`
  margin-left: 16px;
  font-size: 1.7rem;
  font-weight: 500;
  color: ${(props) => props.theme.secondaryText};
`;

export const FriendBtn = styled.button`
  margin-left: auto;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  color: ${(props) => props.theme.secondaryText};
  font-weight: 500;
  font-size: 15px;
  background-color: ${(props) => props.theme.secondaryBackground};
  transition: 0.1s;
  cursor: pointer;

  &&:focus {
    background-color: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.secondaryText};
    outline: none;
  }

  &&:active {
    transform: scale(0.96);
  }

  &&:hover {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
    color: ${(props) => props.theme.secondaryText};
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RejectFriendBtn = styled.button`
  text-align: left;
  font-size: 1.5rem;
  border: none;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  width: 100%;
  background-color: #fff;
  color: ${(props) => props.theme.secondaryText};
  transition: 0.1s;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.tertiaryBackground};
    color: ${(props) => props.theme.secondaryText};
  }

  &::after,
  &:focus {
    outline: none;
    color: ${(props) => props.theme.secondaryText};
  }

  &:active {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
    color: ${(props) => props.theme.secondaryText};
  }
`;
