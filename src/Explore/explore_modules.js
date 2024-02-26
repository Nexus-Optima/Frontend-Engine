import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, CssBaseline, AppBar, Toolbar, IconButton, Card, CardContent, CardActions, Button, Typography, Box, Divider, TextField } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import theme from "../Utils/themes";

function ExploreModules() {
  const navigate = useNavigate();
  const initialModules = [
    { name: "Forecast Tool", definition: "Commodity markets are volatile and have multiple unpredictable forces at play. In most cases, limited knowledge and sentiment drives procurement of commodities, leading to fluctuations in the profitability of the organization. In Forecaster, Machine Learning and Sentiment Analysis are used to predict future price movements. Global indices, weather conditions, plant shutdowns, end market movement, etc. are taken into consideration. Futures and news articles from across the globe are also analyzed to enhance the accuracy of the model. Along with price forecasting, Forecaster also allows organizations to make their own predictions and to track their performance. Forecaster is meant to assist procurement managers in their decision-making process and turn decision takers into decision makers", features: ["Feature 1", "Feature 2"] },
    { name: "Optimiser", definition: "Procurement strategies for manufacturers play a crucial role in defining the overall profitability of the organization. Lack of awareness of the market and misinformation can lead to errors in decision making. Optimizer uses the in-built Forecaster engine to track global markets and analytics to create customized action plan for organizations. Procurement managers can use insights to create their own strategy and track their performance. Optimizer is meant to simplify planning and to improve decision making.", features: ["Feature 3", "Feature 4"] },
    { name: "Inventory Manager", definition: "Inventory management involves understanding the current levels of inventory, predicting the future consumption patterns, negotiating with vendors and coordinating with manufacturing sites. Inefficient management can lead to higher inventory costs, increase in downtime due to unavailability of raw materials and inaccurate price discovery. Inventory Manager automates the pipeline for inventory management. IM first uses APIs to track real time current stocks and analytics to categorize current stock into Understock, To Be Indented, To Be Ordered and Overstock. IM then fetches pending deliveries and requisitions and creates an action plan for all materials. IM finally prioritizes these actions plans into High, Medium and Low. Organizations can use IM to automate pipelines to efficiently manage inventories in a systematic and sustainable manner.", features: ["Feature 5", "Feature 6"] },
  ];

  // Adjusted to keep track of a single visible module index
  const [visibleModuleIndex, setVisibleModuleIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [modules, setModules] = useState(initialModules);

  const handleScroll = (direction) => {
    if (direction === 'left' && visibleModuleIndex > 0) {
      setVisibleModuleIndex(visibleModuleIndex - 1);
    } else if (direction === 'right' && visibleModuleIndex < modules.length - 1) {
      setVisibleModuleIndex(visibleModuleIndex + 1);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredModules = initialModules.filter(module =>
      module.name.toLowerCase().includes(value.toLowerCase()) ||
      module.definition.toLowerCase().includes(value.toLowerCase())
    );
    setModules(filteredModules);
    setVisibleModuleIndex(0); // Reset visible module index to show the first result
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#32047F' }}>
          <Typography variant="h6" component="div" sx={{ marginLeft: 5 }}>
            Applied Bell Curve
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={() => navigate('/dashboard')} sx={{ marginRight: 5 }}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', justifyContent: 'center', p:2, marginTop:2 }}>
        <TextField
          fullWidth
          label="Search Modules"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ maxWidth: 'calc(100% - 90px)' }} // Adjusting width to match Card width
        />
      </Box>
      <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          p: 2, 
          height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - 48px - 70px)`, // Example adjustment
          overflow: 'hidden' 
        }}>
        <IconButton onClick={() => handleScroll('left')} disabled={visibleModuleIndex === 0}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box sx={{ display: 'flex', overflow: 'hidden', width: '100%', height: '95%' }}>
  {modules.length > 0 ? (
    <Card sx={{ minWidth: 300, m: 1, flexGrow: 1, height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent>
        {/* Tool Name Header */}
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {modules[visibleModuleIndex].name}
        </Typography>
        {/* Definition Section */}
        <Typography variant="h6" component="div" sx={{ marginTop: 2, marginBottom: 1, fontWeight:'bold', textAlign:"justify" }}>
          Why is it needed ?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2, textAlign:"justify" }}>
          {modules[visibleModuleIndex].definition}
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        {/* Features Section */}
        <Typography variant="h6" component="div" sx={{ marginBottom: 1, fontWeight:'bold' }}>
          Features
        </Typography>
        {modules[visibleModuleIndex].features.map((feature, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {feature}
          </Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'white' }}>Get Quote</Button>
      </CardActions>
    </Card>
  ) : (
    <Typography variant="h6" sx={{ m: 2 }}>No modules found</Typography>
  )}
</Box>
        <IconButton onClick={() => handleScroll('right')} disabled={visibleModuleIndex === modules.length - 1}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
}

export default ExploreModules;
