import styled from "styled-components";
import React from "react";

const Header = ({ className, title }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
    </div>
  );
};

export default styled(Header)`
  width: 100%;
  margin: auto;
  color: #326676;
  background-color: #eee;

  & > h2 {
    margin: 0;
    padding: 1em;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
