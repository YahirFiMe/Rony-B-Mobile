import React from "react";

import { IonHeader, IonToolbar, IonImg, IonIcon, IonTabButton, IonButton, IonBackButton, IonButtons, IonLabel } from "@ionic/react";
import { bagRemoveOutline, arrowBack } from "ionicons/icons";

import './HeaderApp.css';
import '../pages/Universal.css';


export const ShortHeaderApp: React.FC = () => {
    return (
        <IonHeader class="ion-no-border" translucent>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonButton routerLink="/App/Home" routerDirection="back" >
                        <IonIcon slot="icon-only" icon={arrowBack} ></IonIcon>
                    </IonButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton >
                        <IonIcon slot="icon-only" icon={bagRemoveOutline} ></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
}

export default ShortHeaderApp;