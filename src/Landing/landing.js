import React from 'react';
import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import 'typeface-raleway';
import './landing.css';
import HomeSection from './Home/home';
import Header from './Header/header.js';
import ServicesList from './services/services';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Raleway, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Header /> */}
        <Box className="scroll-container">
          <HomeSection />
          <Box id="modules" className="section">
            <ServicesList />
          </Box>
          <Box className="section" id="section3">
            <Typography variant="h4">Section 3 Content</Typography>
          </Box>
          <Box id="contact-us" className="section">
            <Typography variant="h4">Section 4 Content</Typography>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
