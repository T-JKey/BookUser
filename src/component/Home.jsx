import React from "react";
import b1 from "../public/book_img/b1.jpg";
import b2 from "../public/book_img/b2.jpg";
import b3 from "../public/book_img/b3.jpg";
import Ratings from "./Ratings";

const Home = () => {
  return (
    <div className="slineder">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={b1} className="d-block w-100" alt="BOOK" height="650px" />
            <div className="carousel-caption d-none d-md-block">
              <h5>BOOK</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={b2} className="d-block w-100" alt="BOOK" height="650px" />
            <div className="carousel-caption d-none d-md-block">
              <h5>BOOK</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={b3} className="d-block w-100" alt="BOOK" height="650px" />
            <div className="carousel-caption d-none d-md-block">
              <h5>BOOK</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Ratings />
    </div>
  );
};

export default Home;
