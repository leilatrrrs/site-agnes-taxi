import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Carousel({ images }) {
	return (
	  <div id="header-carousel" className="custom-carousel">
		<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"data-bs-interval="4000">
		  <div className="carousel-indicators">
			{images.map((_, index) => (
			  <button
				key={index}
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide-to={index}
				className={index === 0 ? 'active' : ''}
				aria-current={index === 0 ? 'true' : 'false'}
				aria-label={`Slide ${index + 1}`}
			  ></button>
			))}
		  </div>
		  <div className="carousel-inner">
			{images.map((image, index) => (
			  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
				<img
				  src={image.src}
				  srcSet={image.srcset}
				  sizes="(max-width: 1920px) 100vw, 50vw"
				  className="d-block w-100"
				  alt={image.alt}
				  loading={index === 0 ? 'eager' : 'lazy'}
				/>
			  </div>
			))}
		  </div>
		
		</div>
	  </div>
	);
  }
export default Carousel;