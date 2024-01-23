import React from "react";
import { Typography, Grid, Container, Box, Link } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import Module from "./Module";

const Dashboard = () => {
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
  ];
  document.body.style.overflowY = "hidden";
  return (
    <>
      <Container maxWidth={false} style={{ padding: 0 }}>
        <Typography
          variant="h4"
          component="h2"
          style={{
            color: "black",
            alignItems: "center",
            position: "relative",
            padding: "2% 0% 5%",
            fontWeight: "bold",
          }}
        >
          Welcome Nandan Terry
        </Typography>

        <Grid container>
          <Grid
            item
            xs={12}
            md={2}
            style={{
              background: "#D3D3D3",
              position: "absolute",
              top: 0,
              left: 0,
              height: "100vh",
            }}
          >
            <Typography
              variant="body1"
              style={{
                color: "black",
                padding: "10% 2% 245% 2%",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Applied Bell Curve
            </Typography>
            <Link href="#" color="inherit">
              <Typography
                variant="body2"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  padding: "0% 0% 9% 2%",
                }}
              >
                <SearchIcon
                  sx={{
                    position: "absolute",
                    left: "0",
                    fontSize: 25,
                  }}
                ></SearchIcon>
                Explore Modules
              </Typography>
            </Link>
            <Link href="/register" color="inherit">
              <Typography
                variant="body2"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  padding: "0% 0% 9% 2%",
                }}
              >
                <CallIcon
                  sx={{
                    position: "absolute",
                    left: "0",
                    fontSize: 25,
                    alignItems: "left",
                  }}
                ></CallIcon>
                Contact Us
              </Typography>
            </Link>
            <Link href="#" color="inherit">
              <Typography
                variant="body2"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  padding: "0% 0% 9% 2%",
                }}
              >
                <LogoutIcon
                  sx={{
                    position: "absolute",
                    left: "0",
                    fontSize: 25,
                  }}
                ></LogoutIcon>
                Sign Out
              </Typography>
            </Link>
          </Grid>

          <Grid
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              position: "relative",
              paddingLeft: "20%",
            }}
          >
            <Box
              sx={{
                height: "70%",
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                  "-ms-overflow-style": "none",
                },
              }}
            >
              {modules.map(function (module) {
                return (
                  <Module name={module.name} description={module.description} />
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
