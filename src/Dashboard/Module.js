import React, {useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import CryptoJS from "crypto-js";


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

const encryptData = (data, secretKey,setError) => {
  try {
    const jsonData = JSON.stringify(data);
    const encryptedData = CryptoJS.AES.encrypt(jsonData, secretKey).toString();
    return encryptedData;
  } catch (error) {
    setError(true);
  }
};

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
      const secretKey = process.env.REACT_APP_SECRET_KEY;
      const encryptedData = encryptData(sessionInfo, secretKey,setError);
      window.location.href = `${module.link}?data=${encryptedData}`;
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Card
      style={{
        width: "85%",
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
              margin: "0% 2% 40%",
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
                margin: "0% 2% 40%",
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
