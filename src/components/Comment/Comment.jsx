import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Avatar, Popover } from "antd";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_COMMENT, GET_POSTS, GET_URL_POSTS } from "../../utils/queries";
import {
  CommentContainer,
  BodyContainer,
  Body,
  Username,
  PopButton
} from "./Comment.styles";
import { ReactComponent as ThreeDotsSvg } from "../../assets/icons/ellipsis-horizontal.svg";

const Comment = ({ comment: { userId, body, id }, postId, urlProfile }) => {
  const [isHovering, setIsHovering] = useState(false);
  const { username } = useParams();

  const handleMouseHover = () => setIsHovering(!isHovering);

  const [deleteComment] = useMutation(DELETE_COMMENT, {
    variables: {
      commentId: id,
      postId
    },
    update: (proxy, result) => {
      if (!urlProfile) {
        const data = proxy.readQuery({
          query: GET_POSTS
        });

        const getPosts = data.getPosts.map(post => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments.filter(c => c.id !== id)
            };
          }
          return post;
        });

        proxy.writeQuery({
          query: GET_POSTS,
          data: { getPosts }
        });
      } else {
        const data = proxy.readQuery({
          query: GET_URL_POSTS,
          variables: {
            username
          }
        });

        const getUrlPosts = data.getUrlPosts.map(post => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments.filter(c => c.id !== id)
            };
          }
          return post;
        });

        proxy.writeQuery({
          query: GET_URL_POSTS,
          data: { getUrlPosts },
          variables: {
            username
          }
        });
      }
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
          <Popover
            content={SettingsPopup}
            placement="bottomRight"
            style={{ marginRight: "20px" }}
          >
            <ThreeDotsSvg
              style={{
                marginLeft: "20px",
                cursor: "pointer",
                width: "25px",
                height: "25px",
                fill: "#65676b"
              }}
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
  postId: PropTypes.string,
  urlProfile: PropTypes.bool
};

Comment.defaultProps = {
  comment: null,
  postId: null,
  urlProfile: null
};
