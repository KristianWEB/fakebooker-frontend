import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import {
  CreatePostContainer,
  UserAvatar,
  CreatePostButton
} from "./CreatePostDefault.styles";
import CreatePostActive from "./CreatePostActive";
import { ReactComponent as CloseIconSVG } from "../../assets/icons/_ionicons_svg_md-close.svg";

const CreatePostDefault = ({ user }) => {
  const [visible, setVisible] = useState(false);

  const handleOk = () => setVisible(false);

  const handleCancel = () => setVisible(false);

  return (
    <>
      <CreatePostContainer>
        <UserAvatar src={user.coverImage} />
        <CreatePostButton onClick={() => setVisible(true)}>
          Add a Post
        </CreatePostButton>
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
              style={{ marginTop: "25px", fill: "transparent" }}
            />
          }
          bodyStyle={{ padding: 0 }}
          centered
        >
          <CreatePostActive showModal={setVisible} user={user} />
        </Modal>
      </CreatePostContainer>
    </>
  );
};
export default CreatePostDefault;

CreatePostDefault.propTypes = {
  user: PropTypes.shape({
    coverImage: PropTypes.string
  })
};

CreatePostDefault.defaultProps = {
  user: null
};
