import React from 'react';
import  pic from "../../assets/lenskart/add payee form(payee form).png"
import  pic1 from "../../assets/lenskart/payee management.png"
import  pic2 from "../../assets/lenskart/add lease payee service.png"
import  pic3 from "../../assets/lenskart/pdf.png"
import  pic4 from "../../assets/lenskart/invoice preparation.png"
import  pic5 from "../../assets/lenskart/incremenet managemement.png"
import  pic6 from "../../assets/lenskart/next lease.png"
import  pic7 from "../../assets/lenskart/add adjustmenets.png"
import  pic8 from "../../assets/lenskart/next 2.png"



const PayeeManagement = () => {
    return (
        <div>
            <h2>Payee Form and Management:</h2>

            <div className="content-section">
                <p>
                    If the user clicks on the "Add Payee" button, a form for adding a new payee will display as shown below. The user fills in the required fields and clicks on the "Save" button. The system validates the information and adds the payee to the lease.
                </p>
                <ul>
                    <li><b>Add Payee Form:</b></li>
                </ul>
                <img src={pic} alt="Property Category Image" style={{ width: '900px', marginRight: '10px' }} />
                <p>It allows for the addition of multiple payees and associated documents.</p>
                <br /><br />
                <ul>
                    <li><b>Payee Management:</b></li>
                </ul>
                <br />
                <img src={pic1} alt="Property Category Image" style={{ width: '600px', marginRight: '10px' }} />
                <br /><br />
                <b>Displays payee details:</b>
                <ol>
                    <li>Payee name and address.</li>
                    <li>Bank details (account number, IFSC code, bank name, branch name).</li>
                    <li>Validity period for the payee information.</li>
                    <li>Option to add new payees via a form with fields for personal and bank information.</li>
                    <li>Some action buttons are also there for disabling payee, adding payee services, and viewing payee services.</li>
                </ol>
                <p>If the user clicks on the "+" icon, the following pop-up for adding payee services will display.</p>
                <br />
                <img src={pic2} alt="Property Category Image" style={{ width: '500px', marginRight: '10px' }} />
                <br />
                <p>
                    Select service type and invoice frequency. Enter the from date, to date, and amount for the service. Enter Variable (%) if there is any then Click "Add" to save the service details.
                </p>
            </div>

            <div className="content-section">
                <ul>
                    <li><b>Managing Documents:</b></li>
                </ul>
                <p>If the user clicks on the "Add Document" button, the system prompts them to upload a document.</p>
                <p>Users can upload the document, which is then associated with the lease.</p>
                <br />
                <img src={pic3} alt="Property Category Image" style={{ width: '400px', marginRight: '10px' }} />
                <br />
                <p>Users should be able to add, view, and remove the attached documents.</p>
            </div>

            <div className="content-section">
                <ul>
                    <li><b>Invoice Preparation:</b></li>
                </ul>
                <p>Select the month for which the invoice is to be generated. Click on the "Generate Invoice" button to create the invoice.</p>
                <img src={pic4} alt="Property Category Image" style={{ width: '700px', marginRight: '10px' }} />
                <br />
                <p>It provides functionality to generate invoices based on specific <b>property categories</b>, including <b>Mall, Non-Mall, and Non-GST properties</b>. The invoice generation workflow follows these guidelines:</p>
                <br />
                <b>1. Category-Based Invoice Generation:</b>
                <ul>
                    <li>Users can generate invoices by selecting the relevant property category (Mall, Non-Mall, or Non-GST).</li>
                    <li>This categorization ensures that the correct invoice format and applicable rules are applied during the process.</li>
                </ul>

                <b>2. Assignment of Invoices:</b>
                <ul>
                    <li><b>Mall/Non-Mall Invoices:</b></li>
                    <ul>
                        <li>These invoices can be assigned to the <b>Store Manager</b> or <b>Property Owner</b> for further tracking and collection.</li>
                    </ul>
                    <li><b>Non-GST Invoices:</b></li>
                    <ul>
                        <li>For non-GST properties, invoices are created without any GST inclusion, and there is no collection process associated with them.</li>
                    </ul>
                </ul>

                <b>3. Month-Based Invoice Generation:</b>
                <ul>
                    <li>Users need to select the <b>month</b> for which the invoice is to be generated, as seen in the UI.</li>
                    <li>This ensures that each invoice corresponds to a specific billing period, facilitating accurate financial tracking.</li>
                </ul>
                <p>This streamlined approach ensures compliance with different property categories and improves the clarity of invoicing for all stakeholders, reducing errors in tax handling and ensuring that the correct individuals are assigned for follow-up.</p>
            </div>

            <div className="content-section">
                <ul>
                    <li><b>Lease Renewal and Increment Management:</b></li>
                </ul>
                <img src={pic5} alt="Property Category Image" style={{ width: '800px', marginRight: '10px' }} />
                <p>Click on the "Renewal" tab to view renewal details. Add new increments by clicking the "Add Increment" button, and the following dialog box will open.</p>
                <img src={pic6} alt="Property Category Image" style={{ width: '800px', marginRight: '10px' }} />
                <br />
                <p>Enter details such as increment date, apply from date, increment type, increment percentage, and increment amount. Save the increment details by hitting the "Save" button.</p>
            </div>

            <div className="content-section">
                <ul>
                    <li><b>Add Adjustments:</b></li>
                </ul>
                <img src={pic7} alt="Property Category Image" style={{ width: '800px', marginRight: '10px' }} />
                <p>This feature allows users to add adjustments or discounts to lease agreements. If the user clicks on the "+" icon, then the following window will appear.</p>
                <img src={pic8} alt="Property Category Image" style={{ width: '800px', marginRight: '10px' }} />
                <br />
                <b>Adjustment Form:</b>
                <ul>
                    <li><b>Category:</b> User selects the adjustment category from the dropdown list.</li>
                    <li><b>Payee Service:</b> User selects the payee service from the dropdown list.</li>
                    <li><b>Applicability:</b> User selects the applicability of the adjustment from the dropdown list. Options may include Discount, Item Line, etc.</li>
                    <li><b>BN Item No:</b> If the user selects the applicability as Item Line, they need to select the BN Item number, which is mandatory. The BN Item number is selected from the dropdown list.</li>
                    <li><b>Month:</b> User selects the month for which the adjustment applies using the date picker.</li>
                    <li><b>Type:</b> User selects the type of adjustment from the dropdown list. Types can include options like Percentage, Amount, etc.</li>
                    <li><b>Amount %:</b> User enters the percentage of the adjustment if the ‘Type’ is Percentage.</li>
                    <li><b>Amount:</b> User enters the amount of the adjustment if the ‘Type’ is Amount.</li>
                    <li><b>Remark:</b> User enters any remarks or notes regarding the adjustment.</li>
                    <li><b>Save:</b> User clicks the "Save" button to save the adjustment. The system validates the inputs and, if valid, saves the adjustment. A confirmation message is displayed upon successful saving.</li>
                    <li><b>Close:</b> User clicks the "Close" button to close the form without saving any changes. No data is saved, and the dialog is closed.</li>
                </ul>
            </div>
        </div>
    );
};

export default PayeeManagement;
