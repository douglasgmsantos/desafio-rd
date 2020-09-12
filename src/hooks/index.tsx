import React from 'react';

import { ThemePortalProvider } from './theme';


const AppProvider: React.FC = ({ children }) => (
  <ThemePortalProvider>
    {children}
  </ThemePortalProvider>
);

export default AppProvider;
