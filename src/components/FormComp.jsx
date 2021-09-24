import React, { useState } from "react";
import { InputContainer } from "./Components.styles";

export const FormComp = (props) => {
  const { form, setForm } = props;
  const { firstName, lastName, email, password, confirmPassword } = form;

  const [errorName, setErrorName] = useState(null);
  const [errorLastName, setErrorLastName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(null);

  const handleOnChange = (e) => {
    // First name error catcher
    if (e.target.name === "firstName") {
      e.target.value.length < 2
        ? setErrorName("First name must be at least 2 characters")
        : setErrorName(null);
    }

    // Last name error catcher
    if (e.target.name === "lastName") {
      e.target.value.length < 2
        ? setErrorLastName("Last name must be at least 2 characters")
        : setErrorLastName(null);
    }

    // Email name error catcher
    if (e.target.name === "email") {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      !emailRegex.test(e.target.value)
        ? setErrorEmail("Please enter a valid email")
        : setErrorEmail(null);
    }

    // Password name error catcher
    if (e.target.name === "password") {
      e.target.value.length < 8
        ? setErrorPassword("Password must be at least 8 characters")
        : setErrorPassword(null);
    }

    // Confirm password name error catcher
    if (e.target.name === "confirmPassword") {
      e.target.value !== password
        ? setErrorConfirmPassword("Password must match")
        : setErrorConfirmPassword(null);
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // console.log(form);

  return (
    <div className="container">
      <div className="row m-auto">
        <div className="col-lg-5 m-auto">
          <InputContainer>
            <label htmlFor="name" className="text-primary fw-bold">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="name"
              placeholder="John"
              value={firstName}
              onChange={handleOnChange}
            />
          </InputContainer>
          {errorName ? (
            <div className="alert alert-warning" role="alert">
              {errorName}
            </div>
          ) : null}
          <InputContainer>
            <label htmlFor="lastN" className="text-primary fw-bold">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastN"
              placeholder="Wick"
              value={lastName}
              onChange={handleOnChange}
            />
          </InputContainer>
          {errorLastName ? (
            <div className="alert alert-warning" role="alert">
              {errorLastName}
            </div>
          ) : null}
          <InputContainer>
            <label htmlFor="emailAddress" className="text-primary fw-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="emailAddress"
              placeholder="email@domain.com"
              value={email}
              onChange={handleOnChange}
            />
          </InputContainer>
          {errorEmail ? (
            <div className="alert alert-warning" role="alert">
              {errorEmail}
            </div>
          ) : null}
          <InputContainer>
            <label htmlFor="pass" className="text-danger fw-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="pass"
              value={password}
              onChange={handleOnChange}
            />
          </InputContainer>
          {errorPassword ? (
            <div className="alert alert-warning" role="alert">
              {errorPassword}
            </div>
          ) : null}
          <InputContainer>
            <label htmlFor="passConf" className="text-danger fw-bold">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="passConf"
              value={confirmPassword}
              onChange={handleOnChange}
            />
          </InputContainer>
          {errorConfirmPassword ? (
            <div className="alert alert-warning" role="alert">
              {errorConfirmPassword}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
