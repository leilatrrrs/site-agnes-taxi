import React, { useRef } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import "../style/index.scss"
import Intro from '../components/Intro';
import Footer from '../components/Footer';


function Home() {
    
    return (
        <div className='home'>
        <Header />
        <Carousel/>
        <Intro/>
        <Footer />
        </div>
    )
}
export default Home
