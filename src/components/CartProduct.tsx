import React from 'react'
import {IonItem} from '@ionic/react'

type product = {
    Product: any;
}

const CartProduct = ({Product}: product) => {
  return (
    <IonItem>
        <h2>Producto Agregado</h2>
    </IonItem>
  )
}

export default CartProduct