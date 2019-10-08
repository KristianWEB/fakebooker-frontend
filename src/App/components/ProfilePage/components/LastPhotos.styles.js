import styled from "styled-components";
import { Row } from "antd";

export const LastPhotosComponent = styled(Row)`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    width: 20.3125rem;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    margin-left: 0.93rem;
  }
`;

export const HeadingContainer = styled(Row)`
  display: flex;
  padding: 1rem 0.81rem;
  background-color: #f6f6f6;
`;
export const LastPhotosHeading = styled.p`
  font-family: Roboto;
  font-size: 0.93rem;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #515365;
  margin: 0;
`;

export const LastPhotosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  margin-bottom: 0;
  overflow: hidden;
`;

export const LastPhoto = styled.li`
  width: 33.33%;
  padding: 0 4px 4px 0;
  overflow: hidden;
`;

export const LastPhotoImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 3px;
`;
