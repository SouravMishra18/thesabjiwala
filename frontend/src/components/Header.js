import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
  return (
    <React.Fragment>
         <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <Link to="#" className="navbar-brand p-0">
              <img src="img/logo1.png" alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <Link to="#home" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="#about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="#review" className="nav-item nav-link">
                  Reviews
                </Link>
                <Link to="#contact" className="nav-item nav-link">
                  Contact us
                </Link>
              </div>
            </div>
          </nav>
    </React.Fragment>
  )
}

export default Header