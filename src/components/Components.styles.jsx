import styled from "styled-components";

export const InputContainer = styled.div`
  border: 1px solid grey;
  border-radius: 6px;
  background-color: #f6f6f6;
  height: auto;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    display: inline-block;
    width: 20%;
    color: grey;
    margin: 3px;
    padding: 3px;
  }

  input {
    border-radius: 6px;
    width: 60%;
    margin: 3px;
    padding: 5px;
  }
`;
