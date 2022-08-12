import type { InputHTMLAttributes, FC } from "react"

import { Group, FormInputStyle, FormInputLabel } from "./form-input.styles";

export type FormInputPropsType = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputPropsType> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputStyle {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean((typeof otherProps?.value === "string") && otherProps?.value?.length)}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
