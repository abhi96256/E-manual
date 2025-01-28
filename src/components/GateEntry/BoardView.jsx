// Import React
import React from 'react';
import  pic from "../../assets/Gate/Board View.png"


// Define the component
const BoardView = () => {
  return (
    <div className="board-view">
      <h2>Board View:</h2>

      <section className="ui-elements">
        <h4>UI Elements</h4>
        <ul>
          <li>
            <strong>Visitor and Vehicle Cards:</strong> Each card displays critical details such as visitor/vehicle name, contact information, entry type, and check-in/out times.
          </li>
          <li>
            <strong>Counter:</strong> Displays the total number of recorded entries in the system, categorized by vehicles and visitors. The count varies and differentiates based on branch and gate entries for the selected date.
          </li>
          <li>
            <strong>Filters:</strong> Provides multiple options to enhance the user experience for entering and accessing entries. Users can filter by branch, gate, entry type, and date. Additional features include buttons to add new visitors or vehicles and a search bar for quick access to locally fetched data.
          </li>
          <li>
            <strong>Status Indicators:</strong> Display the current state of check-in or check-out for visitors and vehicles, including the auto-captured date and time for both check-in and check-out.
          </li>
          <li>
            <strong>Additional Functionalities:</strong>
            <ul>
              <li><strong>Print-Pass:</strong> For printing the gate pass.</li>
              <li><strong>Close Entry:</strong> To finalize and close the entry, preventing additional inputs or document uploads after check-out.</li>
            </ul>
          </li>
        </ul>
      </section>

      <img 
              src={pic}
              alt="Board View" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />

      <section className="actions">
        <h4>Actions</h4>
        <ul>
          <li>
            <strong>Summarized View of Entries:</strong>
            <ul>
              <li>All entries are displayed as individual cards, each showcasing critical details, including visitor/vehicle name, contact information, entry type, and check-in/out times.</li>
              <li>The cards are organized to provide a quick, clear overview of ongoing and completed activities, helping users monitor real-time operations.</li>
            </ul>
          </li>

          <li>
            <strong>Performing Check-Out and Printing Passes:</strong>
            <ul>
              <li>Each card allows users to perform check-out for visitors or vehicles directly, ensuring seamless management of exit processes.</li>
              <li>Users can also generate and print gate passes for individual entries from the same interface, streamlining administrative tasks.</li>
            </ul>
          </li>

          <li>
            <strong>Filtering and Searching for Entries:</strong>
            <ul>
              <li>The system includes robust filtering options to narrow down entries based on branch, gate, entry type, and date.</li>
              <li>A search bar is available to quickly find specific visitors or vehicles using keywords, such as names, contact details, or other relevant information.</li>
            </ul>
          </li>

          <li>
            <strong>Counters for Quick Reference:</strong>
            <ul>
              <li>The interface displays a counter showing the total number of recorded entries, categorized by vehicles and visitors. This count adjusts dynamically based on the selected branch, gate, and date.</li>
            </ul>
          </li>

          <li>
            <strong>Real-Time Status Indicators:</strong>
            <ul>
              <li>Cards feature status indicators that highlight the current state of check-in or check-out for each visitor or vehicle. The indicators include auto-captured check-in and check-out dates and times for accurate tracking.</li>
            </ul>
          </li>

          <li>
            <strong>Additional Functionalities for Streamlined Processes:</strong>
            <ul>
              <li><strong>Print-Pass:</strong> Allows users to generate and print gate passes directly from the interface.</li>
              <li><strong>Close Entry:</strong> Enables the finalization of an entry by preventing further inputs or document uploads after check-out, ensuring data integrity. Once the entry is closed, no further actions can be performed, and only a view-only mode is available for the user to access the entry.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="success-criteria">
        <h4>Success Criteria</h4>
        <ul>
          <li><strong>Quick Access:</strong> Users can interact with individual entries directly from the main interface without additional navigation.</li>
          <li><strong>Streamlined Workflows:</strong> Check-out and pass generation are completed in minimal steps directly from the card layout.</li>
          <li><strong>Enhanced Usability:</strong> Filters and search functionalities allow users to locate entries quickly, with clear visual indicators for entry status.</li>
          <li><strong>Accuracy and Performance:</strong> Auto-captured data is displayed in real-time, ensuring accurate records, with the system handling large entry volumes efficiently.</li>
        </ul>
      </section>

      <section className="summary">
        <h4>Summary</h4>
        <p>The Board View offers a visually intuitive, card-based layout that enhances the management of visitor and vehicle entries. Each card displays essential details, including visitor or vehicle name, contact information, entry type, and check-in/out times, providing a clear and concise overview of all records. This design enables users to interact directly with individual entries, streamlining workflows without requiring additional navigation.</p>
        <p>Integrated actionable buttons on each card allow seamless execution of key tasks, such as check-out and gate pass generation, making the process faster and more efficient. The inclusion of real-time updates, such as auto-captured check-in and check-out data, ensures accurate tracking of records. Additionally, robust filtering and search functionalities allow users to locate specific entries effortlessly, enhancing accessibility and operational efficiency. The Board View’s focus on simplicity and functionality provides a centralized platform for managing high volumes of entries with ease and precision.</p>
      </section>
    </div>
  );
};

// Export the component
export default BoardView;
