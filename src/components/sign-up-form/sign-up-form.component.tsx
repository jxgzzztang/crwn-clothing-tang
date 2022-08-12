import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component"

import { signUpUserStartAction } from "../../store/user/user.action";

import { SignUpContainer } from "./sign-up-form.styles"

import { AuthError, AuthErrorCodes } from "firebase/auth"

const defaultField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {

  const dispatch = useDispatch()

  const [accountField, setAccountField] = useState(defaultField);
  const { displayName, email, password, confirmPassword } = accountField;

  const refreshInput = () => {
    setAccountField(defaultField);
  };

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountField({
      ...accountField,
      [name]: value,
    });
  };

  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Inconsistent passwords");
      return;
    }
    try {
      dispatch(signUpUserStartAction(email, password, displayName))
      refreshInput();
    } catch (error) {
      // "auth/email-already-in-use"
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
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
