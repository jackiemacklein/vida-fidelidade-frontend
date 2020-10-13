import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  @media (max-width: 1025px) {
    margin-top: 65px;
  }
`;

export const About = styled.section`
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  position: relative;

  width: 1100px;

  margin-bottom: 20px;

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
    width: 100%;
    padding: 0 30px;

    align-items: stretch;
    justify-content: flex-start;
  }
  @media (max-width: 1025px) {
    padding: 0 15px;
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
  line-height: 21px;
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
    font-size: 22px;
    line-height: 28px;
    strong {
      font-family: "HelveticaNeueMed";
    }
  }

  &.mt185 {
    margin-top: 185px;
  }

  @media (max-width: 1366px) {
    font-size: 32px;
    line-height: 21px;

    .black {
      font-size: 22px;
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
  align-self: flex-end;

  border: 0;

  border-radius: 5px;
  background-color: #0d756f;

  margin-top: 15px;
  padding: 12px 35px 11px 35px;

  color: #fff;
  font-family: "HelveticaNeueLt";
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 1px;

  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #ffa53c;
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
    align-self: center;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const Content = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  background-color: #ffffff;

  margin-top: 60px;
  padding: 20px 45px 45px 45px;
  border-radius: 5px;

  border: 1px solid rgba(112, 112, 112, 0.33);

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    margin-top: 30px;
    padding: 20px;
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

export const Items = styled.ul`
  margin-top: 60px;
`;

export const Item = styled.li`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => (props.active ? "#ffffff" : "transparent")};

  margin-left: ${props => (!props.active ? "50px" : "0")};
  margin-right: ${props => (!props.active ? "50px" : "0")};

  margin-bottom: 15px;
  padding: 20px;
  border-radius: 5px;

  border: 1px solid rgba(112, 112, 112, 0.33);
  cursor: pointer;

  &:hover {
    margin-left: 0;
    margin-right: 0;
    background-color: #ffffff;
  }

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    margin-left: ${props => (!props.active ? "25px" : "0")};
    margin-right: ${props => (!props.active ? "25px" : "0")};
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

export const ItemButton = styled.button`
  align-self: flex-end;

  border: 0;

  border-radius: 5px;
  background-color: rgba(149, 0, 0, 0.55);

  padding: 5px 20px 5px 20px;

  color: #fff;
  font-family: "HelveticaNeueLt";
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 1px;

  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: rgba(149, 0, 0, 1);
    color: #fff;
  }

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    margin-top: 15px;
  }
  @media (max-width: 801px) {
  }
  @media (max-width: 600px) {
    align-self: stretch;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const ItemTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  font-family: "EffraLight-Regular";
  font-size: 14px;
  line-height: 14px;
  color: #54595f;

  span {
    margin-left: 4px;
    margin-top: 3px;
    font-family: "Effra-Bold";
    font-size: 15px;
    line-height: 17px;
  }

  @media (max-width: 1025px) {
    margin-top: 10px;
  }
`;

export const ContentTitle = styled.h2`
  font-weight: unset;
  font-family: "HelveticaNeueMed";
  font-size: 20px;
  line-height: 25px;
  color: #54595f;

  text-align: left;

  margin-bottom: 25px;
  margin-top: 25px;

  @media (max-width: 1366px) {
    font-size: 18px;
    line-height: 23px;

    margin-bottom: 18px;
  }
  @media (max-width: 1281px) {
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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  div:first-child:nth-last-child(2),
  div:first-child:nth-last-child(2) ~ div {
    &:nth-child(1) {
      margin-right: 15px;
    }

    &:nth-child(2) {
      margin-left: 15px;
    }
  }

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    div:first-child:nth-last-child(2),
    div:first-child:nth-last-child(2) ~ div {
      &:nth-child(1) {
        margin-right: 0px;
      }

      &:nth-child(2) {
        margin-left: 0px;
      }
    }
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

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  flex: 1;
  width: 100%;

  margin-bottom: 30px;
`;
