import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, searchOutline, heartOutline, personOutline, search } from 'ionicons/icons';
import Home from './pages/Home';
import Seach from './pages/Search';
import Favorites from './pages/Favorites';
import Account from './pages/Account';
import Bag from './pages/Bag';

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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Seach">
            <Seach />
          </Route>
          <Route path="/Favorites">
            <Favorites />
          </Route>
          <Route path="/Account">
            <Account />
          </Route>
          <Route path="/Bag">
            <Bag />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Seach" href="/Seach">
            <IonIcon icon={searchOutline} />
            <IonLabel>Buscar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Favorites" href="/Favorites">
            <IonIcon icon={heartOutline} />
            <IonLabel>Favoritos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/Account">
            <IonIcon icon={personOutline} />
            <IonLabel>Mi Cuenta</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
