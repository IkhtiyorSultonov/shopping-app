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
  variant,
  leftIco,
  ...props
}: InputFieldProps & FieldHookConfig<string>): JSX.Element => {
  const [field, meta] = useField(props);
  return (
   
      <FormControl isRequired isInvalid={!!meta.touched && !!meta.error}>
        <InputGroup>
        <InputLeftElement mt={2}>
              {leftIco}
          </InputLeftElement>
          <Input
            variant={variant}
            focusBorderColor="facebook.500"
            placeholder={placeholder}
            borderRadius={'2px'}
            h={14}
            pl={2}
            mt={{base:3,sm:5}}
            fontSize={{base:'16px',sm:'20px'}}
            fontFamily={'sans-serif'}
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
