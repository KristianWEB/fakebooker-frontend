import React from "react";
import PropTypes from "prop-types";
import { ImageContainer, ImageUpload } from "./Image.styles";
import { ReactComponent as ImageIcon } from "../../assets/icons/images.svg";

const Image = ({ setImage }) => {
  const uploadImage = async e => {
    const data = new FormData();
    data.append("file", e.file);
    data.append("upload_preset", "kristian");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djsafwbaq/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();

    setImage(file);
  };

  return (
    <ImageContainer>
      <ImageUpload type="file" customRequest={uploadImage}>
        <ImageIcon width={20} height={20} fill="#0EAD69" />
      </ImageUpload>
    </ImageContainer>
  );
};

export default Image;

Image.propTypes = {
  setImage: PropTypes.func
};

Image.defaultProps = {
  setImage: null
};
