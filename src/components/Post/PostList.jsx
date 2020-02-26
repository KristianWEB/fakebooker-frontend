import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS } from "../../utils/graphql/queries";
import Post from "./Post";

const PostList = ({ user }) => {
  const { loading, data } = useQuery(GET_POSTS, {
    variables: {
      username: user.username
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

PostList.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  })
};

PostList.defaultProps = {
  user: null
};
