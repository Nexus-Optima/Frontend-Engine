import React from 'react';
import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import 'typeface-raleway';
import './landing.css';
import HomeSection from './Home/home';
import Header from './Header/header.js';
import ServicesList from './services/services';
import ContactUs from './Contact_Us/contact_us.js'

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
        <Box className="scroll-container" sx={{ m: 2 }}>
          <HomeSection />
          <Box id="modules" className="section">
          <ServicesList />
          </Box>
          <ContactUs />
      
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
