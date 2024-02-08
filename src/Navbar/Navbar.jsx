import React from "react";
import { Link ,  NavLink } from "react-router-dom";


export default function Navbar() {

  return (
    <>
      <nav className="position-fixed w-100 py-4 text-white  ">
        <div className="container py-1 ">
          <div className="row">
            <div className="col-6">
              <Link className="fw-bold fs-2" to="">
                START FRAMEWORK
              </Link>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center text-center  ">
              <NavLink
                to="about"
                className="tab fs-6 fw-bold mx-2 p-2 rounded-2 "
              >
                ABOUT
              </NavLink>
              <NavLink
                to="portfolio"
                className="tab fs-6 fw-bold mx-2 p-2 rounded-2 "
              >
                PORTFOLIO
              </NavLink>
              <NavLink
                to="contact"
                className="tab fs-6 fw-bold mx-2 p-2 rounded-2 "
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
