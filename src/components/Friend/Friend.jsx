import React from "react";
import { useMutation } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import { Popover } from "antd";
import {
  FriendContainer,
  UserContainer,
  UserImg,
  UserName,
  FriendBtn,
  ActionsContainer,
  RejectFriendBtn
} from "./Friend.styles";
import { REMOVE_FRIEND } from "../../utils/queries";

const Friend = ({ user, readOnly }) => {
  const [removeFriend] = useMutation(REMOVE_FRIEND, {
    variables: {
      creator: user.username
    }
  });

  const RemoveFriend = () => (
    <ActionsContainer>
      <RejectFriendBtn type="link" onClick={removeFriend}>
        Unfriend
      </RejectFriendBtn>
    </ActionsContainer>
  );

  return (
    <FriendContainer>
      <UserContainer>
        <UserImg src={user.avatarImage} />
        <UserName>
          {user.firstName} {user.lastName}
        </UserName>
      </UserContainer>
      {!readOnly ? (
        <Popover
          placement="bottomRight"
          content={<RemoveFriend />}
          trigger="click"
          overlayStyle={{
            width: "344px"
          }}
        >
          <FriendBtn type="link">Friends</FriendBtn>
        </Popover>
      ) : (
        <FriendBtn type="link">Friends</FriendBtn>
      )}
    </FriendContainer>
  );
};

export default Friend;

Friend.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatarImage: PropTypes.string,
    username: PropTypes.string
  }),
  readOnly: PropTypes.bool
};

Friend.defaultProps = {
  user: null,
  readOnly: null
};
