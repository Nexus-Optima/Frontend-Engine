import React from 'react';
import { Box, ThemeProvider, Typography, Button, Grid, createTheme } from '@mui/material';
import 'typeface-raleway';
import pic from "./../../Images/Data_Analysis.gif"; // Replace with the actual path to your image


  const buttonStyle = {
    textTransform: 'none',
    backgroundColor: '#6E86FF',
    padding: '12px 40px',
  };

  const theme = createTheme({
    typography: {
      fontFamily: 'Raleway, sans-serif',
    },
  });

  const imageStyle = {
    width: '500px', // Set to the original width of the image
    height: 'auto', // Maintain aspect ratio
    minWidth: '200px' // Minimum width for smaller screens
  };
const HomeSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box id="home" className="section" sx={{mx:10}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ padding: '10px', textAlign: 'left' }}>
            <Box sx={{ padding: '50px' }}>
              <Typography variant="h6" sx={{ color: 'green' }}>
                FASTER, EASIER & BETTER DECISIONS
              </Typography>
              <Typography variant="h4">
                <br />Turn Insights Into Actions to Achieve Goals
              </Typography>
              <Typography variant="h6">
                <br />Empower your workforce with relevant insights and actions to help improve quality, productivity and culture of the organisation. Convert raw data into action plans to achieve your current objectives and preserve knowledge for the workforce of the future.
              </Typography>
              <br />
              <Button variant="contained" sx={buttonStyle}>
                Register Now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ padding: '40px' }}>
            <Box sx={{ padding: '40px' }}>
              <img
                src={pic}
                alt="Data Analysis"
                style={imageStyle}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default HomeSection;
