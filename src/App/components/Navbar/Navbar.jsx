import React from "react";
import { Icon, Row, Col, Input } from "antd";
import "./Navbar.css";
import logo from "../../../assets/logo.svg";
import ProfilePictureSample from "../../../assets/images/ProfilePictureSample.jpg";

export default function Navbar() {
  return (
    <Row className="nav-container">
      <Col span={4}>
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
          <h2 className="logo-header">Sidekick</h2>
        </div>
      </Col>
      <Col span={6}>
        <div className="search-bar">
          <Input placeholder="Search friends,photos,videos" />
        </div>
      </Col>
      <Col span={5}>
        <div className="user-actions">
          <a href="/" className="user-actions-home">
            Home
          </a>
          <Icon type="user-add" style={{ fontSize: "32px", color: "white" }} />
          <Icon type="message" style={{ fontSize: "32px", color: "white" }} />
          <Icon
            type="notification"
            style={{ fontSize: "32px", color: "white" }}
          />
        </div>
      </Col>
      <Col span={6}>
        <div className="profile">
          <img
            src={ProfilePictureSample}
            alt="Profile"
            width="50"
            height="50"
          />
          <h2 className="profile-header">Kristian</h2>
          <Icon type="down" style={{ fontSize: "16px", color: "white" }} />
        </div>
      </Col>
    </Row>
  );
}
