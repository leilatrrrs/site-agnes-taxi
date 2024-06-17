import React, { useRef } from 'react';
import Header from '../components/Header';

import "../style/index.scss"
import Footer from '../components/Footer';
import PresentationVoiture from '../components/Presentationvoiture';
import Num from '../components/Num';

function Vehicules() {
    
    return (
        <div className='vehicules'>
        <Header />
        < Num />
        < PresentationVoiture />
        <Footer />
        </div>
    )
}
export default Vehicules