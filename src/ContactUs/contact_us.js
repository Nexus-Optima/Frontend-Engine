import React, { useState, useEffect } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Button,
  Grid,
  TextField,
  Container,
  Alert,
  IconButton,
} from "@mui/material";
import theme from "../Utils/themes";
import { useLocation, useNavigate } from "react-router-dom";
import pic from "./../Images/Applied_Bell_Curve_white.png";
import { useUser } from "../Context/userContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const location = useLocation();
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
    navigate(-1); // Navigate to the previous page
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({ name: "", email: "", message: "" });
        setSuccessMessage("Your message has been sent successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000); // Clear the success message after 5 seconds
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
            sx={{
              backgroundColor: "#063954",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              height: { xs: "30vh", md: "100vh" },
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
              style={{ width: "100%", height: "100%" }}
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
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: "auto", px: 2 }}>
              <Typography variant="h6" align="center">
                Contact Us
              </Typography>
              <Typography variant="h4" align="center">
                Get in Touch With Us
              </Typography>
              <Typography variant="h6" align="center">
                Please fill out the details and someone from our team will be in
                touch with you shortly.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <TextField
                  name="name"
                  type="text"
                  variant="outlined"
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
                  label="Message (Your requirements)"
                  multiline
                  rows={5}
                  fullWidth
                  value={formData.message}
                  onChange={handleChange}
                />
              </Box>
              {successMessage && (
                <Alert severity="success" sx={{ my: 2 }}>
                  {successMessage}
                </Alert>
              )}
              <br />
              <Button type="submit" variant="contained" sx={{ mb: 1 }}>
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
