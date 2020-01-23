import React from "react";
import styled from "styled-components";

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <div style={{ borderRight: "1px solid #eee", textAlign: "left" }}>
          © Erik Skår {new Date().getFullYear()}
        </div>
        <div>Made with React and styled components</div>
      </div>
    </div>
  );
};
export default styled(Footer)`
  width: 100%;
  height: 30vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  color: #eee;

  & > div {
    width: 70%;
    margin: auto;
    height: 80%;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  & > div > div {
    height: 100%;
    width: 40%;
    padding: 1em;
  }
`;
