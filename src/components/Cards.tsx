import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonNavLink } from "@ionic/react";
import Item from "../pages/Item";
import Search from '../pages/Search';

import './Cards.css';


type CardProps = {
    title: string;
    subtitle: string;
    text: string;
    src: string;
    id: number;
}


const Card = (props: CardProps) => {
    return (
            <IonCard button routerLink={"/App/Item/"+props.id} routerDirection='forward' mode="ios">
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

