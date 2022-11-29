import { IonContent, IonPage, IonList, IonItem } from '@ionic/react';
import { ShortHeaderAppBag } from '../components/ShortHeaderAppBag';
import CartItem from '../components/CartItem'

import './Bag.css';

import { useSelector } from 'react-redux';
import { RootState } from '../app/store';



const Bag: React.FC = () => {

  const { Cart: Cart } = useSelector((state: RootState) => state.Cart);
  let Total = Cart.reduce((total: number, item: { price: number }) => (total += item.price), 0);

  const isEmpty = (Arr: any) => {
    if (Arr == 0) {
      return ( 
 
    <div className='isEmpty' >
      <p>¡Tu Carrito esta Vacio!</p>
      <br />
      {/* <IonImg src='../../public/assets/Images/icon/bolsita_triste.svg' alt='Bolsita Triste' /> */}
    </div>

      )
    }
  }

  return (
    <IonPage>
      <ShortHeaderAppBag Total={Total} />
      <IonContent fullscreen>
        <IonList className='list'>
          {isEmpty(Cart.length)}
          {Cart?.map((Item, index) => (
            <IonItem key={index}>
              <CartItem Item={Item} />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Bag;
