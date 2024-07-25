import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  ThemeProvider,
  IconButton,
} from "@mui/material";
import {
  QueryStats,
  DesignServices,
  Storage,
  ArrowForward,
} from "@mui/icons-material";
import theme from "../../Utils/themes";

const services = [
  { icon: DesignServices, title: "OUR SERVICES", description: "" },
  {
    icon: QueryStats,
    title: "Purchase Management",
    description:
      "Our Purchase Management module features AI and machine learning-powered models for advanced commodity forecasting and related services. These state-of-the-art tools accurately predict market trends, enabling you to make informed buying decisions, optimize inventory, and reduce costs. Experience seamless integration with your procurement process and stay ahead in the competitive market.",
    link: "/explore/purchase-management",
  },
  {
    icon: Storage,
    title: "Production Planning",
    description:
      "Our Production Planning module leverages AI-driven tools to optimize your manufacturing processes. By integrating advanced algorithms, we help reduce waste, increase efficiency, and boost profitability. Stay ahead in the industry with intelligent planning solutions that streamline your production workflow and enhance overall operational effectiveness.",
    link: "/explore/production-planning",
  },
];

const ServiceCard = ({ service }) => (
  <Card
    sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#063954",
      borderRadius: 3,
      mx: 1,
    }}
  >
    <CardContent
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 2,
        margin: 3,
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <service.icon
          fontSize="large"
          sx={{ color: "whitesmoke", fontSize: "3rem" }}
        />
        <Typography
          variant="h4"
          fontWeight="bold"
          color="whitesmoke"
          sx={{ mt: 1, mb: 0.5, textAlign: "left" }}
        >
          {service.title}
        </Typography>
        <Typography
          variant="body1"
          color="whitesmoke"
          sx={{ mb: 1, textAlign: "left" }}
        >
          {service.description}
        </Typography>
      </Box>
      <IconButton
        href={service.link}
        sx={{ color: "whitesmoke", alignSelf: "flex-end" }}
      >
        <Typography sx={{fontWeight:'bold'}}>Read More</Typography><ArrowForward />
      </IconButton>
    </CardContent>
  </Card>
);

const ServicesList = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        sx={{ mx: { xs: 2, sm: 10 } }}
      >
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", sm: "center" },
              textAlign: { xs: "left", sm: "center" },
            }}
          >
            {index === 0 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: 2,
                  mx: 1,
                  width: "100%",
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color="black"
                  sx={{ textAlign: "left" }}
                >
                  OUR <br /> SERVICES
                </Typography>
              </Box>
            ) : (
              <ServiceCard service={service} />
            )}
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default ServicesList;
