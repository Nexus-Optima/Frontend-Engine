import React from 'react';
import { Card, CardContent, Typography, Grid, Box, ThemeProvider } from '@mui/material';
import { QueryStats, DesignServices, Receipt, Insights, Dataset, Storage } from '@mui/icons-material';
import theme from '../../Utils/themes'

const services = [
  { icon: DesignServices, title: 'OUR SERVICES', description: '' },
  { icon: QueryStats, title: 'Forecasting', description: 'Forecasting is a method of making informed predictions by using historical data as the main input for determining the course of future trends.' },
  { icon: Receipt, title: 'Optimiser', description: 'Optimize" is a verb that means to make something as good or effective as possible. ' },
  { icon: Storage, title: 'Inventory Management', description: 'Inventory management refers to the process of storing, ordering, and selling of goods and services.' },
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
