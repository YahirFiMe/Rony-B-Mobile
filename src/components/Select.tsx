import React, { useEffect, useState } from 'react';
import { IonItem, IonList, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import { Api } from '../API/Api';
import { useParams } from 'react-router';

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
  const [Size, setSize] = useState('');
  const [Item, setItem] = useState([]);

  useEffect(() => {
    Api.get('https://apirony.000webhostapp.com/api/Size/' + Item_id)
      .then(res => res.data)
      .then(res => setItem(res))
  }, [])


  const Sizes: Size[] = Item;


  return (
    <IonList>
      <IonItem>
        <IonSelect
          placeholder="Selecciona Talla"
          compareWith={compareWith}
          onIonChange={(ev) => setSize(JSON.stringify(ev.detail.value))}
          interface="action-sheet"
        >
          {Sizes.map((Size) => (
            <IonSelectOption key={Size.id} value={Size.id}>
              Talla: {Size.size}: Disponible {Size.stock}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Select_Size;