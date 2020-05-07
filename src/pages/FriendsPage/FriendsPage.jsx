import React from "react";
import { useParams } from "react-router-dom";
import ContentLoader from "react-content-loader";
import { useQuery } from "@apollo/react-hooks";
import {
  InfoContainer,
  FixedContainer,
  FriendsHeading,
  FriendsContainer,
  FriendSkeleton,
} from "./FriendsPage.styles";
import { LOAD_USER, LOAD_FROM_URL_USER } from "../../utils/queries";
import Friend from "../../components/Friend/Friend";

const FriendsPage = () => {
  const { data: userData, loading: authLoading } = useQuery(LOAD_USER);

  const { username } = useParams();

  /* eslint-disable consistent-return */
  const readOnly = () => {
    if (userData) {
      if (userData.loadUser.username !== username) {
        return true;
        // eslint-disable-next-line no-else-return
      } else {
        return false;
      }
    }
  };

  const { data: profileData, loading: profileLoading } = useQuery(
    LOAD_FROM_URL_USER,
    {
      variables: {
        username,
      },
      skip: !readOnly(),
    }
  );

  return (
    <InfoContainer>
      <FixedContainer>
        <FriendsHeading>Friends</FriendsHeading>
        <FriendsContainer>
          {!readOnly() &&
            !authLoading &&
            userData &&
            userData.loadUser.friends.map((friend) => (
              <Friend key={friend.id} user={friend} />
            ))}
          {!readOnly() && authLoading && (
            <>
              <FriendSkeleton>
                <ContentLoader
                  speed={1}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="8" y="0" rx="8" ry="8" width="80" height="80" />
                  <rect x="112" y="30" rx="4" ry="4" width="116" height="15" />
                  <rect x="315" y="20" rx="8" ry="8" width="79" height="40" />
                </ContentLoader>
              </FriendSkeleton>
              <FriendSkeleton>
                <ContentLoader
                  speed={1}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="8" y="0" rx="8" ry="8" width="80" height="80" />
                  <rect x="112" y="30" rx="4" ry="4" width="116" height="15" />
                  <rect x="315" y="20" rx="8" ry="8" width="79" height="40" />
                </ContentLoader>
              </FriendSkeleton>
            </>
          )}
          {readOnly() &&
            !profileLoading &&
            profileData &&
            profileData.loadFromUrlUser.friends.map((friend) => (
              <Friend key={friend.id} user={friend} readOnly />
            ))}
          {readOnly() && profileLoading && (
            <>
              <FriendSkeleton>
                <ContentLoader
                  speed={1}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="8" y="0" rx="8" ry="8" width="80" height="80" />
                  <rect x="112" y="30" rx="4" ry="4" width="116" height="15" />
                  <rect x="315" y="20" rx="8" ry="8" width="79" height="40" />
                </ContentLoader>
              </FriendSkeleton>
              <FriendSkeleton>
                <ContentLoader
                  speed={1}
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="8" y="0" rx="8" ry="8" width="80" height="80" />
                  <rect x="112" y="30" rx="4" ry="4" width="116" height="15" />
                  <rect x="315" y="20" rx="8" ry="8" width="79" height="40" />
                </ContentLoader>
              </FriendSkeleton>
            </>
          )}
        </FriendsContainer>
      </FixedContainer>
    </InfoContainer>
  );
};

export default FriendsPage;
