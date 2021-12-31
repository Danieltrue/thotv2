import styled from "styled-components";

const Navstyle = styled.nav`
  background-color: var(--brandwhite);
  padding: var(--rem);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navs {
    width: 50%;
  }
  //Unlogged Nav style
  .unloggednav__style {
    font-size: 60%;
    display: flex;
    justify-content: flex-end;
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
  .nav__container {
    width: auto;
  }
  .logged_style {
    font-size: 60%;
    div {
      margin-left: 0.5rem;
    }
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
    .search__bar {
      flex: 1;
      input {
        background-color: var(--lightdark);
        border-radius: 30px;
        padding: 0.4rem 1rem;
        &::placeholder {
          font-size: 80%;
        }
      }
    }
  }

  //floating btn

  .floating__btn {
    position: fixed;
    top: 90%;
    right: 2%;
    a {
      button {
        padding: 0.5rem;
        font-size: 60%;
        border-radius: 50px;
        background-color: var(--brandblue);
        width: 90px;
        color: var(--brandwhite);
      }
    }
  }
`;

export default Navstyle;
