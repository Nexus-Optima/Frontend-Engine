import React from "react";
import { Typography, Grid, Container, Box, Link, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import Module from "./Module";
import { useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";

const Dashboard = (props) => {
  const modules = [
    {
      name: "Forecaster",
      description: "Tool for commodities forecasting.",
    },
    {
      name: "Optimiser",
      description: "Tool for Optimising.",
    },
    {
      name: "Inventory Management",
      description: "Tool for Inventory Management.",
    },
    {
      name: "Inventory Management",
      description: "Tool for Inventory Management.",
    },
    {
      name: "Inventory Management",
      description: "Tool for Inventory Management.",
    },
    {
      name: "Inventory Management",
      description: "Tool for Inventory Management.",
    },
    {
      name: "Inventory Management",
      description: "Tool for Inventory Management.",
    },
    // ... other modules
  ];
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    props.updateAuthStatus(false);
    navigate("/login");
  };

  

  return (
    <>
      <Container maxWidth={false} style={{ padding: 0 }}>
        <Grid container style={{ height: "100vh" }}>
          <Grid
            item
            xs={2}
            style={{
              background: "#D3D3D3",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Typography
              variant="body1"
              style={{ color: "black", padding: "10% 2%", fontWeight: "bold", fontSize: '24px' }}
            >
              Applied Bell Curve
            </Typography>

            <Box style={{ padding: "0 2%", marginBottom: "2%" }}>
              <Button onClick={() => {/* handle navigation */}} style={{ color: "black", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "12px 0", width: "100%", textTransform: "none", fontSize: '20px', backgroundColor:'transparent' }}>
                <SearchIcon style={{ marginRight: "12px", fontSize: '28px' }} />
                Explore Modules
              </Button>
              <Button onClick={() => {/* handle navigation */}} style={{ color: "black", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "12px 0", width: "100%", textTransform: "none", fontSize: '20px',backgroundColor:'transparent' }}>
                <CallIcon style={{ marginRight: "12px", fontSize: '28px' }} />
                Contact Us
              </Button>
              <Button onClick={handleLogout} style={{ color: "black", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "12px 0", width: "100%", textTransform: "none", fontSize: '20px',backgroundColor:'transparent' }}>
                <LogoutIcon style={{ marginRight: "12px", fontSize: '28px' }} />
                Sign Out
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={10}
            style={{
              paddingLeft: '5%', // Adjust the padding to align modules
              paddingTop: "1%",
              height: "100%",
              display: 'flex', // Use flex for better control
              flexDirection: 'column' // Stack items vertically
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              style={{
                color: "black",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Welcome Nandan Terry
            </Typography>

            <Box style={{ height: 'calc(100% - 48px)', overflowY: "auto" }}>
              <Grid container style={{ justifyContent: "center" }} spacing={2}>
                {modules.map((module, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                    <Module name={module.name} description={module.description} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
