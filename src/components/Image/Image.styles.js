import styled from "styled-components";
import { Row, Upload } from "antd";

export const ImageContainer = styled(Row)`
  padding: 8px 5px;
  && {
    span {
      width: 20px;
      height: 20px;
      display: block;
    }
  }
`;

export const ImageUpload = styled(Upload)``;
