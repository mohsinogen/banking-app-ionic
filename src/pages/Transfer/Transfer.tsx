import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack, card, person } from "ionicons/icons";
import React from "react";
import { Transaction } from "../../types/global.types";

function Transfer() {
  const transactions: Transaction[] = [
    {
      name: "John Peter",
      amount: 600,
      type: "debit",
      image: "./avatars/Avatar-1.png",
      date: "19th Jul 2024, 10:34 am",
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
      name: "Olivia Wilson",
      amount: 760,
      type: "debit",
      image: "./avatars/Avatar-6.png",
      date: "25th Jul 2024, 01:15 pm",
    },
    {
      name: "Olivia Wilson",
      amount: 760,
      type: "debit",
      image: "./avatars/Avatar-6.png",
      date: "25th Jul 2024, 01:15 pm",
    },
  ];

  function addTrailingEllipsis(str: string): string {
    if (str.length > 8) {
        return str.slice(0, 8) + '...';
    }
    return str;
}


  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color={"dark"}>
          <IonRow className="ion-align-items-center ion-justify-content-between">
            <IonCol className="d-flex centered" size={"2"}>
              <IonButton routerLink="/tabs/home" color={"light"} shape="round">
                <IonIcon
                  color="primary"
                  slot="icon-only"
                  icon={arrowBack}
                ></IonIcon>
              </IonButton>
            </IonCol>

            <IonCol>
              <IonText className="f-family-roboto f-size-4-px">
                Transfer
              </IonText>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent color={"dark"}>
        <IonCard mode="ios" style={{ borderRadius: "25px" }}>
          <IonCardContent>
            <IonRow className="ion-align-items-center ion-justify-content-start">
              <IonCol size="2">
                <img width={"30px"} src={"./icons/bank-icon-filled.png"} />
              </IonCol>
              <IonCol>
                <IonSelect
                  color={"dark"}
                  labelPlacement="stacked"
                  style={{
                    "--highlight-color-focused": "transparent",
                    color: "black",
                  }}
                  mode="md"
                  placeholder="ABC Bank"
                >
                  <div slot="label">
                    <IonText color="dark">Select Bank</IonText>
                  </div>
                  {[
                    "HDFC Bank",
                    "Kotak Bank",
                    "Maharashtra Bank",
                    "SBI bank",
                  ].map((item) => (
                    <IonSelectOption value={item}>{item}</IonSelectOption>
                  ))}
                </IonSelect>
              </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center ion-justify-content-start">
              <IonCol size="2">
                <IonIcon
                  color="primary"
                  className="f-size-3-px"
                  icon={person}
                ></IonIcon>
              </IonCol>
              <IonCol>
                <IonInput
                  style={{ color: "black" }}
                  type="text"
                  inputMode="text"
                  labelPlacement="stacked"
                  color={"dark"}
                  label="Nick Name"
                  placeholder="Joe Steve"
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center ion-justify-content-start">
              <IonCol size="2">
                <IonIcon
                  color="primary"
                  className="f-size-3-px"
                  icon={card}
                ></IonIcon>
              </IonCol>
              <IonCol>
                <IonInput
                  style={{ color: "black" }}
                  type="number"
                  inputMode="numeric"
                  labelPlacement="stacked"
                  color={"dark"}
                  label="Account Number"
                  placeholder="XXXXXXXXXX"
                ></IonInput>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
        <IonRow className="ion-justify-content-center">
          <IonCol size="11.5">
            <IonButton
              mode="ios"
              shape="round"
              color={"primary"}
              expand="block"
            >
              Next
            </IonButton>
          </IonCol>
        </IonRow>

        <div
          className="d-flex ion-margin-top"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "10px",
          }}
        >
          <IonText color={"light"} className="f-bold f-size-5-px">
            Recent Transfers
          </IonText>
        </div>

        <IonRow className="ion-margin-top">
          {transactions.map((item) => (
            <IonCol
              size="3"
              className="ion-margin-bottom d-flex centered"
              style={{ flexDirection: "column" }}
            >
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
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                  }}
                  alt="image"
                  src={
                    item.image
                      ? item.image
                      : "https://ionicframework.com/docs/img/demos/avatar.svg"
                  }
                />
              </div>
              <IonText color={"light"} className="f-bold t-center f-size-6-px" style={{marginTop:'5px'}}>
                {addTrailingEllipsis(item.name)}
              </IonText>
            </IonCol>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
}

export default Transfer;
