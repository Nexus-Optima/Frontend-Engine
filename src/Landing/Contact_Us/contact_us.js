import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider, Typography, createTheme, Button, Grid, TextField, Stack} from '@mui/material';
import 'typeface-raleway';



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
    const ContactUs = () => {
    return (
      <div className="App">
        <ThemeProvider theme = {theme}>
            <Box id = "contact-us" className="section">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={1} style={{padding: '10px', textAlign: 'left' }}>
                    </Grid>
                    <Grid item xs={12} sm={5} style={{padding: '10px', textAlign: 'left' }}>
                        <div style={{ padding: '50px' }}>
                            <Typography variant="h6" style={{ color: 'green'}}>Contact Us</Typography>
                            <Typography variant="h4">Get in Touch With Us</Typography>
                            <Typography variant="h6" ><br />Please fill out the details and someone from our team will be in touch with you shortly.</Typography>   
                            <div style={{ paddingTop: '50px' }}>
                                <TextField
                                    type="text"
                                    variant='outlined'
                                    color='secondary'
                                    label="Your Name"
                                    fullWidth
                                    required
                                    sx={{mb: 4}}

                                />
                            <TextField
                                type="email"
                                variant='outlined'
                                color='secondary'
                                label="Your Work Email"
                                fullWidth
                                required
                                sx={{mb: 4}}
                            />
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="Message (Your requirements)"
                                multiline
                                size="large"
                                rows={5} // Set the number of rows you want to display
                                fullWidth
                            />
                            </div>

                            <br />
                      <Button variant="contained" style={buttonStyle}>
                      Send a Message
                      </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ padding: '10px', textAlign: 'left' }}>
                    </Grid>
                </Grid>  
            </Box>
        </ThemeProvider>
      </div>
    );
  }

  export default ContactUs;
  