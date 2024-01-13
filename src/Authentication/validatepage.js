import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { confirmSignUp } from "aws-amplify/auth";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ValidatePage() {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [authenticationCode, setAuthenticationCode] = useState("");

  const handleRegisterConfirmation = async () => {
    try {
      console.log("handleRegisterConfirmation");
      console.log(username);
      console.log(authenticationCode);

      await confirmSignUp({ username, authenticationCode });

      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <h1>Validate</h1>
        </Grid>
        <Grid item xs={6}>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={(e) => setUserName(e.target.value)}
              autoComplete="username"
              autoFocus
            />
            <TextField
              fullWidth
              margin="normal"
              label="Authentication Code"
              variant="outlined"
              onChange={(evt) => setAuthenticationCode(evt.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={handleRegisterConfirmation}
            >
              Validate &gt;&gt;
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ValidatePage;
