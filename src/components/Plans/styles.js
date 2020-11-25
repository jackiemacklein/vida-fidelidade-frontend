import styled from "styled-components";

export const Container = styled.section`
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 1200px;

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
    width: 100%;
    padding: 0 30px;

    align-items: stretch;
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

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;

  flex-wrap: wrap;

  margin-top: 68px;

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
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
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  background-color: #0d756f;

  border-radius: 5px;

  width: 295px;

  margin: 0px 0px 35px 35px;

  &:nth-of-type(1) {
    //margin: 0px 90px;
    //margin-bottom: 35px;
    margin: 0px 0px 35px 0px;
  }

  box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.16);

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
    width: 275px;
  }
  @media (max-width: 1025px) {
    width: calc(50% - 50px);
  }
  @media (max-width: 801px) {
    width: 100%;
    margin: 0px;
    margin-bottom: 25px;
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const Header = styled.header`
  background-color: #54595f;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  padding: 12px;
`;

export const HeaderTitle = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "HelveticaNeueMed";
  font-size: 24px;
  line-height: 29px;
  color: #fff;
  font-weight: unset;
  text-transform: uppercase;
  text-align: center;

  span {
    font-family: "EffraLight-Regular";
    text-transform: none;
  }
`;

export const Content = styled.ul`
  padding: 30px 15px;

  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  flex: 1;

  a {
    align-self: center;
    flex: 1;
    display: flex;
    text-decoration: none;
  }
`;

export const Line = styled.li`
  text-align: center;
  margin-bottom: 20px;

  font-family: "EffraLight-Regular";
  color: #fff;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1px;
`;

export const Price = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  font-family: "HelveticaNeueMed";
  color: #fff;
  font-size: 40px;
  line-height: 49px;

  margin-top: 45px;

  span {
    font-family: "EffraLight-Regular";
    color: #fff;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const SmalLine = styled.li`
  font-family: "EffraLight-Regular";
  color: #fff;
  font-size: 14px;
  line-height: 17px;

  margin-top: 15px;
  margin-bottom: 5px;

  text-align: center;
  /*HelveticaNeueThin*/
`;

export const Button = styled.button`
  border: 0;

  border-radius: 0px;
  background-color: #ffa53c;

  margin-top: 5px;
  padding: 10px 25px 10px 25px;

  color: #fff;
  text-transform: uppercase;
  font-family: "HelveticaNeueLt";
  font-size: 19px;
  line-height: 25px;
  letter-spacing: 1px;

  cursor: pointer;
  transition: all 0.4s ease-in-out;

  align-self: center;

  &:hover {
    background-color: #fff;
    color: #ffa53c;
  }
`;
