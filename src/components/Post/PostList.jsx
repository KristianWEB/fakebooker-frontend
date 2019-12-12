import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS_BY_USERNAME } from "../../utils/graphql/queries";
import Post from "./Post";

const PostList = ({ username }) => {
  const { loading, data } = useQuery(GET_POSTS_BY_USERNAME, {
    variables: {
      username
    }
  });

  if (!data) {
    return null;
  }

  const { getPosts: posts } = data;

  return (
    <>
      {loading ? (
        <h1>Loading posts..</h1>
      ) : (
        posts && posts.map(post => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export default PostList;
