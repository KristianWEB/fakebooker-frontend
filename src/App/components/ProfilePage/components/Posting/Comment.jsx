import React, { useState } from "react";
import { Avatar, Popover } from "antd";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_COMMENT } from "../../../../graphql/queries";
import {
  CommentContainer,
  BodyContainer,
  Body,
  Username,
  PopButton
} from "./Comment.styles";
import ThreeDotsSvg from "../../../../../assets/icons/three-dots-icon.svg";

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
        <Avatar src={author.coverImage} />
        <BodyContainer>
          <Username>{author.username}</Username>
          <Body>{body}</Body>
        </BodyContainer>
        {isHovering && (
          <Popover content={SettingsPopup} placement="bottomRight">
            <img
              style={{
                marginLeft: "20px",
                width: "22px",
                cursor: "pointer",
                color: "#DDDDDD"
              }}
              src={ThreeDotsSvg}
              alt="Settings Icon"
            />
          </Popover>
        )}
      </CommentContainer>
    </>
  );
};

export default Comment;
