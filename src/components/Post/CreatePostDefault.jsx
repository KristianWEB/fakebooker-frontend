import React from "react";
import PropTypes from "prop-types";
import {
  CreatePostContainer,
  UserAvatar,
  CreatePostButton,
  StyledPopup,
} from "./CreatePostDefault.styles";
import CreatePostActive from "./CreatePostActive";

const CreatePostDefault = ({ user, onNewsfeed }) => (
  <CreatePostContainer newsfeed={onNewsfeed}>
    <UserAvatar src={user.avatarImage} />
    <StyledPopup
      trigger={<CreatePostButton>Add a Post</CreatePostButton>}
      modal
      closeOnDocumentClick
    >
      {(close) => (
        <CreatePostActive
          closeModal={close}
          user={user}
          onNewsfeed={onNewsfeed}
        />
      )}
    </StyledPopup>
  </CreatePostContainer>
);

export default CreatePostDefault;

CreatePostDefault.propTypes = {
  user: PropTypes.shape({
    avatarImage: PropTypes.string,
  }),
  onNewsfeed: PropTypes.bool,
};

CreatePostDefault.defaultProps = {
  user: null,
  onNewsfeed: null,
};
