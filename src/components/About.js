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
  @media (max-width: 900px) {
    min-width: 77%;
    max-width: 75%;
    margin: 0.1em;
    justify-content: center;
  }

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
