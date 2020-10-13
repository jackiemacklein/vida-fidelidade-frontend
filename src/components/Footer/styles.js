import styled from "styled-components";

export const Container = styled.footer`
  background-color: #54595f;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 1200px;
  margin: 25px;

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

export const LogoFigure = styled.figure``;

export const Logo = styled.img`
  height: 55px;
  width: auto;
`;

export const Address = styled.p`
  margin-top: 28px;

  font-family: "HelveticaNeueLt";
  text-align: center;
  color: #fff;
  font-size: 14px;
  line-height: 17px;
`;

export const Social = styled.div`
  margin-top: 28px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  a {
    margin: 0 10px;

    svg {
      path,
      g {
        transition: all 0.4s ease-in-out;
      }
    }

    &:hover {
      svg {
        path,
        g {
          fill: #ffa53c;
        }
      }
    }
  }
`;

export const Copy = styled.p`
  margin-top: 28px;

  font-family: "HelveticaNeueLt";
  text-align: center;
  color: #fff;
  font-size: 14px;
  line-height: 17px;
`;
