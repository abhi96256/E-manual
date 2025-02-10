import React from 'react';
import pic from "../../assets/lenskart/lease agreement detail page.png"
const headingStyle = { color: "#444",  fontWeight: "bold" };


const LeaseDetails = () => {
  return (
    <div>
      <h2  style={headingStyle}>Lease Agreement Detail Page:</h2>

      <div className="content-section">
        <p>The system manages Lease Agreements, Payee & Documents, Invoices, Payments, Renewals/Increments, and Adjustments for properties.</p><br />
        <img 
          src={pic}
          alt="Property Category Image" 
          style={{ width: '800px', marginRight: '10px' }} 
        /><br /><br />

        <b style={headingStyle}>Property Lease Details:</b><br />
        <br />
        Shows lease agreement details including:<br />
        <ol>
          <li>Lease holder's name (e.g., UDAY PRAKASH KANOI)</li>
          <li>Property address (e.g., Guwahati, G.S Road Asian Palace, Assam, India)</li>
          <li>Category of property (e.g., Shop cum Office)</li>
          <li>Ownership status (e.g., Company Owned and Operated)</li>
          <li>Lease dates (start date, finish date, next renewal date)</li>
          <li>Financial details (amount, security deposit, lock-in period, notice period)</li>
          <li>Lease status (e.g., Approved)</li>
          <li>Lease identification number</li>
        </ol>
      </div>
    </div>
  );
}

export default LeaseDetails;
