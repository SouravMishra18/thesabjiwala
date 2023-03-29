import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <React.Fragment>
       <div className="container-fluid position-relative p-0" id="home">
  <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
    <Link to="#" className="navbar-brand p-0">
      <img src="img/logo1.png" alt="Logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="fa fa-bars">
      </span></button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-auto py-0">
        <Link to="index-2.html#home" className="nav-item nav-link active">Home</Link>
        <Link to="index-2.html#about" className="nav-item nav-link">About</Link>
        <Link to="index-2.html#review" className="nav-item nav-link">Reviews</Link>
        <Link to="index-2.html#contact" className="nav-item nav-link">Contact us</Link>
      </div>
    </div>
  </nav>
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
          <Link to="#" className="btn btn-secondary-gradient py-sm-3 px-4 px-sm-5 mb-lg-0 mb-5 rounded-pill animated slideInRight">Comming Soon</Link>
        </div>
        <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end">
          <img alt="" className="img-fluid" src="img/landingimg.png" />
        </div>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  )
}

export default Home