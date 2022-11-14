import React from "react";

import { IonHeader, IonToolbar, IonImg, IonIcon, IonTabButton } from "@ionic/react";
import { bagRemoveOutline } from "ionicons/icons";

import './HeaderApp.css';


export const HeaderApp: React.FC = () => {
    return (
        <IonHeader class="ion-no-border">
            <IonToolbar>
                <div className='head'>
                    <span className='logo'>
                        <IonImg src='/assets/Images/PNG/Logo-White.png' alt='Rony Boutique' className='Logo'></IonImg>
                    </span>
                    <span className='icon'>
                       <IonTabButton className="bag" href="/Bag">
                            <IonIcon icon={bagRemoveOutline} className='bag' size="large"/>
                       </IonTabButton>
                    </span>
                </div>
            </IonToolbar>
        </IonHeader>
    );
}

export default HeaderApp;