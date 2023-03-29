import React from 'react'

const Contact = () => {
  return (
   <React.Fragment>
      <div className="container-xxl py-5" id="contact">
            <div className="container py-5 px-lg-5">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="text-primary-gradient fw-medium">Contact Us</h5>
                <h1 className="mb-5">Get In Touch!</h1>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="wow fadeInUp" data-wow-delay="0.3s">
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                            />
                            <label htmlFor="name">Your Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Your Email"
                            />
                            <label htmlFor="email">Your Email</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              placeholder="Subject"
                            />
                            <label htmlFor="subject">Subject</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a message here"
                              id="message"
                              style={{ height: 150 }}
                              defaultValue={""}
                            />
                            <label htmlFor="message">Message</label>
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <button
                            className="btn btn-primary-gradient rounded-pill py-3 px-5"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
   </React.Fragment>
  )
}

export default Contact