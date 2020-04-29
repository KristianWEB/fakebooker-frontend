import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import {
  InfoContainer,
  FixedContainer,
  FriendsHeading,
  FriendsContainer
} from "./FriendsPage.styles";
import { LOAD_USER, LOAD_FROM_URL_USER } from "../../utils/queries";
import Friend from "../../components/Friend/Friend";

const FriendsPage = () => {
  const { data: userData } = useQuery(LOAD_USER);

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

  const { data: profileData } = useQuery(LOAD_FROM_URL_USER, {
    variables: {
      username
    },
    skip: !readOnly()
  });

  return (
    <InfoContainer>
      <FixedContainer>
        <FriendsHeading>Friends</FriendsHeading>
        <FriendsContainer>
          {!readOnly() &&
            userData &&
            userData.loadUser.friends.map(friend => (
              <Friend key={friend.id} user={friend} />
            ))}
          {readOnly() &&
            profileData &&
            profileData.loadFromUrlUser.friends.map(friend => (
              <Friend key={friend.id} user={friend} readOnly />
            ))}
        </FriendsContainer>
      </FixedContainer>
    </InfoContainer>
  );
};

export default FriendsPage;
