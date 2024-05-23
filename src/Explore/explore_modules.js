import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeIcon from "@mui/icons-material/Home";
import CircleIcon from "@mui/icons-material/Circle";
import theme from "../Utils/themes";
import { useUser } from "../Context/userContext";
import Inventorygif from "../Gifs/Inventory_Mangement.gif";
import Forecastgif from "../Gifs/Forecasting.gif";

function ExploreModules() {
  const navigate = useNavigate();
  const initialModules = [
    {
      name: "Forecast Tool",
      definition:
        "Commodity markets are volatile and have multiple unpredictable forces at play. In most cases, limited knowledge and sentiment drives procurement of commodities, leading to fluctuations in the profitability of the organization. In Forecaster, Machine Learning and Sentiment Analysis are used to predict future price movements. Global indices, weather conditions, plant shutdowns, end market movement, etc. are taken into consideration. Futures and news articles from across the globe are also analyzed to enhance the accuracy of the model. Along with price forecasting, Forecaster also allows organizations to make their own predictions and to track their performance. Forecaster is meant to assist procurement managers in their decision-making process and turn decision takers into decision makers",
      features: [
        "Overview section which gives insights by comparing the actual and forecast values based on the commodity name",
        "Insights section which provides News based on Commodity name",
      ],
      gif: Forecastgif,
    },
    {
      name: "Inventory Manager",
      definition:
        "Inventory management involves understanding the current levels of inventory, predicting the future consumption patterns, negotiating with vendors and coordinating with manufacturing sites. Inefficient management can lead to higher inventory costs, increase in downtime due to unavailability of raw materials and inaccurate price discovery. Inventory Manager automates the pipeline for inventory management. IM first uses APIs to track real time current stocks and analytics to categorize current stock into Understock, To Be Indented, To Be Ordered and Overstock. IM then fetches pending deliveries and requisitions and creates an action plan for all materials. IM finally prioritizes these actions plans into High, Medium and Low. Organizations can use IM to automate pipelines to efficiently manage inventories in a systematic and sustainable manner.",
      features: [
        "Summary section which gives the detailed summary of Current Stock category and priority tables,displaying Material List based on the provided input, ",
        "Action Plan section which provides various material details and required action plan for them",
        "Current Levels section which also gives the material details but including their quantities",
      ],
      gif: Inventorygif,
    },
  ];

  const [visibleModuleIndex, setVisibleModuleIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [modules, setModules] = useState(initialModules);
  const { user } = useUser();

  const handleHomeClick = () => {
    if (user.isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  const handleScroll = (direction) => {
    if (direction === "left" && visibleModuleIndex > 0) {
      setVisibleModuleIndex(visibleModuleIndex - 1);
    } else if (
      direction === "right" &&
      visibleModuleIndex < modules.length - 1
    ) {
      setVisibleModuleIndex(visibleModuleIndex + 1);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredModules = initialModules.filter(
      (module) =>
        module.name.toLowerCase().includes(value.toLowerCase()) ||
        module.definition.toLowerCase().includes(value.toLowerCase())
    );
    setModules(filteredModules);
    setVisibleModuleIndex(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#063954",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginTop: theme.spacing(0.8),
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "10px",
          width: { xs: "85%", sm: "90%" },
          height: { xs: theme.spacing(8), md: theme.spacing(8) },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Button
              sx={{
                color: "white",
                backgroundColor: "transparent",
                textDecoration: "none",
                textTransform: "none",
                "&:hover": { backgroundColor: "transparent" },
                whiteSpace: "nowrap", 
              }}
            >
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center",fontSize: { xs: '1rem', sm: '1.25rem' } }}
              >
                Applied Bell Curve
              </Typography>
            </Button>
          </Box>
          <IconButton
            color="inherit"
            onClick={handleHomeClick}
          >
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
          marginTop: 1,
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Search Modules"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ maxWidth: "90%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          height: {
            xs: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - 48px - ${theme.spacing(16)}px)`,
            sm: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - 48px - 70px)`,
          },
          overflow: "hidden",
          maxWidth: "90%",
          margin: "auto",
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => handleScroll("left")}
          disabled={visibleModuleIndex === 0}
          sx={{ position: "absolute", left: 0 }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            overflowY: "auto", 
            overflowX: "hidden",
            width: "100%",
            height: "100%",
            position: "relative",
            flexDirection: "column",
          }}
        >
          {modules.length > 0 ? (
            <Card
              sx={{
                minWidth: 300,
                m: 1,
                flexGrow: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                {/* Tool Name Header */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginBottom: 2,
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {modules[visibleModuleIndex].name}
                  </Typography>
                </Box>
                {/* Definition Section */}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    marginTop: 1,
                    marginBottom: 1,
                    fontWeight: "bold",
                    textAlign: "justify",
                  }}
                >
                  Why is it needed?
                </Typography>
                <Typography
                  variant="inherit"
                  sx={{ marginBottom: 2, textAlign: "justify" }}
                >
                  {modules[visibleModuleIndex].definition}
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />
                {/* Features and Images Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ flex: 1, marginRight: 2, minWidth: "250px" }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ marginBottom: 1, fontWeight: "bold" }}
                    >
                      Features
                    </Typography>
                    <List>
                      {modules[visibleModuleIndex].features.map(
                        (feature, index) => (
                          <ListItem
                            key={index}
                            sx={{
                              alignItems: "flex-start",
                              padding: 0,
                              fontWeight: "bold",
                              textAlign: "justify",
                            }}
                          >
                            <ListItemIcon
                              sx={{ minWidth: "auto", marginTop: 0.5 }}
                            >
                              <CircleIcon
                                sx={{ fontSize: 10, color: "black" }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              sx={{ margin: 0 }}
                            />
                          </ListItem>
                        )
                      )}
                    </List>
                  </Box>
                  <Box sx={{ flex: 1, padding: 0.25, minWidth: "250px" }}>
                    <Box
                      component="img"
                      src={modules[visibleModuleIndex].gif}
                      alt={`Module Visual`}
                      sx={{
                        width: "90%",
                        maxHeight: 300, 
                        objectFit: "contain", 
                        border: "2px solid black",
                        borderRadius: "10px",
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{ maxWidth: "fit-content", width: {sx:"8%",md:"40%"} }}
                  onClick={() =>
                    navigate(
                      `/contactus?module=${modules[visibleModuleIndex].name}`
                    )
                  }
                >
                  Get Quote
                </Button>
              </CardActions>
            </Card>
          ) : (
            <Typography variant="h6" sx={{ m: 2 }}>
              No modules found
            </Typography>
          )}
        </Box>
        <IconButton
          onClick={() => handleScroll("right")}
          disabled={visibleModuleIndex === modules.length - 1}
          sx={{ position: "absolute", right: 0 }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </ThemeProvider>
  );
}

export default ExploreModules;
