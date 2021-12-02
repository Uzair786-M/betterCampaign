import React from "react";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#222b38", padding: "1rem" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand mx-3 text-white" href="#">
            <img src="logo.png" className="img-responsive" />
          </a>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-white h6 m-3"
                  aria-current="page"
                  href="#"
                >
                  Webdesign
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white h6 m-3" href="#">
                  Zoekmachine optimalisatie(SEO)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white h6 m-3" href="#">
                  Google Ads
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white h6 m-3" href="#">
                  Conversie optimalisatie(CRO)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white h6 m-3" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
