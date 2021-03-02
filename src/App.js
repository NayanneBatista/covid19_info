import React from 'react';
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from 'commons/styles/global-style'


function App() {
  return (
    <StylesProvider injectFirst>
      <GlobalStyle />
      <CssBaseline />
      <div>
        hello world
      </div>
    </StylesProvider>
  );
}

export default App;
