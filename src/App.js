import React, { useState } from "react";
import { FormComp } from "./components/FormComp";

export const App = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return <FormComp form={user} setForm={setUser} />;
};
