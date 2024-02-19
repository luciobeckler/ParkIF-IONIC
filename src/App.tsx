import {
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

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
import LoadingPage from './pages/LoadingPage/LoadingPage';
import AdministracaoHomePage from './pages/AdministracaoHomePage/AdministracaoHomePage';
import AlunoHomePage from './pages/AlunoHomePage/AlunoHomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import UserSelectPage from './pages/UserSelectPage/UserSelectPage';
import { Redirect } from 'react-router';

setupIonicReact();

const App: React.FC = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path='/loading' component={LoadingPage}></Route>
                    <Route
                        path='/administracaohome'
                        component={AdministracaoHomePage}
                    ></Route>
                    <Route path='/alunoHome' component={AlunoHomePage}></Route>
                    <Route path='/login' component={LoginPage}></Route>
                    <Route path='/signup' component={SignUpPage}></Route>
                    <Route
                        path='/userselect'
                        component={UserSelectPage}
                    ></Route>
                    <Redirect exact from='/' to='/loading' />
                </IonRouterOutlet>
            </IonReactRouter>
            {/* <LoadingPage></LoadingPage> */}
            {/*todo colocar o menu aqui após a implementação da tela inicial. */}
            {/* <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/folder/Inbox" />
            </Route>
            <Route path="/folder/:name" exact={true}>
              <Page />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter> */}
        </IonApp>
    );
};

export default App;
