import styled from "styled-components";
import React from "react";

const Navbar = ({ className }) => {
  return (
    <div className={className}>
      <div
        style={{
          float: "left",
          position: "absolute",
          top: ".5em",
          left: "15vw"
        }}
      >
        <h2>Erik Mjaaland Skår</h2>
      </div>
      <div style={{ float: "right" }}>
        <a href="https://www.linkedin.com/in/eriksk%C3%A5r/" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/erikskaar" target="_blank">
          GitHub
        </a>
        <a href="https://www.instagram.com/erik_skaar/" target="_blank">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default styled(Navbar)`
  width: 100%;
  background-color: #333;
  height: 10vh;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 1.2em;
  position: sticky;
  top: 0px;
  border-bottom: 1px solid #eee;
  @media (max-width: 900px) {
    flex-direction: column;
  }

  & > div > a {
    padding: 2em;
    color: #326676;
    text-decoration: none;
    float: right;
    @media (max-width: 900px) {
      float: none;
      padding: 1em;
    }
  }

  & > div {
    float: right;
    position: absolute;
    right: 0;
    @media (max-width: 900px) {
      float: none;
    }
  }

  & > div > h2 {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;
