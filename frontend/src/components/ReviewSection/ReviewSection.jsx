import React from "react";
import "./ReviewSection.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../../../assets/avatar1.jpg"


const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="review__section">
         <div className="container pb-5">
      <div className="row justify-content-center">
        <div className="text-center review__section__head">
          <span>Customer Say</span>
          <h3> Review</h3>
        </div>
      </div>
      <div className="row mt-5 m-auto">
        <div className="slider-container">
          <Slider {...settings}>
          <div className="d-flex flex-column align-items-center">
              <div className="avatar__img mb-5 rounded-5" >
                <img  src={avatar} alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                <div className="review__section__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className="avatar__img mb-5 rounded-5" >
                <img  src={avatar} alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                <div className="review__section__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className="avatar__img mb-5 rounded-5" >
                <img  src={avatar} alt="" />
              </div>
              <div className="text-center">
                <p className="m-auto mb-3" style={{maxWidth: "500px"}}>
                  “ We are lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean tellus sem, mattis in pre-tium nec, fermentum
                  viverra dui ”
                </p>
                <div className="review__section__icons">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
       
          </Slider>
        </div>
      </div>
    </div>
    </section>
   
  );
};

export default ReviewSection;
