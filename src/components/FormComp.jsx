import React from "react";
import { InputContainer } from "./Components.styles";

export const FormComp = (props) => {
  const { form, setForm } = props;
  const { firstName, lastName, email, password, confirmPassword } = form;

  const handleOnChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <>
      <InputContainer>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          name="firstName"
          id="name"
          placeholder="John"
          value={firstName}
          onChange={handleOnChange}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="lastN">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastN"
          placeholder="Wick"
          value={lastName}
          onChange={handleOnChange}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="emailAddress">Email</label>
        <input
          type="email"
          name="email"
          id="emailAddress"
          placeholder="email@domain.com"
          value={email}
          onChange={handleOnChange}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="password"
          id="pass"
          value={password}
          onChange={handleOnChange}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="passConf">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="passConf"
          value={confirmPassword}
          onChange={handleOnChange}
        />
      </InputContainer>
    </>
  );
};
