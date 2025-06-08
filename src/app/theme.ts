'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ed8bb6',
    },
    secondary: {
      main: '#ac1456',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#ed8bb6',
        },
      },
    }
  }
});

export default theme;
