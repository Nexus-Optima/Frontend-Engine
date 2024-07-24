import React from "react";
import { Container, Typography, Box, Tabs, Tab, Grid, List, ListItem, ListItemIcon, ListItemText, Button, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";
import Header from "../Landing/Header/header";
import theme from "../Utils/themes";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const ExploreModulePage = ({ title, description, tabs }) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleContactUs = () => {
    const selectedTab = tabs[value];
    navigate(`/contactus?module=${selectedTab.label}`);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Box sx={{ width: { xs: "100%", sm: "90%", md: "85%", lg: "90%" }, mx: 'auto' }}>
          <Box
            sx={{
              my: 4,
              p: 3,
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f9f9f9',
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" paragraph>
              {description}
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="module tools tabs"
              TabIndicatorProps={{ style: { backgroundColor: '#1976d2' } }}
            >
              {tabs.map((tab, index) => (
                <Tab
                  label={tab.label}
                  {...a11yProps(index)}
                  key={index}
                  sx={{
                    '&.Mui-selected': {
                      color: '#063954',
                    },
                  }}
                />
              ))}
            </Tabs>
            {tabs.map((tab, index) => (
              <TabPanel value={value} index={index} key={index}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ textAlign: 'left', fontWeight: 'bold' }}>{tab.label}</Typography>
                    <Typography variant="body1" paragraph sx={{ textAlign: 'left' }}>
                      {tab.description}
                    </Typography>
                    {tab.features && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="h6" sx={{ textAlign: 'left', fontWeight: 'bold' }}>Features</Typography>
                        <List>
                          {tab.features.map((feature, i) => (
                            <ListItem key={i}>
                              <ListItemIcon>
                                <CircleIcon fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary={feature} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <img src={tab.image} alt={tab.label} style={{ width: "100%", maxHeight: 400, objectFit: "contain" }} />
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                sx={{ maxWidth: "fit-content", width: { sx: "8%", md: "40%" } }}
                onClick={handleContactUs}
              >
                Get Quote
              </Button>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

ExploreModulePage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string) // Added features prop type
    })
  ).isRequired,
};

export default ExploreModulePage;
