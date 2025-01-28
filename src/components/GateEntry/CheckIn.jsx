import React from 'react';
import  pic from "../../assets/Gate/Vehicle Number Search.jpg"
import  pic1 from "../../assets/Gate/If the vehicle does not exist.jpg"
import  ADDVehicle from "../../assets/Gate/ADD Vehicle.jpg"
import  DocumentInformation from "../../assets/Gate/Document Information.jpg"
import  PackagingInformation from "../../assets/Gate/Packaging Information.jpg"
import  Quantity from "../../assets/Gate/Quantity.jpg"
import MobileNumberSearch from "../../assets/Gate/Mobile Number Search.jpg"
import NumberNotExist from "../../assets/Gate/If the number does not exist.jpg"





const CheckIn = () => {
    return (
        <div className="vehicle-checkin">
            <h2>Check-In Process:</h2>

            <section>
                <h3>Input:</h3>
                <p>User enters a Vehicle Number.</p>

                <h3>Action:</h3>
                <ul>
                    <li>
                        <strong>If the vehicle exists:</strong> The form pre-fills all stored vehicle details (e.g., driver name, vehicle type, mobile number).
                    </li>
                    <img 
                    src={pic }
                    alt="Vehicle Number Search" 
                    style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
                  />
                    <li>
                        <strong>If the vehicle does not exist:</strong> The form appears blank for new vehicle registration.
                    </li>
                </ul>
            </section>
            <img 
                    src={pic1 }
                    alt="Vehicle does exist " 
                    style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
                  />

            <section>
                <h3>UI Elements</h3>
                <h3>Vehicle Information Form:</h3>
                <ul>
                    <li><strong>Vehicle Type:</strong> Dropdown to select the type of vehicle (e.g., Car, Truck, etc.).</li>
                    <li><strong>Vehicle No.:</strong> Text field (pre-filled if data exists).</li>
                    <li><strong>Driver Name:</strong> Text input for driver’s name.</li>
                    <li><strong>License No.:</strong> Optional text field for the driver’s license number.</li>
                    <li><strong>Employee Name:</strong> Dropdown for linked employee.</li>
                    <li><strong>Department:</strong> Dropdown for selecting a department.</li>
                    <li><strong>Supplier:</strong> Dropdown for selecting supplier in case of loaded vehicle.</li>
                    <li><strong>In-Weight (E/L):</strong> Input fields for getting in the loaded and empty weight check for the vehicle.</li>
                    <li><strong>Mobile No.:</strong> Text input for the contact number of the driver.</li>
                </ul>

                <h3>Status Type:</h3>
                <ul>
                    <li>Radio button: Loaded or Empty (mandatory).</li>
                </ul>

                <h3>Actions:</h3>
                <ul>
                    <li><strong>Check-In:</strong> Submits the form and saves vehicle entry.</li>
                    <li><strong>Clear:</strong> Resets the form fields.</li>
                    <li><strong>Search:</strong> Retrieves stored data using the Vehicle Number.</li>
                </ul>

                <p>
                    If the Status Type is set to 'Loaded' and the vehicle is checked-in, additional UI elements will become visible to complete the vehicle registration process.
                </p>
            </section>
            <img 
                    src={ADDVehicle}
                    alt="ADD Vehicle " 
                    style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
                  />


            <section>
                <h3>Document Information:</h3>
                <p>
                    This section is to be filled with documents directly related to the loaded vehicle, ensuring they are accurately registered alongside the vehicle during the process to enhance reliability and streamline the registration workflow.
                </p>
                <ul>
                    <li><strong>Date:</strong> Fills up with the date on which the document getting attached is issued.</li>
                    <li><strong>Number:</strong> Input field to be filled with document number for the document.</li>
                </ul>
                <p>
                    Document Information section must enforce proper input of issue dates and unique document numbers, with error prompts for duplicates or invalid data.
                </p>
            </section>
            <img 
                    src={DocumentInformation}
                    alt="Document Information " 
                    style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
                  />

            <section>
                <h3>Packaging Information:</h3>
                <p>
                    This section is to be filled with information regarding the packages loaded with the Vehicle.
                </p>
                <ul>
                    <li><strong>Quantity:</strong> Input field for item description.</li>
                    <li><strong>Packaging:</strong> Dropdown for the packaging type for the package loaded.</li>
                </ul>
                <img 
                    src={Quantity}
                    alt="Quantity" 
                    style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
                  />
                <p>
                    Packaging Information section must allow entry of package details with unique packaging types, preventing duplicate entries and displaying appropriate error messages.
                </p>
            </section>
            <img 
                    src={PackagingInformation}
                    alt="Packaging Information" 
                    style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
                  />

            <section>
                <h2>Success Criteria</h2>
                <ul>
                    <li>The process must ensure robust data integrity, streamline vehicle registration workflows, and enhance reliability, resulting in a user-friendly and efficient interface.</li>
                    <li>
                        The system must prevent data redundancy by ensuring that document numbers, packaging types, and other unique identifiers are not duplicated within the same registration entry, with real-time validations and error prompts to maintain data integrity.
                    </li>
                    <li>
                        The system must ensure clear communication of errors or validations to users, guiding them to correct input issues seamlessly.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Summary</h2>
                <p>
                    The check-in process is designed to ensure robust data integrity, streamline vehicle registration workflows, and enhance reliability through a user-friendly interface. The system prevents data redundancy by implementing real-time validations, ensuring that unique identifiers such as document numbers, packaging types, and other critical data points are not duplicated within the same entry.
                </p>
                <p>
                    Clear communication of errors and validation prompts guides users to seamlessly address input issues, maintaining accurate and reliable records. This approach results in an efficient check-in experience that fosters data accuracy and supports smooth, streamlined operations.
                </p>
            </section>
            <section>
                <br/>
                <h2>Visitor Registration Functional Requirements </h2>
                <h3> Mobile Number Search :</h3> 
                <ul>
                    
                
                  <li>
                  <strong>Input: </strong>User enters a <strong>Mobile Number. </strong><br/>
                  <strong>•	Action: </strong><ul><li>
                 <strong>If the number exists:</strong>  Pre-fills visitor details into the form. 
                  </li>
                  </ul>
                
                  </li>
                   <img 
                                src={ MobileNumberSearch }
                                alt="Mobile Number Search" 
                                style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
                              />
                    
                    <li>
                        <strong>If the vehicle does not exist:</strong> The form appears blank for new vehicle registration.
                    </li>

                </ul>
                <img 
                                src={ NumberNotExist }
                                alt="If the number does not exist" 
                                style={{ width: '850px', marginRight: '10px', marginLeft: '30px' }} 
                              />
                
            </section>
            <section>
                <h2>UI Elements</h2>
                <h3>•	Visitor Information: </h3>
                <ul>
                    <li><strong>Name:</strong> Dropdown for title (Mr./Ms.) + text fields for First Name and Last Name. </li>
                    <li><strong>Organisation Name: </strong> Text input for organization name.</li>
                    <li><strong>Mobile No: </strong> Pre-filled text field (non-editable)</li>
                    <li><strong>oEmail ID:</strong> Optional input for the visitor’s email address.</li>

                  
                  
                </ul>
                </section>
                <section>
                <h3>•	Meeting Details: </h3>
                <ul>
                    <li><strong>Employee Name: </strong>Dropdown to select the employee the visitor is meeting. </li>
                    <li><strong>Department:  </strong> Dropdown for the relevant department</li>
                    <li><strong>Designation: </strong> Optional input for visitor’s designation.</li>
                    <li><strong>Visit Purpose: </strong> Dropdown for selecting the reason for the visit.</li>

                  
                  
                </ul>

                
                </section>
                <section>
                <h3>• Item Details </h3>
                <ul>
                    <li><strong>Item Name: </strong> Input field for item description</li>
                    <li><strong>Sr. No.  </strong>  Input for serial number (optional)..</li>
                    <li><strong>Quantity:  </strong> Field for item quantity.</li>
                    <li><strong>Remarks: </strong> Free text for comments or notes</li>

                  
                  
                </ul>

                </section>
                <section>
                    <h3>Actions:</h3>
                    <ul>
                    <li><strong>Check-In:</strong> Finalizes the visitor's entry.</li>
                    <li><strong>Clear: </strong>  Resets the form.</li>
                    <li><strong>Search: </strong> Retrieves details using the <strong>Mobile Number</strong></li>
                    <li><strong>Save Contact:</strong> Saves a new visitor’s contact details.</li>

                    </ul>
                </section>

                <section>
                    <h3>Success Criteria</h3>
                    <ul>
                    <li>Pre-filling stored data for existing visitors.</li>
                    <li>Efficient handling of new visitor additions without interruption.</li>
                    

                    </ul>
                </section>
            
        </div>
    );
};



export default CheckIn;

