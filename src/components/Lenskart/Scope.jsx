import React from 'react';

const Scope = () => {
  return (
    <div>
      <h2>Scope of the Document:</h2>
      <p>
        This Functional Requirements Document (FRD) outlines the specific
        functionalities to be developed and implemented as part of the
        <b>Lease Management Module</b> in FebiNext.
      </p>
      <p>The FRD covers the following key areas:</p>

      <div className="section">
        <h2>1. Property and Lease Management:</h2>
        <p>
          <b>• Property Management:</b> The system will store essential property
          details, including ownership types, categories, lease tenure, and
          operational dates, ensuring effective property portfolio management.
        </p>
        <p>
          <b>• Lease Creation:</b> Users can create new leases by entering key
          details such as lease start and end dates, rental amounts, and terms.
          Duplicate entries will be avoided through system validation against
          existing records.
        </p>
        <p>
          <b>• Lease Tracking:</b> The lifecycle of each lease will be managed
          within the system, including rent status, renewal timelines, and
          extensions. Users can filter lease information based on date range &amp;
          state.
        </p>
      </div>
      <br />

      <div className="section">
        <h2>2. Rent and Payment Management:</h2>
        <p>
          <b>• Rent Parameters:</b> The system will support the configuration of
          detailed rent parameters, such as rent amount, lease area, rate per
          square foot, start date, lock-in period, and notice period, accommodating
          both fixed and variable rent structures.
        </p>
        <p>
          <b>• Penalty for Delayed Payment:</b> Users can configure penalties for
          delayed rent payments, ensuring compliance with lease terms. The penalty
          rules will be automatically applied to overdue payments.
        </p>
        <p>
          <b>• Security Deposit Management:</b> The system will store and track
          security deposits for each lease, including details of deposit amounts
          and any deductions, ensuring complete transparency.
        </p>
        <p>
          <b>• Lease Renewal Parameters:</b> Lease renewal rules can be configured,
          including predefined escalation clauses for rent increases.
        </p>
        <p>
          <b>• Add Payee:</b> Users will be able to define payees associated with
          each lease, along with their bank details and payment terms, to
          streamline the payment process.
        </p>
        <br />
      </div>

      <div className="section">
        <h2>3. Documentation Management:</h2>
        <p>
          <b>• Document Management:</b> All lease-related documents, including
          agreements, ownership certificates, and invoices, will be stored and
          managed within the system. Users can easily upload, access, and organize
          documents for each lease.
        </p>
      </div>
      <br />

      <div className="section">
        <h2>4. User Roles and Access Control:</h2>
        <p>
          <b>• Role-Based Access Control:</b> The system will implement role-based
          access to ensure that only authorized users can view or modify lease
          information. For example, finance teams will access payment modules,
          while property managers handle lease creation and updates.
        </p>
      </div>

      <div className="section">
        <h2>Success Criteria:</h2>
        <ul>
          <li>
            <b>Functional Completeness:</b> All functionalities outlined in this
            document—property management, rent tracking, penalties for delays, and
            lease renewal must be fully implemented within the project’s scope.
          </li>
          <br />
          <li>
            <b>Performance:</b> The module must handle multiple leases, activities,
            and users efficiently, ensuring quick response times and supporting
            concurrent access by multiple users.
          </li>
          <br />
          <li>
            <b>Usability:</b> The interface must be user-friendly, allowing users
            to easily configure rent parameters, track lease activities, and manage
            payments with minimal training.
          </li>
          <br />
          <li>
            <b>Security:</b> The module must adhere to high-security standards to
            protect sensitive lease data, including financial information and
            lease documents. Encryption and role-based access controls will
            prevent unauthorized access.
          </li>
          <br />
          <li>
            <b>Compliance:</b> The module must comply with relevant real estate
            and financial regulations, ensuring proper documentation, and
            adherence to privacy policies.
          </li>
        </ul>
      </div>

      <p>
        This detailed scope provides a comprehensive understanding of the Lease
        Management Module, aligning all stakeholders with the project objectives.
        The attached screenshots (as provided) offer a visual reference to
        demonstrate key steps and functionalities, promoting clarity and
        facilitating smooth adoption across the organization.
      </p>
    </div>
  );
};

export default Scope;
