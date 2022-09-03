import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function HomeCarousel() {
   
    return (

          <Carousel  showThumbs={false} autoPlay={true} interval={2000} infiniteLoop>
                <div>
                    <img style={{width : "888px" }}  src="https://ii3.pepperfry.com/media/wysiwyg/banners/HeroBanners_02_2X_280722.jpg" alt="carousel_image"/>
                   
                </div>
                <div>
                    <img style={{width : "888px" }} src="https://ii3.pepperfry.com/media/wysiwyg/banners/HeroBanner03_2X_300822.jpg" alt="carousel_image"/>
             
                </div>
                <div>
                    <img style={{width : "888px" }} src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Promo_2X_290822_nd.gif" alt="carousel_image"/>
         
                </div>
                <div>
                    <img style={{width : "888px" }} src="https://ii1.pepperfry.com/media/wysiwyg/banners/HeroBanner04_2X_300822.jpg" alt="carousel_image"/>
                
                </div>
            </Carousel>
 
    );
}

export default HomeCarousel;