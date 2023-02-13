import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: #a2d2ff;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 500px;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  h1 {
    font-size: large;
    font-weight: 700;
  }
  input {
    border-radius: 4px;
    width: 200px;
    height: 40px;
    padding: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    button {
      background-color: #bde0fe;
      border-radius: 4px;
      padding: 5px;
    }
    button:hover {
      background-color: aliceblue;
    }
  }
`;
