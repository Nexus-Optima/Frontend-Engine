import { Typography, AppBar, Toolbar, Button, useTheme, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleExplore = async () => {
    navigate("/explore");
  };
  const handleContactUs = async () => {
    navigate("/contactus");
  };


  return (
    <AppBar position="static" sx={{ 
        backgroundColor:"#063954",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginTop: theme.spacing(0.40),
        marginLeft: "auto",
        marginRight: { xs: "auto", sm: "auto", md: theme.spacing(11.5) },
        borderRadius: "10px",
        width: { xs: "100%", sm: "90%" },
        height: { xs: theme.spacing(8), md: theme.spacing(8) }, // Dynamic height adjustment
    }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems:"center", height:'100%' }}>
        {/* Applied Bell Curve Text on the Left */}
        <Button sx={{ 
          color: "white", 
          backgroundColor: 'transparent', 
          textDecoration: "none", 
          textTransform: "none", 
          '&:hover': { backgroundColor: 'transparent' },
        }}>
          <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            Applied Bell Curve
          </Typography>
        </Button>

        {/* Buttons on the Right */}
        <Box>
          <Button onClick={handleExplore} sx={{ 
            color: "white", 
            backgroundColor: 'transparent', 
            textDecoration: "none", 
            textTransform: "none", 
            '&:hover': { backgroundColor: 'transparent' },
          }}>
            <SearchIcon sx={{ mr: 1 }} />
            <Typography variant="h6">Modules</Typography>
          </Button>
          <Button onClick={handleContactUs} sx={{ 
            color: "white", 
            backgroundColor: 'transparent', 
            textDecoration: "none", 
            textTransform: "none", 
            '&:hover': { backgroundColor: 'transparent' },
            ml: theme.spacing(2),
          }}>
            <CallIcon sx={{ mr: 1 }} />
            <Typography variant="h6">Contact us</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
