import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardStyle: {
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
      transform: "translateY(-4px)",
    },
  },
  launchButton: {
    "&:hover": {
      backgroundColor: "grey",
      color: "white",
    },
  },
});

const Module = ({ name, description, userEmail, username }) => {
  const classes = useStyles();

  const handleLaunch = async (e) => {
    e.preventDefault();
    try {
      const sessionInfo = {
        email: userEmail,
        username: username,
      };
      const queryString = new URLSearchParams(sessionInfo).toString();
      window.location.href = `https://abhilaksh.dziq5tl57ctj0.amplifyapp.com/?${queryString}`;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      style={{
        width: "300px",
        margin: "10px 30px",
        display: "flex",
        flexDirection: "column",
        height: "320px",
        borderRadius: "20px",
        border: "1px solid black",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
      }}
      className={classes.cardStyle}
    >
      <CardContent style={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
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
      <CardActions style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Button
          size="small"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "0.5rem",
            cursor: "pointer",
            padding: "0.5rem 2rem",
          }}
          onClick={handleLaunch}
          className={classes.launchButton}
        >
          Launch
        </Button>
      </CardActions>
    </Card>
  );
};

export default Module;
