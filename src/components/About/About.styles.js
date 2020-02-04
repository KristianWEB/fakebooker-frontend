import styled from "styled-components";
import { Button } from "antd";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 100%;
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 6px;
  padding: 0 14px;
  font-family: Roboto;
`;

export const AboutHeading = styled.h1`
  margin-top: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primaryTextColor};
  margin-bottom: 12px;
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 20px;
  margin-bottom: 10px;
`;

export const HomeContainerParagraph = styled.p`
  margin: 0;
  margin-left: 8px;
  line-height: 1;
  font-size: 14px;
`;
export const HomeContainerHeading = styled.h2`
  font-size: 14px;
  margin: 0;
  margin-left: 4px;
  line-height: 1;
  font-weight: 600;
`;

export const StyledButton = styled(Button)`
  background-color: #e4e6eb;
  border-radius: 4px;
  border: 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${props => props.theme.primaryTextColor};
  cursor: pointer;
  margin: 12px 0;
`;
