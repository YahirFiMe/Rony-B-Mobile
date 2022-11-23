import React from "react";

import { IonHeader, IonToolbar, IonImg, IonIcon, IonTabButton, IonButtons, IonButton } from "@ionic/react";
import { bagRemoveOutline, arrowBack } from "ionicons/icons";

import './HeaderApp.css';


export const HeaderApp: React.FC = () => {
    return (
        <IonHeader class="ion-no-border" translucent>
            <IonToolbar>
                <div className='head'>
                    <div className="Space">
                        <p>de</p>
                    </div>
                    <span className='logo'>
                        <IonImg src='/assets/Images/PNG/Logo-Black.png' alt='Rony Boutique' className='Logo'></IonImg>
                    </span>
                    <span className='icon'>
                        <IonTabButton className="bag" href="/App/Bag" >
                            <IonIcon icon={bagRemoveOutline} size="large" />
                        </IonTabButton>
                    </span>
                    
                </div>
            </IonToolbar>
        </IonHeader>
    );
}

export default HeaderApp;