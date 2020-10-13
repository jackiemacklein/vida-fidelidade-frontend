import styled from "styled-components";

export const Container = styled.div`
  position: fixed;

  z-index: 999;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(190, 188, 188, 0.64);

  display: ${props => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 40%;
  background: #fff;
  background-color: #fff;
  padding: 32px;
  box-shadow: 0px 3px 11px 0px rgba(1, 1, 1, 0.2);
  border-radius: 10px;

  @media (max-width: 1366px) {
    width: 60%;
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    width: 90%;
  }
  @media (max-width: 801px) {
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  position: relative;
`;

export const Title = styled.h2`
  font-weight: unset;
  font-family: "HelveticaNeueMed";

  font-size: 18px;
  color: #000000;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  border: 0;
  font-family: "HelveticaNeueMed";
  font-size: 18px;
  color: #000000;
  border: 0;
  background: transparent;
  cursor: pointer;

  &:hover {
    color: #ffa53c;
  }
`;

export const Body = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export const Summary = styled.p`
  font-family: "Effra-Bold";
  color: #54595f;
  font-size: 16px;
  line-height: 18px;

  color: #54595f;

  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-family: "EffraLight-Regular";
  color: #54595f;
  font-size: 16px;
  line-height: 18px;

  color: #54595f;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SuccessButton = styled.button`
  padding: 8px 12px 8px 0px;
  background-color: transparent;
  background: transparent;

  color: #ffa53c;
  text-transform: uppercase;

  text-align: center;
  font-family: "HelveticaNeueLight";
  border: 0;
  font-size: 14px;

  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const DefaultButton = styled.button`
  padding: 8px 12px;
  background-color: #ecf0f1;
  background: #ecf0f1;

  color: #000000;
  text-transform: uppercase;

  text-align: center;
  font-family: "HelveticaNeueLight";
  border: 0;
  font-size: 14px;

  cursor: pointer;

  &:hover {
    color: #ffa53c;
  }
`;
