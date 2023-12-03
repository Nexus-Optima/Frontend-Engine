import { Box, ThemeProvider, Typography, createTheme, Button, Grid, AppBar, Toolbar } from '@mui/material';


const Header = () => {
    return (
      <AppBar position="sticky" style={{ backgroundColor: '#465AD0' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>

          {/* Your company logo and name go here */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Typography variant="h6">Applied Bell Curve</Typography>
          </a>
          {/* Your navigation links go here */}
          </div>
        </Grid>
        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="#modules" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Typography variant="h6" style={{ padding: '20px'}}>Modules</Typography>
          </a>
          <a href="#section3" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Typography variant="h6" style={{ padding: '20px'}}>Partners</Typography>
          </a>
          <a href="#contact-us" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Typography variant="h6" style={{ padding: '20px'}}>Contact us</Typography>  
          </a> 
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }

  export default Header;