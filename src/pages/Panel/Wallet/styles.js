import styled from "styled-components";

//import HelveticaNeueLTComBd from "/static/fonts/HelveticaNeueLTCom-Bd.ttf";
//import HelveticaNeueLTComBdIt from "/static/fonts//HelveticaNeueLTCom-BdIt.ttf";
//import HelveticaNeueLTComRoman from "/static/fonts/fonts/HelveticaNeueLTCom-Roman.ttf";
//import HelveticaNeueLTComMd from "/static/fonts/fonts/HelveticaNeueLTCom-Md.ttf";

export const Container = styled.div`
  @font-face {
    font-family: "HelveticaNeueLTCom-Bd";
    src: url("/static/fonts/HelveticaNeueLTCom-Bd.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "HelveticaNeueLTCom-BdIt";
    src: url("/static/fonts/HelveticaNeueLTCom-BdIt.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "HelveticaNeueLTCom-Roman";
    src: url("/static/fonts/HelveticaNeueLTCom-Roman.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "HelveticaNeueLTCom-Md";
    src: url("/static/fonts/HelveticaNeueLTCom-Md.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  .createCard {
    color: #ffffff;
    font-size: 16px;
    margin: 12px;
    background-color: #12a199;
    border-radius: 5px;
    padding: 6px 36px;
    border: 0;
    cursor: pointer;
  }

  .printCard {
    color: #ffffff;
    font-size: 16px;
    margin: 12px;
    background-color: #12a199;
    border-radius: 5px;
    padding: 6px 36px;
    border: 0;
    cursor: pointer;
  }

  .container {
    width: 400px;
    padding: 40px;
    background: #12a199;
    border-radius: 10px;
    padding-bottom: 6px;
  }

  .image {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #imageFront {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 508px;
    margin-bottom: 21px;
    height: 325px;

    @media (max-width: 1025px) {
      width: 100%;
      height: auto;
    }
  }

  #imageFront img {
    width: 100%;
  }

  #datas {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #datas #ShowName {
    position: absolute;
    left: 24px;
    bottom: 106px;
    font-family: "HelveticaNeueLTCom-Md";
    color: #ffffff;
    font-size: 16pt;
    letter-spacing: 0px;
  }

  #datas #ShowNumber {
    position: absolute;
    left: 24px;
    bottom: 87px;
    font-family: "HelveticaNeueLTCom-Md";
    color: #005f5a;
    font-size: 12.6pt;
    letter-spacing: 0px;
  }

  #datas #ShowDateBirth {
    position: absolute;
    left: 27px;
    bottom: 44px;
    font-family: "HelveticaNeueLTCom-Bd";
    color: #005f5a;
    font-size: 10.5pt;
    letter-spacing: 0px;
  }

  #datas #ShowInitialDate {
    position: absolute;
    right: 34px;
    bottom: 44px;
    font-family: "HelveticaNeueLTCom-Bd";
    color: #005f5a;
    font-size: 10.5pt;
    letter-spacing: 0px;
  }

  #datas #ShowType {
    position: absolute;
    left: 173px;
    bottom: 44px;
    font-family: "HelveticaNeueLTCom-Bd";
    color: #005f5a;
    font-size: 10.5pt;
    letter-spacing: 0px;
  }

  #imageBack {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 508px;
    height: 325px;

    @media (max-width: 1025px) {
      width: 100%;
      height: auto;
    }
  }

  #imageBack img {
    width: 100%;
  }

  #datasDepe {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: "HelveticaNeueLTCom-Md";
    color: #ffffff;
    font-size: 11pt;
    left: 16px;
    top: 160px;
  }

  #datasDepe span {
    line-height: 16pt;
  }

  #datas #ShowDateBirthText {
    position: absolute;
    left: 27px;
    bottom: 32px;
    font-family: "HelveticaNeueLTCom-Bd";
    color: #ffffff;
    font-size: 7pt;
    letter-spacing: 0px;
  }

  #datas #ShowInitialDateText {
    position: absolute;
    right: 77px;
    bottom: 32px;
    font-family: "HelveticaNeueLTCom-Bd";
    color: #ffffff;
    font-size: 7pt;
    letter-spacing: 0px;
  }

  #datasDepeText {
    position: absolute;
    left: 16px;
    top: 134px;
    font-family: "HelveticaNeueLTCom-Bd";
    color: #ffffff;
    font-size: 11pt;
    letter-spacing: 0px;
  }

  @media print {
    @page {
      background-color: #12a199;
      background: #12a199;
      size: 13.440833333cm 326px;
      margin: 0;
      padding: 0;
    }

    html,
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
      background-color: #12a199;
      background: #12a199;
      position: relative;
    }

    #imageFront {
      margin-bottom: 0px;
    }

    .image {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #12a199;
      background: #12a199;
    }

    #imageFront {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 508px;
      height: 326px;
      margin-bottom: 0;
    }

    #imageFront img {
      width: 100%;
      height: 100%;
    }

    #datas {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #datas #ShowName {
      position: absolute;
      left: 24px;
      bottom: 106px;
      font-family: "HelveticaNeueLTCom-Md";
      color: #ffffff;
      font-size: 22px;
      letter-spacing: 0px;
    }

    #datas #ShowNumber {
      position: absolute;
      left: 24px;
      bottom: 87px;
      font-family: "HelveticaNeueLTCom-Md";
      color: #005f5a;
      font-size: 12.6pt;
      letter-spacing: 0px;
    }

    #datas #ShowDateBirth {
      position: absolute;
      left: 27px;
      bottom: 44px;
      font-family: "HelveticaNeueLTCom-Bd";
      color: #005f5a;
      font-size: 10.5pt;
      letter-spacing: 0px;
    }

    #datas #ShowInitialDate {
      position: absolute;
      right: 34px;
      bottom: 44px;
      font-family: "HelveticaNeueLTCom-Bd";
      color: #005f5a;
      font-size: 10.5pt;
      letter-spacing: 0px;
    }

    #datas #ShowType {
      position: absolute;
      left: 173px;
      bottom: 44px;
      font-family: "HelveticaNeueLTCom-Bd";
      color: #005f5a;
      font-size: 10.5pt;
      letter-spacing: 0px;
    }

    #imageBack {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 508px;
      height: 326px;

      transform: rotate(180deg);
    }

    #imageBack img {
      width: 100%;
      height: 100%;
    }

    #datasDepe {
      position: absolute;
      display: flex;
      flex-direction: column;
      font-family: "HelveticaNeueLTCom-Md";
      color: #ffffff;
      font-size: 18px;
      left: 16px;
      top: 160px;
    }

    #datasDepe span {
      line-height: 20px;
    }

    #datas #ShowDateBirthText {
      position: absolute;
      left: 27px;
      bottom: 32px;
      font-family: "HelveticaNeueLTCom-Bd";
      color: #ffffff;
      font-size: 7pt;
      letter-spacing: 0px;
    }

    #datas #ShowInitialDateText {
      position: absolute;
      right: 77px;
      bottom: 32px;
      font-family: "HelveticaNeueLTCom-Bd";
      color: #ffffff;
      font-size: 7pt;
      letter-spacing: 0px;
    }

    #datasDepeText {
      position: absolute;
      left: 16px;
      top: 134px;
      font-family: "HelveticaNeueLTCom-Bd";
      color: #ffffff;
      font-size: 11pt;
      letter-spacing: 0px;
    }
  }
`;
