import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Popover } from "antd";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_COMMENT } from "../../utils/queries";
import {
  CommentContainer,
  BodyContainer,
  Body,
  Username,
  PopButton
} from "./Comment.styles";
import { ReactComponent as ThreeDotsSvg } from "../../assets/icons/three-dots-icon.svg";

const Comment = ({ comment: { userId, body, id }, postId }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseHover = () => setIsHovering(!isHovering);

  const [deleteComment] = useMutation(DELETE_COMMENT, {
    variables: {
      commentId: id,
      postId
    }
  });

  const SettingsPopup = (
    <div>
      <PopButton type="link" onClick={deleteComment}>
        Delete Comment
      </PopButton>
    </div>
  );
  return (
    <>
      <CommentContainer
        onMouseEnter={() => handleMouseHover()}
        onMouseLeave={() => handleMouseHover()}
      >
        <Avatar src={userId.avatarImage} style={{ alignSelf: "flex-start" }} />
        <BodyContainer>
          <Username>
            {userId.firstName} {userId.lastName}
          </Username>
          <Body>{body}</Body>
        </BodyContainer>
        {isHovering && (
          <Popover content={SettingsPopup} placement="bottomRight">
            <ThreeDotsSvg
              style={{ marginLeft: "20px", width: "22px", cursor: "pointer" }}
            />
          </Popover>
        )}
      </CommentContainer>
    </>
  );
};

export default Comment;

Comment.propTypes = {
  comment: PropTypes.shape({
    userId: PropTypes.shape({
      avatarImage: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string
    }),
    body: PropTypes.string,
    id: PropTypes.string
  }),
  postId: PropTypes.string
};

Comment.defaultProps = {
  comment: null,
  postId: null
};
