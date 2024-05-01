import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import { signIn} from "aws-amplify/auth";
import GoogleLogo from "../Images/logo512.png";
import { ThemeProvider } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import theme from "../Utils/themes";

import { useUser } from "../Context/userContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useUser(); // Use the login function from context
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (e) => {
      e.preventDefault();
      const { username, password } = formData;
      try {
          await signIn({ username, password });
          login(username);
          navigate("/dashboard");
      } catch (error) {
          setLoginError("Invalid Username or Password");
          console.log(error);
      }
  };

  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleFocus = () => setLoginError(null);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} style={{ minHeight: "100vh", padding: 0 }}>
        <Grid container style={{ minHeight: "100vh" }}>
          {/* Left column */}
          <Grid
            item
            xs={12}
            md={4}
            style={{
              background: "#32047F",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={GoogleLogo}
              alt="Logo"
              style={{ width: "100px", height: "100px" }}
            />
            <Typography variant="h5" style={{ color: "white" }}>
              APPLIED BELL CURVE
            </Typography>
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
            <Typography variant="h2" fontWeight="bold">
              Login
            </Typography>
            <Typography variant="h5" fontWeight="italic" style={{ padding: 5 }}>
              Login to your account with username and password
            </Typography>
            <Grid
              container
              spacing={2}
              style={{ maxWidth: "80%", marginTop: "20px" }}
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
                  sx={{ mb: 2 }}
                  value={formData.username}
                  onChange={handleChange}
                  onFocus={() => handleFocus("username")}
                  // error={errors.username}
                  // helperText={errors.username ? "This field is required" : ""}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="password"
                  type="password"
                  variant="outlined"
                  color="secondary"
                  label="Password"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus("password")}
                  // error={errors.password}
                  // helperText={errors.password ? "This field is required" : ""}
                />
              </Grid>

              {loginError && (
                <p
                  style={{
                    color: "red",
                    margin: "10px 0px 10px 350px",
                  }}
                >
                  {loginError}
                </p>
              )}

              <Grid item xs={12} style={{ width: "500px" }}>
                <Button variant="contained" onClick={handleLogin}>
                  LOGIN
                </Button>
              </Grid>

              <Grid item xs={12}>
                <NavLink
                  to="/register"
                  style={{ paddingLeft: 13, textDecoration: "none" }}
                >
                  Don't have an account ? Register Here{" "}
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default LoginPage;
