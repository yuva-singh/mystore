import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  const [,setshow] = useState("");
  let navbarhandler = () => {
    let navbarSupportedContent = document.getElementById("navbarSupportedContent")
    setshow(
        navbarSupportedContent.classList.remove('show')
    );
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            MyStore
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={navbarhandler}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  onClick={navbarhandler}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/product"
                  onClick={navbarhandler}
                >
                  PRODUCT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={navbarhandler}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <div className="d-flex py-1">
              <NavLink to="/">
                <button
                  className="btn btn-light mx-2"
                  type="button"
                  onClick={navbarhandler}
                >
                  <i className="bi bi-person"></i> LOG OUT
                </button>
              </NavLink>
              <NavLink to="/cart">
                <button
                  type="button"
                  className="btn btn-light position-relative mx-2"
                  onClick={navbarhandler}
                >
                  <i className="bi bi-cart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    9+
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
