import { IonCol, IonContent, IonHeader, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from "@ionic/react"
import TransactionItem from "../components/TransactionItem/TransactionItem";
import { useState } from "react";
import "./History.css"
import { transactions } from "../utils/data";

const History: React.FC = () => {

    const [currentSegment, setCurrentSegment] = useState('all');

    return (
        <IonPage>
            <IonHeader mode="ios">
                <IonToolbar color={'primary'}>
                    <IonTitle>History</IonTitle>
                </IonToolbar>

            </IonHeader>

            <IonContent fullscreen color={'primary'}>

                <IonRow className="ion-justify-content-center ion-padding-top">
                    <IonCol size='8'>
                        <IonSegment color={'light'} mode='ios' onIonChange={(e) => {
                            if (e.detail?.value) {
                                setCurrentSegment(e.detail.value.toString())
                            }
                        }
                        } value={currentSegment}>
                            <IonSegmentButton value="all">
                                <IonLabel>All</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="credit">
                                <IonLabel>Credit</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="debit">
                                <IonLabel>Debit</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCol>
                </IonRow>

                <div>

                    {transactions.filter(item => {

                        if (currentSegment === 'debit') {
                            return item['type'] === 'debit';
                        } else if (currentSegment === 'credit') {
                            return item['type'] === 'credit';
                        } else {
                            return true; // In case you want to return all items if currentSegment is neither 'debit' nor 'credit'
                        }
                    }).map((item, index) => (
                        <TransactionItem key={index} transaction={item} />
                    ))}
                </div>
            </IonContent>
        </IonPage>
    )
}

export default History;
