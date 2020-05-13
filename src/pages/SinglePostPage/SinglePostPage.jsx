import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import ContentLoader from "react-content-loader";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import { LOAD_USER, GET_SINGLE_POST } from "../../utils/queries";
import {
  InfoContainer,
  PostsSection,
  PostContainer,
  NavbarSkeleton,
  PostSkeleton,
} from "./SinglePostPage.styles";

const SinglePostPage = () => {
  const { data: userData } = useQuery(LOAD_USER);
  const [pageLoading, setPageLoading] = useState(true);

  const { postId } = useParams();
  const history = useHistory();

  const { data: postData, loading } = useQuery(GET_SINGLE_POST, {
    variables: {
      postId,
    },
    // eslint-disable-next-line react/display-name
    onError: () => history.push("/"),
  });

  useEffect(() => {
    setPageLoading(false);
  }, [pageLoading]);

  return (
    <>
      {!pageLoading && userData ? (
        <Navbar user={userData.loadUser} />
      ) : (
        <NavbarSkeleton>
          <ContentLoader speed={1}>
            <rect x="0" y="0" rx="5" ry="5" />
          </ContentLoader>
        </NavbarSkeleton>
      )}
      <InfoContainer>
        <PostContainer>
          <PostsSection>
            {postData &&
            postData.getSinglePost &&
            !pageLoading &&
            !loading &&
            userData ? (
              <Post
                key={postData.getSinglePost.id}
                post={postData.getSinglePost}
                user={userData.loadUser}
                onSinglePost
              />
            ) : (
              <PostSkeleton>
                <ContentLoader
                  speed={1}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
                  <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
                  <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
                  <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
                  <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
                  <circle cx="22" cy="21" r="20" />
                </ContentLoader>
              </PostSkeleton>
            )}
          </PostsSection>
        </PostContainer>
      </InfoContainer>
    </>
  );
};

export default SinglePostPage;
