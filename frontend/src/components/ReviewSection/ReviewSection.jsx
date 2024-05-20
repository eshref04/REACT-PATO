import React from 'react'
import "./ReviewSection.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <section className='d-flex flex-column align-items-center'>
           <Slider {...settings}>
      <div>
        
      <span>Customers Say</span>
        <h3>REVIEW</h3>
<img src="https://preview.colorlib.com/theme/pato/images/avatar-01.jpg.webp" alt="" />
            <p>“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre <br />-tium nec, fermentum viverra dui ”</p>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <span>Marie Simmons ˗ New York</span>
      </div>
      <div>
        
      <span>Customers Say</span>
        <h3>REVIEW</h3>
<img src="https://preview.colorlib.com/theme/pato/images/avatar-01.jpg.webp" alt="" />
            <p>“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre <br />-tium nec, fermentum viverra dui ”</p>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <span>Marie Simmons ˗ New York</span>
      </div>
      <div>
        
      <span>Customers Say</span>
        <h3>REVIEW</h3>
<img src="https://preview.colorlib.com/theme/pato/images/avatar-01.jpg.webp" alt="" />
            <p>“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre <br />-tium nec, fermentum viverra dui ”</p>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <span>Marie Simmons ˗ New York</span>
      </div>
     
    </Slider>
  
       
       
    </section>
  )
}

export default ReviewSection
