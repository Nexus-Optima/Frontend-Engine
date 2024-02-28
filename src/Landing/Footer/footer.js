import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MuiLink from '@mui/material/Link'; // Renamed Material-UI Link
import { Link } from 'react-router-dom'; // React Router DOM Link for navigation
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      backgroundColor: "#32047F", 
      color: "white",  
      width: '100%',
    }}>
      <Grid container spacing={5} justifyContent="center" textAlign="center" sx={{ maxWidth: '100%', margin: '0 auto'}}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{fontWeight:'bold'}}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Link to="/contactus" style={{ color: 'inherit', textDecoration: 'none' }}>Send an enquiry</Link>
            {/* Use React Router's Link for internal navigation */}
            <Link to="/explore" style={{ color: 'inherit', textDecoration: 'none' }}>Explore Modules</Link>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{fontWeight:'bold'}}>
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Typography color="inherit" sx={{ mb: 3 }}>admin@appliedbellcurve.com</Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom sx={{fontWeight:'bold'}}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <MuiLink href="#" color="inherit"><FacebookIcon /></MuiLink>
            <MuiLink href="#" color="inherit"><TwitterIcon /></MuiLink>
            <MuiLink href="#" color="inherit"><LinkedInIcon /></MuiLink>
            <MuiLink href="#" color="inherit"><InstagramIcon /></MuiLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
