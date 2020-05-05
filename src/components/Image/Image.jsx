import React from "react";
import PropTypes from "prop-types";
import { ImageContainer, ImageUpload } from "./Image.styles";
import { ReactComponent as ImageIcon } from "../../assets/icons/images.svg";

const Image = ({ setImage }) => {
  const uploadImage = async (e) => {
    const data = new FormData();
    const {
      target: { files },
    } = e;

    data.append("file", files[0]);
    data.append("upload_preset", "kristian");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djsafwbaq/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file);
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
};

Image.defaultProps = {
  setImage: null,
};
