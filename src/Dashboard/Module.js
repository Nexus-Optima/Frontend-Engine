import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const Module = ({ name, description }) => {
  return (
    <Card
      style={{
        width: 250,
        margin: "10px 30px",
        display: "flex",
        height: 280,
        borderRadius: 20,
        border: "1px black",
        alignContent: "center",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          sx={{
            height: "35%",
            flexGrow: "1",
            margin: "0px 0px 0px 10px",
            alignContent: "center",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            height: "35%",
            margin: "0px 0px 0px 8px",
            alignContent: "center",
          }}
        >
          {description}
          <br />
        </Typography>
        <CardActions>
          <Button
            size="small"
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "0.25rem",
              cursor: "pointer",
              padding: "0.5rem 2rem",
              alignContent: "center",
              alignItems: "center",
              display: "flex",
              size: "1rem",
              margin: "4px 2px 0px 35px",
              ":hover": {
                backgroundColor: "grey",
                color: "white",
              },
            }}
          >
            Launch
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Module;
