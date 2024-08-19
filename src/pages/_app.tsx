import type { AppProps } from "next/app";
// import { ThemeProvider } from "@/components/ThemeContext";
import { ThemeProvider } from "styled-components";
import {theme} from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ThemeProvider  children={<Component {...pageProps} />}></ThemeProvider> */}
      <ThemeProvider theme={ theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
