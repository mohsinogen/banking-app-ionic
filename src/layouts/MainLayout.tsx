import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, useIonRouter } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React from 'react'
import { Redirect, Route, useLocation } from 'react-router'
import Home from '../pages/Home'
import History from '../pages/History'
import Transfer from '../pages/Transfer/Transfer'
import { card, ellipse, home, pieChart } from 'ionicons/icons'

function MainLayout() {

    const location = useLocation();

    const shouldHideTabs = () =>{
        if(location.pathname.includes('tabs')){
            return false;
        } else {
            return true;
        }
    }


    return (


        <IonTabs>

            <IonRouterOutlet>
                <Route exact path="/tabs/home">
                    <Home />
                </Route>
                <Route exact path="/tabs/history">
                    <History />
                </Route>
                <Route exact path="/transfer">
                    <Transfer />
                </Route>
                <Route exact path="/">
                    <Redirect to="/tabs/home" />
                </Route>

            </IonRouterOutlet>

            <IonTabBar className={shouldHideTabs()? 'd-none':''} color={'light'} slot="bottom">
                <IonTabButton tab="home" href="/tabs/home">
                    <IonIcon icon={home} />
                </IonTabButton>
                <IonTabButton tab="history" href="/tabs/history">
                    <IonIcon icon={pieChart} />
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tabs/tab2">
                    <IonIcon icon={card} />
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default MainLayout
