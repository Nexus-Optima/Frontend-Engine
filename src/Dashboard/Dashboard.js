import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Container,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  useTheme,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import Module from "./Module";
import { useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";
import { MODULE_DESCRIPTIONS } from "../Utils/constants";
import { fetchUserDetails } from "../Services/UserDetailsService";
import { useUser } from "../Context/userContext";
import pic from "./../Images/abc_image.png";

const Dashboard = () => {
  const { user, logout } = useUser();
  const [subscribedModuleNames, setSubscribedModuleNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

  useEffect(() => {
    if (user.isAuthenticated) {
      const fetchSubscribedModules = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_BACKEND}/get_user?userId=${user["email"]}`
          );
          const userData = await response.json();
          if (userData) {
            const uniqueModuleNames = Object.values(userData).map(
              (item) => item.moduleName
            );
            setSubscribedModuleNames(uniqueModuleNames);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
        setLoading(false);
      };
      fetchSubscribedModules();

      fetchUserDetails({ userEmail: user["email"] }).then((result) => {
        if (result && result.length > 0) {
          setUsername(result[0]?.username);
        } else {
          setError("OOPS!!! Fetching issue......");
        }
      });
    }
  }, [user]);

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleMobileMenuClose();
  };
  const handleLogout = async () => {
    await signOut();
    logout();
    handleNavigate("/login");
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
      <MenuItem onClick={() => handleNavigate("/explore")}>
        <SearchIcon sx={{ mr: 1 }} /> Explore Modules
      </MenuItem>
      <MenuItem onClick={() => handleNavigate("/contactus")}>
        <CallIcon sx={{ mr: 1 }} /> Contact Us
      </MenuItem>
      <MenuItem onClick={() => handleNavigate("/settings")}>
        <SettingsIcon sx={{ mr: 1 }} /> Settings
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <LogoutIcon sx={{ mr: 1 }} /> Sign Out
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Container maxWidth={false} style={{ padding: 0 }}>
        <Grid container style={{ minHeight: "100vh" }}>
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
            {/* Sidebar content */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 0,
                flexGrow: 0,
                alignItems: "flex-start",
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
            </Box>
            {/* Navigation buttons */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
                padding: theme.spacing(2),
              }}
            >
              <Button
                onClick={() => handleNavigate("/explore")}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  textTransform: "none",
                  fontSize: "20px",
                  backgroundColor: "transparent",
                  marginBottom: theme.spacing(1),
                }}
              >
                <SearchIcon sx={{ mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.2rem" },
                    fontWeight: "bold",
                  }}
                >
                  Explore Modules
                </Typography>
              </Button>
              <Button
                onClick={() => handleNavigate("/contactus")}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  textTransform: "none",
                  fontSize: "20px",
                  backgroundColor: "transparent",
                  marginBottom: theme.spacing(1),
                }}
              >
                <CallIcon sx={{ mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.2rem" },
                    fontWeight: "bold",
                  }}
                >
                  Contact Us
                </Typography>
              </Button>
              <Button
                onClick={() => handleNavigate("/settings")}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  textTransform: "none",
                  fontSize: "20px",
                  backgroundColor: "transparent",
                  marginBottom: theme.spacing(1),
                }}
              >
                <SettingsIcon sx={{ mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.2rem" },
                    fontWeight: "bold",
                  }}
                >
                  Settings
                </Typography>
              </Button>
              <Button
                onClick={handleLogout}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  textTransform: "none",
                  fontSize: "20px",
                  backgroundColor: "transparent",
                  marginBottom: theme.spacing(1),
                }}
              >
                <LogoutIcon sx={{ mr: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.2rem" },
                    fontWeight: "bold",
                  }}
                >
                  Sign Out
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

          {/* Main content */}
          <Grid
            item
            xs={12}
            md={10}
            style={{
              paddingLeft: "5%",
              paddingTop: "1%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
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
                  style={{
                    justifyContent: "center",
                    height: { xs: "20vh", md: "50vh" },
                  }}
                  spacing={2}
                >
                  {subscribedModuleNames
                    .filter(
                      (moduleName, index, array) =>
                        array.indexOf(moduleName) === index
                    )
                    .map((moduleName, index) => {
                      const moduleDescription = MODULE_DESCRIPTIONS[moduleName];
                      if (moduleDescription) {
                        return (
                          <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                            <Module
                              name={moduleDescription.name}
                              description={moduleDescription.description}
                              userEmail={user["email"]}
                              username={username}
                              module={moduleDescription}
                            />
                          </Grid>
                        );
                      } else {
                        return null;
                      }
                    })}
                </Grid>
              )}
              {error && (
                <Typography
                  style={{ color: "black", textAlign: "center", marginTop: 20 }}
                >
                  Some modules are unavailable at the moment. Please try again
                  later.
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
