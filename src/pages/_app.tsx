import "@/styles/globals.css";
import { ChakraProvider, } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { HydrationProvider } from "react-hydration-provider";
import NextNProgress from "nextjs-progressbar";
import { theme } from "@/config/theme";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <HydrationProvider>
      <ChakraProvider theme={theme}>
        <NextNProgress options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </ChakraProvider>
    </HydrationProvider>
  );
}
