import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Download = () => {
  return (
<React.Fragment>
<div className="container-xxl py-5">
  <div className="container py-5 px-lg-5">
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <img alt="#"className="img-fluid wow fadeInUp" data-wow-delay="0.1s" src="img/Grocerry_banner.png" />
      </div>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
        <h5 className="text-primary-gradient fw-medium">Download</h5>
        <h1 className="mb-4">Don't have the time to go grocery shopping?</h1>
        <p className="mb-4 text-justify">
          TheSabjiWala is a one-stop-shop for all your grocery needs. It's
          an easy and affordable option to enjoy vegetables delivered
          right at your doorstep. Our portal is designed specially
          catering to working people who find it difficult to commute
          after long hours and shop in crowded markets. You can login to
          our online portal and browse through a wide range of vegetables
          ranging from organic to exotic veggies, download the app now!
        </p>
        <div className="row g-4">
          <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
            <Link href="#" className="d-flex bg-secondary-gradient rounded py-3 px-4">
              <i className="fab fa-android fa-3x text-white flex-shrink-0" />
              <div className="ms-3">
                <p className="text-white">Comming Soon</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</React.Fragment>
  )
}

export default Download