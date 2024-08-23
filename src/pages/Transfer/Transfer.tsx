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
import React, { useState } from "react";
import "./Transfer.css"
import { transactions } from "../../utils/data";
import { useHistory } from "react-router";

function Transfer() {

  const history = useHistory()

  function addTrailingEllipsis(str: string): string {
    if (str.length > 8) {
      return str.slice(0, 8) + '...';
    }
    return str;
  }

  const [bank, setBank] = useState('');
  const [name, setName] = useState('');
  const [account, setAccount] = useState<number | null>(null);

  const paymentHandler = (item: { bank: string, name: string, account: number | null, image:string }) => {
    if (item.bank && item.name && item.account) {
      history.push('/payment',{...item})
    }
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar mode='ios' style={{ '--min-height': '50px' }} color={'dark'}>
          <IonButtons slot="start">

            <IonButton routerLink="/tabs/home">
              <IonIcon slot="icon-only" icon={arrowBack}></IonIcon>
            </IonButton>
          </IonButtons>

          <IonTitle>Transfer</IonTitle>
        </IonToolbar>

      </IonHeader>
      <IonContent color={"dark"}>
        <IonCard mode="ios" color={'primary'} style={{ borderRadius: "25px" }}>
          <IonCardContent>
            <IonRow className="ion-align-items-center ion-justify-content-start">
              <IonCol size="2">
                <img width={"30px"} src={"./icons/bank-icon-light.png"} />
              </IonCol>
              <IonCol>
                <IonSelect onIonChange={(e) => setBank(e.detail.value)}
                  color={"light"}
                  labelPlacement="stacked"
                  style={{
                    "--highlight-color-focused": "transparent",
                    color: "white",
                  }}
                  mode="md"
                  placeholder="XYZ Bank"
                >
                  <div slot="label">
                    <IonText color="light">Select Bank</IonText>
                  </div>
                  {["ABC bank",
                    "ICIC Bank",
                    "Kotak Bank",
                    "Maharashtra Bank",
                    "SBI bank",
                  ].map((item) => (
                    <IonSelectOption key={item} value={item}>{item}</IonSelectOption>
                  ))}
                </IonSelect>
              </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center ion-justify-content-start">
              <IonCol size="2">
                <IonIcon
                  color="light"
                  className="f-size-3-px"
                  icon={person}
                ></IonIcon>
              </IonCol>
              <IonCol>
                <IonInput onIonChange={(e) => setName(e.detail.value || '')}
                  style={{ color: "white" }}
                  type="text"
                  inputMode="text"
                  labelPlacement="stacked"
                  color={"light"}
                  label="Nick Name"
                  placeholder="Joe Steve"
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center ion-justify-content-start">
              <IonCol size="2">
                <IonIcon
                  color="light"
                  className="f-size-3-px"
                  icon={card}
                ></IonIcon>
              </IonCol>
              <IonCol>
                <IonInput onIonChange={(e) => setAccount(e.detail.value ? Number(e.detail.value) : null)}
                  style={{ color: "white" }}
                  type="number"
                  inputMode="numeric"
                  labelPlacement="stacked"
                  color={"light"}
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
              color={"light"}
              expand="block"
              onClick={() => paymentHandler({ bank, name, account, image:'https://ionicframework.com/docs/img/demos/avatar.svg' })}
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
          {transactions.slice(0, 5).map((item) => (
            <IonCol onClick={()=> paymentHandler({account: item.accountNumber, bank: item.bankName, name: item.name, image:item.image})}
              key={item.name}
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
              <IonText color={"light"} className="f-bold t-center f-size-6-px" style={{ marginTop: '5px' }}>
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
