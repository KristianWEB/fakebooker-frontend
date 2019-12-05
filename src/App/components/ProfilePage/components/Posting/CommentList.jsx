import React from "react";
import Comment from "./Comment";

const CommentList = ({ post: { comments = [], id } }) => {
  return (
    <>
      {comments.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Comment key={index} comment={comments[index]} postId={id} />
      ))}
    </>
  );
};

export default CommentList;
