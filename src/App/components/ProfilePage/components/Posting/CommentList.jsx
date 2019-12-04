import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments = [] }) => {
  return (
    <>
      {comments.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Comment key={index} comment={comments[index]} />
      ))}
    </>
  );
};

export default CommentList;
