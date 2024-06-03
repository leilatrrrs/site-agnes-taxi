import React from "react";
import { NavLink } from "react-router-dom"

function Footer () {
    return (
        <div className="footer">
            <div className="footer-text">
                Nous restons à votre service <br />pour tout renseignements.
            </div>
            <div className="footer-plan">
                <h2>Plan du site</h2>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/vehicules">Notre véhicule</NavLink>
                <NavLink to="/transports">Les transports</NavLink>
            </div>
            <div className="footer-contact">
                <h2>Contact</h2>
                <p> <i class="fa-solid fa-phone"></i> 06 07 04 97 94</p>
                <p> <i class="fa-solid fa-location-dot"></i> La Teste de Buch</p>
            </div>
        </div>
    )
}
export default Footer