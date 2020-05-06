import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { ImageContainer, ImageUpload } from "./Image.styles";
import { ReactComponent as ImageIcon } from "../../assets/icons/images.svg";

const Image = ({ setImage, loading }) => {
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
        loading(progress);
      },
    });

    setImage(data);
  };

  return (
    <ImageContainer>
      <label htmlFor="upload-photo">
        <ImageIcon width={20} height={20} fill="#0EAD69" />
        <ImageUpload type="file" id="upload-photo" onChange={uploadImage} />
      </label>
    </ImageContainer>
  );
};

export default Image;

Image.propTypes = {
  setImage: PropTypes.func,
  loading: PropTypes.func,
};

Image.defaultProps = {
  setImage: null,
  loading: null,
};
