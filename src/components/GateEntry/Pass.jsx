import React from 'react';
import  pic from "../../assets/Gate/Print Pass.jpg"

const PrintPass = () => {
  return (
    <div className="print-pass-form">
      <h2>Print Pass:</h2>

      <section className="print-pass-action">
       
        <div className="action-details">
          <strong>Action:</strong>:The system allows <strong> Print Pass </strong>functionality at two stages:
          <div>
           
            <ul>
              <li><strong>After Check-In:</strong></li>
              <ul>
              
                <ul>
                <li>Generates a temporary pass containing Check-In details:</li>
                  <li>Visitor/Vehicle Name</li>
                  <li>Organisation/Vehicle Type</li>
                  <li>Mobile Number/Driver Information</li>
                  <li>Purpose of Visit and Meeting Details</li>
                  <li><strong>Check-In Time and Check-In By</strong></li>
                </ul>
              </ul>
              <li><strong>After Check-Out:</strong></li>
              <ul>
               
                
                <li>Updates the pass with additional Check-Out details, including:</li>
                  <li><strong>Check-Out Time and Check-Out By</strong></li>
                </ul>
              </ul>
            
          </div>
        </div>
      </section>
      <img 
                    src={pic }
                    alt="Print Pass" 
                    style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
                  />

      <section className="ui-elements">
        <h4>UI Elements</h4>
        <div className="print-pass-button">
          <p><strong>Print Pass Button:</strong></p>
          <ul>
            <li>Accessible during both Check-In and Check-Out screens.</li>
            <li>Generates a formatted document displaying:</li>
            <ul>
              <li>Visitor/Vehicle Information</li>
              <li>Meeting/Purpose of Visit Details</li>
              <li>Item/Document Details (if applicable)</li>
              <li><strong>Check-In and Check-Out Time</strong> (after Check-Out)</li>
              <li><strong>Check-In and Check-Out By </strong>(after Check-Out)</li>
            </ul>
          </ul>
        </div>
      </section>

      <section className="actions">
        <h4>Actions</h4>
        <ul>
          <li><strong>Print Pass:</strong> Generates the pass in a print-ready format.</li>
          <li><strong>Cancel:</strong> Exits the Print Pass modal without printing.</li>
        </ul>
      </section>

      <section className="success-criteria">
        <h4>Success Criteria</h4>
        <ul>
          <li>Seamless generation of passes at both Check-In and Check-Out stages.</li>
          <li>Inclusion of accurate, pre-filled Check-In data and updated Check-Out details.</li>
          <li>Clear and formatted display of all relevant information for verification.</li>
        </ul>
      </section>

      <section className="summary">
        <h4>Summary</h4>
        <p>The system efficiently manages Check-In, Check-Out, and Print Pass functionalities for both visitors and vehicles. By enabling seamless registration, validation, and retrieval of pre-stored data, the system ensures accuracy, ease of use, and streamlined operations. The ability to print passes at both entry and exit stages enhances documentation and record-keeping, ensuring transparency and operational efficiency across all user interactions.</p>
        <p>The Check-Out process ensures data consistency by allowing it only after a successful Check-In, while the Print Pass feature facilitates generating entry and exit records for documentation. This ensures operational efficiency, accuracy, and enhanced security across all workflows.</p>
      </section>
    </div>
  );
}

export default PrintPass;
