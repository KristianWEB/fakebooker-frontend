import styled from "styled-components";
import { Button } from "antd";

export const NavContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  height: 5.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Roboto;
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

export const InputContainer = styled.div`
  /* position: relative; */
`;

export const NewsFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 139px;
  height: 100%;
  margin-right: 60px;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #1876f2;
`;

export const SearchBar = styled.input`
  display: block;
  width: 240px;
  height: 41px;
  border-radius: 1.375rem;
  background-color: #f0f2f5;
  border: none;
  margin-left: 0.5rem;
  padding: 0 15px;
  font-size: 1.4rem;

  ::placeholder {
    color: #8f9296;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  width: auto;
  margin: 0.5rem 1rem 0.5rem 0.5rem;
  .ant-avatar:not(:last-child) {
    margin-right: 8px;
  }
`;

export const BackArrowContainer = styled.div`
  background-color: #f0f2f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  margin-right: 0.5rem;
`;

export const MessageContainer = styled(Button)`
  padding: 0;
  background-color: #f0f2f5;
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

  &&:active,
  &&:focus {
    background-color: #d8dadf;
    color: ${props => props.theme.primaryTextColor};
  }

  &&:hover {
    background-color: #d8dadf;
    color: ${props => props.theme.primaryTextColor};
  }
`;

export const NotificationContainer = styled(Button)`
  padding: 0;
  background-color: #f0f2f5;
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

  &&:active,
  &&:focus {
    background-color: #d8dadf;
    color: ${props => props.theme.primaryTextColor};
  }

  &&:hover {
    background-color: #d8dadf;
    color: ${props => props.theme.primaryTextColor};
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

  &:hover {
    background-color: #f2f2f2;
    outline: none;
  }

  &::after,
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #e4e6eb;
  }
`;

export const Username = styled.h1`
  font-size: 15px;
  font-weight: medium;
  line-height: 1;
  color: #050505;
`;

export const SettingsContainer = styled(Button)`
  padding: 0;
  background-color: #f0f2f5;
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

  &&:active,
  &&:focus {
    background-color: #d8dadf;
    color: ${props => props.theme.primaryTextColor};
  }

  &&:hover {
    background-color: #d8dadf;
    color: ${props => props.theme.primaryTextColor};
  }
`;
