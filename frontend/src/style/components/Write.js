import styled from "styled-components";

const Writestyle = styled.div`
  & > div {
    display: flex;
    justify-content: center;
  }
  .write__box {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    width: auto;
    & > div:first-of-type {
      textarea {
        background-color: var(--lightdark);
        padding: var(--rem);
        font-size: 70%;
        width: 450px;
        border-radius: var(--borderR);
        height: 200px;
        &::placeholder {
          font-size: 80%;
          opacity: 0.8;
        }
      }
    }
    .category-search-post {
      width: 100%;
      margin-top: 1rem;
      input {
        border-radius: var(--borderR);
        width: 100%;
        border: 1px solid var(--borderLine);
        padding: 0.3rem 1rem;
        background-color: var(--lightdark);
        font-size: 70%;
        &::placeholder {
          font-size: 80%;
        }
      }
    }
    div.button-pack {
      align-self: flex-end;
      padding: 0;
      margin-top: 1rem;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default Writestyle;
