import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  launchButton: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "0.25rem",
    cursor: "pointer",
    padding: "0.5rem 2rem",
    '&:hover': {
      backgroundColor: "grey",
      color: "white",
    },
  },
  cardStyle: {
    width: '300px',
    margin: "10px 30px",
    display: "flex",
    flexDirection: "column",
    height: '320px',
    borderRadius: 20,
    border: "3px solid black",
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Shadow for 3D effect
    transition: '0.3s', // Smooth transition for hover effect
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
      transform: 'translateY(-4px)' // Slight shift upwards on hover
    }
  },
  // Add other styles here if needed
});

const Module = ({ name, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyle}>
      <CardContent style={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: '10px'
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          style={{
            textAlign: "justify",
            margin: "0px 10px",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center", paddingBottom: '10px' }}>
        <Button
          size="small"
          className={classes.launchButton}
        >
          Launch
        </Button>
      </CardActions>
    </Card>
  );
};

export default Module;
