import styled from "styled-components";

export const H2 = styled.h2`
  font-family: "HelveticaNeueThin";
  font-size: 40px;
  line-height: 49px;
  color: #0d756f;
  font-weight: unset;

  align-self: center;

  span {
    font-family: "HelveticaNeueMed";
  }

  transition: all 0.4s ease-in-out;
  margin-top: 30px;

  @media (max-width: 1366px) {
    font-size: 32px;
    line-height: 41px;
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
  }
  @media (max-width: 801px) {
    font-size: 25px;
    line-height: 34px;
    text-align: center;
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;
