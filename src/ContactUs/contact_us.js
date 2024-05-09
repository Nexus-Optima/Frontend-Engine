import React, { useState, useEffect } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Button,
  Grid,
  TextField,
  Container,
} from "@mui/material";
import theme from "../Utils/themes";
import { useLocation,useNavigate } from "react-router-dom";
import pic from "./../Images/Applied_Bell_Curve_white.png";
import { useUser } from "../Context/userContext";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GoogleLogo from "../Images/white-22.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const location = useLocation();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const moduleName = new URLSearchParams(location.search).get("module");
    if (moduleName) {
      setFormData((prevState) => ({
        ...prevState,
        message: `Regarding ${moduleName}: `,
      }));
    }
  }, [location.search]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleArrow = () => {
    if (user.isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
    fetch(`${process.env.REACT_APP_BACKEND}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
              background: "#32047F",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position:"relative",
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
              style={{ width: "70%", height: "70%" }}
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
            {/* <Grid container spacing={1} sx={{ mx: 10 }}> */}
            {/* <Grid item xs={12} sm={5} sx={{ textAlign: "left" }}> */}
            <Box component="form" onSubmit={handleSubmit}>
              <Typography variant="h6" sx={{ color: "green" }}>
                Contact Us
              </Typography>
              <Typography variant="h4">Get in Touch With Us</Typography>
              <Typography variant="h6">
                Please fill out the details and someone from our team will be in
                touch with you shortly.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <TextField
                  name="name"
                  type="text"
                  variant="outlined"
                  color="secondary"
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
                  variant="outlined"
                  color="secondary"
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
                  variant="outlined"
                  color="secondary"
                  label="Message (Your requirements)"
                  multiline
                  rows={5}
                  fullWidth
                  value={formData.message}
                  onChange={handleChange}
                />
              </Box>
              <br />
              <Button type="submit" variant="contained">
                Send a Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ContactUs;
