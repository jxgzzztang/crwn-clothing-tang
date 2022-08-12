import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { AuthError, AuthErrorCodes } from "firebase/auth"

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signInUserEmailStartAction, signInUserGoogleStartAction } from "../../store/user/user.action";

import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

import { BUTTONTYPE_MAPPER } from "../button/button.component"

const defaultField = {
  email: "",
  password: "",
};

const SignUpForm = () => {

  const dispatch = useDispatch()

  const [accountField, setAccountField] = useState(defaultField);
  const { email, password } = accountField;

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
    try {
      dispatch(signInUserEmailStartAction(email, password))
      refreshInput();
    } catch (error) {
      switch((error as AuthError).code) {
        // "auth/user-not-found"
        case AuthErrorCodes.USER_DELETED:
          alert("This email address is not registered")
          break;
        // "auth/wrong-password"
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("Incorrect password")
          break;
        default: 
          console.log(error);
      }
    }
  };

  const onGoogleSignin = () => {
    dispatch(signInUserGoogleStartAction())
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
          <Button buttonType={BUTTONTYPE_MAPPER.google} type="button" onClick={onGoogleSignin}>
            SIGN IN WITH GOOGLE
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignUpForm;
