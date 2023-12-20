import React, { useState } from 'react';
import { Box, ThemeProvider, Typography, Button, Grid, TextField } from '@mui/material';
import theme from '../../Utils/themes'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://127.0.0.1:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

  return (
    <ThemeProvider theme={theme}>      
      <Grid container spacing={1} sx={{ mx: 10 }}>
        <Grid item xs={12} sm={5} sx={{ textAlign: 'left' }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" sx={{ color: 'green' }}>Contact Us</Typography>
            <Typography variant="h4">Get in Touch With Us</Typography>
            <Typography variant="h6">
              Please fill out the details and someone from our team will be in touch with you shortly.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <TextField
                name="name"
                type="text"
                variant='outlined'
                color='secondary'
                label="Your Name"
                fullWidth
                required
                sx={{ mb: 4 }}
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                name="email"
                type="email"
                variant='outlined'
                color='secondary'
                label="Your Work Email"
                fullWidth
                required
                sx={{ mb: 4 }}
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                name="message"
                type="text"
                variant='outlined'
                color='secondary'
                label="Message (Your requirements)"
                multiline
                rows={5}
                fullWidth
                value={formData.message}
                onChange={handleChange}
              />
            </Box>
            <br/>
            <Button type="submit" variant="contained">
              Send a Message
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'left' }} />
      </Grid>
    </ThemeProvider>
  );
};

export default ContactUs;
