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
        max-width: 600px;
      }
      div.ck-editor__editable {
        min-height: 300px;
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
