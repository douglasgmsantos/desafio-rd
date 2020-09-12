import React, { createContext, useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'

import usePersistedState from './usePersistedState';
import light from '../styles/theme/light';
import dark from '../styles/theme/dark';

interface ThemeContextData {
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemePortalProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme }} >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within as ThemePortalProvider');
  }

  return context;
}

export { ThemePortalProvider, useTheme };
