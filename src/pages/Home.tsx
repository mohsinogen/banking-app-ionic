import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import {
  arrowDown,
  arrowUp,
  eye,
  grid,
  notifications,
  notificationsOutline,
  qrCode,
} from "ionicons/icons";
import { useRef } from "react";
import TransactionItem from "../components/TransactionItem/TransactionItem";
import { Card, Transaction } from "../types/global.types";
import CardItem from "../components/CardItem/CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";

const Home: React.FC = () => {
  const cards: Card[] = [
    {
      amount: "53,454.56",
      carNumber: "4345",
      expire: "03/32",
      cardLogo: "./visaLogo.png",
      active: true,
    },
    {
      amount: "74,434.06",
      carNumber: "4532",
      expire: "10/33",
      cardLogo: "./master-card-logo.png",
      active: false,
    },
    {
      amount: "24,434.06",
      carNumber: "4532",
      expire: "10/33",
      cardLogo: "./visaLogo.png",
      active: true,
    },
  ];

  const transactions: Transaction[] = [
    {
      name: "John Peter",
      amount: 600,
      type: "debit",
      image: "./avatars/Avatar-1.png",
      date: "19th Jul 2024, 10:34 am",
    },
    {
      name: "Sarah Miller",
      amount: 1500,
      type: "credit",
      image: "./avatars/Avatar-2.png",
      date: "21st Jul 2024, 02:45 pm",
    },
    {
      name: "Michael Smith",
      amount: 320,
      type: "debit",
      image: "./avatars/Avatar-3.png",
      date: "22nd Jul 2024, 11:30 am",
    },
    {
      name: "Emily Davis",
      amount: 840,
      type: "debit",
      image: "./avatars/Avatar-4.png",
      date: "23rd Jul 2024, 04:20 pm",
    },
    {
      name: "James Brown",
      amount: 1250,
      type: "credit",
      image: "./avatars/Avatar-5.png",
      date: "24th Jul 2024, 08:10 am",
    },
    {
      name: "Olivia Wilson",
      amount: 760,
      type: "debit",
      image: "./avatars/Avatar-6.png",
      date: "25th Jul 2024, 01:15 pm",
    },
    {
      name: "David Johnson",
      amount: 1320,
      type: "credit",
      image: "./avatars/Avatar-7.png",
      date: "26th Jul 2024, 09:50 am",
    },
    {
      name: "Sophia Martinez",
      amount: 410,
      type: "debit",
      image: "./avatars/Avatar-8.png",
      date: "27th Jul 2024, 03:30 pm",
    },
    {
      name: "Daniel Rodriguez",
      amount: 920,
      type: "credit",
      image: "./avatars/Avatar-9.png",
      date: "28th Jul 2024, 07:25 am",
    },
  ];

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
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
            <IonButton color={"light"} shape="round">
              <IonIcon
                color="primary"
                slot="icon-only"
                icon={notifications}
              ></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
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
          <div className="ion-margin-horizontal d-flex" style={{ justifyContent: 'space-between' }}>
            <IonButton
              className="f-bold"
              mode="ios"
              color={"light"} style={{ height: '70px', width:'70px' }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="custom-button-content"
              >
                <IonIcon
                  color="primary"
                  style={{ rotate: "45deg" }}
                  icon={arrowDown}
                ></IonIcon>
                <IonLabel className="f-size-7-px">Request</IonLabel>
              </div>
              {/* <IonIcon
                  color="primary"
                  style={{ rotate: "45deg" }}
                  slot="start"
                  icon={arrowDown}
                ></IonIcon>
                Request */}
            </IonButton>
            <IonButton
              routerDirection="forward"
              routerLink="/transfer"
              className="f-bold"
              mode="ios"
              color={"light"} style={{ height: '70px', width:'70px' }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="custom-button-content"
              >
                <IonIcon
                  color="primary"
                  style={{ rotate: "45deg" }}
                  icon={arrowUp}
                ></IonIcon>
                <IonLabel className="f-size-7-px">Transfer</IonLabel>
              </div>
              {/*  <IonIcon
                  color="primary"
                  style={{ rotate: "45deg" }}
                  icon={arrowUp}
                ></IonIcon>
                Transfer */}
            </IonButton>
            <IonButton
              className="f-bold"
              mode="ios"
              color={"light"} style={{ height: '70px', width:'70px' }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="custom-button-content"
              >
                <IonIcon
                  color="primary"
                  style={{ rotate: "45deg" }}
                  icon={arrowDown}
                ></IonIcon>
                <IonLabel className="f-size-7-px">Request</IonLabel>
              </div>
              {/* <IonIcon
                  color="primary"
                  style={{ rotate: "45deg" }}
                  slot="start"
                  icon={arrowDown}
                ></IonIcon>
                Request */}
            </IonButton>
            <IonButton
              routerDirection="forward"
              routerLink="/transfer"
              className="f-bold"
              mode="ios"
              color={"light"}
              style={{ height: '70px', width:'70px' }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="custom-button-content"
              >
                <IonIcon
                  color="primary"
                  icon={grid}
                ></IonIcon>
                <IonLabel className="f-size-7-px">More</IonLabel>
              </div>
              {/*  <IonIcon
                  color="primary"
                  style={{ rotate: "45deg" }}
                  icon={arrowUp}
                ></IonIcon>
                Transfer */}
            </IonButton>
            {/* <IonCol className="d-flex centered" size="2">
              <IonButton color={"light"} shape="round" size="large">
                <IonIcon
                  color="primary"
                  slot="icon-only"
                  icon={qrCode}
                ></IonIcon>
              </IonButton>
            </IonCol> */}
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
              <IonText color={"dark"} className="f-bold f-size-4-px">
                Transactions
              </IonText>
              <IonButton
                routerLink="/tabs/history"
                mode="ios"
                className="t-underline f-size-6-px f-bold"
                color={"dark"}
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
