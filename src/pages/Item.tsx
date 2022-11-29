import { IonContent, IonImg, IonPage, IonButton, useIonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Api } from "../API/Api";
import ShortHeaderApp from "../components/ShortHeaderApp";
import './Universal.css';
import './Item.css';
import Select_Size from "../components/Select";
import { bagRemoveOutline } from "ionicons/icons";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store'
import { addToFavorites } from "../app/slices/FavoritesSlice";


type Id = {
    id: string;
}

const Item: React.FC = () => {

    let { id }: Id = useParams()

    const [Item, setItem] = useState([])

    const useAppDispatch: () => AppDispatch = useDispatch;
    const Dis = useAppDispatch()


    const [present] = useIonToast();

    const presentToast = (position: 'top') => {
        present({
            message: '¡Añadido a favoritos!',
            duration: 1500,
            position: position,
            color: 'light',

        });
    };


    useEffect(() => {
        Api.get('https://apirony.000webhostapp.com/api/Clothes/' + id)
            .then(res => res.data)
            .then(res => setItem(res));
    }, [])



    return (
        <IonPage>
            <ShortHeaderApp Iconbutton={bagRemoveOutline} Router={"/App/Bag"} RouterDirection={"forward"} />
            <IonContent>
                <div className='body'>
                    {Item.map((Item: {
                        id: string;
                        name: string;
                        description: string;
                        price: number;
                        img: string;
                    }) => (
                        <div key={Item.id}>
                            <IonImg src={Item.img} />
                            <p>
                                <span className="title"> <strong>{Item.name}</strong><br /></span>
                                <span className="description">{Item.description} <br /></span>
                                <span className="price">${Item.price} (IVA Incluido)</span>
                            </p>
                            <Select_Size Item_id={Item.id} />
                            <IonButton fill='outline' expand='block' onClick={() => { Dis(addToFavorites(Item)); presentToast('top') }}> Agregar a favoritos</IonButton>

                        </div>
                    ))}

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Item;