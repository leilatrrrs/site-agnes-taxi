import React, { useRef } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import "../style/index.scss"
import Footer from '../components/Footer';
import TransportsPage from '../components/Transportspage';

function Transports() {
    const transportImages = [
        { src: "/images/aero.jpg", alt: "Bus on the street" },
        { src: "/images/gare.jpg", alt: "Train at the station" },
        { src: "/images/autoroute.jpg", alt: "Airplane taking off" },
        { src: "/images/autoroute-2.jpg", alt: "Bicycle lane" }
      ];
    return (
        <div className='transport'>
        <Header />
        <Carousel images={transportImages}/>
        <TransportsPage />
        <Footer />
        </div>
    )
}
export default Transports