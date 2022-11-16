import { IonList, IonItem } from "@ionic/react";
import { useState } from "react";
import Card from "./Cards";

type Item = {
    Item: any[];
}

const ListItems = ({ Item }: Item) => {


    return (
        <IonList lines='full'>
            {Item.map((Item: {
                description: string;
                price: string; name: string; id: number;
            }) => (
                <IonItem key={Item.id}>
                    <Card title={Item.name} subtitle={'$' + Item.price} text={Item.description}
                        src='https://ss251.liverpool.com.mx/sm/1123336172.jpg' />
                </IonItem>
            ))}
        </IonList>
    );
}

export default ListItems;