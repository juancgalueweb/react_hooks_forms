import styled from "styled-components";

export const InputContainer = styled.div`
  width: 20%;
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

export const OutputContainer = styled.div`
  width: 20%;
  margin: 10px auto;
  padding: 3px;
  .center-p {
    width: 100%;
    display: block;
    text-align: center;
    margin: 0;
    padding: 5px;
    color: blue;
  }

  span {
    display: inline-block;
    width: 33%;
    margin: 3px;
    padding: 3px;
  }

  p {
    display: inline-block;
    width: 55%;
    margin: 3px;
    padding: 5px;
  }
`;
