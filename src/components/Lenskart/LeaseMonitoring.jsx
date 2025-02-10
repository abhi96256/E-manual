import React from 'react';
import  pic from "../../assets/lenskart/lease agreement monitoring.png"
const headingStyle = { color: "#444",  fontWeight: "bold" };


const LeaseMonitoring = () => {
  return (
    <div>
      <h2  style={headingStyle}>Lease Agreement Monitoring:</h2>

      <div className="content-section">
        <img
          src={pic}
          alt="Property Category Image"
          style={{ width: '800px', marginRight: '10px' }}
        />
        <br />

        <p>
          The <b style={headingStyle}>Lease Agreement Monitoring</b> page offers features to track, search, and update invoices
          related to lease agreements across various cities. Users can monitor the status of invoices, filter
          them by multiple criteria, and initiate actions on invoices in progress.
          <br />
        </p>
        <br />

        <b style={headingStyle}>Key UI Elements & Functionalities:</b>
        <br />
        <br />

        <b style={headingStyle}>1. Top Navigation Tabs:</b>
        <br />
        <ul>
          <li><b style={headingStyle}>Invoicing:</b> The default tab to manage lease-related invoices.</li>
          <br />
          <li><b style={headingStyle}>Renewal:</b> Navigates to lease renewal tracking.</li>
          <br />
          <li><b style={headingStyle}>Closure:</b> Navigates to the lease closure section for finalized contracts.</li>
          <br />
        </ul>

        <b style={headingStyle}>2. Filters:</b>
        <br />
        <br />
        <ul>
          <li><b style={headingStyle}>Year & Month Dropdowns:</b>
            <ul>
              <li>Users can <b style={headingStyle}>filter invoices</b> by selecting a specific <b style={headingStyle}>year</b> and <b style={headingStyle}>month</b> to narrow down relevant entries.</li>
            </ul>
          </li>
          <br />
          <li><b style={headingStyle}>Date Range Picker:</b>
            <ul>
              <li>Users can specify a <b style={headingStyle}>From</b> and <b style={headingStyle}>To</b> date range to further filter the lease invoices.</li>
            </ul>
          </li>
          <br />
          <li><b style={headingStyle}>Search Box:</b>
            <ul>
              <li>A <b style={headingStyle}>search field</b> to search specific entries by keywords like Agreement No, Invoice No, or Payee Name.</li>
            </ul>
          </li>
        </ul>
        <br />

        <b style={headingStyle}>3. Invoice List Table:</b>
        <br />
        <br />
        <ul>
          <li><b style={headingStyle}>Columns in the Table:</b>
            <ul>
              <li><b style={headingStyle}>Action:</b> Icons for specific actions like:
                <ul>
                  <li><strong style={headingStyle}>Edit/View:</strong> Allows the user to view or edit details of the selected invoice.</li>
                  <li><strong style={headingStyle}>Status Indicator:</strong> Shows a colored status, indicating the current state of the invoice.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><b style={headingStyle}>SR#:</b> Serial number to organize the entries.</li>
          <li><b style={headingStyle}>Agreement No:</b> The unique number associated with each lease agreement.</li>
          <li><b style={headingStyle}>City:</b> Displays the city in which the leased property is located.</li>
          <li><b style={headingStyle}>Invoice No:</b> The assigned invoice number (can be pre-filled or entered manually).</li>
          <li><b style={headingStyle}>Invoice Date:</b> The date when the invoice was created.</li>
          <li><b style={headingStyle}>Payee Name:</b> The name of the store manager, owner, or relevant party assigned for payment.</li>
          <li><b style={headingStyle}>Invoice Status:</b>
            <ul>
              <li><b style={headingStyle}>In-Creation:</b> (Yellow) The invoice is being generated but not finalized.</li>
              <li><b style={headingStyle}>Approved:</b> (Green) The invoice is approved and ready for further processing.</li>
            </ul>
          </li>
          <li><b style={headingStyle}>From & To Dates:</b> Indicates the duration for which the invoice is applicable (billing period).</li>
          <li><b style={headingStyle}>Store Code:</b> A unique identifier assigned to each store location, used to link the lease or invoice to a specific store.</li>
          <li><b style={headingStyle}>Vendor Code:</b> A unique code assigned to the vendor (lessor), used to identify the property owner or leasing party for billing and tracking purposes.</li>
          <li><b style={headingStyle}>Rent:</b> The monthly rent amount payable for the leased property, as per the lease agreement.</li>
          <li><b style={headingStyle}>Service Type:</b> The type of service or facility (e.g., maintenance, utilities) provided along with the rent, if applicable.</li>
          <li><b style={headingStyle}>Amount:</b> The total amount to be paid, inclusive of rent, service charges, and other applicable fees.</li>
          <li><b style={headingStyle}>Base Amount:</b> The core rent amount before any additional service charges, taxes, or discounts are applied.</li>
        </ul>
        <br />

        <b style={headingStyle}>4. Action Buttons:</b>
        <br />
        <ul>
          <li><b style={headingStyle}>Generate Invoice (Top Right):</b>
            <ul>
              <li>This button opens a pop-up to generate a new invoice by specifying the month (as shown in the previous image).</li>
              <li>After generation, the invoice will appear in the list with the status <b style={headingStyle}>In-Creation.</b></li>
            </ul>
          </li>
        </ul>
        <br />

        <b style={headingStyle}>5. Functionalities:</b>
        <br />
        <ul>
          <li><b style={headingStyle}>Invoice Generation & Management:</b>
            <ul>
              <li>Users can initiate new invoices by selecting the <b style={headingStyle}>Generate Invoice</b> button.</li>
              <li>Invoice status changes from <b style={headingStyle}>In-Creation</b> to <b style={headingStyle}>Approved</b> once finalized.</li>
            </ul>
          </li>
          <li><b style={headingStyle}>Filtering and Search:</b>
            <ul>
              <li>Users can quickly filter invoices by <b style={headingStyle}>month</b>, <b style={headingStyle}>date range</b>, or <b style={headingStyle}>city.</b></li>
              <li>A <b style={headingStyle}>search bar</b> allows searching by Agreement Number, Invoice Number, or Payee.</li>
            </ul>
          </li>
          <li><b style={headingStyle}>Monitoring Status and Actions:</b>
            <ul>
              <li>Users can edit/view the invoices by clicking the action icon in the Action column.</li>
              <li>The color-coded Invoice Status provides quick insight into the progress.</li>
            </ul>
          </li>
          <li><b style={headingStyle}>Assignment of Payee:</b>
            <ul>
              <li>For each invoice, a <b style={headingStyle}>payee name</b> is assigned to manage payments.</li>
              <li>If invoices are <b style={headingStyle}>non-GST</b>, they do not require collection, as mentioned earlier.</li>
            </ul>
          </li>
        </ul>

        <b style={headingStyle}>To ensure data integrity and avoid discrepancies, the system will validate the following things at the time of invoice submission:</b>
        <br />
        <ul>
          <li>Duplicate Invoice No in FY,</li>
          <li>Rent Month - Service</li>
          <li>Single Invoice can have Rent and CAM</li>
          <li>Agreement terms</li>
        </ul>

        <b style={headingStyle}>Duplicate Invoice No in FY, Other Requested Features:</b>
        <br />
        <ul>
          <li>All fields should be editable at Finance End.</li>
          <li>Approval and Rejection.</li>
          <li>Screen for Finance.</li>
          <li>After approval, it will go to Payment.</li>
          <li>Column for Payment to be done.</li>
        </ul>

        <b style={headingStyle}>Other Workflows to be Developed:</b>
        <br />
        <ol>
          <li>Invoice Rejection.</li>
          <li>Transfer invoice to BD team for negotiation & corrections.</li>
          <li>Rent escalations.</li>
          <li>Agreement Closure.</li>
          <li>Deductions & hold payments.</li>
          <li>GST Status Update.</li>
        </ol>
      </div>
    </div>
  );
};

export default LeaseMonitoring;
