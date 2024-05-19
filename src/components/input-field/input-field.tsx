import React from "react";
import { InputFieldProps } from "./input-field.props";
import {  FieldHookConfig, useField } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

const InputField = ({
  label,
  placeholder,
  type,
  children,
  disabled,
  borderBottom,
  border,
  leftIco,
  ...props
}: InputFieldProps & FieldHookConfig<string>): JSX.Element => {
  const [field, meta] = useField(props);
  return (
   
      <FormControl isRequired isInvalid={!!meta.touched && !!meta.error}>
        <FormLabel mt={15}>{label}</FormLabel>
        <InputGroup>
        <InputLeftElement mt={2}>
              {leftIco}
          </InputLeftElement>
          <Input
            focusBorderColor="facebook.500"
            placeholder={placeholder}
            borderRadius={'0'}
            border={border}
            borderBottom={borderBottom}
            h={14}
            type={type}
            disabled={disabled}
           
            {...field}
          />
          {children}
        </InputGroup>
        <FormErrorMessage>
        {meta.error}
        </FormErrorMessage>
      </FormControl>
  
  );
};

export default InputField;
