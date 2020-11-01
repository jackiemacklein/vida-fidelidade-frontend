import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  @font-face {
      font-family: 'HelveticaNeue';
      src: url('/static/fonts/HelveticaNeue.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'HelveticaNeueBd';
      src: url('/static/fonts/HelveticaNeueBd.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'HelveticaNeueBlackCond';
      src: url('/static/fonts/HelveticaNeueBlackCond.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'HelveticaNeueBold';
      src: url('/static/fonts/HelveticaNeueBold.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'HelveticaNeueHv';
      src: url('/static/fonts/HelveticaNeueHv.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'HelveticaNeueIt';
      src: url('/static/fonts/HelveticaNeueIt.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'HelveticaNeueLight';
      src: url('/static/fonts/HelveticaNeueLight.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'HelveticaNeueLt';
      src: url('/static/fonts/HelveticaNeueLt.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'HelveticaNeueMed';
      src: url('/static/fonts/HelveticaNeueMed.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'HelveticaNeueMedium';
      src: url('/static/fonts/HelveticaNeueMedium.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }


  @font-face {
      font-family: 'HelveticaNeueThin';
      src: url('/static/fonts/HelveticaNeueThin.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Effra-Italic';
      src: url('/static/fonts/Effra-Italic.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'EffraLight-Italic';
      src: url('/static/fonts/EffraLight-Italic.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Effra-BoldItalic';
      src: url('/static/fonts/Effra-BoldItalic.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'EffraMedium-Regular';
      src: url('/static/fonts/EffraMedium-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'EffraHeavy-Italic';
      src: url('/static/fonts/EffraHeavy-Italic.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'EffraHeavy-Regular';
      src: url('/static/fonts/EffraHeavy-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'EffraLight-Regular';
      src: url('/static/fonts/EffraLight-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Effra-Regular';
      src: url('/static/fonts/Effra-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Effra-Bold';
      src: url('/static/fonts/Effra-Bold.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'EffraMedium-Italic';
      src: url('/static/fonts/EffraMedium-Italic.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //transition: all 0.4s ease-in-out;

    //animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
    //animation-duration: 0.6s; /* don't forget to set a duration! */

  }

  #root {
    overflow-x: hidden;
    background-color: #EEEEEE;
    background: #EEEEEE;


    .MuiPaper-elevation1{
      box-shadow: none !important;
    }
  }

  a:focus, textarea:focus, input:focus, button:focus{
      outline: none !important;
  }

  a:active, textarea:active, input:active, button:active {
    outline: none !important;
  }

`;
