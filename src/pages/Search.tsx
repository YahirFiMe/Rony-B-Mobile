import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import ShortHeaderApp from '../components/ShortHeaderApp';
import Api from '../API/Api';
import { bagRemoveOutline } from "ionicons/icons";

import "./Search.css"
import { useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../app/store';




const Search: React.FC = () => {


  return (
    <IonPage>
      <ShortHeaderApp Iconbutton={bagRemoveOutline} Router={"Bag"} RouterDirection={"forward"}/>
      <IonContent>
       
      </IonContent>
    </IonPage>
  );
};

export default Search;
