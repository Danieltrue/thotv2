import React from "react";
import styled from "styled-components";

const Spinnerstyle = styled.div`
  width: 20px;
  @keyframes circle__svg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .circle__svg-circle {
    transform-origin: center;
    animation-name: circle__svg;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    height: 1px;
  }

  .circle_one {
    stroke: var(--whiteBack, #ccc);
    opacity: 0.2;
  }

  .circle__svg-circle circle {
    stroke: var(--brandwhite);
    stroke-dasharray: 80px;
    stroke-dashoffset: 60px;
  }
`;

const Spinner = () => {
  return (
    <Spinnerstyle>
      <svg
        height="100%"
        viewBox="0 0 32 32"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="circle_one">
          <circle cx="16" cy="16" fill="none" r="14" stroke-width="4"></circle>
        </g>
        <g class="circle__svg-circle">
          <circle cx="16" cy="16" fill="none" r="14" stroke-width="4"></circle>
        </g>
      </svg>
    </Spinnerstyle>
  );
};

export default Spinner;
