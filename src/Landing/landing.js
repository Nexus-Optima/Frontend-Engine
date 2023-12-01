import React from 'react';
import { Box, Typography } from '@mui/material';
import './landing.css';

function App() {
  return (
    <Box className="scroll-container">
      <Box className="section">
        <Typography variant="h4">Section 1 Content</Typography>
      </Box>
      <Box className="section">
        <Typography variant="h4">Section 2 Content</Typography>
      </Box>
      <Box className="section">
        <Typography variant="h4">Section 3 Content</Typography>
      </Box>
      <Box className="section">
        <Typography variant="h4">Section 4 Content</Typography>
      </Box>
    </Box>
  );
}

export default App;
