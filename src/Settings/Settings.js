import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Typography, Container, Grid } from "@mui/material";
import Personal from "./Personal";
import PrivacySettings from "./PrivacySettings";

const Settings = () => {
  const [activeComponent, setActiveComponent] = useState(true);

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
              style={{
                color: "black",
                padding: "10% 2%",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              Applied Bell Curve
            </Typography>

            <Box style={{ padding: "0 2% 130%" }}>
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
          </Grid>
          {activeComponent ? <Personal /> : <PrivacySettings />}
        </Grid>
      </Container>
    </>
  );
};

export default Settings;
