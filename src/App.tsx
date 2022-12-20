import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import defaultTheme from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Timer App</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
