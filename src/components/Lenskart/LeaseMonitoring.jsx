import React from 'react';
import  pic from "../../assets/lenskart/lease agreement monitoring.png"


const LeaseMonitoring = () => {
  return (
    <div>
      <h2>Lease Agreement Monitoring:</h2>

      <div className="content-section">
        <img
          src={pic}
          alt="Property Category Image"
          style={{ width: '800px', marginRight: '10px' }}
        />
        <br />

        <p>
          The <b>Lease Agreement Monitoring</b> page offers features to track, search, and update invoices
          related to lease agreements across various cities. Users can monitor the status of invoices, filter
          them by multiple criteria, and initiate actions on invoices in progress.
          <br />
        </p>
        <br />

        <b>Key UI Elements & Functionalities:</b>
        <br />
        <br />

        <b>1. Top Navigation Tabs:</b>
        <br />
        <ul>
          <li><b>Invoicing:</b> The default tab to manage lease-related invoices.</li>
          <br />
          <li><b>Renewal:</b> Navigates to lease renewal tracking.</li>
          <br />
          <li><b>Closure:</b> Navigates to the lease closure section for finalized contracts.</li>
          <br />
        </ul>

        <b>2. Filters:</b>
        <br />
        <br />
        <ul>
          <li><b>Year & Month Dropdowns:</b>
            <ul>
              <li>Users can <b>filter invoices</b> by selecting a specific <b>year</b> and <b>month</b> to narrow down relevant entries.</li>
            </ul>
          </li>
          <br />
          <li><b>Date Range Picker:</b>
            <ul>
              <li>Users can specify a <b>From</b> and <b>To</b> date range to further filter the lease invoices.</li>
            </ul>
          </li>
          <br />
          <li><b>Search Box:</b>
            <ul>
              <li>A <b>search field</b> to search specific entries by keywords like Agreement No, Invoice No, or Payee Name.</li>
            </ul>
          </li>
        </ul>
        <br />

        <b>3. Invoice List Table:</b>
        <br />
        <br />
        <ul>
          <li><b>Columns in the Table:</b>
            <ul>
              <li><b>Action:</b> Icons for specific actions like:
                <ul>
                  <li><strong>Edit/View:</strong> Allows the user to view or edit details of the selected invoice.</li>
                  <li><strong>Status Indicator:</strong> Shows a colored status, indicating the current state of the invoice.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><b>SR#:</b> Serial number to organize the entries.</li>
          <li><b>Agreement No:</b> The unique number associated with each lease agreement.</li>
          <li><b>City:</b> Displays the city in which the leased property is located.</li>
          <li><b>Invoice No:</b> The assigned invoice number (can be pre-filled or entered manually).</li>
          <li><b>Invoice Date:</b> The date when the invoice was created.</li>
          <li><b>Payee Name:</b> The name of the store manager, owner, or relevant party assigned for payment.</li>
          <li><b>Invoice Status:</b>
            <ul>
              <li><b>In-Creation:</b> (Yellow) The invoice is being generated but not finalized.</li>
              <li><b>Approved:</b> (Green) The invoice is approved and ready for further processing.</li>
            </ul>
          </li>
          <li><b>From & To Dates:</b> Indicates the duration for which the invoice is applicable (billing period).</li>
          <li><b>Store Code:</b> A unique identifier assigned to each store location, used to link the lease or invoice to a specific store.</li>
          <li><b>Vendor Code:</b> A unique code assigned to the vendor (lessor), used to identify the property owner or leasing party for billing and tracking purposes.</li>
          <li><b>Rent:</b> The monthly rent amount payable for the leased property, as per the lease agreement.</li>
          <li><b>Service Type:</b> The type of service or facility (e.g., maintenance, utilities) provided along with the rent, if applicable.</li>
          <li><b>Amount:</b> The total amount to be paid, inclusive of rent, service charges, and other applicable fees.</li>
          <li><b>Base Amount:</b> The core rent amount before any additional service charges, taxes, or discounts are applied.</li>
        </ul>
        <br />

        <b>4. Action Buttons:</b>
        <br />
        <ul>
          <li><b>Generate Invoice (Top Right):</b>
            <ul>
              <li>This button opens a pop-up to generate a new invoice by specifying the month (as shown in the previous image).</li>
              <li>After generation, the invoice will appear in the list with the status <b>In-Creation.</b></li>
            </ul>
          </li>
        </ul>
        <br />

        <b>5. Functionalities:</b>
        <br />
        <ul>
          <li><b>Invoice Generation & Management:</b>
            <ul>
              <li>Users can initiate new invoices by selecting the <b>Generate Invoice</b> button.</li>
              <li>Invoice status changes from <b>In-Creation</b> to <b>Approved</b> once finalized.</li>
            </ul>
          </li>
          <li><b>Filtering and Search:</b>
            <ul>
              <li>Users can quickly filter invoices by <b>month</b>, <b>date range</b>, or <b>city.</b></li>
              <li>A <b>search bar</b> allows searching by Agreement Number, Invoice Number, or Payee.</li>
            </ul>
          </li>
          <li><b>Monitoring Status and Actions:</b>
            <ul>
              <li>Users can edit/view the invoices by clicking the action icon in the Action column.</li>
              <li>The color-coded Invoice Status provides quick insight into the progress.</li>
            </ul>
          </li>
          <li><b>Assignment of Payee:</b>
            <ul>
              <li>For each invoice, a <b>payee name</b> is assigned to manage payments.</li>
              <li>If invoices are <b>non-GST</b>, they do not require collection, as mentioned earlier.</li>
            </ul>
          </li>
        </ul>

        <b>To ensure data integrity and avoid discrepancies, the system will validate the following things at the time of invoice submission:</b>
        <br />
        <ul>
          <li>Duplicate Invoice No in FY,</li>
          <li>Rent Month - Service</li>
          <li>Single Invoice can have Rent and CAM</li>
          <li>Agreement terms</li>
        </ul>

        <b>Duplicate Invoice No in FY, Other Requested Features:</b>
        <br />
        <ul>
          <li>All fields should be editable at Finance End.</li>
          <li>Approval and Rejection.</li>
          <li>Screen for Finance.</li>
          <li>After approval, it will go to Payment.</li>
          <li>Column for Payment to be done.</li>
        </ul>

        <b>Other Workflows to be Developed:</b>
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
