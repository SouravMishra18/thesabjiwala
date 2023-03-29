import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import Review from "./Review";
import Download from "./Download";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container-fluidd bg-white p-0">
        {/* <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-grow text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}

        <div className="container-fluid position-relative p-0" id="home">
          <Header />
          <Banner />
          <About />
          <Download />
          <Review />
          <Contact />
          <Footer />
        </div>

        <Link to="#home" className="btn btn-lg btn-lg-square back-to-top pt-2">
          <i className="bi bi-arrow-up text-white" />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Home;
