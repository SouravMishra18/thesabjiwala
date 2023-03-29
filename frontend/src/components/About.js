import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const About = () => {
  return (
    <React.Fragment>
         <div className="container-xxl py-lg-5 py-2" id="about">
            <div className="container py-lg-5 py-2 px-lg-5">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <h5 className="text-primary-gradient fw-medium">About App</h5>
                  <h1 className="mb-4">
                    Everything you need for a delicious meal
                  </h1>
                  <p className="mb-4 text-justify">
                    Welcome to <b>TheSabjiWala</b>, your premier source for
                    fresh and nutritious fruits and vegetables delivered
                    straight to your doorstep.
                    <br />
                    We are committed to bringing you the highest quality produce
                    from local farmers and suppliers, all conveniently available
                    through our easy-to-use online platform. At{" "}
                    <b>TheSabjiWala</b>,
                    <br /> we believe that healthy eating should be accessible
                    to everyone, which is why we offer a wide selection of fresh
                    and organic produce at affordable prices. From everyday
                    staples like potatoes and onions to exotic fruits and
                    vegetables, we have something for everyone.
                    <br />
                    Our dedication to sustainable and eco-friendly practices
                    means that we prioritize the use of reusable packaging and
                    work closely with our suppliers to minimize waste.
                    <br />
                    We also offer a variety of recipe ideas and nutritional
                    information to help you make the most of your produce and
                    lead a healthy lifestyle. Ordering from
                    <b>TheSabjiWala</b> is quick, easy, and convenient, with
                    fast and reliable delivery to your doorstep.
                    <br /> Join the growing community of health-conscious
                    consumers and start enjoying the benefits of fresh,
                    nutritious produce today with <b>TheSabjiWala</b>.
                  </p>
                  <div className="row g-4 mb-4">
                    <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
                      <div className="d-flex">
                        <i className="fa fa-cogs fa-2x text-primary-gradient flex-shrink-0 mt-1" />
                        <div className="ms-3">
                          <h2 className="mb-0">
                            <span data-toggle="counter-up">10</span>k+
                          </h2>
                          <p className="text-primary-gradient mb-0">
                            Active Install
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 wow fadeIn" data-wow-delay="0.7s">
                      <div className="d-flex">
                        <i className="fa fa-comments fa-2x text-secondary-gradient flex-shrink-0 mt-1" />
                        <div className="ms-3">
                          <h2 className="mb-0">
                            <span data-toggle="counter-up">9.5</span>k+
                          </h2>
                          <p className="text-secondary-gradient mb-0">
                            Clients Reviews
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-6">
                    <Link
                      to="#"
                      className="btn btn-primary-gradient w-100 py-sm-3 px-4 px-sm-5 rounded-pill mt-3"
                    >
                      Coming Soon
                    </Link>
                  </div>
                </div>
                <div
                  className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="owl-carousel screenshot-carousel">
                    <img className="img-fluid" src="img/ss-1.png" alt="" />
                    <img className="img-fluid" src="img/ss-2.png" alt="" />
                    <img className="img-fluid" src="img/ss-3.png" alt="" />
                    <img className="img-fluid" src="img/ss-4.png" alt="" />
                    <img className="img-fluid" src="img/ss-5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}

export default About