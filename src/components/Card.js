import React from "react";
import styled from "styled-components";

const Card = ({ className, contentTitle, contentText, image, onclick }) => {
  return (
    <button className={className}>
      <div onClick={onclick}>
        <img alt="website" src={image} />
        <h3>{contentTitle}</h3>
        <p>{contentText}</p>
      </div>
    </button>
  );
};

Card.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
  onclick: () => {}
};
export default styled(Card)`
  border: none;
  width: 40%;
  background-color: #333;
  color: #eee;
  border-radius: 3px;
  padding: 2em;
  margin: 2em;
  font-size: 1.2em;

  & > div {
    width: 100%;
    height: 100%;
  }

  & > div > p,
  h3 {
    text-align: left;
  }

  & > div > img {
    width: 50%;
    float: right;
    padding: 1em;
    border-radius: 3px;
  }

  &:hover {
    cursor: pointer;
  }
`;
