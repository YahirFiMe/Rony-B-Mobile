import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonNavLink, IonList, IonItem } from "@ionic/react";


import './Cards.css';

type Clothes = {
    Clothe: any[],
    
};


const Card = ({ Clothe }: Clothes ) => {


    return (
        <IonList>
            {Clothe.map((Clothe) => (
                <IonItem key={Clothe.id}>
                    <IonCard button routerLink={"/App/Item/" + Clothe.id} routerDirection='forward' mode="ios">
                        <img src={Clothe.img} />
                        <IonCardHeader>
                            <IonCardTitle>{Clothe.name}</IonCardTitle>
                            <IonCardSubtitle>${Clothe.price}</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <p>{Clothe.description}</p>
                        </IonCardContent>
                    </IonCard>
                </IonItem>
            ))}
        </IonList>
    )
}


export default Card;

