import React, { useRef } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import "../style/index.scss"
import Intro from '../components/Intro';
import Footer from '../components/Footer';


function Home() {
    const defaultImages = [
        { src: "/images/ba-1920-min.webp",srcset:"/images/ba-1180-min.webp 1180w,/images/ba-1000-min.webp 1000w,/images/ba-650-min.webp 650w" ,width:"600", height:"400",sizes:"(max-width: 1920px) 100vw, 50vw", alt: "Bassin d'Arcachon", loading:"lazy"},
        { src: "/images/bdx-1920-min.webp",srcset:"/images/bdx-1180-min.webp 1180w,/images/bdx-1000-min.webp 1000w,/images/bdx-650-min.webp 650w",width:"600", height:"400" ,sizes:"(max-width: 1920px) 100vw, 50vw", alt: "Miroir d'eau à Bordeaux", loading:"lazy" },
        { src: "/images/vin-1920-min.webp",srcset:"/images/vin-1180-min.webp 1180w,/images/vin-1000-min.webp 1000w,/images/vin-650-min.webp 650w",width:"600", height:"400" ,sizes:"(max-width: 1920px) 100vw, 50vw", alt: "Vignoble Bordelais", loading:"lazy"},
        
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
