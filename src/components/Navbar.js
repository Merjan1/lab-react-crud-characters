import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Navbar
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <NavLink
              className="nav-item nav-link"
              to="/"
              activeClassName="active"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-item nav-link"
              to="/characters/new"
              activeClassName="active"
            >
              New Character
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
