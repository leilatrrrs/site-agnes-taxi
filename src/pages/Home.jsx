import React, { useRef } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import "../style/index.scss"
import Intro from '../components/Intro';
import Footer from '../components/Footer';


function Home() {
    const defaultImages = [
        { src: "/images/ba-1920.webp",srcset:"/images/ba-1180.webp 1180w,/images/ba-1000.webp 1000w,/images/ba-650.webp 650w" , alt: "bassin d'arcachon" },
        { src: "/images/bdx-1920.webp",srcset:"/images/bdx-1180.webp 1180w,/images/bdx-1000.webp 1000w,/images/bdx-650.webp 650w" , alt: "Bordeaux" },
        { src: "/images/vin-1920.webp",srcset:"/images/vin-1180.webp 1180w,/images/vin-1000.webp 1000w,/images/vin-650.webp 650w" , alt: "Vignoble" },
        
      ];
      
    return (
        <div className='home'>
        <Header />
        <Carousel images={defaultImages}/>
        <Intro/>
        <Footer />
        </div>
    )
}
export default Home
