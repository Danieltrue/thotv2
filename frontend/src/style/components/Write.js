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
      font-size: 60%;
      .ck {
        max-width: 500px;
      }
      div.ck-editor__editable {
        min-height: 200px;
      }
    }
    .category-search-post {
      width: 100%;
      margin-top: 1rem;
      input {
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
        justify-content: flex-end;
      }
    }
  }
`;

export default Writestyle;
