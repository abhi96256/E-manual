import React from 'react';

const Intro = () => {
  return (
    <div>
      <h2>Introduction & Executive Summary:</h2>

      <p>
        This document serves as a comprehensive outline of the functional
        requirements for the <b>Lease Management System</b> to be implemented at
        <b>FebiNext</b>. The primary objective of this system is to streamline and
        enhance the processes of lease creation, management, tracking of monthly
        invoices, payment sheet preparation, multi-department approval, and
        payment to vendors.
      </p>
      <p>
        By leveraging FebiNext, it aims to ensure efficient operations, better
        communication, and improved department coordination.
      </p>

      <h3>Key Features of the Lease Management Module:</h3>
      <ul>
        <li>
          <b>Lease Creation:</b> Simplifies the process of adding new lease
          agreements by capturing all relevant information, ensuring accuracy and
          compliance with company policies.
        </li>
        <li>
          <b>Lease Management:</b> Enables the filtering, updating, and monitoring
          of lease agreements, allowing teams to track active, upcoming, and
          expiring contracts efficiently.
        </li>
        <li>
          <b>Rent Parameter Configuration:</b> Allows users to define key rent
          parameters, such as lease tenure, base rent, notice periods, and payment
          schedules, ensuring precise financial planning and tracking.
        </li>
        <li>
          <b>Lease Tracking & Alerts:</b> Facilitates tracking of lease statuses,
          including renewal dates, possession details, and lock-in periods,
          ensuring that no agreement is overlooked.
        </li>
        <li>
          <b>Invoice Submission:</b> Collects invoices, verifies them with the
          agreement, and ensures compliance.
        </li>
      </ul>

      <p>
        The system offers a web interface, enabling users to manage leases from
        anywhere at any time. This flexibility is critical in today’s dynamic
        business environment, where quick response and operational efficiency are
        key. The document includes screenshots to visually illustrate the steps
        and features described, ensuring clarity and ease of understanding for all
        users.
      </p>

      <h2>Success Criteria:</h2>
      <ul>
        <li>
          <b>Improved Lease Tracking:</b> Teams will gain better visibility into
          the status, renewal dates, and history of all lease agreements, reducing
          the risk of missed deadlines or non-compliance.
        </li>
        <li>
          <b>Timely Renewals & Approvals:</b> The system will streamline the
          renewal and approval processes, ensuring that agreements are updated
          without delays.
        </li>
        <li>
          <b>Enhanced Operational Efficiency:</b> By automating rent schedules,
          payment tracking, and notifications, the system will allow staff to
          manage leases more efficiently, improving productivity.
        </li>
        <li>
          <b>Seamless User Experience:</b> FebiNext will provide a user-friendly
          interface, ensuring ease of use and quick adoption across teams,
          minimizing the learning curve.
        </li>
      </ul>

      <p>
        In summary, the <b>Lease Management Module</b> at <b>Lenskart</b> is
        expected to revolutionize how property leases are managed, leading to more
        efficient operations, improved contract management, and ultimately better
        financial performance and compliance.
      </p>
    </div>
  );
};

export default Intro;
