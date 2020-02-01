import React, { useState } from "react";
import { Modal } from "antd";
import {
  AboutContainer,
  AboutHeading,
  HomeContainer,
  HomeContainerHeading,
  HomeContainerParagraph,
  StyledButton
} from "./About.styles";
import HomeIcon from "../../assets/icons/_ionicons_svg_md-home.svg";
import JobIcon from "../../assets/icons/_ionicons_svg_md-briefcase.svg";
import LocationIcon from "../../assets/icons/_ionicons_svg_md-pin.svg";
import CloseIconSVG from "../../assets/icons/_ionicons_svg_md-close.svg";
import AboutForm from "./AboutForm";

const About = () => {
  const [visible, setVisible] = useState(false);

  const handleOk = () => setVisible(false);

  const handleCancel = () => setVisible(false);

  return (
    <AboutContainer>
      <AboutHeading>About</AboutHeading>
      <HomeContainer>
        <JobIcon width="20" height="20" fill="#8C939D" />
        <HomeContainerParagraph>Blogger at</HomeContainerParagraph>
        <HomeContainerHeading>Josephine Williams</HomeContainerHeading>
      </HomeContainer>
      <HomeContainer>
        <HomeIcon width="20" height="20" fill="#8C939D" />
        <HomeContainerParagraph>Lives in</HomeContainerParagraph>
        <HomeContainerHeading>Chicago, Illinois</HomeContainerHeading>
      </HomeContainer>
      <HomeContainer>
        <LocationIcon width="20" height="20" fill="#8C939D" />
        <HomeContainerParagraph>From</HomeContainerParagraph>
        <HomeContainerHeading>New York, New York</HomeContainerHeading>
      </HomeContainer>
      <StyledButton type="button" onClick={() => setVisible(true)}>
        Edit Details
      </StyledButton>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closeIcon={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <CloseIconSVG
            width="20"
            height="20"
            style={{ fill: "transparent" }}
          />
        }
        bodyStyle={{ padding: 0 }}
        centered
      >
        <AboutForm showModal={setVisible} />
      </Modal>
    </AboutContainer>
  );
};

export default About;
