import React from "react";
import {
  LastPhotosComponent,
  HeadingContainer,
  LastPhotosHeading,
  LastPhotosContainer,
  LastPhoto,
  LastPhotoImg
} from "./LastPhotos.styles";
import FirstImage from "../../assets/images/1.jpg";
import SecondImage from "../../assets/images/2.jpg";
import ThirdImage from "../../assets/images/3.jpg";
import FourthImage from "../../assets/images/4.jpg";
import FifthImage from "../../assets/images/5.jpg";
import SixthImage from "../../assets/images/6.jpg";
import SeventhImage from "../../assets/images/7.jpg";
import EightImage from "../../assets/images/8.jpg";
import NinthImage from "../../assets/images/9.jpg";

const LastPhotos = () => {
  return (
    <LastPhotosComponent>
      <HeadingContainer>
        <LastPhotosHeading>Last Photos</LastPhotosHeading>
      </HeadingContainer>
      <LastPhotosContainer>
        <LastPhoto>
          <LastPhotoImg src={FirstImage} />
        </LastPhoto>
        <LastPhoto>
          <LastPhotoImg src={SecondImage} />
        </LastPhoto>
        <LastPhoto>
          <LastPhotoImg src={ThirdImage} />
        </LastPhoto>
        <LastPhoto>
          <LastPhotoImg src={FourthImage} />
        </LastPhoto>
        <LastPhoto>
          <LastPhotoImg src={FifthImage} />
        </LastPhoto>
        <LastPhoto>
          <LastPhotoImg src={SixthImage} />
        </LastPhoto>
        <LastPhoto>
          <LastPhotoImg src={SeventhImage} />
        </LastPhoto>
        <LastPhoto>
          <LastPhotoImg src={EightImage} />
        </LastPhoto>
        <LastPhoto>
          <LastPhotoImg src={NinthImage} />
        </LastPhoto>
      </LastPhotosContainer>
    </LastPhotosComponent>
  );
};

export default LastPhotos;
