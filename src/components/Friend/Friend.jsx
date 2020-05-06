import React from "react";
import { useMutation } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
  FriendContainer,
  UserContainer,
  UserImg,
  UserName,
  FriendBtn,
  ActionsContainer,
  RejectFriendBtn,
} from "./Friend.styles";
import { REMOVE_FRIEND } from "../../utils/queries";

const Friend = ({ user, readOnly }) => {
  const [removeFriend, { loading }] = useMutation(REMOVE_FRIEND, {
    variables: {
      creator: user.username,
    },
  });

  const RemoveFriend = () => (
    <ActionsContainer>
      <RejectFriendBtn onClick={removeFriend} disabled={loading}>
        Unfriend
        {loading && (
          <Loader
            type="TailSpin"
            color="#1876f2"
            style={{
              position: "absolute",
              top: "13px",
              right: "16px",
            }}
            height={20}
            width={20}
          />
        )}
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
        <Popup
          className="deleteCommentPopup"
          arrow={false}
          trigger={<FriendBtn>Friends</FriendBtn>}
          closeOnDocumentClick
          on="click"
        >
          <RemoveFriend />
        </Popup>
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
    username: PropTypes.string,
  }),
  readOnly: PropTypes.bool,
};

Friend.defaultProps = {
  user: null,
  readOnly: null,
};
