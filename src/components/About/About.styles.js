import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  box-sizing: border-box;
  height: 100%;
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadow2};
  border-radius: 6px;
  margin-right: 8px;
  padding: 12px;
  font-family: Roboto;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const AboutHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 12px;
`;

export const WorkplaceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const WorkplaceBody = styled.p`
  margin: 0;
  margin-left: 12px;
  line-height: 1;
  font-size: 1.5rem;
  color: ${props => props.theme.secondaryText};
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const HomeplaceBody = styled.p`
  margin: 0;
  margin-left: 12px;
  margin-top: 3px;
  line-height: 1;
  font-size: 1.5rem;
  color: ${props => props.theme.secondaryText};
`;

export const StyledButton = styled.button`
  background-color: ${props => props.theme.secondaryBackground};
  border-radius: 4px;
  border: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.secondaryText};
  cursor: pointer;
  transition: 0.1s;
  height: 3.5rem;
  margin-top: 12px;
  width: 100%;

  &&:focus {
    background-color: ${props => props.theme.secondaryBackground};
    outline: none;
  }
  &&:active {
    transform: scale(0.96);
  }

  &&:hover {
    color: ${props => props.theme.secondaryText};
    background-color: ${props => props.theme.secondaryHoverBackground};
  }
`;
