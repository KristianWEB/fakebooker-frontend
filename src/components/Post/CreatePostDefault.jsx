import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import {
  CreatePostContainer,
  UserAvatar,
  CreatePostButton,
  CloseContainer
} from "./CreatePostDefault.styles";
import CreatePostActive from "./CreatePostActive";
import { ReactComponent as CloseBtn } from "../../assets/icons/close.svg";

const CreatePostDefault = ({ user }) => {
  const [visible, setVisible] = useState(false);

  const handleOk = () => setVisible(false);

  const handleCancel = () => setVisible(false);

  return (
    <>
      <CreatePostContainer>
        <UserAvatar src={user.avatarImage} />
        <CreatePostButton
          onClick={() => setVisible(true)}
          type="link"
          data-testid="openCreatePostModal"
        >
          Add a Post
        </CreatePostButton>
        <Modal
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          closeIcon={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <CloseContainer>
              <CloseBtn width="20" height="20" fill="#62626a" />
            </CloseContainer>
          }
          bodyStyle={{ padding: 0 }}
          style={{ transition: "0.01s" }}
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
    avatarImage: PropTypes.string
  })
};

CreatePostDefault.defaultProps = {
  user: null
};
