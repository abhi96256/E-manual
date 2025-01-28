import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Mark from "mark.js";

const Menu = (props) => {
  const [showSubMenu, setShowSubMenu] = useState(true);

  // Highlight matching text in search
  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span
          key={index}
          style={{ backgroundColor: "yellow", fontWeight: "bold" }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      {/* Render the menu item, and highlight the name */}
      <div
        onClick={() => setShowSubMenu(!showSubMenu)}
        style={{ cursor: "pointer" }}
      >
        <Link to={props.path || "#"}>
          {highlightText(props.name, props.searchTerm)}
        </Link>
      </div>

      {/* Check if the current item has subtopics */}
      {props.subtopics && showSubMenu && (
        <div
          style={{
            display: showSubMenu ? "flex" : "none",
            flexDirection: "column",
            marginLeft: "25px",
          }}
        >
          {/* Recursively render the subtopics with highlighted names */}
          {props.subtopics.map((subtopic, index) => (
            <Menu key={index} {...subtopic} searchTerm={props.searchTerm} />
          ))}
        </div>
      )}
    </div>
  );
};

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // For sidebar search
  const [filteredTopics, setFilteredTopics] = useState([]); // Filtered sidebar topics
  const [topics, setTopics] = useState([]); // Tracks selected submenu topics
  const [menuItems, setMenuItems] = useState([
    {
      name: "Set-Up ▼",
      isOpen: false,
      subMenus: [
        {
          name: "Lenskart",
          topics: [
            { name: "⦿ Introduction", path: "/Intro" },
            { name: "⦿ Scope", path: "/Scope" },
            {
              name: "⦿ Functional Requirement ▼",
              subtopics: [
                { name: "• Zvolv Pulling", path: "/ZvolvPulling" },
                { name: "• Lease Creation", path: "/LeaseCreation" },
                {
                  name: "• Lease Management ▼",
                  subtopics: [
                    { name: " Lease Listing", path: "/LeaseListing" },
                    { name: " Lease Details", path: "/LeaseDetails" },
                  ],
                },
                { name: "• Payee Management", path: "/PayeeManagement" },
                { name: "• Lease Monitoring", path: "/LeaseMonitoring" },
              ],
            },
            { name: "⦿ Dependencies", path: "/Dependencies" },
            { name: "⦿ Testing Validation", path: "/TestingValidation" },
          ],
        },
      ],
    },
    {
      name: "IMM ▼",
      isOpen: false,
      subMenus: [
        {
          name: "Gate-Entry",
          topics: [
            { name: "⦿ Introduction & Executive Summary", path: "/Intro3" },
            { name: "⦿ Scope of the Document", path: "/Scope3" },
            {
              name: "⦿ Functional Requirements ▼",
              subtopics: [
                { name: "• Check-In Functional Requirements", path: "/CheckIn " },
                { name: "• Check-Out Functional Requirements", path: "/CheckOut" },
                { name: "• Pass Printing Functional Requirements", path: "/Pass" },
              ],
            },
            {
              name: "⦿ View-Based Functional Overview ▼",
              subtopics: [
                { name: "• Board View", path: "/BoardView" },
                { name: "• List View", path: "/ListView" },
                { name: "• Dashboard View", path: "/Dashboard" },
              ],
            },
          ],
        },
      ],
    },
    
    {
      name: "CRM ▼",
      isOpen: false,
      subMenus: [
        {
          name: "Pre-Sales",
          topics: [
            { name: "⦿ Introduction & Executive Summary", path: "/Introduction" },
            { name: "⦿ Scope of the Document", path: "/ScopeDocument" },
            {
              name: "⦿ Functional Requirements ▼",
              subtopics: [
                { name: "• Lead Creation", path: "/LeadCreation" },
                { name: "• Lead Management", path: "/LeadManagement" },
                { name: "• Lead FLOW-CHART", path: "/LeadFlowChart" },
                { name: "• Activity Creation", path: "/ActivityCreation" },
                {
                  name: "• Activity Management ▼",
                  subtopics: [
                    { name: " Viewing Activity History", path: "/ActivityHistory" },
                    { name: " Performing Actions on Lead-Linked", path: "/LeadLinkedActivities" },
                    { name: " Overdue Activity Report", path: "/OverdueActivityReport" },
                  ],
                },
                { name: "• Activity FLOW-CHART", path: "/ActivityFlowChart" },
                { name: "• Mobile Access", path: "/MobileAccess" },
                { name: "• Employee Location Tracking", path: "/LocationTracking" },
              ],
            },
            { name: "⦿ Non-Functional Requirements", path: "/NonFunctional" },
            { name: "⦿ Dependencies", path: "/DependenciesPre" },
            { name: "⦿ Testing and Validation", path: "/TestingValidationPre" },
          ],
        },
        {
          name: "Post-Sales",
          topics: [
            { name: "⦿ Introduction & Executive Summary", path: "/Introduction1" },
            { name: "⦿ Scope of the Document", path: "/Scope1" },
            {
              name: "⦿ Functional Requirements ▼",
              subtopics: [
                { name: "• Service Ticket Creation", path: "/TicketCreation" },
                { name: "• Service Request Management", path: "/ServiceManagement" },
                { name: "• Service Ticket Detail", path: "/TicketDetail" },
                { name: "• Service Request Flow-Chart", path: "/RequestFlowChart" },
                { name: "• Service Contract Creation", path: "/ContractCreation" },
                { name: "• Service Contract Management", path: "/ContractManagement" },
                { name: "• Service Contract Flow-Chart", path: "/ContractFlowChart" },
              ],
            },
            { name: "⦿ Mobile Access", path: "/MobileAccess1" },
            { name: "⦿ Employee Location Tracking", path: "/LocationTracking1" },
            { name: "⦿ Non-Functional Requirements", path: "/NonFunctional1" },
            { name: "⦿ Dependencies", path: "/DependenciesPost" },
            { name: "⦿ Testing and Validation", path: "/TestingValidationPost" },
          ],
        },
      ],
    },
  ]);
  const [selectedMenu, setSelectedMenu] = useState(null); // Keeps track of which menu is selected
  const [isContentEmpty, setIsContentEmpty] = useState(true); // Flag to show prompt message
  const [searchTextContentArea, setSearchTextContentArea] = useState(""); // For content search
  const navigate = useNavigate(); // React Router's hook for navigation

  const contentRef = React.useRef(); // Reference to content area
  const obj = new Mark(contentRef.current); // Mark.js instance

  // To set content when a menu is clicked
  const onClickSubmenu = (submenu) => {
    setTopics(submenu.topics || []);
    setFilteredTopics(submenu.topics || []);
    setIsContentEmpty(false);

    // Navigate to the first topic in the submenu if exists
    if (submenu.topics && submenu.topics[0]?.path) {
      navigate(submenu.topics[0].path);
    }
  };

  useEffect(() => {
    if (!selectedMenu && !filteredTopics.length && !topics.length) {
      setIsContentEmpty(true); // Show the prompt if no topic is selected
    }
  }, [selectedMenu, filteredTopics, topics]);

  // Filtering logic for sidebar search
  const filterTopics = (items, term) => {
    return items
      .map((item) => {
        const filteredSubtopics = item.subtopics
          ? filterTopics(item.subtopics, term)
          : [];
        if (
          item.name.toLowerCase().includes(term) ||
          filteredSubtopics.length > 0
        ) {
          return { ...item, subtopics: filteredSubtopics };
        }
        return null;
      })
      .filter((item) => item !== null);
  };

  const searchSidebar = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = filterTopics(topics, term);
    setFilteredTopics(filtered);

    // If no valid result is found, set content to be empty
    if (filtered.length === 0) {
      setIsContentEmpty(true); // Show prompt message for no results
    } else {
      // Find the first match with subtopics
      const firstMatch = filtered[0];

      // If the first match has a path (top-level item), navigate to it
      if (firstMatch?.path) {
        navigate(firstMatch.path); // Navigate to the matched topic path
        setIsContentEmpty(false); // Hide the prompt message
      }
      // Otherwise, if the first match has subtopics, check for subtopics that have paths
      else if (firstMatch?.subtopics) {
        let subtopicFound = false;

        // Loop through the subtopics to find one with a path (e.g., in the "Functional Requirement" submenu)
        for (const subtopic of firstMatch.subtopics) {
          if (subtopic?.path) {
            navigate(subtopic.path); // Navigate to the subtopic's path
            setIsContentEmpty(false); // Hide the prompt message
            subtopicFound = true;
            break; // Exit the loop once the path is found
          } else if (subtopic?.subtopics) {
            // If this subtopic has further subtopics, loop through them as well
            for (const nestedSubtopic of subtopic.subtopics) {
              if (nestedSubtopic?.path) {
                navigate(nestedSubtopic.path); // Navigate to the nested subtopic's path
                setIsContentEmpty(false); // Hide the prompt message
                subtopicFound = true;
                break; // Exit the loop once the path is found
              }
            }
          }

          // If a subtopic path is found, break out of the outer loop
          if (subtopicFound) break;
        }
      }
    }

  };

  const onClickMenu = (val, i) => {
    setSelectedMenu(val.name); // Update the selected menu

    setMenuItems(
      menuItems.map((item, index) => {
        if (index === i) {
          return { ...item, isOpen: !val.isOpen };
        }
        return { ...item, isOpen: false };
      })
    );
  };

  // Update highlights when search term changes
  useEffect(() => {
    if (contentRef.current) {
      obj.unmark();
      if (searchTextContentArea) {
        obj.mark(searchTextContentArea, { className: "highlight" });
      }
    }
  }, [searchTextContentArea]);

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">E-manual</div>
        <div className="search-bar">
          <input
            type="text"
            id="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={searchSidebar}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <ul
          id="navbar"
          style={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          {menuItems.map((val, i) => (
            <div
              key={i}
              id="setup-btn"
              style={{ position: "relative" }}
              className="menu"
              onClick={() => onClickMenu(val, i)}
            >
              <div>{val.name}</div>
              <div
                className={val.isOpen ? "open" : "close"}
                style={{
                  position: "absolute",
                  marginRight: "10px",
                  width: "max-content",
                  paddingLeft: "0px",
                  top: "130%",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                {val.subMenus.map((submenu, index) => (
                  <div
                    key={index}
                    className="submenu"
                    onClick={() => onClickSubmenu(submenu)}
                  >
                    {submenu.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="container">
        <nav>
          <div id="sidebar">
            <ul id="sidebar-options">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "grey",
                }}
              >
                {(searchTerm ? filteredTopics : topics).map((topic, index) => (
                  <Menu key={index} {...topic} searchTerm={searchTerm} />
                ))}
              </div>
            </ul>
          </div>
        </nav>
        <main>
          <div className="content-area">
            <div id="content-area" ref={contentRef}>
              <input
                type="text"
                id="search-bar-2"
                className="search-bar-2"
                placeholder="Search within content..."
                value={searchTextContentArea}
                onChange={(e) => setSearchTextContentArea(e.target.value)}
              />
              {isContentEmpty ? (
                <div className="prompt-message">Select any topic from the sidebar</div>
              ) : (
                <div id="area-search">
                  <Outlet />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
