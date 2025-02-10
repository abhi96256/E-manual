import React from 'react';
const headingStyle = { color: "#444",  fontWeight: "bold" };

const NonFunctional = () => {
  return (
    <div id="non-functional-requirements">
      <h2 style={headingStyle}>Non-Functional Requirements:</h2>

      <h3 style={headingStyle}>Performance</h3>
      <p>
        The system should handle a large volume of leads and activities without performance degradation.
      </p>

      <h3 style={headingStyle}>Usability</h3>
      <p>
        The user interface should be intuitive, ensuring users can manage leads and activities with minimal training.
      </p>

      <h3 style={headingStyle}>Security</h3>
      <p>
        Data should be protected using industry-standard encryption, with access controls ensuring only authorized users can view or modify sensitive information.
      </p>

      <h3 style={headingStyle}>Success Criteria</h3>
      <p>Non-functional success will be determined by:</p>
      <ul>
        <li>
          System performance under load, ensuring it can handle a large volume of leads and activities without performance degradation.
        </li>
        <li>
          User satisfaction surveys post-implementation to measure ease of use and effectiveness.
        </li>
        <li>
          Successful security audits to confirm appropriate protection mechanisms are in place.
        </li>
      </ul>
    </div>
  );
};

export default NonFunctional;
