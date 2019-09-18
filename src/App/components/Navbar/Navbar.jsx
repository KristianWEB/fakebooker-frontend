import React from "react";
import { Col, Input } from "antd";
import {
  NavContainer,
  LogoContainer,
  LogoImg,
  LogoHeader,
  SearchBarContainer,
  ProfileContainer,
  ProfileHeader,
  ProfileAvatar,
  ActionsRoute,
  ActionsContainer,
  ActionsIcon,
  Arrow
} from "./Navbar.styles";
import logo from "../../../assets/logo.svg";
import ProfilePictureSample from "../../../assets/images/ProfilePictureSample.jpg";

export default function Navbar() {
  return (
    <NavContainer>
      <Col span={4}>
        <LogoContainer>
          <LogoImg src={logo} alt="logo" />
          <LogoHeader>Sidekick</LogoHeader>
        </LogoContainer>
      </Col>
      <Col span={6}>
        <SearchBarContainer>
          <Input placeholder="Search friends,photos,videos" />
        </SearchBarContainer>
      </Col>
      <Col span={5}>
        <ActionsContainer>
          <ActionsRoute href="/">Home</ActionsRoute>
          <ActionsIcon type="user-add" />
          <ActionsIcon type="message" />
          <ActionsIcon type="notification" />
        </ActionsContainer>
      </Col>
      <Col span={6}>
        <ProfileContainer>
          <ProfileAvatar src={ProfilePictureSample} alt="Profile" />
          <ProfileHeader className="profile-header">Kristian</ProfileHeader>
          <Arrow type="down" />
        </ProfileContainer>
      </Col>
    </NavContainer>
  );
}
