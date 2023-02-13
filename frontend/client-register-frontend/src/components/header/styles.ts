import styled from "styled-components";

export const HeaderHome = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 80px;
  background-color: #a2d2ff;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  button {
    border-radius: 4px;
    background-color: white;
    width: 60px;
    padding: 5px;
  }
  button:hover {
    background-color: #bde0fe;
  }
`;
