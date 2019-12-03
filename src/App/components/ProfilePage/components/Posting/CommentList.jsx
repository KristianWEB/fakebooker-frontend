import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments = [] }) => {
  return (
    <>
      {comments.map((_, index) => (
        <Comment comment={comments[index]} />
      ))}
    </>
  );
};

export default CommentList;
