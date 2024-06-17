import React from "react";

function TransportsPage () {
    return(
    <div className="transports">
        <div className="tr-gare-aero">
            <h1>Transports Gare / Aéroport</h1>
                <p><i class="fa-solid fa-circle"></i>Prise en charge depuis et vers les gares et aéroprts de Bordeaux et du Bassin d'Arcachon.</p>
                <p><i class="fa-solid fa-circle"></i>Nous vous conduirons au plus proche des quais et terminaux pour faciliter votre voyage et vous faire gagner du temps. </p>
                <p><i class="fa-solid fa-circle"></i>Aéroport de Bodeaux-Mérignac, Aérodrome de Villemarie (Arcachon), Gare St Jean, Gares du Bassin d'Arcachon ...</p>
        </div>
        <div className="tr-tt-distance">
            <h1>Transports Toutes Distances</h1>
                <p>Quelque soit la distance à parcourir nous vous proposons des solutions de transports fiables, confortables et adaptées à vos besoins.</p>
                <p>Gironde, Landes, Nouvelle-Aquitaine, France, Europe...</p>
        </div>
        <div className="tr-hop">
        <h1>Transports de personnes assises </h1>
        <h2>Transport vers les hôpitaux</h2>
        <h3>Taxis conventionné par la CPAM</h3>
        <p>Que ce soit pour vos soins, consultation ou hospitalisation, nous effectuons les transferts vers les différents centres hospitaliers. </p>
        <p>Nous aurons besoin de votre attestation de Sécurité Sociale et du bon de transport de votre médecin.</p>
        </div>
    </div>
    )
}

export default TransportsPage