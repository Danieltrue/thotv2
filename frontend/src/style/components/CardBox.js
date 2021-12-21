import styled from "styled-components";

const CardBoxstyle = styled.div`
  padding: 1rem;
  .my-masonry-grid {
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    margin-bottom: 30px;
  }
`;

export default CardBoxstyle;
