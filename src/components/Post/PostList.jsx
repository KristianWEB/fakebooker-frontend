import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS } from "../../utils/graphql/queries";
import Post from "./Post";

const PostList = () => {
  const { data } = useQuery(GET_POSTS);

  if (!data) {
    return null;
  }

  const { getPosts: posts } = data;

  return <>{posts && posts.map(post => <Post key={post.id} post={post} />)}</>;
};

export default PostList;
