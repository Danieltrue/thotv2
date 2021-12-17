import React from "react";
import styled from "styled-components";

const Containerstyle = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const Container = (props) => {
  return <Containerstyle>{props.children}</Containerstyle>;
};

export default Container;
