import React from "react";
import "./Header.css";
import logo from "../Assets/Images/logo.png";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";



const Header = () => {
  const nav = useNavigate();
  const loc = useLocation();
  function confirmSignout() {
    var hasConfirmed = window.confirm("Are you Sure?");
    if (hasConfirmed) {
      nav('/signout');
    }
  }
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark he-clr">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img className="logo" src={logo} />
            </NavLink>
            {localStorage.getItem("role") == "user" ? (
              <NavLink className="navbar-brand" to="/editProfile">
                <h5 className="text-light">{localStorage.getItem("name").toUpperCase()}</h5>
              </NavLink>
            ) : (
              <NavLink className="navbar-brand place" to="/">
                CAREER COACH
              </NavLink>
            )}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              aria-controls="navbarChange"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarChange">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item px-2">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink className="nav-link" to="/faq">
                    FAQ
                  </NavLink>
                </li>
                {localStorage.getItem("role") == "admin" ? (
                  <li className="nav-item px-2">
                    <NavLink className="nav-link fw-bold" to="/admindashboard">
                      Admin Dashboard
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                {localStorage.getItem("role") == "user" ? (
                  <>
                    <li className="nav-item px-2">
                      <NavLink className="nav-link fw-bold" to="/user">
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item px-2">
                      <NavLink
                        className="nav-link fw-bold"
                        to="/previous-results"
                      >
                        Previous Scores
                      </NavLink>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0">
                {localStorage.getItem("name") ? (
                  <li className="nav-item px-2">
                    <a className="nav-link fw-bold" style={{cursor: "pointer"}} onClick={() => confirmSignout()}>
                      Signout
                    </a>
                  </li>
                ) : (
                  <>
                    <li className="nav-item px-2">
                      <NavLink className="nav-link fw-bold" to="/login">
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item px-2">
                      <NavLink className="nav-link fw-bold" to="/signup">
                        Signup
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                MENU
              </h5>
              <button
                type="button"
                className="btn-close bg-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="navbar-nav">
                <li className="nav-item px-2">
                  <NavLink className="nav-link a" aria-current="page" to="/">
                    <span className="span">Home</span>
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink className="nav-link a" to="/about">
                    <span className="span">About</span>
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink className="nav-link a" to="/faq">
                    <span className="span">FAQ</span>
                  </NavLink>
                </li>

                {localStorage.getItem("name") ? (
                  <>
                    <li className="nav-item px-2">
                      <a className="nav-link a" style={{cursor: "pointer"}} onClick={() => confirmSignout()}>
                        <span className="span">Signout</span>
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item px-2">
                      <NavLink className="nav-link a" to="/login">
                        <span className="span">Login</span>
                      </NavLink>
                    </li>
                    <li className="nav-item px-2">
                      <NavLink className="nav-link a" to="/signup">
                        <span className="span">Signup</span>
                      </NavLink>
                    </li>
                  </>
                )}
                {localStorage.getItem("role") == "admin" ? (
                  <li className="nav-item px-2">
                    <NavLink className="nav-link a" to="/admindashboard">
                      <span className="span">Admin Dashboard</span>
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                {localStorage.getItem("role") == "user" ? (
                  <li className="nav-item px-2">
                    <NavLink className="nav-link a" to="/user">
                      <span className="span">Dashboard</span>
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                {localStorage.getItem("role") == "user" ? (
                  <li className="nav-item px-2">
                    <NavLink className="nav-link a" to="/previous-results">
                      <span className="span">Previous Scores</span>
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;