import React from "react";
import "./styles.css";

const EManual = () => {
  const searchSidebar = () => {
    // Add functionality for sidebar search here
  };

  const searchContent = () => {
    // Add functionality for content search here
  };

  return (
    <div>
      {/* Navbar Section */}
      <div className="navbar">
        <div className="logo">E-manual</div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            id="search"
            placeholder="Search..."
            onKeyUp={searchSidebar}
          />
          <button className="search-icon">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Navbar Options */}
        <ul id="navbar">
          <li>
            <a href="#" id="setup-btn">
              Set-Up &#9662;
            </a>
            <ul id="setup-dropdown" className="dropdown" style={{ display: "none" }}>
              <li>
                <a href="#" id="lenskart-btn">Lenskart</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" id="crm-btn">
              CRM &#9662;
            </a>
            <ul
              id="crm-dropdown"
              className="dropdown"
              style={{ display: "none", width: "max-content" }}
            >
              <li>
                <a href="#" id="pre-sales-btn">Pre-Sales</a>
              </li>
              <li>
                <a href="#" id="post-sales-btn">Post-Sales</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Main Container */}
      <div className="container">
        <nav>
          {/* Sidebar Section */}
          <div id="sidebar">
            <ul id="sidebar-options">
              <li>Select a main menu option to view topics</li>
            </ul>
          </div>
        </nav>
        <main>
          <div className="content-area">
            <input
              type="text"
              id="search-bar-2"
              className="search-bar-2"
              placeholder="Search within content..."
              onKeyUp={searchContent}
            />
            <div id="content-area">
              <p>Select a topic from the sidebar or a main menu option.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
