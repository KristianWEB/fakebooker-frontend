import styled from "styled-components";
import { Button, Row } from "antd";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 100%;
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 6px;
  padding: 12px;
  font-family: Roboto;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const AboutHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.primaryTextColor};
  margin-bottom: 12px;
`;

export const WorkplaceContainer = styled(Row)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const WorkplaceBody = styled.p`
  margin: 0;
  margin-left: 12px;
  line-height: 1;
  font-size: 15px;
  color: #050505;
`;

export const HomeContainer = styled(Row)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const HomeplaceBody = styled.p`
  margin: 0;
  margin-left: 12px;
  margin-top: 3px;
  line-height: 1;
  font-size: 15px;
  color: #050505;
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
  transition: 0.1s;
  height: 3.5rem;
  margin-top: 12px;

  &&:focus,
  &&:active {
    background-color: #e4e6eb;
    color: ${props => props.theme.primaryTextColor};
  }
  &&:hover {
    background-color: #d8dadf;
    color: ${props => props.theme.primaryTextColor};
  }
`;
