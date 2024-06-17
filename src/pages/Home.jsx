import React, { useRef } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import "../style/index.scss"
import Intro from '../components/Intro';
import Footer from '../components/Footer';


function Home() {
    const defaultImages = [
        { src: "/images/ba-1.webp", alt: "Man crossing the street" },
        { src: "/images/ba-2.webp", alt: "Crowd at a concert" },
        { src: "/images/ba-3.webp", alt: "Married couple" }
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
