import React, { useRef } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import "../style/index.scss"
import Footer from '../components/Footer';

function Vehicules() {
    
    return (
        <div className='vehicules'>
        <Header />
        <Carousel/>
    
        <Footer />
        </div>
    )
}
export default Vehicules