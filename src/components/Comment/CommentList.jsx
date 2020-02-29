import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

const CommentList = ({ post: { comments, id } }) => {
  return (
    <>
      {comments.map((comment, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Comment key={index} comment={comment} postId={id} />
      ))}
    </>
  );
};

export default CommentList;

CommentList.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.array,
    id: PropTypes.string
  })
};

CommentList.defaultProps = {
  post: null
};
