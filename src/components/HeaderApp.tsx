import React from "react";

import { IonHeader, IonToolbar, IonImg, IonIcon, IonTabButton, IonButtons, IonButton } from "@ionic/react";
import { bagRemoveOutline, arrowBack } from "ionicons/icons";

import './HeaderApp.css';


export const HeaderApp: React.FC = () => {
    return (
        <IonHeader class="ion-no-border" className="short" mode="ios">
            <IonToolbar>
                <span className='logo'>
                    <IonImg src='/assets/Images/PNG/Logo-Black.png' alt='Rony Boutique' className='Logo'></IonImg>
                </span>
                <IonButtons slot="end">
                    <IonButton routerLink="/App/Bag">
                        <IonIcon slot="icon-only" icon={bagRemoveOutline} size="large"/ >
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
}


export default HeaderApp;