import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing/landing";
import Register from "./Authentication/register";
import "./App.css";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import LoginPage from "./Authentication/login";
import ValidatePage from "./Authentication/validatepage";
import DashboardPage from "./Dashboard/DashboardPage";

Amplify.configure(config);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function updateAuthStatus(authStatus) {
    setIsAuthenticated(authStatus);
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={<LoginPage updateAuthStatus={updateAuthStatus} />}
          />
          <Route path="/validate" element={<ValidatePage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<DashboardPage updateAuthStatus={updateAuthStatus} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
