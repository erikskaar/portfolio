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
  width: 80%;
  margin: auto;
  color: #326676;
  background-color: #eee;
  @media (max-width: 900px) {
    width: 100%;
  }

  & > h2 {
    margin: 0;
    padding: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    @media (max-width: 900px) {
      padding: 1em;
    }
  }
`;
