import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 5.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Roboto;
  position: sticky;
  top: 0;
  z-index: 5;
  box-shadow: ${props => props.theme.boxShadow1};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

export const NewsFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 139px;
  height: 100%;
  margin-right: 60px;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${props => props.theme.primaryText};

  @media only screen and (max-width: 575px) {
    display: none;
  }
`;

export const SearchBar = styled.input`
  display: none;
  @media only screen and (min-width: 767px) {
    display: block;
    width: 240px;
    height: 41px;
    border-radius: 50px;
    background-color: ${props => props.theme.inputColor};
    border: none;
    margin-left: 8px;
    padding: 0 30px;
    font-size: 1.5rem;

    ::placeholder {
      color: #8f9296;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: auto;
  margin: 0.5rem 1rem 0.5rem 0.5rem;
`;

export const BackArrowContainer = styled.div`
  background-color: ${props => props.theme.inputColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  margin-right: 0.5rem;
`;

export const MessageContainer = styled.button`
  padding: 0;
  background-color: ${props => props.theme.secondaryBackground};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  width: 41px;
  height: 41px;
  border: 0;
  transition: 0.1s;
  top: 0;
  cursor: pointer;

  &:focus {
    background-color: ${props => props.theme.primaryBackground};
    svg {
      fill: ${props => props.theme.primaryText};
    }
    outline: none;
  }
  &:active {
    color: ${props => props.theme.primaryTextColor};
    transform: scale(0.96);
  }

  &:hover {
    background-color: ${props => props.theme.secondaryHoverBackground};
  }
`;

export const NotificationContainer = styled.button`
  padding: 0;
  background-color: ${props => props.theme.secondaryBackground};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  width: 41px;
  height: 41px;
  border: 0;
  transition: 0.1s;
  cursor: pointer;

  &:focus {
    background-color: ${props => props.theme.primaryBackground};
    svg {
      fill: ${props => props.theme.primaryText};
    }
    outline: none;
  }
  &:active {
    color: ${props => props.theme.primaryTextColor};
    transform: scale(0.96);
  }

  &:hover {
    background-color: ${props => props.theme.secondaryHoverBackground};
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 18px;
  margin-right: 16px;
  cursor: pointer;
  font-size: 1.5rem;
  background-color: ${props =>
    props.primary ? props.theme.primaryBackground : "#fff"};

  &:hover {
    background-color: ${props =>
      props.primary
        ? props.theme.primaryBackground
        : props.theme.tertiaryBackground};
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${props =>
      props.primary ? "none" : props.theme.secondaryBackground};
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const Username = styled.h1`
  font-size: 15px;
  font-weight: medium;
  line-height: 1;
  color: ${props =>
    props.primary ? props.theme.primaryText : props.theme.secondaryText};
`;

export const SettingsContainer = styled.button`
  padding: 0;
  background-color: ${props => props.theme.secondaryBackground};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  width: 41px;
  height: 41px;
  border: 0;
  transition: 0.1s;
  top: 0;
  cursor: pointer;

  &:active,
  &:focus {
    background-color: ${props => props.theme.secondaryHoverBackground};
    color: ${props => props.theme.primaryTextColor};
    outline: none;
  }

  &:hover {
    background-color: ${props => props.theme.secondaryHoverBackground};
    color: ${props => props.theme.primaryTextColor};
  }
`;

export const SearchContainer = styled.button`
  display: none;
  @media only screen and (max-width: 767px) {
    padding: 0;
    background-color: ${props => props.theme.secondaryBackground};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    width: 41px;
    height: 41px;
    border: 0;
    transition: 0.1s;
    cursor: pointer;

    &:focus {
      background-color: ${props => props.theme.primaryBackground};
      svg {
        fill: ${props => props.theme.primaryText};
      }
      outline: none;
    }
    &:active {
      color: ${props => props.theme.primaryTextColor};
      transform: scale(0.96);
    }

    &:hover {
      background-color: ${props => props.theme.secondaryHoverBackground};
    }
  }
`;

export const UserAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  margin-right: 6px;
`;

export const SearchInputContainer = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
  display: none;
  @media only screen and (min-width: 767px) {
    display: block;
  }
`;
