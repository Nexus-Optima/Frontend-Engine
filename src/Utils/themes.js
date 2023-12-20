import { createTheme } from '@mui/material/styles';

export const buttonStyle = {
  textTransform: 'none',
  backgroundColor: '#32047F',
  padding: '12px 40px',
  '&:hover': {
    backgroundColor: '#4b2ca3', // Hover color
  },
};

// Define the theme with typography and any other global styles
const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: buttonStyle,
      },
    },
  },
});

export default theme;
