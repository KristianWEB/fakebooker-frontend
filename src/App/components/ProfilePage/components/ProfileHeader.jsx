import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Popover, Avatar } from "antd";
import {
  Container,
  ProfileHeaderPhoto,
  Profile,
  StyleNavLink,
  Flex,
  ButtonContainer,
  StyleButton,
  PopText
} from "./ProfileHeader.styles";

import MessageIconSvg from "../../../../assets/chat---messages-icon.svg";
import GearIconSvg from "../../../../assets/gear-option.svg";
import AddFriendSvg from "../../../../assets/add-friend-icon.svg";
import ThreeDotsSvg from "../../../../assets/three-dots-icon.svg";

export default function ProfileHeader({
  coverImage,
  profileImage,
  displayName
}) {
  const SettingsPopup = (
    <div>
      <PopText>Update Profile Photo</PopText>
      <PopText>Update Header Photo</PopText>
      <PopText>Account Settings</PopText>
    </div>
  );

  const ReportPopup = (
    <div>
      <PopText>Report Profile</PopText>
      <PopText>Block Profile</PopText>
    </div>
  );

  return (
    <Flex>
      <Container>
        <div style={{ paddingTop: "33.33%", position: "relative" }}>
          {" "}
          {/* Aspect Ratio of 3:1 */}
          <ProfileHeaderPhoto src={coverImage} alt="Profile Header" />
        </div>
        <ButtonContainer>
          <StyleButton shape="circle" color="#34A7FF">
            <img
              style={{ width: "1.8em" }}
              src={AddFriendSvg}
              alt="Add Friend Icon"
            />
          </StyleButton>
          <StyleButton shape="circle" color="#C500FF">
            <img
              style={{ width: "1.8em" }}
              src={MessageIconSvg}
              alt="Message Icon"
            />
          </StyleButton>
          <Popover content={SettingsPopup} placement="topRight">
            <StyleButton shape="circle" color="#FF7700">
              <img
                style={{ width: "1.8em" }}
                src={GearIconSvg}
                alt="Settings Icon"
              />
            </StyleButton>
          </Popover>
        </ButtonContainer>
        <Row type="flex">
          <Col xs={{ span: 24, order: 1 }} lg={{ span: 10, order: 1 }}>
            <Row>
              <Col span={8}>
                <Flex>
                  <StyleNavLink exact to="/profile">
                    Timeline
                  </StyleNavLink>
                </Flex>
              </Col>
              <Col span={8}>
                <Flex>
                  <StyleNavLink exact to="/profile/about">
                    About
                  </StyleNavLink>
                </Flex>
              </Col>
              <Col span={8}>
                <Flex>
                  <StyleNavLink exact to="/profile/friends">
                    Friends
                  </StyleNavLink>
                </Flex>
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 24, order: 3 }} lg={{ span: 4, order: 2 }}>
            <Flex>
              <Profile>
                <Avatar
                  style={{ border: "5px solid white" }}
                  size={170}
                  src={profileImage}
                />
                <p>{displayName}</p>
              </Profile>
            </Flex>
          </Col>
          <Col xs={{ span: 24, order: 2 }} lg={{ span: 10, order: 3 }}>
            <Row>
              <Col span={8}>
                <Flex>
                  <StyleNavLink exact to="/profile/photos">
                    Photos
                  </StyleNavLink>
                </Flex>
              </Col>
              <Col span={8}>
                <Flex>
                  <StyleNavLink exact to="/profile/videos">
                    Videos
                  </StyleNavLink>
                </Flex>
              </Col>
              <Col span={8}>
                <Flex>
                  <div style={{ margin: "40px 0px" }}>
                    <Popover content={ReportPopup} placement="bottomRight">
                      <img
                        style={{ width: "1.8em", cursor: "pointer" }}
                        src={ThreeDotsSvg}
                        alt="Settings Icon"
                      />
                    </Popover>
                  </div>
                </Flex>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Flex>
  );
}

ProfileHeader.propTypes = {
  coverImage: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired
};
