import React from "react";
import { OutputContainer } from "./Components.styles";

export const OutputComp = ({ output }) => {
  const { firstName, lastName, email, password, confirmPassword } = output;
  return (
    <OutputContainer>
      <p className="center-p">Your form data</p>
      <span>First name</span>
      <p>{firstName}</p>
      <span>Last name</span>
      <p>{lastName}</p>
      <span>Email</span>
      <p>{email}</p>
      <span>Password</span>
      <p>{password}</p>
      <span>Confirm password</span>
      <p>{confirmPassword}</p>
    </OutputContainer>
  );
};

//The other way to use "output" from OutputCom in App.js is
// export const OutputComp = (props) => {
// const { firstName, lastName, email, password, confirmPassword } = props.output;
// return ()
//}
