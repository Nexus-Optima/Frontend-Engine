import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./Landing/landing";
import Register from "./Authentication/register";
import LoginPage from "./Authentication/login";
import Dashboard from "./Dashboard/Dashboard";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import "./App.css";
import ExploreModules from "./Explore/explore_modules";
import ContactUs from "./ContactUs/contact_us";
import ForgotPassword from "./Settings/ForgotPassword";
import Settings from "./Settings/Settings";
import { UserProvider, useUser } from "./Context/userContext";
import ProductionPlanningPage from "./Explore/ProductionPlanningPage";
import PurchaseManagementPage from "./Explore/PurchaseManagementPage";

Amplify.configure(config);

function ProtectedRoute({ children }) {
  const { user } = useUser();
  return user.isAuthenticated ? children : <Navigate replace to="/login" />;
}

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/explore" element={<ExploreModules />} />
            <Route path="/explore/purchase-management" element={<PurchaseManagementPage />} />
            <Route path="/explore/production-planning" element={<ProductionPlanningPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            {/* Redirect user if they access any unknown route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
