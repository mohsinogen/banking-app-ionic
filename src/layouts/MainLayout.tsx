import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonRouter,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Redirect, Route, useLocation } from "react-router";
import Home from "../pages/Home";
import History from "../pages/History";
import Transfer from "../pages/Transfer/Transfer";
import {
  add,
  card,
  ellipse,
  home,
  person,
  pieChart,
  scan,
  scanOutline,
} from "ionicons/icons";
import Cards from "../pages/Cards/Cards";
import "./MainLayout.css";

function MainLayout() {
  const location = useLocation();

  const shouldHideTabs = () => {
    console.log("path", location.pathname);

    if (location.pathname.includes("tabs") || location.pathname === "/") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <IonFab vertical="bottom" horizontal="center">
        <IonFabButton color={'light'}>
          <IonIcon icon={scanOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
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
          <Route exact path="/tabs/cards">
            <Cards />
          </Route>
          <Route exact path="/">
            <Redirect to="/tabs/home" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar
          className={shouldHideTabs() ? "d-none" : ""}
          color={"primary"}
          slot="bottom"
        >
          <IonTabButton tab="home" href="/tabs/home">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="history" href="/tabs/history">
            <IonIcon icon={pieChart} />
          </IonTabButton>

          <IonTabButton className="scan-btn"></IonTabButton>

          <IonTabButton tab="cards" href="/tabs/cards">
            <IonIcon icon={card} />
          </IonTabButton>
          <IonTabButton tab="profile" href="/tabs/profile">
            <IonIcon icon={person} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
}

export default MainLayout;
