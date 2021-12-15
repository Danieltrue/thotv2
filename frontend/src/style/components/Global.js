import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  :root {
    --brandblue: #185ADB;
    --branddark: #212121;
    --brandwhite: #fff;
    --linecolor: #707070;
    --lightdark: #ECECEC;
    --errorLight: #FFEEEE;
    --errorbold: #FF5151;
    --layoutBg: #FCFCFC;
    --rem: 1rem;
    --Divrem: 0.5rem;
    --borderR: 5px;
  }

  html {
    font-size: 1.6rem;
    color: var(---branddark);
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center-sbtw {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button.submitBtn {
    background-color: var(--brandblue);
    color: var(--brandwhite);
    width: 100%;
    /* padding: 0.5rem; */
    min-height: 40px;
    font-size: 60%;
    border-radius: var(--borderR);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row {
    max-width: 1140px;
    margin: 0 auto;
  }

  .logo {
    color: var(--brandblue);
    font-family: Forte, sans-serif;
  }
`;

export default Global;
