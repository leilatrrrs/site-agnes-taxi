import React, { useRef } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import "../style/index.scss"
import Footer from '../components/Footer';
import TransportsPage from '../components/Transportspage';

function Transports() {
    const transportImages = [
        { src: "/images/aeroport-1920.webp",srcset: "/images/aeroport-650.webp 650w, /images/aeroport-1000.webp 1000w,/images/aeroport-1180.webp 1180w" ,sizes:"(max-width: 1920px) 100vw 50vw", alt: "Man crossing the street" },
        { src: "/images/hospital-1920.webp",srcset: "/images/hospital-650.webp 650w, /images/hospital-1000.webp 1000w,/images/hospital-1180.webp 1180w" ,sizes:"(max-width: 1920px) 100vw 50vw", alt: "M street" },
        { src: "/images/gare-1920.webp",srcset: "/images/gare-650.webp 650w, /images/gare-1000.webp 1000w,/images/gare-1180.webp 1180w" ,sizes:"(max-width: 1920px) 100vw 50vw", alt: "Man crossing the street" },
        
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