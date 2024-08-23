import {
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
    IonText,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React, { useRef } from "react";
import { useHistory } from "react-router";

function Payment() {
    const history = useHistory();

    const data: any = history.location.state;

    const input = useRef<HTMLIonInputElement>(null);

    useIonViewWillEnter(() => {
        input.current?.setFocus()
    }, [])
    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar
                    mode="ios"
                    style={{ "--min-height": "50px" }}
                    color={"dark"}
                >
                    <IonButtons slot="start">
                        <IonButton routerLink="/transfer">
                            <IonIcon slot="icon-only" icon={arrowBack}></IonIcon>
                        </IonButton>
                    </IonButtons>

                    <IonTitle>Confirm</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color={"dark"}>
                {data?.image && data?.account && data?.name && (<> <IonRow className="ion-margin-start ion-margin-top">
                    <IonCol>
                        <IonText className="f-size-5-px f-bold">Transfer Amount</IonText>
                    </IonCol>
                </IonRow>
                    <IonRow className="ion-align-items-center ion-margin-start">
                        <IonCol className="f-size-1-px f-bold" size='1'>&#x20b9;</IonCol>
                        <IonCol>
                            <IonInput
                                type="number" inputMode="numeric"
                                ref={input}
                                className="f-size-3-px f-bold"
                                color={"light"}
                                autoFocus={true}
                                placeholder="Enter Amount"
                            ></IonInput>
                        </IonCol>
                    </IonRow>

                    <IonCard mode="ios" color={"primary"} style={{ borderRadius: "25px" }}>
                        <IonCardContent>
                            <IonText className="f-bold" color={"light"}>
                                Transfer To
                            </IonText>
                            <IonRow className="ion-align-items-center ion-margin-top">
                                <IonCol size="3">
                                    <div
                                        className="d-flex centered"
                                        style={{
                                            background: "var(--ion-color-light-shade)",
                                            borderRadius: "80px",
                                            width: "55px",
                                            height: "55px",
                                        }}
                                    >
                                        <img
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50px",
                                            }}
                                            alt="image"
                                            src={data["image"]}
                                        />
                                    </div>
                                </IonCol>
                                <IonCol className="d-flex" style={{ flexDirection: "column" }}>
                                    <IonText className="f-bold f-size-5-px">{data["name"]}</IonText>
                                    <IonText className="f-size-6-px">
                                        {data["bank"]}
                                        {"-"}
                                        {data["account"]}
                                    </IonText>
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
                            >
                                Transfer Now
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </>)}
            </IonContent>
        </IonPage>
    );
}

export default Payment;
