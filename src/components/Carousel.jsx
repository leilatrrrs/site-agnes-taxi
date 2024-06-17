import React from "react";

function Carousel ({images}) {
    return(
		<div id="header-carousel" className="custom-carousel">
		<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
		  <div className="carousel-inner">
			{images.map((image, index) => (
			  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
				<img
				  src={image.src}
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
    )
}
export default Carousel;