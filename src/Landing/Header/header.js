import { Typography, Grid, AppBar, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <div sx={{ display: "flex", alignItems: "center" }}>
              <a href="#home" sx={{ color: "inherit", textDecoration: "none" }}>
                <Typography variant="h6">Applied Bell Curve</Typography>
              </a>
            </div>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <a
              href="#modules"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography variant="h6" sx={{ padding: "20px" }}>
                Modules
              </Typography>
            </a>
            <a
              href="#section3"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography variant="h6" sx={{ padding: "20px" }}>
                Partners
              </Typography>
            </a>
            <a
              href="#contact-us"
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography variant="h6" sx={{ padding: "20px" }}>
                Contact us
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
