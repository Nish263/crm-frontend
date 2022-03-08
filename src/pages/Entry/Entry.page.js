import React, { useState } from "react";
import { LoginForm } from "../../components/Login/Login.comp";
import { PasswordReset } from "../../components/password.reset/PasswordReset.comp";

import "./entry.style.css";
// import { LoginForm } from "../../components/Login/Login.comp";
// import { Col, Container, Row } from "react-bootstrap";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("Login");

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("fill up all the form!");
    }

    // to do call api to submit the form
    console.log(email, password);
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please enter the email");
    }

    // to do call api to submit the form
    console.log(email);
  };
  return (
    <div className="entry-page bg-info">
      <div className="Form-box">
        {formLoad === "Login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            password={password}
          />
        )}
        {formLoad === "reset" && (
          <PasswordReset
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </div>
    </div>
  );
};
