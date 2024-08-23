import {

  IonButton,

  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import {
  arrowDown,
  arrowUp,
  downloadOutline,
  notificationsOutline,
  snowOutline,
} from "ionicons/icons";
import TransactionItem from "../components/TransactionItem/TransactionItem";
import CardItem from "../components/CardItem/CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";
import { cards, transactions } from "../utils/data";

const Home: React.FC = () => {

  const options = [
    {
      title: 'Top Up',
      path: null,
      icon: downloadOutline,
      rotate: false
    },
    {
      title: 'Freeze',
      path: null,
      icon: snowOutline,
      rotate: false
    },
    {
      title: 'Request',
      path: null,
      icon: arrowDown,
      rotate: true
    },
    {
      title: 'Transfer',
      path: '/transfer',
      icon: arrowUp,
      rotate: true
    },

  ]

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color={'dark'}>
          <IonRow className="ion-align-items-center ion-justify-content-between ion-margin-top">
            <IonCol size="2">
              <div
                className="d-flex centered"
                style={{
                  background: "var(--ion-color-light)",
                  borderRadius: "80px",
                  width: "55px",
                  height: "55px",
                  marginLeft: "5px",
                }}
              >
                <img
                  width={"50px"}
                  height={"50px"}
                  src="./avatars/Avatar-12.png"
                />
              </div>
            </IonCol>
            <IonCol
              className="d-flex"
              style={{ flexDirection: "column", marginLeft: "5px" }}
            >
              <IonText className="f-family-roboto f-size-6-px" color={"light"}>
                Welcome Back
              </IonText>
              <IonText color={"light"} className="f-bold f-family-poppins">
                Peter Parker!
              </IonText>
            </IonCol>
            <IonCol className="d-flex centered" size={"2"}>
              <IonButton fill="outline" color={"medium"} shape="round">
                <IonIcon
                  color="light"
                  slot="icon-only"
                  icon={notificationsOutline}
                ></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color={"dark"}>
        <Swiper
          centerInsufficientSlides={true}
          slidesOffsetBefore={10}
          slidesOffsetAfter={10}
          centeredSlidesBounds={true}
          centeredSlides={true}
          navigation={true}
          slidesPerView={1.2}
          className="ion-margin-vertical"
        >
          {cards.map((item, index) => (
            <SwiperSlide style={{ padding: "0px 5px" }} key={index}>
              <CardItem cardData={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div
            className="ion-margin-horizontal d-flex"
            style={{ justifyContent: "space-between" }}
          >
            {options.map((item) => (
              <div key={item.title}
                className="d-flex"
                style={{ flexDirection: "column", alignItems: "center" }}
              >
                <IonButton routerLink={item.path ? item.path : undefined}
                  className="f-bold"
                  color={"primary"}
                  style={{ height: "70px", width: "70px" }}
                  shape="round"
                >
                  <IonIcon
                    color="light"
                    style={{ rotate: item.rotate ? "45deg" : "" }}
                    icon={item.icon}
                    size="large"
                  ></IonIcon>
                </IonButton>
                <IonText className="f-size-6-px" style={{ color: 'var(--ion-color-light-shade)' }}>{item.title}</IonText>
              </div>
            ))}

          </div>


          <div className="recent-transactions">
            <div
              className="d-flex"
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: "10px",
              }}
            >
              <IonText color={"light"} className="f-bold f-size-4-px">
                Transactions
              </IonText>
              <IonButton
                routerLink="/tabs/history"
                mode="ios"
                className="t-underline f-size-6-px f-bold"
                color={"light"}
                fill="clear"
              >
                View All
              </IonButton>
            </div>

            {transactions.map((item, index) => (
              <TransactionItem key={index} transaction={item} />
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
