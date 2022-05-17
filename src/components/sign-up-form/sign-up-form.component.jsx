import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component"

import {
  createUserEmailAndPasswordFromAuth,
  createDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { SignUpContainer } from "./sign-up-form.styles"

const defaultField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [accountField, setAccountField] = useState(defaultField);
  const { displayName, email, password, confirmPassword } = accountField;

  const refreshInput = () => {
    setAccountField(defaultField);
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setAccountField({
      ...accountField,
      [name]: value,
    });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Inconsistent passwords");
      return;
    }
    try {
      const { user } = await createUserEmailAndPasswordFromAuth(
        email,
        password
      );
      await createDocumentFromAuth(user, { displayName });
      refreshInput();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("The email address has been registered");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>I do not have a account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={onHandleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={onHandleChange}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={onHandleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={onHandleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={onHandleChange}
        />

        <Button type="submit">SIGN UP</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
