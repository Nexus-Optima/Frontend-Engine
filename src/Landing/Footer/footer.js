import React from 'react';
import { Box, Grid, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom'; // React Router DOM Link for navigation
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box component="footer" sx={{
      backgroundColor: "#063954",
      color: "white",
      width: '100%',
      py: 3, // Adds padding vertically
    }}>
      <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: '100%', m: '0 auto' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 1 }}>
            <Link to="/contactus" style={{ color: 'inherit', textDecoration: 'none', textAlign: 'center' }}>Send an enquiry</Link>
            {/* <Link to="/explore" style={{ color: 'inherit', textDecoration: 'none', textAlign: 'center' }}>Explore Modules</Link> */}
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Contact Us
          </Typography>
          <Typography color="inherit" sx={{ textAlign: 'center' }}>admin@appliedbellcurve.com</Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            <MuiLink href="#" color="inherit" target="_blank"><FacebookIcon /></MuiLink>
            <MuiLink href="#" color="inherit" target="_blank"><TwitterIcon /></MuiLink>
            <MuiLink href="https://www.linkedin.com/company/applied-bell-curve/" target="_blank" color="inherit"><LinkedInIcon /></MuiLink>
            <MuiLink href="#" color="inherit" target="_blank"><InstagramIcon /></MuiLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
