import styled from "styled-components";

const CategoryBoxstyle = styled.div`
  background-color: var(--brandwhite);
  min-height: 200px;
  padding: var(--rem);
  form {
    input {
      width: 100%;
      background-color: var(--lightdark);
      border-radius: var(--borderR);
      padding: 0.5rem;
      font-size: 60%;
      &::placeholder {
        font-size: 60%;
      }
    }
  }
`;

export default CategoryBoxstyle;
