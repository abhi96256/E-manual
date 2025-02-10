import React from 'react';
const headingStyle = { color: "#444",  fontWeight: "bold" };

const TestingValidation = () => {
  return (
    <div id="testing-validation">
      <h2 style={headingStyle}>Testing and Validation:</h2>

      <ul>
        <li>
          <strong style={headingStyle}>Testing:</strong> Unit, integration, and user acceptance testing will be conducted to ensure all functionalities meet the requirements.
        </li>
        <br />
        <li>
          <strong style={headingStyle}>Validation:</strong> Regular reviews will be held with stakeholders to validate that the system meets their needs.
        </li>
      </ul>

      <h2 style={headingStyle}>Success Criteria:</h2>
      <ul>
        <li>
          The system will be validated successfully if it passes all test cases and receives sign-off from key stakeholders.
        </li>
      </ul>
    </div>
  );
};

export default TestingValidation;
