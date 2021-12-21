import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
    --brandblue: #0099ee;
    --branddark: #a1acb1;
    --brandwhite: #fff;
    --linecolor: #707070;
    --lightdark: #f1f1f1;
    --errorLight: #FFEEEE;
    --errorbold: #FF5151;
    --layoutBg: #FCFCFC;
    --rem: 1rem;
    --Divrem: 0.5rem;
    --borderR: 5px;
    --borderLine: #e7e9ee;
    --backgroundDark: #e2e2e2;
    --topic-back: #f1f1f1;
    --topic-color: #f1f1f1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(---branddark);
  }

  input::placeholder {
    color: #a1acb1;
  }

  html,body {
    font-size: 1.3rem;
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    color: var(---branddark) !important;
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

  button.btn {
    background-color: var(--brandblue);
    color: var(--brandwhite);
    border-radius: 40px;
    font-size: 60%;
    padding: 0.5rem 1rem;
    width: 100px;
  }
`;

export default Global;
