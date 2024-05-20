import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, ThemeProvider, Typography, Button, Grid, CssBaseline } from "@mui/material";
import theme from "../../Utils/themes";
import pic from "./../../Images/Data_Analysis.gif";

const HomeSection = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box id="home" className="section" sx={{ mx: { xs: 1, sm: 3, md: 10 }, mt:0, pt:0 }}>
        <Grid container spacing={2} alignItems="center" style={{ minHeight: '10vh' }}> {/* Added alignItems and minHeight */}
          <Grid item xs={12} md={6} sx={{ padding: "10px", textAlign: "left" }}>
            <Box sx={{ padding: { xs: "20px", sm: "50px" } }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "green" }}
              >
                FASTER, EASIER & BETTER DECISIONS
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                <br />
                Turn Insights Into Actions to Achieve Goals
              </Typography>
              <Typography variant="h6">
                <br />
                Empower your workforce with relevant insights and actions to
                help improve quality, productivity, and culture of the
                organisation. Convert raw data into action plans to achieve your
                current objectives and preserve knowledge for the workforce of
                the future.
              </Typography>
              <br />
              <Button variant="contained" onClick={handleLoginClick}>Get Started</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ padding: "40px" }}>
            <Box sx={{ padding: "40px" }}>
              <img src={pic} alt="Data Analysis" style={{ width: '100%', height: 'auto' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default HomeSection;
