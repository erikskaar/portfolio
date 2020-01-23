import styled from "styled-components";

export default styled.div`
  min-height: 60vh;
  width: 80%;
  background-color: #eee;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
    justify-content: center !important;
  }
`;
