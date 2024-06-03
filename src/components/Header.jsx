import React from "react";
import { NavLink } from "react-router-dom"
import "../style/header.scss"


function Header () {
    return (
        <div className="header">
            <div className="header-container"> 
        
                <div className="box-header">
                    <p className="box-header-text"> <i class="fa-solid fa-phone"></i> 06 07 04 97 94</p>
                </div>
                
                <NavLink><img src="/images/logo-agnes-taxi.png" alt="" /></NavLink>
           
                 <div className="box-header">
                    <p className="box-header-text"> <i class="fa-solid fa-location-dot"></i> La Teste de Buch</p>
                </div>
         </div>


            <h1>TAXI N°2 - LA TESTE</h1>

            <div className="navbar">
                <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/vehicules">Notre véhicule</NavLink></li>
                    <li><NavLink to="/transports">Les transports</NavLink></li>
                </ul>
            </div>
         </div>
    )
}

export default Header;