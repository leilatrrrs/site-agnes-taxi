import React from "react";

function Carousel () {
    return(
<div id="header-carousel" className="custom-carousel">
			<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
				

				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="/images/ba-1.webp"  
							
							class="d-block w-100" alt="Man crossing the street"/>
					</div>
					<div class="carousel-item">
						<img src="/images/ba-2.webp" 
						
									sizes="(max-width: 1920px) 100vw, 50vw"					
							class="d-block w-100" alt="Crowd at a concert" loading="lazy"/>
					</div>
					<div class="carousel-item">
						<img src="/images/ba-3.webp" 
					
								sizes="(max-width: 1920px) 100vw, 50vw"						
						class="d-block w-100" alt="Married couple" loading="lazy"/>
					</div>
				</div>

				
			</div>
		</div>
    )
}
export default Carousel;