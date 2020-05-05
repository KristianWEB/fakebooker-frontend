import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContentLoader from "react-content-loader";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import Navbar from "../../components/Navbar/Navbar";
import SingleChat from "../../components/Message/SingleChat";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { LOAD_USER, LOAD_FROM_URL_USER } from "../../utils/queries";
import { ProfileHeaderSkeleton, NavbarSkeleton } from "./ProfileLayout.styles";

const ProfileLayout = ({ children }) => {
  const [pageLoading, setPageLoading] = useState(true);

  const { data: userData } = useQuery(LOAD_USER);
  const [openChat, setOpenChat] = useState({
    visible: false,
    creator: null,
  });
  useEffect(() => {
    setPageLoading(false);
  }, []);

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
      username,
    },
  });

  return (
    <>
      {!pageLoading && userData ? (
        <Navbar
          onProfile
          user={userData && userData.loadUser}
          setOpenChat={setOpenChat}
        />
      ) : (
        <NavbarSkeleton>
          <ContentLoader speed={1}>
            <rect x="0" y="0" rx="5" ry="5" />
          </ContentLoader>
        </NavbarSkeleton>
      )}
      {!pageLoading && userData ? (
        <ProfileHeader
          user={profileData ? profileData.loadFromUrlUser : userData.loadUser}
          authUser={userData.loadUser}
          readOnly={readOnly()}
          setOpenChat={setOpenChat}
        />
      ) : (
        <ProfileHeaderSkeleton>
          <ContentLoader speed={2}>
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
          </ContentLoader>
        </ProfileHeaderSkeleton>
      )}
      {children}
      {openChat.visible && (
        <SingleChat creator={openChat.creator} setOpenChat={setOpenChat} />
      )}
    </>
  );
};

export default ProfileLayout;

ProfileLayout.propTypes = {
  children: PropTypes.node,
};

ProfileLayout.defaultProps = {
  children: null,
};
