import styled, { keyframes } from "styled-components";

const pulseAnimate = keyframes`

  0% {
    -moz-box-shadow: 0 0 0 0 #ffa53c;
    box-shadow: 0 0 0 0 #ffa53c;
  }
  50% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }

`;

export const Container = styled.header`
  position: relative;

  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;

  z-index: 3;

  @media (max-width: 1366px) {
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

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;

  transition: all 0.4s ease-in-out;

  width: 1200px;

  align-self: center;

  margin: 40px 0px;

  .menu {
    display: none;
    position: fixed;
    right: 20px;
    cursor: pointer;
    z-index: 999;
  }

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
    width: 100%;
    padding: 0 30px;
  }
  @media (max-width: 1025px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;

    position: fixed;
    z-index: 9;
    top: -1px;
    width: 100%;
    background: #fff;
    margin-top: 0;
    padding: 10px 0;
    box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.16);

    .menu {
      display: block;
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

export const LogoContainer = styled.figure`
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 60px;

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    height: 50px;
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

export const List = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-end;

  list-style: none;

  transition: all 0.4s ease-in-out;

  a {
    text-decoration: none;
    align-self: center;
  }

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    right: ${props => (props.open ? "0" : "-100%")};
    top: 0;
    z-index: 9;
    height: 100vh;
    background: #0d756f;
    margin-top: 0px;
    padding: 20px;
    padding-top: 80px;
    width: 70%;
    box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.16);
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

export const ListItem = styled.button`
  font-family: "HelveticaNeueLight";
  font-size: 16px;
  line-height: 18px;
  color: #0d756f;

  cursor: pointer;

  transition: all 0.4s ease-in-out;

  margin: 0 20px;

  align-self: center;

  border: 0;
  background-color: transparent;

  &:hover {
    color: #ffa53c;
  }

  &.button {
    background-color: #ffa53c;
    color: #fff;
    margin-right: 0px;
    padding: 15px;
    padding-top: 16px;
    text-transform: uppercase;
    font-family: "HelveticaNeueMed";
    line-height: 16px;

    transition: all 0.4s ease-in-out;

    animation: ${pulseAnimate} 2s infinite;

    &:hover {
      background-color: #0d756f;
      animation: none;
    }
  }

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    font-size: 18px;
    line-height: 20px;

    margin: 20px;
    color: #fff;

    &.button {
      font-size: 16px;
      line-height: 20px;
      margin-right: 20px;
      &:hover {
        background-color: #fff;
        color: #ffa53c;
        animation: none;
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

export const Banners = styled.div`
  background-color: #0d756f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  position: relative;

  padding: 50px;
  margin-top: 10px;

  width: 1200px;
  height: 493px;

  align-self: center;

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
    width: 100%;
  }
  @media (max-width: 1025px) {
    padding: 30px;
    margin-top: 73px;
  }
  @media (max-width: 801px) {
  }
  @media (max-width: 600px) {
    height: 374px;
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const Content = styled.div`
  display: ${props => (props.active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.4s ease-in-out;
`;

export const Subtitle = styled.h2`
  font-family: "HelveticaNeueThin";
  font-size: 25px;
  line-height: 30px;
  color: #ffa53c;

  text-align: center;

  animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 0.6s; /* don't forget to set a duration! */

  @media (max-width: 1366px) {
    font-size: 22px;
    line-height: 27px;
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

export const Title = styled.h1`
  font-family: "HelveticaNeueThin";
  font-size: 42px;
  line-height: 51px;
  color: #fff;
  font-weight: unset;
  text-transform: uppercase;

  align-self: center;

  span {
    font-family: "HelveticaNeueMed";
    font-size: 55px;
    line-height: 68px;
  }

  animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */

  @media (max-width: 1366px) {
    font-size: 32px;
    line-height: 41px;
    span {
      font-size: 41px;
    }
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
  }
  @media (max-width: 801px) {
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    margin-top: 10px;

    span {
      font-size: 22px;
      line-height: 30px;
    }
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: #ffa53c;

  margin-top: 28px;
  padding: 16px 22px 15px 22px;

  color: #fff;
  text-transform: uppercase;
  font-family: "HelveticaNeueLt";
  font-size: 19px;
  line-height: 25px;

  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #ffa53c;
  }

  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 0.4s; /* don't forget to set a duration! */

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    padding: 11px 10px 10px 10px;
    font-size: 16px;
    line-height: 25px;
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

export const Video = styled.div`
  position: absolute;
  bottom: -27%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    width: 707px;
    height: 321px;

    animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 0.4s; /* don't forget to set a duration! */

    box-shadow: 0px 0px 4px #00000030;
  }

  @media (max-width: 1366px) {
  }
  @media (max-width: 1281px) {
  }
  @media (max-width: 1025px) {
    bottom: -17%;

    iframe {
      width: 607px;
      height: 300px;
    }
  }
  @media (max-width: 801px) {
  }
  @media (max-width: 600px) {
    bottom: -28%;

    iframe {
      width: 80%;
      height: 235px;
    }
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  }
`;

export const Figure = styled.figure`
  width: 707px;
  height: 381px;
  overflow: hidden;

  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 0.4s; /* don't forget to set a duration! */
`;

export const Image = styled.img`
  width: 100%;
`;
