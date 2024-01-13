import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { signUp } from "aws-amplify/auth";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  setRef,
} from "@mui/material";
import GoogleLogo from "../Images/logo512.png";
import theme from "../Utils/themes";

function Register() {
  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      if (formData.name.length === 0) {
        setError(true);
      }

      if (formData.surname.length === 0) {
        setError(true);
      }
      if (formData.email.length === 0) {
        setError(true);
      }

      if (formData.company.length === 0) {
        setError(true);
      }
      if (formData.industry.length === 0) {
        setError(true);
      }
      if (formData.jfunction.length === 0) {
        setError(true);
      }
      if (formData.password.length === 0) {
        setError(true);
      }

      await signUp({
        username: formData.email,
        password: formData.password,
        attributes: {
          email: formData.email,
          phone_number: `+91${formData.mobile}`,
          "custom:name": formData.name,
          "custom:surname": formData.surname,
        },
      });
      console.log(formData.name.length);

      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleMobileChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    setFormData({
      ...formData,
      mobile: value,
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    mobile: "",
    company: "",
    industry: "",
    jfunction: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Other",
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} style={{ minHeight: "100vh", padding: 0 }}>
        <Grid container style={{ minHeight: "100vh" }}>
          {/* Left column */}
          <Grid
            item
            xs={12}
            md={4}
            style={{
              background: "#32047F",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={GoogleLogo}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
            <Typography
              variant="h5"
              style={{ color: "white", marginTop: "20px" }}
            >
              APPLIED BELL CURVE
            </Typography>
          </Grid>

          {/* Right column */}
          <Grid
            item
            xs={12}
            md={8}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Get Started
            </Typography>
            <Typography>
              Please fill in the following details to complete your registration
              and someone from our team will get in touch with you shortly
            </Typography>
            <Grid
              container
              spacing={2}
              style={{ maxWidth: "80%", marginTop: "20px" }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  name="name"
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Your Name"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  value={formData.name}
                  error={error}
                  helperText={error ? "This field is required" : ""}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="surname"
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Surname"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  value={formData.surname}
                  error={error}
                  helperText={error ? "This field is required" : ""}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="email"
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Work Email"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  value={formData.email}
                  error={error}
                  helperText={error ? "This field is required" : ""}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="password"
                  type="password"
                  variant="outlined"
                  color="secondary"
                  label="Password"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  value={formData.password}
                  error={error}
                  helperText={error ? "This field is required" : ""}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="mobile"
                  type="tel"
                  variant="outlined"
                  color="secondary"
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
                  name="company"
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Company"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  value={formData.company}
                  error={error}
                  helperText={error ? "This field is required" : ""}
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
                    onChange={handleChange}
                  >
                    {industries.map((industry, index) => (
                      <MenuItem key={index} value={industry}>
                        {industry}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="jlevel"
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Job Level"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  value={formData.jlevel}
                  error={error}
                  helperText={error ? "This field is required" : ""}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={7}></Grid>
              <Grid item xs={12} md={5}>
                <NavLink
                  to="/login"
                  style={{ paddingLeft: 13, textDecoration: "none" }}
                >
                  Already have an Account ? Login Here!
                </NavLink>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" onClick={handleRegistration}>
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
