import styled from "styled-components";

export const Container = styled.section`
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  position: relative;

  width: 1200px;

  /*margin-top: 50px;
  margin-bottom: 35px;*/

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  /* width */
  &::-webkit-scrollbar {
    height: 5px;
    cursor: move;
    width: 30%;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(136, 136, 136, 0.1);
    border-radius: 60px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ffa53c;
    border-radius: 60px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #00847e;
  }

  padding-top: 50px;
  padding-bottom: 35px;
  margin-bottom: 35px;

  @media (max-width: 1366px) {
    margin-top: 25px;
  }
  @media (max-width: 1281px) {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;

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

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  pointer-events: none;

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
  }
  @media (max-width: 965px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  @media (max-width: 801px) {
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const Item = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #fff;

  border-radius: 5px;

  margin-right: 40px;

  padding: 20px;

  min-width: 270px;

  &:last-child {
    margin-right: 0px;
  }

  scroll-snap-align: start;
  pointer-events: none;

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
  }
  @media (max-width: 965px) {
    &:last-child {
      margin-right: 20px;
    }
    margin: 20px;
  }
  @media (max-width: 801px) {
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const Icone = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 100%;

  background-color: #00847e;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -50px;

  @media (max-width: 1366px) {
    width: 80px;
    height: 80px;
    margin-top: -40px;
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

export const Title = styled.h3`
  margin-top: 30px;

  font-family: "HelveticaNeueMed";
  color: #0d756f;
  font-size: 22px;
  line-height: 37px;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  span {
    font-family: "HelveticaNeueThin";
    color: #54595f;
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 1366px) {
    margin-top: 20px;

    font-size: 20px;
    line-height: 33px;

    span {
      font-size: 18px;
      line-height: 22px;
    }
  }
  @media (max-width: 1281px) {
    font-size: 22px;
    line-height: 30px;
  }
  @media (max-width: 1025px) {
    font-size: 18px;
    line-height: 33px;

    span {
      font-size: 16px;
      line-height: 22px;
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

export const Line = styled.li`
  list-style: none;

  font-family: "HelveticaNeueThin";
  color: #54595f;
  font-size: 18px;
  line-height: 23px;
  margin-top: 7px;

  &.through {
    text-decoration: line-through;
  }

  span {
    color: #00847e;
    font-family: "HelveticaNeueMed";
  }

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    font-size: 16px;
    line-height: 18px;
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
