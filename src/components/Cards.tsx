import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import { construct } from "ionicons/icons";
import { stringify } from "querystring";
import React from "react";
import './Cards.css';


type CardProps  = {
    title: string;
    subtitle: string;
    text: string ;
    src: string;
}


const Card = (props: CardProps) => {
    return (
        <IonCard button>
            <img alt="Silhouette of mountains" src={props.src} />
            <IonCardHeader>
                <IonCardTitle>{props.title}</IonCardTitle>
                <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <p>{props.text}</p>
            </IonCardContent>
        </IonCard>
    )
}


export default Card;

