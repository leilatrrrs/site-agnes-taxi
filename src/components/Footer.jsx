import React from "react";
import { NavLink } from "react-router-dom"


function Footer () {
    return (

        <div className="footer-a">
            <div className="footer">
                <div className="footer-text">
                    Nous restons à votre service <br />pour tous renseignements.
                </div>
                <div className="divider"></div>
                <div className="footer-plan ">
                    <h2>Plan du site</h2>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/vehicules">Notre véhicule</NavLink>
                    <NavLink to="/transports">Les transports</NavLink>
                </div>
                <div className="divider"></div>
                
            
                <div className="footer-contact">
                    <h2>Contact</h2>
                    <p> <i class="fa-solid fa-phone"></i> 06 07 04 97 94</p>
                    <p> <i class="fa-solid fa-location-dot"></i> La Teste de Buch</p>
                </div>
        
                <div className="box-google">
                    <img src="/images/logo-google.png" alt="logo google" />
                        <div className="box-stars">
                            <p>5.0</p>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <div className="box-google-text">
                            <a href="https://www.google.com/search?sca_esv=b5763fd449dd55fb&rlz=1C1ONGR_frFR1083FR1083&sxsrf=ADLYWIJ7sVxPU8GpQqIbv4WR0cYc-Ai1hw:1717766357189&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7dcyqB7IQBIUS3nbNTG9oWsh9eX9Gahaa9X77xYGZFzlUk2Tf_LfPjR9dolEa5_c-t4eeZsMudgujUHXwqrEbuuX1rqlEBgLqEu6HXX9qaaQcl3CMk044t7Qn1xdEAKSOwB8hZGQ&si=ACC90nzZwgO0P4Qu3-A0NldYnwAKwrAmvjJXmiihL2mEqps3AxMSiHqjhzVv4MrViSXyx3meSr0ZvWh4KEYlPBdJK-3CUSOi98UjM-EUtKoGEslfTZu8xXI%3D&q=AGNES+TAXI+Avis&sa=X&ved=2ahUKEwi_4JusysmGAxViTKQEHSkjLtQQ3PALegQITRAF">Voir les avis</a>
                        </div>
                </div>
            </div>

                <div className="footer-text-bottom"> 
                    <p>Designed by  <a href="https://leilatorres.fr"> LT Développement</a> |  © All rights reserved</p>
                </div>
        </div>
        
    )
}
export default Footer