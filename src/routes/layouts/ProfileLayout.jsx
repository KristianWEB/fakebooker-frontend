import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { Row } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import SingleChat from "../../components/Message/SingleChat";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { LOAD_USER, LOAD_FROM_URL_USER } from "../../utils/queries";

const ProfileLayout = ({ children }) => {
  const { data: userData } = useQuery(LOAD_USER);
  const [openChat, setOpenChat] = useState({
    visible: false,
    creator: null
  });

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

  // skip this when on auth profile
  const { data: profileData } = useQuery(LOAD_FROM_URL_USER, {
    variables: {
      username
    }
  });

  return (
    <>
      {userData && (
        <Row>
          <Navbar
            onProfile
            user={userData.loadUser}
            setOpenChat={setOpenChat}
          />
          <ProfileHeader
            user={profileData ? profileData.loadFromUrlUser : userData.loadUser}
            authUser={userData.loadUser}
            readOnly={readOnly()}
            setOpenChat={setOpenChat}
          />
          {children}
          {openChat.visible && (
            <SingleChat creator={openChat.creator} setOpenChat={setOpenChat} />
          )}
        </Row>
      )}
    </>
  );
};

export default ProfileLayout;

ProfileLayout.propTypes = {
  children: PropTypes.node
};

ProfileLayout.defaultProps = {
  children: null
};
