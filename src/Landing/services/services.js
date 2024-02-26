import React from 'react';
import { Card, CardContent, Typography, Grid, Box, ThemeProvider } from '@mui/material';
import { QueryStats, DesignServices, Receipt, Insights, Dataset, Storage } from '@mui/icons-material';
import theme from '../../Utils/themes'

const services = [
  { icon: DesignServices, title: 'OUR SERVICES', description: '' },
  { icon: QueryStats, title: 'Forecasting', description: 'With Forecaster, organizations can gain insights into the complexities of commodity markets. Forecaster analyzes the global demand and supply, local demand and supply and performs sentiment analysis to predict commodity prices. Procurement managers can use Forecaster to devise their procurement strategy and stay ahead of the market.' },
  { icon: Receipt, title: 'Optimiser', description: 'Buy the optimum quantity of commodities at the right time to reduce cost of raw material and increase profits. Optimizer uses the in-built Forecaster engine to predict prices and creates a customized action plan using AI, suggesting the most optimum purchase plan.' },
  { icon: Storage, title: 'Inventory Management', description: 'Reduce inventory costs and downtime using Inventory Manager. Track real time current inventory levels and optimum inventory levels and automate inventory planning. Embedded analytics provide answers to – what to buy, how much to buy and when to buy.' },
  { icon: Insights, title: 'Sales Analysis', description: 'Sales analysis involves examining sales reports to see what goods and services have and have not sold well.' },
  { icon: Dataset, title: 'Data Insights', description: 'Data insights refer to the understanding and interpretation of data to improve business decisions.' },
];

const ServiceCard = ({ service }) => (
  <Card
    sx={{ 
      width: '100%', 
      maxWidth: '100%', 
      height: '90%', 
      display: 'flex', 
      flexDirection: 'column', 
      background: '#32047F',
      borderRadius: 3,
      mx: 1
    }}
  >
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 2, margin: 3 }}>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <service.icon fontSize="large" sx={{ color: 'whitesmoke', fontSize: '3rem' }} />
        <Typography variant="h4" fontWeight="bold" color="whitesmoke" sx={{ mt: 1, mb: 0.5, textAlign: 'left' }}>
          {service.title}
        </Typography>
        <Typography variant="body1" color="whitesmoke" sx={{ mb: 1, textAlign: 'left' }}>
          {service.description}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const ServicesList = () => {
    return (
      <ThemeProvider theme={theme}>
        <Grid container spacing={1} justifyContent="center" sx={{ mx: 10 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              {index === 0 ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 2, mx: 1, width: '100%' }}>
                  <Typography variant="h3" fontWeight="bold" color="black" sx={{ textAlign: 'left' }}>
                    OUR <br/> SERVICES
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
