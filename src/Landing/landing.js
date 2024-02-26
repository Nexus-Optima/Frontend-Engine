import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import "typeface-raleway";
import "./landing.css";
import HomeSection from "./Home/home";
import Header from "./Header/header.js";
import ServicesList from "./services/services";
import ContactUs from "./ContactUs/contact_us.js";
import Footer from "./Footer/footer"
import theme from "../Utils/themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Box className="scroll-container">
          <Box id="modules" className="section">
            <HomeSection />
          </Box>
          <Box id="modules" className="section">
            <ServicesList />
          </Box>
          <Box id="contact_us" className="section">
            <ContactUs />
          </Box>
        </Box>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
