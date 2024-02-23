import React, { useState } from "react";
import { Button } from "@mui/material";
import { TextField, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "aws-amplify/auth";
import HomeIcon from "@mui/icons-material/Home";

const PrivacySettings = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

    const handleHomePage=()=>{
        navigate('/dashboard')
    }
  const [error, setError] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPasswordPassword: false,
  });

  const handleFocus = (fieldName) => {
    setError((prevError) => ({
      ...prevError,
      [fieldName]: false,
    }));
  };

  const handleUpdatePassword = async () => {
    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
    });
    try {
      console.log(formData.oldPassword, formData.newPassword);
      const oldPassword = formData.oldPassword;
      const newPassword = formData.newPassword;
      await updatePassword({ oldPassword, newPassword });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const validateField = (fieldName, value) => {
    setError((prevError) => ({
      ...prevError,
      [fieldName]: value.length === 0,
    }));
    if (fieldName === "confirmPassword" && value !== formData.newPassword) {
      setError((prevError) => ({
        ...prevError,
        confirmPassword: true,
      }));
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    validateField(name, value);
  };
  return (
    <Grid
      item
      xs={10}
      style={{
        paddingLeft: "5%", // Adjust the padding to align modules
        paddingTop: "1%",
        height: "100%",
        display: "flex", // Use flex for better control
        flexDirection: "column", // Stack items vertically
      }}
    >
      <HomeIcon sx={{ paddingLeft: "90%", fontSize: "50px" }} onClick={handleHomePage} />
      <Typography
        variant="h2"
        component="h2"
        style={{
          color: "black",
          fontWeight: "bold",
          marginBottom: "20px",
          paddingRight: "10%",
          marginTop: "10%",
        }}
      >
        Settings
      </Typography>
      <Grid
        container
        spacing={2}
        style={{ maxWidth: "80%", marginTop: "50px", marginLeft: "40px" }}
      >
        <Grid item xs={12} md={6}>
          <TextField
            name="newPassword"
            type="password"
            variant="outlined"
            color="secondary"
            label="New Password"
            fullWidth
            required
            sx={{ mb: 2, paddingBottom: "10%" }}
            value={formData.newPassword}
            error={error.newPassword}
            helperText={error.newPassword ? "This field is required" : ""}
            onChange={handleChange}
            onFocus={() => handleFocus("newPassword")}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="confirmPassword"
            type="password"
            variant="outlined"
            color="secondary"
            label="Confirm Password"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={formData.confirmPassword}
            error={error.confirmPassword}
            helperText={error.confirmPassword ? "Password does not match" : ""}
            onChange={handleChange}
            onFocus={() => handleFocus("confirmPassword")}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="oldPassword"
            type="password"
            variant="outlined"
            color="secondary"
            label="Old Password"
            fullWidth
            required
            sx={{ mb: 2, paddingBottom: "10%" }}
            value={formData.oldPassword}
            error={error.oldPassword}
            helperText={error.oldPassword ? "This field is required" : ""}
            onChange={handleChange}
            onFocus={() => handleFocus("oldPassword")}
          />
        </Grid>

        <Grid item xs={12} md={5}></Grid>
        <Grid item xs={12} md={7}></Grid>

        <Grid item xs={12} style={{ height: "8%", width: "8%" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "black" }}
            onClick={handleUpdatePassword}
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PrivacySettings;
