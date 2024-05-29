// UnitsNavbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const UnitsNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">
          Ana Sayfaya Dön
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/electrical">
                Elektrik Deposu
              </Link>
            </li>
            {/* Diğer bölümler için Link'leri burada ekleyin */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UnitsNavbar;
