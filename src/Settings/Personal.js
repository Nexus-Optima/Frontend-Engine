import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Grid, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { fetchUserDetails } from "../Services/UserDetailsService";
import { useUser } from "../Context/userContext";

const Personal = (props) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const UserDetails = fetchUserDetails({ userEmail: user["email"] });
    if (UserDetails === null) {
      setError("OOPS!!!  Failed to fetch......");
    } else {
      UserDetails.then((result) => {
        const data = result[0];
        setFormData({
          userid: data?.email,
          username: data?.username,
          email: data?.email,
          mobile: data?.phone,
          company: data?.company,
        });
      });
    }
  }, [user]);

  const [formData, setFormData] = useState({
    userid: "",
    username: "",
    email: "",
    mobile: "",
    company: "",
  });

  const handleHomePage = () => {
    navigate("/dashboard");
  };

  const handlePersonalDetails = async () => {
    const requestBody = {
      email: formData.email,
      userid: formData.email,
      username: formData.username,
      phone: formData.mobile,
      company: formData.company,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/update_personal_details${props.userEmail}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Grid
        item
        xs={10}
        style={{
          paddingLeft: "5%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between" },
            alignItems: "center",
            width: "80%",
            paddingLeft: { md: "13%" },
            mt: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              paddingLeft: { xs: "30%" },
              marginTop: { md: "10%" },
              fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
            }}
          >
            Settings
          </Typography>
          <HomeIcon
            sx={{
              fontSize: { xs: "2.5rem", md: "3rem" },
              cursor: "pointer",
              paddingLeft: { xs: "28%" },
              paddingRight: { md: "2%" },
              marginBottom: { xs: "2%", md: "20%" },
              marginTop:{md:"1%"}
            }}
            onClick={handleHomePage}
          />
        </Box>
        {error !== null && (
          <div style={{ color: "red", fontSize: "1rem", fontStyle: "italic" }}>
            {error}
          </div>
        )}
        <Grid
          container
          spacing={2}
          style={{ maxWidth: "80%", marginTop: "50px", marginLeft: "40px" }}
        >
          <Grid item xs={12} md={6}>
            <TextField
              name="username"
              type="text"
              variant="outlined"
              color="secondary"
              label="Username"
              fullWidth
              required
              sx={{ mb: 2, paddingBottom: "10%" }}
              value={formData.username}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="email"
              type="text"
              variant="outlined"
              color="secondary"
              label="Email"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={formData.email}
              disabled
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="mobile"
              type="text"
              variant="outlined"
              color="secondary"
              label="Mobile"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={formData.mobile}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="company"
              type="text"
              variant="outlined"
              color="secondary"
              label="Company"
              fullWidth
              required
              sx={{ mb: 2 }}
              value={formData.company}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} md={7}></Grid>
          <Grid item xs={12} md={5}></Grid>
          <Grid item xs={12} style={{ height: "8%", width: "8%" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "black" }}
              onClick={handlePersonalDetails}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Personal;
