import styled from "styled-components";

export const CardContainer = styled.div`
  width: 1000px;
  height: 400px;
  background-color: #cdb4db;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  justify-content: center;

  margin: 100px;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  div {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  h2 {
    color: black;
  }
  button {
    border-radius: 4px;
    background-color: white;
  }
`;
