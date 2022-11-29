import React from "react";
import { IonHeader, IonToolbar, IonImg, IonIcon, IonTabButton, IonButton, IonBackButton, IonButtons, IonLabel, useIonAlert, useIonToast } from "@ionic/react";
import { arrowBack, trashOutline } from "ionicons/icons";
import { cleanCart } from '../app/slices/ShoppingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store'

import './HeaderApp.css';
import '../pages/Universal.css';
import Api from "../API/Api";

type props = {
    Total: number;
}


export const ShortHeaderAppBag = ({ Total }: props) => {

    const useAppDispatch: () => AppDispatch = useDispatch;
    const Dis = useAppDispatch()

    const { Cart: Cart } = useSelector((state: RootState) => state.Cart);


    const [presentAlert] = useIonAlert();

    const [present] = useIonToast();

    const CartEmpty = (position: 'top') => {
        present({
            message: '¡Vaciando tu Carrito!',
            duration: 1500,
            position: position,
            color: 'light',
        });
    };

    const SaleComplete = (position: 'top') => {
        present({
            message: '¡Gracias por tu compra!',
            duration: 1500,
            position: position,
            color: 'light',
        });
    };


    const isEmpty = (Arr: any) => {
        if (Arr != 0) {
            return (

                <IonButtons slot="end" >
                    <IonButton onClick={() =>
                        presentAlert({
                            header: 'Ingresa tu informacion',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                },
                                {
                                    text: 'Enviar',
                                    handler: () => {
                                        console.log('Venta enviada');
                                        RegistrerSale();
                                        SaleComplete('top')
                                    },
                                }
                            ],
                            inputs: [
                                {
                                    placeholder: 'Nombre Completo',
                                    checked: true,
                                },
                                {
                                    placeholder: 'Calle',
                                },
                                {
                                    type: 'number',
                                    placeholder: 'Numero Interior #',
                                    min: 1,
                                    max: 4,
                                },
                                {
                                    type: 'number',
                                    placeholder: 'Numero Exterior #',
                                    min: 1,
                                    max: 4,
                                },
                                {
                                    placeholder: 'Colonia',
                                },
                                {
                                    type: 'number',
                                    placeholder: 'Codigo Postal',
                                    min: 1,
                                    max: 5,
                                },
                                {
                                    type: 'textarea',
                                    placeholder: 'Referencias de domicilio',
                                },
                            ],
                        })
                    } >
                        Comprar
                    </IonButton>
                    <p className="priceNav" >${Total}</p>
                    <IonButton onClick={() => { Dis(cleanCart(1)); CartEmpty('top') }} >
                        <IonIcon slot="icon-only" icon={trashOutline} size="large" ></IonIcon>
                    </IonButton>
                </IonButtons>

            )
        }
    }


    const RegistrerSale = async () => {

        const response = Api.get('https://apirony.000webhostapp.com/api/createsale')

        const Sale_id = (await response).data

        Cart.forEach((Item: any) => {
            let Total_sale: number = + Item.price;


            let Detail = {
                folio_sale: Sale_id,
                id_clothe: Item.id,
                amount: 1,
                price_u: Item.price,
                total: Item.price * 1.16
            }
            Api.post('https://apirony.000webhostapp.com/api/createdetailsale', {
                folio_sale: Sale_id,
                id_clothe: Item.id,
                amount: 1,
                price_u: Item.price,
                total: Item.price
            }).then(res => console.log(res)).then(e => console.log(e))

            // fetch('https://apirony.000webhostapp.com/api/createdetailsale', {
            //     method: 'POST',
            //     body: JSON.stringify(Detail),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then((response) => response.json())
            // .then(console.log)



            // Api.put('https://apirony.000webhostapp.com/api/updatelsale/' + Sale_id, {
            //     subtotal: Total_sale,
            // }).then((Response) => console.log(Response.data + ' Cada Total Actulizado'))

        })


        console.log(Sale_id + ' Es tu id de venta');
    }




    return (
        <IonHeader class="ion-no-border" className="short" mode="ios">
            <IonToolbar className="Tool">
                <IonButtons slot="start">
                    <IonBackButton text={''} icon={arrowBack}>
                        <IonIcon slot="icon-only"  ></IonIcon>
                    </IonBackButton>
                </IonButtons>
                {isEmpty(Cart.length)}
            </IonToolbar>
        </IonHeader>
    );
}

export default ShortHeaderAppBag;