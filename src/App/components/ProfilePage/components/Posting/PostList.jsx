import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { GET_POSTS_BY_USERNAME } from "../../../../graphql/queries";
import { getPosts as getPostsAction } from "../../../../actions/post";
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

const mapStateToProps = state => ({
  getPosts: state.post.getPosts
});

export default connect(
  mapStateToProps,
  {
    getPostsConnect: getPostsAction
  }
)(PostList);
