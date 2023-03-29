import React from "react";

const Review = () => {
  return (
    <React.Fragment>
      <div className="container-xxl py-5 bg-light" id="review">
        <div className="container py-5 px-lg-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="text-primary-gradient fw-medium">Testimonial</h5>
            <h1 className="mb-5">What Say Our Offline Clients!</h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item rounded p-4">
              <div className="d-flex align-items-center mb-4">
                <img 
                  className="img-fluid bg-white rounded flex-shrink-0 p-1"
                  src="img/testimonial-1.jpg"
                  style={{ width: 85, height: 85 }}
                />
                <div className="ms-4">
                  <h5 className="mb-1">Virat Kohli</h5>
                  <p className="mb-1">Shopkeeper</p>
                  <div>
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                  </div>
                </div>
              </div>
              <p className="mb-0">
                Best app that I have came accross latest , accurate and
                vegetables are true to pictures and very fresh .
              </p>
            </div>
            <div className="testimonial-item rounded p-4">
              <div className="d-flex align-items-center mb-4">
                <img alt="#"
                  className="img-fluid bg-white rounded flex-shrink-0 p-1"
                  src="img/testimonial-2.jpeg"
                  style={{ width: 85, height: 85 }}
                />
                <div className="ms-4">
                  <h5 className="mb-1">smriti Mandana</h5>
                  <p className="mb-1">Veggies Dealer</p>
                  <div>
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                  </div>
                </div>
              </div>
              <p className="mb-0">
                Enjoying your easy to use interface which saves me from longed
                queues in supermarket and from scorching heat in local market.
              </p>
            </div>
            <div className="testimonial-item rounded p-4">
              <div className="d-flex align-items-center mb-4">
                <img alt="#"
                  className="img-fluid bg-white rounded flex-shrink-0 p-1"
                  src="img/testimonial-3.jpeg"
                  style={{ width: 85, height: 85 }}
                />
                <div className="ms-4">
                  <h5 className="mb-1">Rohit Sharma</h5>
                  <p className="mb-1">Farmer</p>
                  <div>
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                  </div>
                </div>
              </div>
              <p className="mb-0">
                One of the best app for fresh vegetables, many other apps claim
                for delivering fresh vegetables but this app does what it says .
                So happy with your service,keep it up!
              </p>
            </div>
            <div className="testimonial-item rounded p-4">
              <div className="d-flex align-items-center mb-4">
                <img alt="#"
                  className="img-fluid bg-white rounded flex-shrink-0 p-1"
                  src="img/testimonial-4.jpg"
                  style={{ width: 85, height: 85 }}
                />
                <div className="ms-4">
                  <h5 className="mb-1">Radha yadav</h5>
                  <p className="mb-1">Shop Owner</p>
                  <div>
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                    <small className="fa fa-star text-warning" />
                  </div>
                </div>
              </div>
              <p className="mb-0">
                Enjoying your easy to use interface which saves me from longed
                queues in supermarket and from scorching heat in local market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Review;
