import styled from "styled-components";
import { Row } from "antd";

export const AboutContainer = styled(Row)`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    width: 19.43rem;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    margin-right: 0.93rem;
  }
`;

export const ProfileInfoContainer = styled(Row)`
  display: flex;
  padding: 1rem 0.81rem;
  background-color: #f6f6f6;
`;

export const ProfileHeadingIcon = styled.img`
  width: 22.4px;
  height: 22.9px;
  object-fit: contain;
  margin-right: 11px;
`;
export const ProfileInfoHeading = styled.p`
  font-family: Roboto;
  font-size: 0.93rem;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #515365;
  margin: 0;
`;

export const PersonalQuotes = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  line-height: 1.15;
  color: #444444;
  padding: 1.25rem 13px 10px 13px;
  margin: 0;
`;

export const ModalLink = styled.a`
  display: inline-block;
  color: #ff5e3a;
  font-family: Roboto;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 1;
  position: relative;
  font-size: 1rem;
  margin: 0 0 1.25rem 1rem;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 12px;
    left: -5px;
    background-color: rgba(255, 94, 58, 0.27);
    width: calc(100% + 8px);
    height: 0.6rem;
  }

  &:hover {
    color: #ff5e3a;
  }
`;
