import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@mui/material";
import GoogleLogo from '../Images/logo512.png';
import theme from '../Utils/themes'

function Register() {

  const handleMobileChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    setFormData({
      ...formData,
      mobile: value
    });
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    wemail: '',
    mobile: '',
    company: '',
    industry: '',
    jfunction: '',
    jlevel: '',
  });


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const industries = ["Technology", "Finance", "Healthcare", "Education", "Other"];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} style={{ minHeight: "100vh", padding: 0 }}>
        <Grid container style={{ minHeight: '100vh' }}>
          {/* Left column */}
          <Grid item xs={12} md={4} style={{ background: '#32047F', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img src={GoogleLogo} alt="Logo" style={{ width: '100px', height: '100px' }} />
            <Typography variant="h5" style={{ color: 'white', marginTop: '20px' }}>
              APPLIED BELL CURVE
            </Typography>
          </Grid>

          {/* Right column */}
          <Grid item xs={12} md={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h4" fontWeight="bold">Get Started</Typography>
            <Typography>Please fill in the following details to complete your registration and someone from our team will get in touch with you shortly</Typography>
            <Grid container spacing={2} style={{ maxWidth: '80%', marginTop: '20px' }}>
              <Grid item xs={12} md={6}>
                    <TextField
                    name="name"
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Your Name"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                    value={formData.name}
                    onChange={handleChange}
                    />
              </Grid>
              <Grid item xs={12} md={6}>
                    <TextField
                    name="surname"
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Surname"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                    value={formData.surname}
                    onChange={handleChange}
                    />
              </Grid>
              <Grid item xs={12} md={6}>
                    <TextField
                    name="wemail"
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Work Email"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                    value={formData.wemail}
                    onChange={handleChange}
                    />
              </Grid>
              <Grid item xs={12} md={6}>
                    <TextField
                    name="mobile"
                    type="tel" 
                    variant='outlined'
                    color='secondary'
                    label="Mobile"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                    value={formData.mobile}
                    onChange={handleMobileChange}
                    inputProps={{ maxLength: 10 }}
                    />
                </Grid>
              <Grid item xs={12} md={6}>
                    <TextField
                    name="Company"
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Company"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                    value={formData.company}
                    onChange={handleChange}
                    />
              </Grid>
              <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="industry-label">Select Industry</InputLabel>
                        <Select
                            labelId="industry-label"
                            id="industry-select"
                            name="industry"
                            value={formData.industry}
                            label="Select Industry"
                            onChange={handleChange}>
                            {industries.map((industry, index) => (
                            <MenuItem key={index} value={industry}>{industry}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                    <TextField
                    name="jfunction"
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Job Function"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                    value={formData.jfunction}
                    onChange={handleChange}
                    />
              </Grid>
              <Grid item xs={12} md={6}>
                    <TextField
                    name="jlevel"
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Job Level"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                    value={formData.jlevel}
                    onChange={handleChange}
                    />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained">Register</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    );
}

export default Register;
