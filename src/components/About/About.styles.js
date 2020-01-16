import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.161);
  border-radius: 6px;
  padding: 0 14px;
  font-family: "Open Sans", sans-serif;
`;

export const AboutHeading = styled.h1`
  margin-top: 12px;
  font-size: 15px;
  font-weight: bold;
  color: #050505;
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

export const StyledButton = styled.button`
  background-color: #e4e6eb;
  border-radius: 4px;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  color: #050505;
  padding: 5px 0;
  margin-bottom: 10px;
  cursor: pointer;
`;
