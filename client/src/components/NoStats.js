import React from "react";
import "../style.css";

const NoStats = ({ stat }) => {

return (
  <div className="no-stats">
  <h2>Sorry, no {stat} stats available for this season</h2>
  </div>
  );
};

export default NoStats;