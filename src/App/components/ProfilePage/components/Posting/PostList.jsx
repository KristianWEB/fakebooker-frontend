import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../../../actions/post";
import Post from "./Post";

const PostList = ({ getPostsConnect, posts = [] }) => {
  useEffect(() => {
    const fetchData = async () => {
      await getPostsConnect();
    };
    fetchData();
  }, [getPostsConnect]);

  return (
    <>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.post.posts
});

export default connect(
  mapStateToProps,
  {
    getPostsConnect: getPosts
  }
)(PostList);
