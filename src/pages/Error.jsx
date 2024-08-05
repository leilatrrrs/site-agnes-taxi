import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

function Error () {
    return (
        <div>
            < Header />
            <div className="error-page">
            <h1>404</h1>  
            <h2>Oops! La page que vous demandez n'existe pas.</h2>
            < NavLink to="/">Retourner sur la page d'accueil</NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Error;