import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography, Container, Grid } from "@mui/material";
import Personal from "./Personal";
import PrivacySettings from "./PrivacySettings";
import pic from "./../Images/abc_image.png";

const Settings = (props) => {
  const [activeComponent, setActiveComponent] = useState(true);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

  const buttonStylePersonal = {
    color: activeComponent ? "white" : "black",
    backgroundColor: activeComponent ? "black" : "transparent",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "12px 0",
    width: "100%",
    textTransform: "none",
    fontSize: "20px",
  };
  const buttonStylePrivacy = {
    color: !activeComponent ? "white" : "black",
    backgroundColor: !activeComponent ? "black" : "transparent",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "12px 0",
    width: "100%",
    textTransform: "none",
    fontSize: "20px",
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const mobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        onClick={() => {
          setActiveComponent(true);
          handleMobileMenuClose();
        }}
      >
        Personal Information
      </MenuItem>
      <MenuItem
        onClick={() => {
          setActiveComponent(false);
          handleMobileMenuClose();
        }}
      >
        Privacy Settings
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Container maxWidth={false} style={{ padding: 0 }}>
        <Grid container style={{ height: "100vh" }}>
          <Grid
            item
            xs={12}
            md={2}
            style={{
              background: "#D3D3D3",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: { xs: "30vh", md: "100vh" },
            }}
          >
            <img
              src={pic}
              alt="Applied Bell Curve"
              style={{
                width: "100%",
                display: "block",
                height: "auto",
              }}
            />

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                paddingBottom: { md: "100%" },
              }}
            >
              <Button
                onClick={() => {
                  setActiveComponent(true);
                  /* handle navigation */
                }}
                style={buttonStylePersonal}
              >
                <Typography
                  style={{
                    marginRight: "12px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginLeft: "19px",
                  }}
                >
                  Personal Information
                </Typography>
              </Button>
              <Button
                onClick={() => {
                  /* handle navigation */
                  setActiveComponent(false);
                }}
                style={buttonStylePrivacy}
              >
                <Typography
                  style={{
                    marginRight: "12px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginLeft: "19px",
                  }}
                >
                  Privacy Settings
                </Typography>
              </Button>
            </Box>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            {mobileMenu}
          </Grid>
          {activeComponent ? (
            <Personal userEmail={props.userEmail} />
          ) : (
            <PrivacySettings />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Settings;
