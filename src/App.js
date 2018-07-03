import React, { Component } from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';

import { BrowserRouter } from 'react-router-dom';

import AppContent from './components/AppContent';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757de8',
      main: '#3f51b5',
      dark: '#002884',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#ffddc1',
      main: '#ffab91',
      dark: '#c97b63',
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
