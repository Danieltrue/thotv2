import styled from "styled-components";

const Profilestyle = styled.div`
  .large_photo {
    width: 100%;
    height: 300px;
    background-color: var(--brandblue);
  }
  .user_info_page {
    width: 100%;
    border-radius: var(--borderR);
    background-color: #fff;
    min-height: 200px;
    padding: 10px 20px;
    margin-top: -100px;
    border: 1px solid var(--backgroundDark);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .image_detail {
      position: relative;
      display: flex;
      align-items: center;
      .image {
        background-color: var(--backgroundDark);
        width: 150px;
        height: 150px;
        border-radius: 50%;
        font-size: 200%;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
    .user_detail {
      margin-left: 1rem;
      .name {
        h4 {
          font-size: 80%;
          text-transform: capitalize;
          color: var(--brandblue);
          font-weight: bold;
        }
        p {
          font-size: 50%;
          opacity: 0.7;
        }
      }
      .meta {
        width: 180px;
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
        p {
          font-size: 60%;
          span {
            font-weight: bold;
          }
        }
      }
    }

    .user__ft {
      ul {
        li {
          button {
            font-size: 50%;
            border: 1px solid var(--brandblue);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: bold;
            a {
              color: var(--brandblue);
            }
          }
        }
      }
    }
  }
  /*  */
  /*  */
  /*  */
  /*  */
  /*  */
  /*  */
  /*  */
  /*  */
  .user__data {
    margin-top: 1rem;
    menu {
      min-height: 500px;
      margin-top: 1rem;
      .loading {
        height: 100%;
        width: 100%;
        .circle__svg-circle circle {
          stroke: var(--brandblue) !important;
        }
      }
      background-color: var(--layoutBg);
    }
    nav {
      width: 100%;
      height: 50px;
      ul {
        display: flex;
        width: 270px;
        justify-content: space-between;
        a {
          flex: 1;
          font-size: 60%;
          font-weight: bold;
          border-bottom: 2px solid transparent;
          button {
            padding: 0.5rem;
          }
          &:hover {
            color: var(--brandblue);
            font-weight: bold;
            border-bottom: 2px solid var(--brandblue);
          }
        }
        a.activeBar {
          color: var(--brandblue);
          font-weight: bold;
          border-bottom: 2px solid var(--brandblue);
        }
      }
    }
  }
`;

export default Profilestyle;
