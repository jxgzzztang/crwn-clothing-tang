import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  signAuthWithEmailAndPassword,
  signInGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

const defaultField = {
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [accountField, setAccountField] = useState(defaultField);
  const { email, password } = accountField;

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
    try {
      await signAuthWithEmailAndPassword(email, password);
      refreshInput();
    } catch (error) {
      switch(error.code) {
        case "auth/user-not-found":
          alert("This email address is not registered")
          break;
        case "auth/wrong-password":
          alert("Incorrect password")
          break;
        default: 
          console.log(error);
      }
    }
  };

  const onGoogleSignin = async () => {
    await signInGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign In with email and password</span>
      <form onSubmit={onHandleSubmit}>
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

        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button buttonType="google" type="button" onClick={onGoogleSignin}>
            SIGN IN WITH GOOGLE
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignUpForm;
