import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

export const About = styled.section`
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 1200px;

  margin-bottom: 100px;

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
    width: 100%;
    padding: 0 30px;

    align-items: center;
    justify-content: flex-start;
  }
  @media (max-width: 1025px) {
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

export const Description = styled.p`
  font-family: "EffraLight-Regular";
  font-size: 40px;
  line-height: 40px;
  color: #0d756f;

  text-align: center;

  .green {
    font-family: "HelveticaNeueMed";
  }

  .orange {
    font-family: "HelveticaNeueMed";
    color: #ffa53c;
  }

  .black {
    color: #54595f;
    font-size: 28px;
    line-height: 36px;
    strong {
      font-family: "HelveticaNeueMed";
    }
  }

  &.mt185 {
    margin-top: 185px;
  }

  @media (max-width: 1366px) {
    font-size: 32px;
    line-height: 32px;

    .black {
      font-size: 24px;
      line-height: 26px;
    }
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    font-size: 22px;
    line-height: 31px;

    &.mt185 {
      margin-top: 125px;
    }

    .black {
      font-size: 18px;
      line-height: 18px;
    }
  }
  @media (max-width: 801px) {
  }
  @media (max-width: 600px) {
    line-height: 25px;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const Button = styled.button`
  border: 0;

  border-radius: 5px;
  background-color: #ffa53c;

  margin-top: 32px;
  padding: 12px 35px 11px 35px;

  color: #fff;
  text-transform: uppercase;
  font-family: "HelveticaNeueLt";
  font-size: 19px;
  line-height: 25px;
  letter-spacing: 1px;

  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #0d756f;
    color: #fff;
  }

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
  }
  @media (max-width: 801px) {
  }
  @media (max-width: 600px) {
    padding: 8px 35px 7px 35px;
    font-size: 16px;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;
