// import { theme } from '@/theme';
"use client"
import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
