import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider, Typography, createTheme, Button, Grid, AppBar, Toolbar } from '@mui/material';
import 'typeface-raleway';
import Header from './../Header/header.js'
import pic from "./../../Images/Data_Analysis.gif"
function App() {

      const buttonStyle = {
        textTransform: 'none', // Set text to lowercase
        backgroundColor: '#6E86FF',
        padding: '12px 40px',
      };
    
      const theme = createTheme({
        typography: {
          fontFamily: 'Raleway, sans-serif',
        },
      });
    

      return (
        <div className="App">
          <ThemeProvider theme = {theme}>
          <div>
                {/* Your content goes here */}
                  <Box id = "home" className="section">
          <Grid container spacing={2}>
          <Grid item xs={12} md = {6} style={{ padding: '10px', textAlign: 'left' }}>
          <div style={{ padding: '50px' }}>
            <Typography variant="h6" style={{ color: 'green'}}>FASTER, EASIER & BETTER DECISIONS</Typography>
            <Typography variant="h4" ><br />Turn Insights Into Actions to Achieve Goals</Typography>
            <Typography variant="h6" ><br />Empower your workforce with relevant insights and actions to help improve quality, productivity and culture of the organisation. Convert raw data into action plans to achieve your current objectives and preserve knowledge for the workforce of the future.</Typography>
            <br /><Button variant="contained" style={buttonStyle}>
            Register Now
            </Button>
            </div>
            </Grid>
            <Grid item xs={12} md = {6}>
            <div style={{ padding: '40px' }}>
            <img
              src= {pic}// Replace with the actual path to your image
              alt="Image Section"
              style={{ width: '90%', height: '100%', minWidth: '200px' }}
            />
            </div>
          </Grid>
          </Grid>
          </Box>
                </div>
          </ThemeProvider>
        </div>
    
        
      );
    }
    export default App;
    