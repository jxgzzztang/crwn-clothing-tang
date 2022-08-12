import type { FC, ButtonHTMLAttributes } from "react";

import {
  DefaultButton,
  GoogleSignInButton,
  InvertButton,
} from "./button.styles";

export enum BUTTONTYPE_MAPPER {
  default = "default",
  google = "google-sign-in",
  inverted = "inverted",
}

const formatMapper = (
  buttonType = BUTTONTYPE_MAPPER.default as BUTTONTYPE_MAPPER
): typeof DefaultButton => {
  const mapper = {
    [BUTTONTYPE_MAPPER.default]: DefaultButton,
    [BUTTONTYPE_MAPPER.google]: GoogleSignInButton,
    [BUTTONTYPE_MAPPER.inverted]: InvertButton,
  };

  return mapper[buttonType];
};

export type ButtonPropsType = {
  buttonType?: BUTTONTYPE_MAPPER;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonPropsType> = ({
  children,
  buttonType,
  ...otherProps
}) => {
  const ButtonStyle = formatMapper(buttonType);

  return <ButtonStyle {...otherProps}>{children}</ButtonStyle>;
};

export default Button;
