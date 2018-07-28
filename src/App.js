import React, { Component } from 'react';

import 'typeface-roboto';
import 'typeface-open-sans';

import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';

import { BrowserRouter } from 'react-router-dom';

import AppContent from './components/AppContent';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bfd4df',
      main: '#8fa3ad',
      dark: '#61747e',
      contrastText: '#000000',
    },
    secondary: {
      light: '#d1b7ad',
      main: '#a0877e',
      dark: '#715a52',
      contrastText: '#000000',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
