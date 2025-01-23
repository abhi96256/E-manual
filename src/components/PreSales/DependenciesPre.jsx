import React from 'react';

const Dependencies = () => {
  return (
    <section id="system-dependencies">
      <h2>Dependencies:</h2>
      <ul>
        <li>
          The system depends on external APIs for location tracking (e.g., Google
          Maps API).
        </li>
        <br />
        <li>Integration with existing CRM systems is required.</li>
      </ul>

      <h2>Success Criteria:</h2>
      <p>
        The system will be considered successful if all dependencies are correctly
        integrated and function as expected, with minimal disruptions to ongoing
        operations.
      </p>
    </section>
  );
};

export default Dependencies;
