'use client'
import StyledComponentsRegistry from "./registry";
import { ThemeProvider } from "styled-components";
import { lightTheme as theme } from "@/theme";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
        </ThemeProvider>
      </body>
    </html>
  );
}
