import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS_BY_USERNAME } from "../../../../graphql/queries";
import Post from "./Post";

const PostList = ({ username }) => {
  const { loading, data } = useQuery(GET_POSTS_BY_USERNAME, {
    variables: {
      username
    }
  });
  return (
    <>
      {loading ? (
        <h1>Loading posts..</h1>
      ) : (
        data &&
        data.getPosts.map(post => (
          <Post key={post.id} post={post} user={post.author} />
        ))
      )}
    </>
  );
};

export default PostList;
