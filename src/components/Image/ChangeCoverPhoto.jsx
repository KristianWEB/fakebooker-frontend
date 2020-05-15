/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@apollo/react-hooks";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { CHANGE_COVER_IMAGE } from "../../utils/queries";
import {
  ChangePhotoContainer,
  ChangeBackgroundHeading,
  CoverImageUpload,
} from "./ChangeCoverPhoto.styles";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";

const ChangeCoverPhoto = () => {
  const [coverImageLoading, setCoverImageLoading] = useState(null);
  const [changeCoverImage] = useMutation(CHANGE_COVER_IMAGE);

  const uploadImage = async (e) => {
    const formData = new FormData();
    const {
      target: { files },
    } = e;

    formData.append("file", files[0]);
    formData.append("upload_preset", "kristian");

    const { data } = await axios.request({
      method: "POST",
      url: "https://api.cloudinary.com/v1_1/djsafwbaq/image/upload",
      data: formData,
      onUploadProgress: (p) => {
        const progress = p.loaded / p.total;
        setCoverImageLoading(progress);
      },
    });

    changeCoverImage({
      variables: {
        coverImage: data.secure_url,
      },
    });
  };

  return (
    <ChangePhotoContainer>
      <label
        htmlFor="upload-photo-cover"
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <CameraIcon width="20" height="20" />
        <CoverImageUpload
          type="file"
          id="upload-photo-cover"
          onChange={uploadImage}
        />
        <ChangeBackgroundHeading>Edit</ChangeBackgroundHeading>
        {coverImageLoading && coverImageLoading !== 1 && (
          <Loader
            type="TailSpin"
            color="#050505"
            height={15}
            width={15}
            style={{ marginLeft: "5px" }}
          />
        )}
      </label>
    </ChangePhotoContainer>
  );
};

export default ChangeCoverPhoto;
