import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<section className="hero__section">
			<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img  class="d-block w-100" src="https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg.webp" alt="First slide" />
                        <div className="carousel__text d-flex flex-column justify-content-center align-items-center">
                            <p>Welcome to</p>
                            <h2>PATO PLACE</h2>
                            <Link><button >LOOK MENU</button></Link>
                        </div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="https://preview.colorlib.com/theme/pato/images/slide1-01.jpg.webp" alt="Second slide" />
                        <div className="carousel__text d-flex flex-column justify-content-center align-items-center">
                            <p>Welcome to</p>
                            <h2>PATO PLACE</h2>
                            <Link><button >LOOK MENU</button></Link>
                        </div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg.webp" alt="Third slide" />
                        <div className="carousel__text d-flex flex-column justify-content-center align-items-center">
                            <p>Welcome to</p>
                            <h2>PATO PLACE</h2>
                            <Link><button >LOOK MENU</button></Link>
                        </div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
				</a>
			</div>
		</section>
	);
};

export default HeroSection;
