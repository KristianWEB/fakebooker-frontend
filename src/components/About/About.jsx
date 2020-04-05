import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import {
  AboutContainer,
  AboutHeading,
  HomeContainer,
  HomeplaceBody,
  StyledButton,
  WorkplaceContainer,
  WorkplaceBody
} from "./About.styles";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as WorkplaceIcon } from "../../assets/icons/briefcase.svg";
import { ReactComponent as CloseIconSVG } from "../../assets/icons/_ionicons_svg_md-close.svg";
import AboutForm from "./AboutForm";

const About = ({ readOnly, user }) => {
  const [visible, setVisible] = useState(false);
  console.log(user);

  const handleOk = () => setVisible(false);

  const handleCancel = () => setVisible(false);

  return (
    <AboutContainer>
      <AboutHeading>Intro</AboutHeading>
      <WorkplaceContainer>
        {user.workPlace && (
          <>
            <WorkplaceIcon width="20" height="20" fill="#65676b" />
            <WorkplaceBody>
              Works at{" "}
              <span style={{ fontWeight: "bold" }}>{user.workPlace}</span>
            </WorkplaceBody>
          </>
        )}
      </WorkplaceContainer>
      <HomeContainer>
        {user.homePlace && (
          <>
            <HomeIcon width="20" height="20" fill="#65676b" />
            <HomeplaceBody>
              Lives in{" "}
              <span style={{ fontWeight: "bold" }}>{user.homePlace}</span>
            </HomeplaceBody>
          </>
        )}
      </HomeContainer>
      {!readOnly && (
        <>
          <StyledButton type="link" onClick={() => setVisible(true)}>
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
        </>
      )}
    </AboutContainer>
  );
};

export default About;

About.propTypes = {
  user: PropTypes.shape({
    coverImage: PropTypes.string,
    avatarImage: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    workPlace: PropTypes.string,
    homePlace: PropTypes.string
  }),
  readOnly: PropTypes.bool
};

About.defaultProps = {
  user: null,
  readOnly: null
};
