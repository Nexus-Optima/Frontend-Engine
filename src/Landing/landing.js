import HomeSection from './Home/home';
import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider, Typography, createTheme, Button, Grid, AppBar, Toolbar } from '@mui/material';
import './landing.css';
import 'typeface-raleway';
import Header from './Header/header.js'

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Raleway, sans-serif',
    },
  });
  const [isSticky, setSticky] = useState(false);
    
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
    <ThemeProvider theme = {theme}>
    <Header />
    <Box className="scroll-container">
    <HomeSection />
    <Box id = "modules" className="section">
            <Typography variant="h4">Section 2 Content</Typography>
          </Box>
          <Box className="section" id="section3">
            <Typography variant="h4">Section 3 Content</Typography>
          </Box>
          <Box id = "contact-us" className="section">
            <Typography variant="h4">Section 4 Content</Typography>
          </Box>
                </Box>
    </ ThemeProvider>
 </div>
  );
}

export default App;
