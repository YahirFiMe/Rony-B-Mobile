import React from 'react'

import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon } from '@ionic/react'

import { closeOutline, eyeOutline } from "ionicons/icons";

import './CartItem.css'

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store'
import { removeFromFavorites } from '../app/slices/FavoritesSlice';


type item = {
    Item: {
        id:string;
        name: string;
        img: string;
        price: number;
        description: string;
    };
}


const CartItem = ({ Item }: item) => {

    const useAppDispatch: () => AppDispatch = useDispatch;
    const Dis = useAppDispatch()

    return (
        <IonCard className='card'>
            <img alt={Item.name} src={Item.img} className="img" />
            <IonCardHeader>
                <IonCardTitle className='title'>{Item.name}</IonCardTitle>
                <IonCardSubtitle className='font-small'>${Item.price}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent className='font-small'>
                {Item.description} <br/>

                <IonButton fill="clear" onClick={() => {Dis(removeFromFavorites(Item))}} >
                    <IonIcon slot='icon-only' icon={closeOutline} />
                </IonButton>

                <IonButton fill="clear" routerLink={'/App/Item/' + Item.id}>
                    <IonIcon slot='icon-only' icon={eyeOutline} />
                </IonButton>
            </IonCardContent>
        </IonCard>
    )
}

export default CartItem