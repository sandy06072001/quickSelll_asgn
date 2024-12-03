import React, { useState } from "react";
import "../styles/header.css";

const Header = ({ setGroupBy, setSortBy }) => {
  const [isDisplayMenuOpen, setIsDisplayMenuOpen] = useState(false);

  const toggleDisplayMenu = () => {
    setIsDisplayMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="header">
      <div className="select-container">
        <div className="select-group">
          <div>
            <label htmlFor="display-dropdown" className="display-label">
              {/* Display */}
              <button
                id="display-dropdown"
                className="display-dropdown-button"
                onClick={toggleDisplayMenu}
              >
                Display <i class="fa fa-filter"></i>
              </button>
            </label>
          </div>

          {isDisplayMenuOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <label htmlFor="grouping">Grouping :</label>
                <select
                  id="grouping"
                  onChange={(e) => setGroupBy(e.target.value)}
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="dropdown-item">
                <label htmlFor="ordering">Ordering :</label>
                <select
                  id="ordering"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
