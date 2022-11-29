import { IonHeader, IonToolbar, IonImg, IonIcon, IonTabButton, IonButton, IonBackButton, IonButtons, IonLabel, useIonAlert, useIonToast } from "@ionic/react";
import { trashOutline } from "ionicons/icons";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store'
import './HeaderApp.css';
import '../pages/Universal.css';
import { cleanFavorites } from "../app/slices/FavoritesSlice";

type props = {
    Iconbutton: string;
    Router: string;
    RouterDirection: any;
    Total: number;

}


export const ShortHeaderAppFavorites = () => {

    const useAppDispatch: () => AppDispatch = useDispatch;
    const Dis = useAppDispatch()

    const [present] = useIonToast();

    const presentToast = (position: 'top') => {
        present({
            message: '¡Vaciando tus favoritos!',
            duration: 1500,
            position: position,
            color: 'light',

        });
    };



    return (
        <IonHeader class="ion-no-border" className="short" mode="ios">
            <IonToolbar className="Tool">
                <IonButtons slot="end" >
                    <IonButton onClick={() => {Dis(cleanFavorites(1)); presentToast('top') }} >
                        <IonIcon slot="icon-only" icon={trashOutline} size="large" ></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
}

export default ShortHeaderAppFavorites;