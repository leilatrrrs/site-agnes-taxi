import React, { useRef } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import "../style/index.scss"
import Footer from '../components/Footer';
import TransportsPage from '../components/Transportspage';

function Transports() {
    const transportImages = [
        { src: "/images/aeroport-1180-min.webp",srcset: "/images/aeroport-650-min.webp 650w, /images/aeroport-1000-min.webp 1000w,/images/aeroport-1180-min.webp 1180w" ,sizes:"(max-width: 1920px) 100vw 50vw", alt: "Photo d'aéroport", loading:"lazy" },
        { src: "/images/hospital-1180-min.webp",srcset: "/images/hospital-650-min.webp 650w, /images/hospital-1000-min.webp 1000w,/images/hospital-1180-min.webp 1180w" ,sizes:"(max-width: 1920px) 100vw 50vw", alt: "Photo d'hopital", loading:"lazy" },
        { src: "/images/gare-1180-min.webp",srcset: "/images/gare-650-min.webp 650w, /images/gare-1000-min.webp 1000w,/images/gare-1180-min.webp 1180w" ,sizes:"(max-width: 1920px) 100vw 50vw", alt: "Photo de Gare ferroviaire", loading:"lazy" },
        
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