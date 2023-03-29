import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Banner = () => {
  return (
    <React.Fragment>
        <div className="container-fluid bg-primary hero-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 text-center text-lg-start">
                  <h1 className="text-white mb-4 animated slideInDown">
                    Freshness delivered to your doorstep
                  </h1>
                  <p className="text-white pb-3 animated slideInDown">
                    The SabjiWala is here to solve your problem,order fresh
                    vegetables from anywhere in Delhi at your doorstep.The sabji
                    Wala brings you the easiest way to get fresh veggies at your
                    doorsteps.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-secondary-gradient py-sm-3 px-4 px-sm-5 mb-lg-0 mb-5 rounded-pill animated slideInRight"
                  >
                    Comming Soon
                  </Link>
                </div>
                <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end">
                  <img alt="" className="img-fluid" src="img/landingimg.png" />
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}

export default Banner