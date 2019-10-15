import styled from "styled-components";
import { Row } from "antd";

const InfoContainer = styled(Row)`
  display: flex;
  align-items: flex-start;
  max-width: 1250px;
  margin: 0 auto;
`;

export const PostsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default InfoContainer;
