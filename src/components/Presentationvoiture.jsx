import React from "react";
import "../style/presentationvoiture.scss"

function PresentationVoiture (){
    return(
        <div className="presentation">
            <h1>Mercedes Classe GLC</h1>
            <img src="./images/mercedes-remove.PNG" alt="Photo mercedes glc 220d" />
                <div className="presentation-text">
                        <p>Pour une expérience de transport inégalée, notre service de taxi vous propose la Mercedes Classe GLC, un véhicule qui allie confort et raffinement.</p>
                        
                        <h2>Confort Optimal</h2>
                            <p>Voyagez dans un confort absolu à bord de notre Mercedes Classe GLC. Ses sièges en cuir ergonomiques et son habitacle spacieux vous offrent une expérience de transport relaxante et agréable. Chaque détail de l'intérieur a été conçu pour votre bien-être, vous assurant ainsi un trajet des plus confortables.</p>
                        <h2>Élégance et Style</h2>
                            <p>La Mercedes Classe GLC se distingue par son design élégant et sophistiqué. Que ce soit pour un trajet court en ville ou un voyage plus long, vous apprécierez le luxe discret et le style raffiné de notre véhicule.</p>
                        <h2>Service Haut de Gamme</h2>
                            <p>Nos chauffeurs professionnels sont dévoués à votre confort et sécurité. Ils vous offriront une conduite douce et agréable, tout en étant attentifs à vos besoins.</p>
                </div>
        </div>
)}


export default PresentationVoiture