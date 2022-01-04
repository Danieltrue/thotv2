import styled from "styled-components";

const Cardstyle = styled.div`
  background-color: var(--brandwhite);
  font-size: 70%;
  padding: var(--rem);
  border-radius: var(--borderR);
  .detail__inner {
    display: flex;
    justify-content: center;
    align-items: center !important;
  }
  .detail {
    div.profileimage {
      margin-right: 0.5rem;
      width: 40px;
      height: 40px;
      padding: 0.5rem;
      color: var(--linecolor);
      background-color: var(--backgroundDark);
      border-radius: 50%;
      margin-bottom: 0.5rem;
      li {
        text-transform: uppercase;
        font-size: 90%;
        font-weight: bold;
      }
    }

    li.profileName {
      text-transform: capitalize;
      margin-top: -12px;
      h5 {
        font-weight: 700;
      }
      p {
        font-size: 60%;
        opacity: 0.7;
      }
    }
    .author__ft {
      margin-top: -12px;
      button {
        transform: rotate(90deg);
      }
    }
  }

  .topic {
    margin-top: 0.2rem;
  }

  .thot {
    font-size: 70%;
    span {
      a {
        color: var(--brandblue);
        text-decoration: underline;
      }
    }
  }

  .post__features {
    margin-top: 0.2rem;
    border-top: 1px solid var(--layoutBg);
    padding: 0.3rem 0;
    ul {
      width: 120px;
      li {
        font-size: 80%;
        button {
          span {
            font-weight: bold;
          }
        }
      }
    }
    .time {
      font-size: 60%;
      opacity: 0.5;
      display: flex;
      p {
        padding: 0 0.1rem;
      }
    }
  }

  .post--meta-fill {
    ul {
      flex-direction: row;
      width: 60px;
      button {
        padding: 0.1rem;
        opacity: 0.6;
      }
    }
    .profileFt {
      width: 110px;
      button {
        font-size: 70%;
        font-weight: bold;
        border-radius: var(--borderR);
        padding: 0.2rem;
      }
      .delete {
        border: 1px solid var(--errorbold);
        background-color: var(--errorbold);
        color: var(--brandwhite);
        width: 50px;
      }
      .edit {
        border: 1px solid var(--brandblue);
        color: var(--brandblue);
        padding: 0.2rem 0.5rem;
        width: 50px;
      }
    }
  }
`;

export default Cardstyle;
