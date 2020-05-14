import styled from "styled-components";
import Popup from "reactjs-popup";

export const CreatePostContainer = styled.div`
  display: flex;
  font-family: "Roboto";
  background-color: #fff;
  padding: 8px 12px;
  max-width: ${(props) => (props.newsfeed ? "680px" : "500px")};
  box-shadow: ${(props) => props.theme.boxShadow2};
  border-radius: 8px;
  @media only screen and (max-width: 575px) {
    border-radius: 0;
  }
  align-items: center;
  @media only screen and (max-width: 575px) {
    margin: 0 auto;
  }
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const CreatePostButton = styled.button`
  border: none;
  color: ${(props) => props.theme.secondaryText};
  font-weight: 600;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.secondaryBackground};
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  line-height: 1;
  transition: 0.1s;
  height: 3.5rem;

  &:focus {
    background-color: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.secondaryText};
    outline: none;
  }
  &:active {
    transform: scale(0.96);
  }
  &:hover {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
    color: ${(props) => props.theme.secondaryText};
  }
`;

export const CloseContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0;
  background-color: ${(props) => props.theme.secondaryBackground};
  cursor: pointer;
  transition: 0.1s;
  padding: 5px;

  &:focus {
    background-color: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.secondaryText};
  }
  &:active {
    transform: scale(0.96);
  }
  &:hover {
    background-color: ${(props) => props.theme.secondaryHoverBackground};
    color: ${(props) => props.theme.secondaryText};
  }
`;

export const StyledPopup = styled(Popup)`
  &-content {
    padding: 0px !important;
    border-radius: 6px;
    border: none !important;
    width: 488px !important;
    box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  }
  &-overlay {
    background-color: rgba(244, 244, 244, 0.8) !important;
  }
`;
