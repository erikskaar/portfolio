import styled, { keyframes } from "styled-components";
import React from "react";

const Splash = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <h1>Erik Mjaaland Skår</h1>
        <p>The rockstar ninja fullstack developer you've been looking for.</p>
      </div>
    </div>
  );
};

const onLoad = keyframes`
from {
  opacity: 0%;
}
to {
  opacity: 100;
}
`;

export default styled(Splash)`
  background-image: url("/splash2.JPG");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 90vh;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 5px;

  & > div {
    padding-top: 42vh;
    color: #3a2827;
    animation-name: ${onLoad};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
  }

  & > div > p {
    text-transform: none;
  }
`;
