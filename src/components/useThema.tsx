import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export function useTheme() {
  const ola = useContext(ThemeContext);
  return ola;
}