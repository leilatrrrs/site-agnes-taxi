import React from "react";
import "../style/intro.scss"

function Intro () {
    return(
        <div className="intro">
            <div className="intro-text">
                <p>"Depuis 2008, nous sommes à votre service 
                    pour tous vos besoins de transport en taxi. 
                    Notre entreprise s'engage à vous offrir un service fiable, 
                    rapide et confortable, que ce soit pour vos déplacements professionnels, 
                    personnels ou touristiques."
                </p>
            </div>
            <div className="intro-box">
                <div className="intro-box-trajets">
                    <h2><i class="fa-solid fa-taxi"></i>Transport Gare / Aéroport</h2>
                        <p>Gare St Jean, Aéroport Bordeaux-Mérignac,<br /> Aérodrome Villemarie...</p>
                </div>
                <div className="intro-box-trajets-med">
                    <h2><i class="fa-regular fa-hospital"></i>Taxi conventionné CPAM</h2>
                    <p>Transfert vers les hopitaux bordelais et du bassin d'Arcachon</p>
                </div>
                <div className="intro-box-trajets-longs">
                    <h2><i class="fa-solid fa-map"></i>Voyage longue distance</h2>
                    <p>Gironde, Landes, Nouvelle-Aquitaine, France, Europe.</p>
                </div>
            </div>
            <div className="intro-num">
                <p> <i class="fa-solid fa-phone"></i> 06 07 04 97 94</p>
            </div>
            <div className="intro-tarif">
                <h2>Les Tarifs</h2>
                <p>Nos tarifs sont en accord avec la réglementation nationale,
                garantissant ainsi des prix justes et transparents pour tous nos clients.
                Nous veillons à appliquer des tarifs compétitifs et 
                conformes aux arrêtés préfectoraux, 
                tout en maintenant un service de qualité supérieure.
                Que ce soit pour une prise en charge, 
                un kilométrage ou des éventuels suppléments, 
                vous pouvez être assurés que nos prix respectent 
                les plafonds légaux en vigueur, 
                vous offrant ainsi un service de taxi fiable et équitable.</p>               
                <p className="intro-info-tarif"> Pour plus d'information sur nos tarifs <a href="https://www.legifrance.gouv.fr/jorf/id/JORFARTI000049040526"> cliquez ici</a>.</p>
            </div>

            <div className="intro-paiement">
                <p>Paiement par CB ou espèces</p>
                    <div className="intro-logo">
                        <div className="intro-box-master">
                            <i class="fa-brands fa-cc-mastercard"></i>
                        </div>
                        <div className="intro-box-visa">
                            <i class="fa-brands fa-cc-visa"></i>
                        </div>
                        <div className="intro-box-card">
                            <i class="fa-solid fa-credit-card"></i>
                        </div>
                        <div className="intro-box-money">
                            <i class="fa-solid fa-money-bill"></i>
                        </div>
                    </div>
            </div>

            <div className="intro-num">
                <p> <i class="fa-solid fa-phone"></i> 06 07 04 97 94</p>
            </div>
        </div>
    )
}

export default Intro;