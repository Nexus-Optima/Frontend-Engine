import { createTheme } from '@mui/material/styles';

export const buttonStyle = {
  textTransform: 'none',
  backgroundColor: '#01CEFF',
  padding: '12px 40px',
  color:"black",
  '&:hover': {
    backgroundColor: '#063954',// Hover color
    color:"white" 
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
