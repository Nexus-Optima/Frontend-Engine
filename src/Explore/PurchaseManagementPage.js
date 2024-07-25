import React from "react";
import ExploreModulePage from "./ExploreModulesPage";
import Forecastgif from "../Gifs/Forecasting.gif";

const tabs = [
  {
    label: "Forecast Tool",
    description: "Our Forecast Tool uses advanced AI algorithms to predict market trends for various commodities. This helps in making informed purchasing decisions.",
    image: Forecastgif,
    features: [
      "AI-driven market trend analysis",
      "Informed purchasing decisions",
      "Real-time data integration",
      "Customizable forecasting models",
    ],
  },
];

const PurchaseManagementPage = () => {
  return (
    <ExploreModulePage
      title="Purchase Management"
      description="Our Purchase Management module features AI and machine learning-powered models for advanced commodity forecasting and related services. These state-of-the-art tools accurately predict market trends, enabling you to make informed buying decisions, optimize inventory, and reduce costs."
      tabs={tabs}
    />
  );
};

export default PurchaseManagementPage;
