import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getPosts } from "../../../../actions/post";

const PostList = ({ getPostsConnect }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsResponse = await axios.get(
        "https://osd-sidekick.herokuapp.com/api/posts/kristian"
      );
      const { data } = postsResponse;
      setPosts(data.posts);
    };
    fetchData();
  }, [getPostsConnect, posts]);
  return (
    <>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.content}</li>
        ))}
      </ul>
    </>
  );
};

export default connect(
  null,
  {
    getPostsConnect: getPosts
  }
)(PostList);
