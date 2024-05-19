import { CSSWithMultiValues, SystemCSSProperties } from "@chakra-ui/react";
import { ReactNode } from "react";


export interface shopButtonProps {
    children: ReactNode;
    fontSize?: string;
    fontFamily?: string;
    onclick?: () => void;
    hover?: CSSWithMultiValues;
    style?:SystemCSSProperties;
}

