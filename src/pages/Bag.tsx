import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import './Bag.css';
import { ShortHeaderAppBag } from '../components/ShortHeaderAppBag';
import { trashOutline } from "ionicons/icons";
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { cleanCart, CartTotal } from '../app/slices/ShoppingSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store'



const Bag: React.FC = () => {

  const { Cart: Cart } = useSelector((state: RootState) => state.Cart);

  const useAppDispatch: () => AppDispatch = useDispatch;
  const Dis = useAppDispatch()

  

  return (
    <IonPage>
      <ShortHeaderAppBag Iconbutton={trashOutline} Router={"/"} RouterDirection={null} />
      <IonContent fullscreen>
        <IonList className='list'>
          {Cart?.map((Item, index) => (
            <IonItem>
              <CartItem Item={Item} key={index}/>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Bag;
