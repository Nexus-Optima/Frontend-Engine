import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom";
import {
    TextField,
    Button,
    Typography,
    Grid,
  } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const Personal = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      username: "",
      email: "",
      mobile: "",
      company: "",
    });


    const handleHomePage=()=>{
        navigate('/dashboard')
    }

    const handlePersonalDetails=async()=>{
      const requesttData=formData;   
      
   
    }

    const handleChange=(e)=>{
      e.preventDefault();
      const {name,value}=e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      console.log(formData);

    }


  return (
    <>
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
            <HomeIcon sx={{paddingLeft:'90%',fontSize:'50px'}} onClick={handleHomePage} />
            
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
                  name="username"
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Username"
                  fullWidth
                  required
                  sx={{ mb: 2, paddingBottom: "10%" }}
                  value={formData.username}
                  // error={errors.name}
                  // helperText={errors.name ? "This field is required" : ""}
                  onChange={handleChange}
                  // onFocus={() => handleFocus("name")}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  name="email"
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Email"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  value={formData.email}
                  // error={errors.email}
                  // helperText={errors.email ? "This field is required" : ""}
                  onChange={handleChange}
                  // onFocus={() => handleFocus("email")}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  name="mobile"
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Mobile"
                  fullWidth
                  required
                  // error={errors.mobile}
                  sx={{ mb: 2 }}
                  value={formData.mobile}
                  onChange={handleChange}
                  // helperText={errors.mobile ? "This field is required" : ""}
                  // inputProps={{ maxLength: 10 }}
                  // onFocus={() => handleFocus("mobile")}
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
                  // error={errors.password}
                  // helperText={errors.password ? "This field is required" : ""}
                  onChange={handleChange}
                  // onFocus={() => handleFocus("password")}
                />
              </Grid>

              <Grid item xs={12} md={7}></Grid>
              <Grid item xs={12} md={5}>
              </Grid>
              <Grid item xs={12} style={{ height: "8%", width: "8%" }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "black" }}
                  onClick={handlePersonalDetails}
                >
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </Grid>
          </>
  )
}

export default Personal