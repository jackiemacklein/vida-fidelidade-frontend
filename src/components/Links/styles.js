import styled from "styled-components";

export const Container = styled.section`
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 1100px;

  /*margin-bottom: 100px;*/
  margin-top: 100px;

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
    width: 100%;
    padding: 0 30px;

    align-items: center;
    justify-content: flex-start;
  }
  @media (max-width: 1025px) {
    /*margin-bottom: 50px;*/
    margin-top: 50px;
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

export const Item = styled.article`
  margin-bottom: 17px;
  width: 100%;
`;

export const Header = styled.a`
  text-decoration: none;

  background-color: #54595f;

  border-radius: 4px;

  padding: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  z-index: 2;

  position: relative;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  transition: all 0.4s ease-in-out;

  svg {
    cursor: pointer;
  }
`;

export const HeaderTitle = styled.h3`
  font-family: "HelveticaNeueLight";
  text-align: left;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-weight: unset;

  flex: 1;
`;

export const AnswerContent = styled.div`
  max-height: ${props => (props.show ? "100vh" : "0px")};
  overflow: hidden;

  transition: all 0.4s ease-in-out;
`;

export const Answer = styled.p`
  font-family: "HelveticaNeueLt";
  text-align: left;
  color: #54595f;
  font-size: 16px;
  line-height: 22px;

  padding: 14px;
  padding-bottom: 30px;
  margin: -4px 17px 0px 17px;

  background-color: #dbdbdb;

  border-radius: 4px;
`;
