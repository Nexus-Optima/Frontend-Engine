import React from "react";
import ExploreModulePage from "./ExploreModulesPage";
import Decklegif from "../Gifs/Deckle_Matching.gif"

const tabs = [
  {
    label: "Deckle Matching",
    description: "Our Deckle Matching tool optimizes sheet trimming to reduce waste and increase profit by leveraging advanced algorithms.",
    image: Decklegif,
    features: [
      "Optimized sheet trimming",
      "Waste reduction",
      "Profit maximization",
      "Advanced algorithm integration",
    ],
  },
];

const ProductionPlanningPage = () => {
  return (
    <ExploreModulePage
      title="Production Planning"
      description="Our Production Planning module leverages AI-driven tools to optimize your manufacturing processes. By integrating advanced algorithms, we help reduce waste, increase efficiency, and boost profitability."
      tabs={tabs}
    />
  );
};

export default ProductionPlanningPage;
