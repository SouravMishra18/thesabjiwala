import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Footer = () => {
  return (
    <React.Fragment>
         <div
            className="container-fluid bg-primary text-light footer wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="container py-5 px-lg-5">
              <div className="row g-5 justify-content-between">
                <div className="col-md-6 col-lg-3 col-12">
                  <img alt="Logo" src="img/logo1.png" className="img-fluid" />
                </div>
                <div className="col-md-6 col-lg-3 col-12">
                  <h4 className="text-white mb-4">Address</h4>
                  <p>
                    <i className="fa fa-map-marker-alt me-3" />
                    Bhim Nagar Sabji Mandi Nangloi Delhi 110087
                  </p>
                  <p>
                    <i className="fa fa-phone-alt me-3" />
                    +91-9871574228
                  </p>
                  <p>
                    <i className="fa fa-envelope me-3" />
                    <Link to="mailto:thesabjiwala@gmail.com">
                      thesabjiwala@gmail.com
                    </Link>
                  </p>
                  <div className="d-flex pt-2">
                    <Link className="btn btn-outline-light btn-social" to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link className="btn btn-outline-light btn-social" to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link className="btn btn-outline-light btn-social" to="#">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link className="btn btn-outline-light btn-social" to="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <h4 className="text-white mb-4">Newsletter</h4>
                  <p>
                    These delicious fruits and vegetables are not only healthy
                    but also great for the environment
                  </p>
                  <div className="position-relative w-100 mt-3">
                    <input
                      className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                      type="text"
                      placeholder="Your Email"
                      style={{ height: 48 }}
                    />
                    <button
                      type="button"
                      className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                    >
                      <i className="fa fa-paper-plane text-primary-gradient fs-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container px-lg-5">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    ©2023
                    <Link className="border-bottom" to="index.html#">
                      The Sabji Wala
                    </Link>
                    , All Right Reserved. Designed &amp; Maintained by
                    <Link className="border-bottom" to="#">
                      Sourav Misrha
                    </Link>
                  </div>
                  <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                      <Link to="terms.html">Terms &amp; Conditions</Link>
                      <Link to="privacy.html">Privacy Policy</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}

export default Footer