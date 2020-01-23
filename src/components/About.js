import styled from "styled-components";

export default styled.div`
  min-height: 70%;
  min-width: 30%;
  max-width: 50%;
  background-color: #333;
  border-radius: 3px;
  color: #eee;
  padding: 2em;
  margin: 2em;

  & > img {
    width: 30%;
    object-fit: cover;
    float: right;
    margin: 3em;
    border-radius: 200px;
  }
  & > ul > li {
    padding: 0.5em;
  }
`;
