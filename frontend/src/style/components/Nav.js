import styled from "styled-components";

const Navstyle = styled.nav`
  background-color: var(--brandwhite);
  padding: var(--rem);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //Unlogged Nav style
  .unloggednav__style {
    font-size: 60%;
    div {
      margin-left: 1rem;
    }
    button {
      border-radius: 40px;
      background: var(--brandblue);
      padding: 0.5rem 0.5rem;
      a {
        color: var(--brandwhite);
      }
    }
  }
  //logged Nav style
  .logged_style {
    font-size: 60%;
    .username {
      text-transform: capitalize;
    }
    .profileimage {
      background-color: var(--lightdark);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 0.8rem;
      margin-left: 0.5rem;
      li {
        text-transform: uppercase;
      }
    }
  }
`;

export default Navstyle;
