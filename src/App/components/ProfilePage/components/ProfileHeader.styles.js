import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { Button } from "antd";

export const Flex = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1250px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 3px 6px #b7b7b7;
  font-size: 16px;
  overflow: hidden;

  @media (min-width: 1981px) {
    max-width: 1500px;
  }
`;
export const ButtonContainer = styled(Flex)`
  width: 200px;
  justify-content: space-between;
  position: absolute;
  right: 80px;
  z-index: 5;
  transform: translateY(-50%);

  @media (max-width: 991px) {
    right: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const ProfileHeaderPhoto = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;
export const Profile = styled.div`
  position: absolute;
  top: -137px;

  p {
    font-size: 1.7rem;
    text-align: center;
    font-weight: bold;
  }

  @media (max-width: 991px) {
    position: relative;
    top: 0px;
  }
`;
export const StyleNavLink = styled(NavLink)`
  color: #9a9fbf;
  font-weight: bold;
  margin: 40px 0px;
  :hover,
  :active,
  :focus {
    color: #515365;
  }
  &.active {
    color: #515365;
  }
`;
export const StyleButton = styled(Button)`
  background-color: ${props => props.color || "white"};
  border: 0;
  width: 50px;
  height: 50px;
  :hover,
  :active,
  :focus {
    background-color: ${props => props.color || "white"};
  }
`;

export const PopText = styled.p`
  text-align: center;
  font-weight: bold;
`;
