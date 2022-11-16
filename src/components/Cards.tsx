import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import { Api } from "../API/Api";
import './Cards.css';


type CardProps  = {
    title: string;
    subtitle: string;
    text: string ;
    src: string;
}


const Card = (props: CardProps) => {
    return (
        <IonCard button onClick={() =>{
            
        }}>
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

