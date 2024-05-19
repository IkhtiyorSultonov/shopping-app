import { InputProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface InputFieldProps extends InputProps{
    label:string;
    placeholder?:string;
    children?:ReactNode;
    type?:string;
    borderBottom?:string;
    border?:string;
    leftIco?:ReactNode;
    variant?:string
}