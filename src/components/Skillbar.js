import React from "react";
import styled, { keyframes } from "styled-components";

const Skillbar = props => {
  return (
    <div className={props.className}>
      <div>
        <div>
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

const onLoad = keyframes`
from {
  width: 0%;
}
to {
  width: props.percentage;
}
`;

export default styled(Skillbar)`
  height: 5vh;
  background-color: #eee;
  width: 70%;
  color: #eee;
  border-radius: 3px;

  & > div {
    height: 100%;
    width: ${props => props.percentage};
    animation-name: ${onLoad};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    background-color: #326676;
    text-align: left;
    padding-left: 1em;
    border-radius: 3px;
    white-space: nowrap;
  }
`;
