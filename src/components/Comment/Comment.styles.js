import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  margin: 10px 0;
  position: relative;
  font-family: Roboto;
  align-items: center;
`;

export const CommentAvatar = styled.img`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  align-self: flex-start;
`;

export const ActionsContainer = styled.div`
  display: flex;
  border-radius: 8px;
  width: 100%;
  z-index: 20;
  flex-direction: column;

  @media only screen and (max-width: 575px) {
    width: 200px;
  }
`;

export const PopButton = styled.button`
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

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 18px;
  width: auto;
  padding: 8px 12px;
  color: ${(props) => props.theme.secondaryText};
  background-color: ${(props) => props.theme.inputColor};
  margin-left: 5px;
  margin-right: 10px;
`;

export const Username = styled.span`
  color: ${(props) => props.theme.secondaryText};
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Body = styled.span`
  font-size: 1.5rem;
  word-break: break-word;
`;
