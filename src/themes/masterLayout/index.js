import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./utils.css";

const MasterLayout = ({children}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
           KAMI SHOP
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/hang-hoa" className="nav-link active" aria-current="page">
                  Hàng hóa
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Khách hàng
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tùy chọn
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/home" className="dropdown-item">
                      Thêm hàng hóa
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="dropdown-item">
                      Thêm khách hàng
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid mt-3">{children}</div>
    </>
  );
};

export default MasterLayout;
