import styled from "styled-components";

const Cardstyle = styled.div`
  background-color: var(--brandwhite);
  font-size: 80%;
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
    }
  }
  .topic {
    margin-top: 0.5rem;
    button {
      font-size: 70%;
      background-color: var(--topic-back);
      padding: 0.5rem 0.7rem;
      border-radius: var(--borderR);
    }
  }

  .thot {
    font-size: 80%;
    span {
      a {
        color: var(--brandblue);
        text-decoration: underline;
      }
    }
  }

  .post__features {
    margin-top: 0.5rem;
    border-top: 1px solid var(--layoutBg);
    padding: 0.5rem 0;
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
    }
  }
`;

export default Cardstyle;
