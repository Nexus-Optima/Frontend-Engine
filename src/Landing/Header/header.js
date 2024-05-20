import { Typography, AppBar, Toolbar, Button, useTheme, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import { useState } from "react";

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

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

  const mobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => handleNavigate('/explore')}>
        <SearchIcon sx={{ mr: 1 }} /> Modules
      </MenuItem>
      <MenuItem onClick={() => handleNavigate('/contactus')}>
        <CallIcon sx={{ mr: 1 }} /> Contact Us
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static" sx={{ 
        backgroundColor: "#063954",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        mt: 1,
        mx: 'auto', 
        p: 0,
        borderRadius: "10px",
        width: { xs: "100%", sm: "90%", md: "85%", lg: "90%" },
        maxWidth: "90vw",
        overflow: "hidden",
        height: theme.spacing(8)
    }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", height: '100%' }}>
        <Button onClick={() => navigate("/")} sx={{ 
          color: "white", 
          backgroundColor: 'transparent', 
          textDecoration: "none", 
          textTransform: "none", 
          '&:hover': { backgroundColor: 'transparent' },
        }}>
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            Applied Bell Curve
          </Typography>
        </Button>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          <Button onClick={() => handleNavigate("/explore")} sx={{ 
            color: "white", 
            backgroundColor: 'transparent', 
            textDecoration: "none", 
            textTransform: "none", 
            '&:hover': { backgroundColor: 'transparent' },
          }}>
            <SearchIcon sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Modules</Typography>
          </Button>
          <Button onClick={() => handleNavigate("/contactus")} sx={{ 
            color: "white", 
            backgroundColor: 'transparent', 
            textDecoration: "none", 
            textTransform: "none", 
            '&:hover': { backgroundColor: 'transparent' },
            ml: theme.spacing(2),
          }}>
            <CallIcon sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>Contact Us</Typography>
          </Button>
        </Box>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {mobileMenu}
    </AppBar>
  );
};

export default Header;
