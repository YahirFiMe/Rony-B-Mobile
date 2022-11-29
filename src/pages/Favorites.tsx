import { IonContent, IonPage, IonList, IonItem } from '@ionic/react';
import { ShortHeaderAppFavorites } from '../components/ShortHeaderAppFavorites';
import FavoritesItem from '../components/FavoriteItem'

import './Bag.css';

import { useSelector } from 'react-redux';
import { RootState } from '../app/store';



const Bag: React.FC = () => {

  const { Favorites: Favorites } = useSelector((state: RootState) => state.Favorites);

  const isEmpty = (Arr: any) => {
    if (Arr == 0) {
      return ( 
 
    <div className='isEmpty' >
      <p>¡No tienes ningun favorito!</p>
      <br />
      {/* <IonImg src='../../public/assets/Images/icon/bolsita_triste.svg' alt='Bolsita Triste' /> */}
    </div>

      )
    }
  }

  return (
    <IonPage>
      <ShortHeaderAppFavorites/>
      <IonContent fullscreen>
        <IonList className='list'>
          {isEmpty(Favorites.length)}
          {Favorites?.map((Item, index) => (
            <IonItem key={index}>
              <FavoritesItem Item={Item} />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Bag;
