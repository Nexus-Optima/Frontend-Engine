import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AuthError, signIn } from "aws-amplify/auth";
import GoogleLogo from "../Images/logo512.png";
import { ThemeProvider } from "@mui/material/styles";
import { Form, NavLink, useNavigate } from "react-router-dom";
import theme from "../Utils/themes";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errUser, setErrUser] = useState(false);
  const [errPass, setErrPass] = useState(false);

  // Login function
  const handleLogin = async () => {
    try {
      if (username.length === 0) {
        setErrUser(true);
      }
      if (password.length === 0) {
        setErrPass(true);
      }
      
      // console.log(username.length,error,password.length);
      await signIn({ username, password });
      console.log("sucess");
      props.updateAuthStatus(true);
      navigate("/dashboard");
    } catch (error) {
      error instanceof AuthError &&
        console.log(error.name, error.message, error.recoverySuggestion);
    }
  };

  const handleUsernameChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };


  const handleFocus=()=>{
    setErrPass(false)
    setErrUser(false)
  }

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
            <Typography
              variant="h5"
              style={{ color: "white", marginTop: "20px" }}
            >
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
            {/* <form onSubmit={handleLogin}> */}
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
                  // onChange={e=>setUsername(e.target.value)}
                  onChange={handleUsernameChange}
                  onFocus={handleFocus}
                  error={errUser}
                  helperText={errUser ? "This field is required" : ''}
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
                  // onChange={e=>setPassword(e.target.value)}
                  onChange={handlePasswordChange}
                  onFocus={handleFocus}
                  error={errPass}
                  helperText={errPass ? "This field is required" : ""}
                />
              </Grid>

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
