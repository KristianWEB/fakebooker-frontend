/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@apollo/react-hooks";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { CHANGE_AVATAR_IMAGE } from "../../utils/queries";
import {
  ChangeAvatarContainer,
  AvatarImageUpload,
} from "./ChangeAvatarPhoto.styles";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";

const ChangeAvatarPhoto = () => {
  const [avatarImageLoading, setAvatarImageLoading] = useState(null);
  const [changeAvatarImage] = useMutation(CHANGE_AVATAR_IMAGE);

  const uploadImage = async (e) => {
    const formData = new FormData();
    const {
      target: { files },
    } = e;

    formData.append("file", files[0]);
    formData.append("upload_preset", "kristian");

    const { data } = await axios.request({
      method: "POST",
      url: process.env.REACT_APP_CLOUDINARY_URL,
      data: formData,
      onUploadProgress: (p) => {
        const progress = p.loaded / p.total;
        setAvatarImageLoading(progress);
      },
    });

    changeAvatarImage({
      variables: {
        avatarImage: data.secure_url,
      },
    });
  };

  return (
    <ChangeAvatarContainer>
      <label
        htmlFor="upload-photo-avatar"
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <CameraIcon width="20" height="20" />
        <AvatarImageUpload
          type="file"
          id="upload-photo-avatar"
          onChange={uploadImage}
        />
        {avatarImageLoading && avatarImageLoading !== 1 && (
          <Loader
            type="TailSpin"
            color="#050505"
            height={15}
            width={15}
            style={{ marginLeft: "5px" }}
          />
        )}
      </label>
    </ChangeAvatarContainer>
  );
};

export default ChangeAvatarPhoto;
