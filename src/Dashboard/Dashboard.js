import React, { useEffect, useState } from "react";
import { Typography, Grid, Container, Box, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import Module from "./Module";
import { useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";
import { MODULE_DESCRIPTIONS } from "../Utils/constants";
import { fetchUserDetails } from "../Services/UserDetailsService";

const Dashboard = (props) => {
  const [subscribedModuleNames, setSubscribedModuleNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubscribedModules = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL}?userId=${props.userEmail}`
        );
        const userData = await response.json();

        if (userData !== null) {
          const uniqueModuleNames = Object.values(userData).map(
            (item) => item.moduleName
          );
          setSubscribedModuleNames(uniqueModuleNames);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };
    fetchSubscribedModules();

    const UserDetails = fetchUserDetails({ userEmail: props.userEmail });
    if (UserDetails === null) {
      setError("OOPS!!! Fetching issue......");
    } else {
      UserDetails.then((result) => {
        const data = result[0];
        setUsername(data?.username);
      });
    }
  }, [props.userEmail]);

  const handleLogout = async () => {
    await signOut();
    props.updateAuthStatus(false);
    navigate("/login");
  };

  const handleExplore = async () => {
    navigate("/explore");
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
            {/* Sidebar content */}
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

            {/* Navigation buttons */}
            <Box style={{ padding: "0 2%", marginBottom: "2%" }}>
              <Button
                onClick={handleExplore}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "12px 0",
                  width: "100%",
                  textTransform: "none",
                  fontSize: "20px",
                  backgroundColor: "transparent",
                }}
              >
                <SearchIcon style={{ marginRight: "12px", fontSize: "28px" }} />
                Explore Modules
              </Button>
              <Button
                onClick={() => {
                  /* handle navigation */
                }}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "12px 0",
                  width: "100%",
                  textTransform: "none",
                  fontSize: "20px",
                  backgroundColor: "transparent",
                }}
              >
                <CallIcon style={{ marginRight: "12px", fontSize: "28px" }} />
                Contact Us
              </Button>
              <Button
                onClick={() => {
                  navigate("/settings");
                }}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "12px 0",
                  width: "100%",
                  textTransform: "none",
                  fontSize: "20px",
                  backgroundColor: "transparent",
                }}
              >
                <SettingsIcon
                  style={{ marginRight: "12px", fontSize: "28px" }}
                />
                Settings
              </Button>
              <Button
                onClick={handleLogout}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "12px 0",
                  width: "100%",
                  textTransform: "none",
                  fontSize: "20px",
                  backgroundColor: "transparent",
                }}
              >
                <LogoutIcon style={{ marginRight: "12px", fontSize: "28px" }} />
                Sign Out
              </Button>
            </Box>
          </Grid>

          {/* Main content */}
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
            <Typography
              variant="h4"
              component="h2"
              style={{
                color: "black",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Welcome {username}
            </Typography>

            {/* Module display */}
            {error && (
              <div
                style={{ color: "red", fontSize: "3rem", fontStyle: "italic" }}
              >
                {error}
              </div>
            )}
            <Box style={{ height: "calc(100% - 48px)", overflowY: "auto" }}>
              {loading ? (
                <Typography>Loading...</Typography>
              ) : (
                <Grid
                  container
                  style={{ justifyContent: "center" }}
                  spacing={2}
                >
                  {subscribedModuleNames.map((moduleName, index) => {
                    const moduleDescription = MODULE_DESCRIPTIONS[moduleName];
                    if (moduleDescription) {
                      return (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                          <Module
                            name={moduleDescription.name}
                            description={moduleDescription.description}
                          />
                        </Grid>
                      );
                    } else {
                      setError(true);
                      return null;
                    }
                  })}
                </Grid>
              )}
              {error && (
                <Typography style={{ color: "black", textAlign: "center", marginTop: 20 }}>
                  Some modules are unavailable at the moment. Please try again later.
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
