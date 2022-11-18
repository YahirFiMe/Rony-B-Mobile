import { IonList, IonItem } from "@ionic/react";
import { useState } from "react";
import Card from "./Cards";

type Item = {
    item: any[];
}

const ListItems = ({ item }: Item) => {


    return (
        <IonList lines='full'>
            {item.map((item) => (
                <IonItem key={item.id}>
                    <Card title={item.name} subtitle={'$' + item.price} text={item.description} id={item.id}
                        src='https://ss251.liverpool.com.mx/sm/1123336172.jpg' />
                </IonItem>
            ))}
        </IonList>
    );
}

export default ListItems;