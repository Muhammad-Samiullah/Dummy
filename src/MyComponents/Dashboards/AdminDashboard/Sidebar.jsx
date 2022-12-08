import React from 'react'
import { Speedometer2 } from "react-bootstrap-icons";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div>
        {localStorage.getItem("role") != "admin" ? <Navigate to="/" /> : null}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
          >
            <span
              className="navbar-toggler-icon"
              data-bs-target="#sidebar"
            ></span>
          </button>
          <NavLink
            className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
            to="/"
          >
            Career Coach
          </NavLink>
          <NavLink 
            to="/signout"
            className="navbar-brand ms-lg-0 ms-3 text-uppercase fw-bold"
          >
            Signout
          </NavLink>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start sidebar-nav bg-dark"
        tabIndex="-1"
        id="sidebar"
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3 pt-5">
                  CORE
                </div>
              </li>
              <li>
                <NavLink to="/admindashboard" className="nav-link px-3 active admin-sideclr">
                  <span className="me-2">
                    <Speedometer2 />
                  </span>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/faqdashboard" className="nav-link px-3 active admin-sideclr">
                  <span className="me-2">
                    <Speedometer2 />
                  </span>
                  <span>FAQ</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/resultdashboard" className="nav-link px-3 active admin-sideclr">
                  <span className="me-2">
                    <Speedometer2 />
                  </span>
                  <span>Results</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/support" className="nav-link px-3 active admin-sideclr">
                  <span className="me-2">
                    <Speedometer2 />
                  </span>
                  <span>Support</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

