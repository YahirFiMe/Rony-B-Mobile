import React from "react";
import { IonHeader, IonToolbar, IonImg, IonIcon, IonTabButton, IonButton, IonBackButton, IonButtons, IonLabel } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { cleanCart } from '../app/slices/ShoppingSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store'

import './HeaderApp.css';
import '../pages/Universal.css';

type props = {
    Iconbutton: string;
    Router: string;
    RouterDirection: any;

}


export const ShortHeaderApp = ({ Iconbutton, Router, RouterDirection }: props) => {

    const useAppDispatch: () => AppDispatch = useDispatch;
    const Dis = useAppDispatch()


    return (
        <IonHeader class="ion-no-border" className="short" mode="ios">
            <IonToolbar className="Tool">
                <IonButtons slot="start">
                    <IonBackButton text={''} icon={arrowBack}>
                        <IonIcon slot="icon-only"  ></IonIcon>
                    </IonBackButton>
                </IonButtons>
                <IonButtons slot="end" >
                    <IonButton routerLink={Router} routerDirection={RouterDirection} >
                        <IonIcon slot="icon-only" icon={Iconbutton} size="large" ></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
}

export default ShortHeaderApp;