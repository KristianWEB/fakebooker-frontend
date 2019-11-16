import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { GET_POSTS_BY_USERNAME } from "../../../../graphql/queries";
import { getPosts as getPostsAction } from "../../../../actions/post";
import Post from "./Post";

const PostList = ({ getPostsConnect, getPosts = {}, username }) => {
  const { data } = useQuery(GET_POSTS_BY_USERNAME, {
    variables: {
      username
    }
  });
  useEffect(() => {
    const fetchData = async () => {
      await getPostsConnect(data);
    };
    fetchData();
  }, [getPostsConnect, data]);
  const { posts = [], author = {} } = getPosts;
  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} user={author} />
      ))}
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
