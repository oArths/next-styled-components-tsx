"use client";
import { ThemeProvider } from "styled-components";
import * as s from "./style";
import { theme } from "@/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <s.Main>ola</s.Main>
      <h1 style={{ background: "#1213", width: "100vw" }}>ola</h1>
    </ThemeProvider>
  );
}
