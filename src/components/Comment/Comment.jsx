import React, { useState } from "react";
import { Avatar, Popover } from "antd";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_COMMENT } from "../../utils/graphql/queries";
import {
  CommentContainer,
  BodyContainer,
  Body,
  Username,
  PopButton
} from "./Comment.styles";
import { ReactComponent as ThreeDotsSvg } from "../../assets/icons/three-dots-icon.svg";

const Comment = ({ comment: { author, body, id }, postId }) => {
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
        <Avatar src={author.coverImage} style={{ alignSelf: "flex-start" }} />
        <BodyContainer>
          <Username>{author.username}</Username>
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
