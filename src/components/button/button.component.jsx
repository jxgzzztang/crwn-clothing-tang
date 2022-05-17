import { DefaultButton, GoogleSignInButton, InvertButton } from "./button.styles"

export const BUTTONTYPE_MAPPER = {
  default: "default",
  google: "google-sign-in",
  inverted: "inverted"
}

const formatMapper = (buttonType = BUTTONTYPE_MAPPER.default) => {

  const mapper = {
    [BUTTONTYPE_MAPPER.default]: DefaultButton,
    [BUTTONTYPE_MAPPER.google]: GoogleSignInButton,
    [BUTTONTYPE_MAPPER.inverted]: InvertButton
  }

  return mapper[BUTTONTYPE_MAPPER[buttonType]]
}

const Button = ({ children, buttonType, ...otherProps }) => {

  const ButtonStyle = formatMapper(buttonType)

  return (
    <ButtonStyle {...otherProps}>
      { children }
    </ButtonStyle>
  )
}

export default Button