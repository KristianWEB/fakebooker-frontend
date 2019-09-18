import styled from "styled-components";
import { Row, Icon } from "antd";

export const NavContainer = styled(Row)`
  background-color: #444;
  width: 100%;
  padding: 5px 0px 5px 200px;
  align-items: center;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoImg = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
`;
export const LogoHeader = styled.h2`
  color: white;
  line-height: 1;
  margin-bottom: 0;
`;
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 10px;
  }
`;
export const ProfileHeader = styled.h2`
  color: white;
  line-height: 1;
  margin-bottom: 0;
`;
export const ProfileAvatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const ActionsContainer = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;
  height: 50px;

  & > * {
    margin-right: 10px;
  }
`;

export const ActionsRoute = styled.a`
  color: white;
  font-size: 15px;
`;

export const ActionsIcon = styled(Icon)`
  font-size: 32px;
  color: white;
`;

export const Arrow = styled(Icon)`
  font-size: 16px;
  color: white;
`;
