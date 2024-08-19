import type { AppProps } from "next/app";
import { ThemeProvider} from "styled-components";
import theme from "@/theme";
// const theme: DefaultTheme = {
//   colors: {
//     primary: "#111",
//     secondary: "#0070f3",
//   },
// };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
