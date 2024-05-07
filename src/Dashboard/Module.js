import React, {useState } from "react";
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

const Module = ({ name, description, userEmail, username,module }) => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const handleLaunch = async (e) => {
    e.preventDefault();
    try {
      const sessionInfo = {
        email: userEmail,
        username: username,
      };
      const queryString = new URLSearchParams(sessionInfo).toString();
      window.location.href = `${module.link}?${queryString}`;
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Card
      style={{
        width: "90%",
        margin: "5% 10%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: "7%",
        border: "1px solid black",
        transition: "0.3s",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
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
          }}
        >
          {name}
        </Typography>
      </CardContent>
      {error ? (
        <>
          <Typography
            variant="body2"
            color="error"
            style={{
              textAlign: "justify",
              margin: "0% 2% 50%",
            }}
          >
            Error launching module. Please try again later.
          </Typography>
        </>
      ) : (
        <>
          <CardContent>
            <Typography
              variant="body2"
              component="p"
              style={{
                textAlign: "justify",
                margin: "0% 2% 50%",
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </>
      )}

      <CardActions style={{ justifyContent: "center", paddingBottom: "2%" }}>
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
