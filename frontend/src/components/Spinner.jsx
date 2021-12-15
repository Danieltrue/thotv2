import React from "react";
import styled from "styled-components";

const Spinnerstyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    width: 9px !important;
    height: 9px !important;
    background-color: var(--brandwhite);
    border-radius: 50%;
    margin-left: 2px;
  }
`;

const Spinner = () => {
  return (
    <Spinnerstyle>
      <span></span>
      <span></span>
      <span></span>
    </Spinnerstyle>
  );
};

export default Spinner;
