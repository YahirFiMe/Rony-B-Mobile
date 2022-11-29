import React, { useEffect, useReducer, useState } from 'react';
import { IonItem, IonList, IonLabel, IonSelect, IonSelectOption, IonButton } from '@ionic/react';
import { Api } from '../API/Api';
import { addToCart } from '../app/slices/ShoppingSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store'



interface Size {
  id: number;
  size: string;
  stock: number
}


type id = {
  Item_id: string;
}



const compareWith = (o1: Size, o2: Size) => {
  return o1 && o2 ? o1.id === o2.id : o1 === o2;
};

function Select_Size({ Item_id }: id) {
  const [Size, setSize] = useState({});
  const [Item, setItem] = useState([]);



  
  useEffect(() => {
    Api.get('https://apirony.000webhostapp.com/api/Size/' + Item_id)
      .then(res => res.data)
      .then(res => setItem(res))
  }, [])

  
  const useAppDispatch: () => AppDispatch = useDispatch;
  const Dis = useAppDispatch()

  const Sizes: Size[] = Item;




  return (
    <IonList>
      <IonItem>
        <IonSelect
          placeholder="Selecciona Talla"
          interface="action-sheet"
          compareWith={compareWith}
          onIonChange={(ev) => setSize(ev.detail.value)}
        >
          {Sizes.map((Size) => (
            <IonSelectOption key={Size.id} value={Size}>
              Talla: {Size.size}: Disponible {Size.stock}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonButton fill='outline' expand='block' routerLink='/App/Bag' onClick={() => {Dis(addToCart(Size))}}> Agregar al carrito</IonButton>
    </IonList>
  );
}
export default Select_Size;