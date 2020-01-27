import styled from "styled-components";

export const AboutFormContainer = styled.div`
  width: 500px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.16);
  font-family: Roboto;
  border-radius: 6px;
`;

export const AboutFormHeading = styled.div`
  display: flex;
`;

export const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 58px;
  justify-content: flex-end;
  align-items: center;
`;

export const Heading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 18px auto;
`;

export const CloseContainer = styled.div`
  padding: 0.25rem;
  display: flex;
  align-items: center;
  background-color: #e4e6eb;
  border-radius: 50%;
  margin-right: 13px;
`;

export const ActionsContainer = styled.div`
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  padding-left: 28px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 600;
`;

export const ActionsHeading = styled.h3`
  font-size: 20px;
  margin: 0;
  font-weight: 600;
`;

export const ActionsParagraph = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #868686;
`;

export const WorkContainer = styled.div`
  margin-top: 24px;
`;

export const WorkHeading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

export const WorkActionBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin-top: 5px;
  margin-left: -5px;
`;

export const ButtonActionHeading = styled.span`
  margin-left: 5px;
  color: #1977f3;
  font-size: 14px;
`;

export const AboutFormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 16px;
`;

export const UpdateInformationBtn = styled.button`
  font-size: 14px;
  color: #1977f3;
  font-weight: 600;
  border: 0;
  background-color: transparent;
`;

export const FooterActions = styled.div``;

export const FooterCloseBtn = styled.button`
  background-color: #e4e6eb;
  border: 0;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #050505;
  border-radius: 6px;
`;

export const FooterSaveBtn = styled.button`
  background-color: #1977f3;
  border: 0;
  padding: 8px 25px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border-radius: 6px;
  margin-left: 7px;
`;
