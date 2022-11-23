import { IonContent, IonHeader, IonImg, IonItem, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { ReactFragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Api } from "../API/Api";
import ShortHeaderApp from "../components/ShortHeaderApp";

import './Universal.css';
import './Item.css';
import HeaderApp from "../components/HeaderApp";
import Select_Size from "../components/Select";

type Id = {
    id: string;
}

const Item: React.FC = () => {



    let { id }: Id = useParams()

    const [Item, setItem] = useState([])

    useEffect(() => {
        Api.get('https://apirony.000webhostapp.com/api/Clothes/' + id)
            .then(res => res.data)
            .then(res => setItem(res));
    }, [])


    return (
        <IonPage>
            <ShortHeaderApp />
            <IonContent>
                <div className='body'>
                    {Item.map((Item: {
                        id: string;
                        name: string;
                        description: string;
                        price: string;
                        img: string;
                    }) => (
                        <>
                            <section key={Item.id}>
                                <IonImg src={Item.img} />
                                <p>
                                    <span className="title"> <strong>{Item.name}</strong><br /></span>
                                    <span className="description">{Item.description} <br /></span>
                                    <span className="price">${Item.price} (IVA Incluido)</span>
                                </p>
                                <Select_Size Item_id={Item.id} />
                            </section>
                        </>
                    ))}

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Item;