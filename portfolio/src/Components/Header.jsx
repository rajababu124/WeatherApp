import React from "react";
import { NavLink } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <div className="">
            <NavLink className = { ({isActive}) => `navbar-brand  ${isActive ? "text-warning" : "text-gray"}`} to='/' >
              Startup Scalers
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className = { ({isActive}) => `nav-link ${isActive ? "text-warning" : "text-gray"}`} to='/' >
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
              <NavLink className = { ({isActive}) => `nav-link ${isActive ? "text-warning" : "text-gray"}`} to='/about' >
                  About
                </NavLink>
              </li> */}
              <li className="nav-item">
              <NavLink className = { ({isActive}) => `nav-link ${isActive ? "text-warning" : "text-gray"}`} to='/projects' >
                  Projects
                </NavLink>
              </li>
            </ul>

            <div >
              <NavLink to='/login' className="btn  btn-outline-warning ">
                 {/* <BsDownload /> */}
                 Login
              </NavLink>
            </div>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
