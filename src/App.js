import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./Landing/landing";
import Register from "./Authentication/register";
import LoginPage from "./Authentication/login";
// import ValidatePage from "./Authentication/validatepage";
import Dashboard from "./Dashboard/Dashboard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { getCurrentUser } from "aws-amplify/auth";
import "./App.css";
import Explore_Modules from "./Explore/explore_modules";
import ContactUs from "./ContactUs/contact_us";
import ForgotPassword from "./Settings/ForgotPassword";
import Settings from "./Settings/Settings";

Amplify.configure(config);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  function updateAuthStatus(authStatus) {
    setIsAuthenticated(authStatus);
  }

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        let response = await getCurrentUser();
        const userEmail = response["signInDetails"]["loginId"];
        setIsAuthenticated(true);
        setUserEmail(userEmail);
      } catch (error) {
        console.error("Authentication check failed", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthState();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {!isAuthenticated ? (
            <>
              {/* <Route path="/forgot_password" element={<ForgotPassword />} /> */}
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/login"
                element={<LoginPage updateAuthStatus={updateAuthStatus} />}
              />
              {/* <Route path="/validate" element={<ValidatePage />} /> */}
              <Route path="/register" element={<Register />} />
              <Route path="/explore" element={<Explore_Modules />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route
                path="/dashboard"
                element={<Navigate replace to="/login" />}
              />
            </>
          ) : (
            <>
              <Route path="/forgot_password" element={<ForgotPassword />} />
              <Route
                path="/settings"
                element={<Settings userEmail={userEmail} />}
              />
              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    updateAuthStatus={updateAuthStatus}
                    userEmail={userEmail}
                  />
                } // Pass userEmail as prop
              />
              <Route path="/" element={<Navigate replace to="/dashboard" />} />
              <Route
                path="/login"
                element={<Navigate replace to="/dashboard" />}
              />
              <Route
                path="/register"
                element={<Navigate replace to="/dashboard" />}
              />
              <Route path="/explore" element={<Explore_Modules />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route
                path="/validate"
                element={<Navigate replace to="/dashboard" />}
              />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
