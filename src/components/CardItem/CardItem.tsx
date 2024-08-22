import { IonButton, IonCol, IonIcon, IonRow, IonText } from "@ionic/react";
import React, { useState } from "react";
import { Card } from "../../types/global.types";
import { eye, eyeOff } from "ionicons/icons";
import "./Carditem.css";

function CardItem({ cardData }: { cardData: Card }) {
  const [isPrivate, setIsPrivate] = useState(true);

  return (
    <div color={"light"} className="card-item">
      <IonRow className="ion-justify-content-between ion-align-items-center">
        <IonCol size="6" className="t-left">
          <IonText
            className="f-size-6-px"
            color={cardData.active ? "success" : "danger"}
          >
            &#9679;{" "}
            <IonText color={"medium"}>
              {cardData.active ? "Active" : "Unactivated"}
            </IonText>
          </IonText>
        </IonCol>
        <IonCol size="2" className="d-flex centered">
          <img style={{ width: "50px" }} src={cardData.cardLogo} />
        </IonCol>
      </IonRow>

      <IonRow className="ion-margin-top ion-align-items-center">
        <IonCol className="t-left" style={{ flexDiraction: "column", alignItems: "flex-start" }}>
          <IonText color={"medium"} className="d-flex f-size-6-px">
            Your Balance
          </IonText>
          <IonText
            color={"dark"}
            className="f-bold f-size-2-px f-family-poppins"
          >
            &#x20b9;
            {isPrivate &&
              new Array(cardData.amount.length)
                .fill(null)
                .map((item, i) => <IonText key={i}>&#9679;</IonText>)}
            {!isPrivate && <IonText>{cardData.amount}</IonText>}
          </IonText>
        </IonCol>
        <IonCol size="2">
          <IonButton
            onClick={() => {
              setIsPrivate(!isPrivate);
            }}
            fill="outline"
            color={"light"}
            shape="round"
          >
            <IonIcon
              color="primary"
              slot="icon-only"
              icon={isPrivate ? eye : eyeOff}
            ></IonIcon>
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow className="ion-align-items-center ion-justify-content-between ion-margin-top">
        <IonCol
          className="d-flex"
          style={{ flexDirection: "column", alignItems: "start" }}
          size="5"
        >
          <IonText color={"medium"} className="f-size-7-px">
            Card Number
          </IonText>
          <IonText
            className="f-bold f-family-poppins f-size-6-px"
            color={"dark"}
          >
            &#9679;&#9679;&#9679;&#9679;{cardData.carNumber}
          </IonText>
        </IonCol>
        <IonCol
          className="d-flex"
          style={{ flexDirection: "column", alignItems: "end" }}
          size="3"
        >
          <IonText color={"medium"} className="f-size-7-px">
            Valid Thru
          </IonText>
          <IonText
            className="f-bold f-family-poppins f-size-6-px"
            color={"dark"}
          >
            {cardData.expire}
          </IonText>
        </IonCol>
      </IonRow>
    </div>
  );
}

export default CardItem;
