import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonNav,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, searchOutline, heartOutline, personOutline, search } from 'ionicons/icons';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Account from './pages/Account';
import Bag from './pages/Bag';
import Item from './pages/Item';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/tabs.css';
import { type } from 'os';

setupIonicReact();


const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path='/' to='/App/Home'/>
          <Route path="/App/Home" component={Home}/> 
          <Route path="/App/Search" component={Search} />
          <Route path="/App/Favorites" component={Favorites}/>
          <Route path="/App/Account" component={Account} />
          <Route path="/App/Bag" component={Bag}/>
          <Route path="/App/Item/:id" component={Item}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" translucent>
          <IonTabButton tab="Home" href="/App/Home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Search" href="/App/Search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Buscar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Favorites" href="/App/Favorites">
            <IonIcon icon={heartOutline} />
            <IonLabel>Favoritos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/App/Account">
            <IonIcon icon={personOutline} />
            <IonLabel>Mi Cuenta</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
