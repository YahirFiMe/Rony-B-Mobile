import { IonButton, IonContent, IonHeader, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonList, IonPage, IonTitle, IonToolbar, IonVirtualScroll } from '@ionic/react';
import Card from '../components/Cards';
import HeaderApp from '../components/HeaderApp';
import './Home.css';



const Home: React.FC = () => {
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
            <IonButton fill='outline' expand='block'><strong>Descubre más</strong></IonButton>
          </section>
          <section className='TopTemp'>
            <p><strong>----TOP DE LA TEMPORADA----</strong></p>
            <IonList lines='full'>
              <IonItem>
                <Card title='Chamarra American Eagle' subtitle='$1,819' text='Chamarra American Eagle color negro de mezclilla para hombre con bolsillos'
                  src='https://ss251.liverpool.com.mx/sm/1123336172.jpg' />
              </IonItem>
              <IonItem>
                <Card title='Sudadera Tommy Hilfiger logo estampado para hombre' subtitle='$1,819' text='Sudadera Tommy Hilfiger color negro con logo estampado para hombre'
                  src='https://ss261.liverpool.com.mx/sm/1119819984.jpg' />
              </IonItem>
            </IonList>
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
            <p><strong>----TOP DE LA TEMPORADA----</strong></p>
            <IonList lines='full'>
              <IonItem>
                <Card title='Zapato de vestir' subtitle='$1,499' text='Zapato de vestir de piel natural color marron'
                  src='https://modaellos.com//wp-content/uploads/2015/12/moda-calzado-hombre-otono-invierno-tendencias-zapatos-y-zapatillas-zapatos-cerrados-color-marron-zara.jpg' />
              </IonItem>
              <IonItem>
                <Card title='Botines con suela gruesa' subtitle='$1,819' text='Botines color arena con suela gruesa y detalles metalicos color acero rosado '
                  src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1630870827-botines-acolchados-blancos-1630870752.jpg?crop=0.904xw:0.904xh;0.0449xw,0.00641xh&resize=480:*' />
              </IonItem>
            </IonList>
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
