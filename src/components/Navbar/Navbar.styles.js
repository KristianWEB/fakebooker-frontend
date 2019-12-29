import styled from "styled-components";
import { Input } from "antd";

export const NavContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 3.65rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
`;

export const LogoContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
`;

export const NewsFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 139px;
  height: 100%;
  margin-top: 6px;
  margin-right: 10rem;
  padding-top: 15px;
  background-color: #e7f3ff;
  border-radius: 6%;
  align-items: center;
`;
export const NewsFeedHeading = styled.h3`
  color: #1877f2;
  font-weight: 600;
  margin-bottom: 0;
`;
export const SearchBar = styled(Input)`
  display: block;
  width: 281px;
  height: 41px;
  border-radius: 1.375rem;
  background-color: #f0f2f5;
  border: none;
  margin-left: 0.5rem;

  ::placeholder {
    color: #8f9296;
    font-size: 14px;
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

export const MessageContainer = styled.div`
  background-color: #f0f2f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-right: 0.5rem;
`;

export const NotificationContainer = styled.div`
  background-color: #f0f2f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-right: 0.5rem;
`;
