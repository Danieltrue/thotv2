import styled from "styled-components";

const Loginstyle = styled.div`
  height: 100vh;
  .login {
    height: 100%;
    .login__inner {
      width: 300px;
      flex-direction: column;
      .error__block {
        width: 100%;
        min-height: 50px;
        background-color: var(--errorLight);
        border-radius: var(--borderR);
        margin-bottom: var(--rem);
        visibility: hidden;
        &.error {
          visibility: visible;
        }
        p {
          font-size: 50%;
          color: var(--errorbold);
          font-weight: bold;
        }
      }
      form {
        margin-top: var(--rem);
        width: 100%;
        p {
          font-size: 50%;
          width: 100%;
          text-align: center;
          margin-top: var(--Divrem);
          a {
            color: var(--brandblue);
            text-decoration: underline;
          }
        }
        div {
          width: 100%;
          margin-top: var(--Divrem);
          input {
            background-color: var(--lightdark);
            padding: 0.5rem;
            border-radius: var(--borderR);

            font-size: 50%;
            &::placeholder {
              font-size: 90%;
            }
          }
        }
      }
    }
  }
`;

export default Loginstyle;
