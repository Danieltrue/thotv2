import React from "react";
import styled from "styled-components";

const Topicstyle = styled.button`
  font-size: 70%;
  background-color: var(--topic-back);
  color: var(--topic-color);
  padding: 0.3rem 0.7rem;
  border-radius: var(--borderR);
`;
const Topic = ({ topicname, history, location }) => {
  return <Topicstyle>{"#" + topicname}</Topicstyle>;
};

export default Topic;
