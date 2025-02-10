import React from "react";
const headingStyle = { color: "#444",  fontWeight: "bold" };


const Dependencies = () => {
  return (
    <div className="dependencies">
      <h2  style={headingStyle}>Dependencies</h2>
      <ul>
        <li>API Integration by Zvolv for importing data.</li>
        
        <li>Integration with Microsoft D365.</li>
      </ul>
    </div>
  );
};

export default Dependencies;
