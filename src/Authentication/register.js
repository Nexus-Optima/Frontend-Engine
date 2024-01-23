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
} from "@mui/material";
import GoogleLogo from "../Images/logo512.png";
import theme from "../Utils/themes";

function Register() {
  const navigate = useNavigate();

  const handleRegistration = async () => {
    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
    });

    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) return;

    try {
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
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    mobile: false,
    company: false,
    industry: false,
    jfunction: false,
    password: false,
    confirmpassword: false,
  });

  const validateField = (fieldName, value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: value.length === 0,
    }));
    if (fieldName === "confirmpassword" && value !== formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmpassword: true,
      }));
      return false;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleFocus = (fieldName) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: false,
    }));
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
                  error={errors.name}
                  helperText={errors.name ? "This field is required" : ""}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
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
                  error={errors.email}
                  helperText={errors.email ? "This field is required" : ""}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
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
                  error={errors.password}
                  helperText={errors.password ? "This field is required" : ""}
                  onChange={handleChange}
                  onFocus={() => handleFocus("password")}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="confirmpassword"
                  type="password"
                  variant="outlined"
                  color="secondary"
                  label="Confirm Password"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  value={formData.confirmpassword}
                  error={errors.confirmpassword}
                  helperText={
                    errors.confirmpassword ? "Password does not match" : ""
                  }
                  onChange={handleChange}
                  onFocus={() => handleFocus("confirmpassword")}
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
                  error={errors.mobile}
                  sx={{ mb: 2 }}
                  value={formData.mobile}
                  onChange={handleMobileChange}
                  helperText={errors.mobile ? "This field is required" : ""}
                  inputProps={{ maxLength: 10 }}
                  onFocus={() => handleFocus("mobile")}
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
                  error={errors.company}
                  helperText={errors.company ? "This field is required" : ""}
                  onChange={handleChange}
                  onFocus={() => handleFocus("company")}
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
                    error={errors.industry}
                    onFocus={() => handleFocus("industry")}
                    helperText={errors.industry ? "This field is required" : ""}
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
                  name="jfunction"
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Job Level"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  value={formData.jfunction}
                  error={errors.jfunction}
                  helperText={errors.jfunction ? "This field is required" : ""}
                  onChange={handleChange}
                  onFocus={() => handleFocus("jfunction")}
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
