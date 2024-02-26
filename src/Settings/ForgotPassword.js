import React, { useState } from 'react';
import { resetPassword } from 'aws-amplify/auth';
import {
  TextField,
  Button,
  Typography,
  Container,
} from "@mui/material";

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  async function handleResetPassword() {
    
    try {
      const output = await resetPassword({ username });
      console.log(output);
      handleResetPasswordNextSteps(output);
    } catch (error) {
      console.log(error);
    }
  }

  function handleResetPasswordNextSteps(output) {
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        console.log(
          `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
        );
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case 'DONE':
        console.log('Successfully reset password.');
        break;
    }}

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Forgot Password
      </Typography>
      {successMessage ? (
        <Typography>{successMessage}</Typography>
      ) : (
        <div>
          <TextField
            label="username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
          <TextField
            label="Confirmation Code"
            variant="outlined"
            fullWidth
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
            margin="normal"
          />
          <TextField
            label="New Password"
            variant="outlined"
            fullWidth
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleResetPassword}
          >
            Confirm Password Reset
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </div>
      )}
    </Container>
  );
};

export default ForgotPassword;
