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
import pic from "../Images/white-22.png";
import theme from "../Utils/themes";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Register() {
  const navigate = useNavigate();

  const handleRegistration = async () => {
    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
    });

    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) return;  

    const requestBody = {
      userid: formData.email,
      username:formData.name,
      email: formData.email,
      phone:formData.mobile,
      company:formData.company
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/update_details`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Reset form fields after successful submission
      setFormData({userid:'',username:'',email:'',phone:'',company:''});
    } catch (error) {
      console.error('There was an error:', error);
    }
  
    try {
      await signUp({
        username: formData.email,
        password: formData.password,
        attributes: {
          "custom:name": formData.name,
          "custom:companyName": formData.company,
        },
      });
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
  
  const handleArrow = () => {
      navigate("/");
  };

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
              backgroundColor:"#063954", 
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "white",
              }}
              onClick={handleArrow}
            >
              <ArrowBackIcon />
            </IconButton>
            <img
              src={pic}
              alt="Logo"
              style={{ width: "100%", height: "70%" }}
            />
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
                  style={{ paddingLeft: 13, textDecoration: "none",color:'#063954' }}
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
