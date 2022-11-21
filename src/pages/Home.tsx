import { Api } from '../API/Api';
import { IonButton, IonContent, IonImg, IonItem, IonList, IonNavLink, IonPage, IonRouterOutlet} from '@ionic/react';
import { useEffect, useState } from 'react';
import Search from '../pages/Search';
import HeaderApp from '../components/HeaderApp';
import ListItems from '../components/ListItems';
import './Universal.css';



const Home: React.FC = () => {

  const [Item, setItem] = useState<any[]>([]);
  const [Item2, setItem2] = useState<any[]>([]);


  useEffect(() => {
    GetItems();
    GetItems2();
  }, [])

  const GetItems = () => {
    Api.get('http://192.168.100.52:8000/api/GetClothes/2')
      .then(res => res.data)
      .then(res => setItem(res))
  }

  const GetItems2 = () => {
    Api.get('http://192.168.100.52:8000/api/GetClothes/2')
      .then(res => res.data)
      .then(res => setItem2(res))
  }



  return (
    <IonPage>
      <HeaderApp />
      
      <IonContent fullscreen>
        <div className='body'>
          <section className='SectionHead'>
            <IonImg src='assets/images/resources/Winter.jpg' className='imgF' />
            <h3><b>COLECCION DE INVIERNO</b></h3>
            <p> Encuenta en RONY BOUTIQUE los mejores estilos de la temporada, abrigos, bufandas,
              sueteres, y gorros en tendencia </p>
            <IonButton fill='outline' expand='block' href='/App/Search'><strong>Descubre más</strong></IonButton>
          </section>
          <section className='TopTemp'>
            <p><strong>---TOP DE LA TEMPORADA---</strong></p>
            <ListItems item={Item} />
          </section>
          <section>
            <IonImg src='assets/images/resources/Gift.jpg' className='imgF' />
            <h3><b>LA GUIA DE REGALOS DE RONY BOUTIQUE</b></h3>
            <p> Encuentra el regalo perfecto en nuestra seleccion exclusiva de las mejores piezas del año </p>
            <IonButton fill='outline' expand='block'><strong>Explora más</strong></IonButton>
          </section>
          <IonList lines='full'>
            <IonItem>

            </IonItem>
          </IonList>
          <section>
            <IonImg src='assets/images/resources/Shoes.jpg' className='imgF' />
            <h3><b>NOVEDADES EN TENIS Y ZAPATOS</b></h3>
            <p> Encuentra todo lo que buscas en nuestra seleccion de calzado, la coleccion de RONY BOUTIQUE siempre con las novedades del momento </p>
            <IonButton fill='outline' expand='block'><strong>Explora más</strong></IonButton>
          </section>
          <section className='TopTemp'>
            <p><strong>---TOP DE LA TEMPORADA---</strong></p>
            <ListItems item={Item2} />
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
