import styled from "styled-components";

const CardBoxstyle = styled.div`
  padding: 1rem;
  .my-masonry-grid {
    display: flex;
    margin-left: -10px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 10px;
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    margin-bottom: 10px;
  }
`;

export default CardBoxstyle;
