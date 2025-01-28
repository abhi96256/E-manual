// Import React
import React from 'react';
import pic from "../../assets/Gate/Check-Out Process.jpg" 
import DocumentInformation from "../../assets/Gate/Document Information.jpg"
import ItemInformation from "../../assets/Gate/Item Information.jpg"
import Checkout from "../../assets/Gate/Checkout.jpg"


// Define the component
const CheckOutProcess = () => {
  return (
    <div>
      <h2>Check-Out Process</h2>
      <p>
        • <strong>Input:</strong> User retrieves data for a visitor or vehicle previously Checked-In.
      </p>
      <p>
        • <strong>Action:</strong>
      </p>
      <ul>
        <li>
          The system validates that the Check-Out process can only occur after a successful Check-In.
        </li>
        <li>
          Upon entering the Mobile Number (for visitors) or Vehicle Number (for vehicles), the system retrieves all prefilled data captured during Check-In, including:
          <ul>
            <li>Visitor/Vehicle Information</li>
            <li>Meeting/Purpose of Visit Details</li>
            <li>Item Details (if applicable)</li>
          </ul>
        </li>
      </ul>
  <img 
              src={pic}
              alt="Check-Out Process" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />
      <p>User can add or update additional fields during Check-Out, such as:</p>
      <ul>
        <li>
          <strong>Document Information (for vehicles):</strong>Document Date,Document No.,Number of Packets and Weight (Empty/Loaded)
          
        </li>
        <img 
              src={DocumentInformation}
              alt="DocumentInformation" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />
        <li>
          <strong>Item Information (for visitors):</strong>Name, Serial Number, Quantity, and Remarks
          
        </li>
      </ul>
      <img 
              src={ItemInformation}
              alt="Item Information" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />

 

<h3>UI Elements:</h3>
      <ul>
       
        <li>
        <h3>Visitor Check-Out Form</h3>
        <ul>
         <li><strong>Item information:</strong></li> 
          <ul>
            <li><strong>Item Name: </strong>Input field for item description.</li>
            <li><strong>Serial No.:</strong> Optional input for item serial number</li>
            <li><strong>Quantity: </strong>Input field for item quantity</li>
            <li><strong>Remarks:</strong> Text input for comments</li>
            
            </ul>
          </ul>
        </li>

        <ul>
       
        <li>
        <h3>Vehicle Check-Out Form:</h3>
        <ul>
         <li><strong>Vehicle Information:</strong></li> 
          <ul>
            <li><strong>Vehicle Type:</strong> Pre-filled entity.</li>
            <li><strong>Vehicle Number:</strong> Pre-filled and non-editable field</li>
            <li><strong>Driver Name:</strong> Pre-filled and non-editable text field. </li>
            <li><strong>License Number:</strong> Pre-filled and non-editable field. </li>
            <li><strong>Employee Name:</strong> Pre-filled dropdown field.  </li>
            <li><strong>Department:</strong> Pre-filled department field.  </li>
            <li><strong>Supplier: </strong>Pre-filled entity </li>
          

            
            </ul>
          </ul>
        </li>

        <li>
          <strong>Document Information:</strong>
          <ul>
            <li><strong>Document:</strong> Dropdown for document type.</li>
            <li><strong>Document Date:</strong> Date picker.</li>
            <li><strong>Document No.: </strong>Input for document number.</li>
            <li><strong>No. of Packets:</strong> Dropdown and text input for packet details.</li>
            <li><strong> (E/L):</strong> Input fields for empty and loaded weights.</li>
          </ul>
        </li>
      </ul>
      </ul>
      <p>
         Supplier field is mandatory for the loaded check-in of the vehicle.
      </p>
      <p>
         In-case of Empty Check-in and loaded check-out if the vehicle does not have previously attached supplier, the user would be asked to attach the supplier at the time to complete with the process and successfully check-out.
      </p>
  <img 
              src={Checkout }
              alt="Checkout" 
              style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
            />

      <h3>Actions</h3>
      <ul>
        <li>
          <strong>Check-Out:</strong> Finalizes the visitor or vehicle exit and saves Check-Out details.
        </li>
        <li>
          <strong>Close:</strong> Cancels the action and exits the Check-Out form.
        </li>
      </ul>

      <h3>Success Criteria</h3>
      <ul>
        <li>Pre-filling data registered during Check-In.</li>
        <li>Enforcing Check-Out validation only if Check-In exists.</li>
        <li>Capturing additional Check-Out details and storing them successfully.</li>
        <li>Automatically recording the Check-Out timestamp.</li>
      </ul>
    </div>
  );
};

export default CheckOutProcess;
