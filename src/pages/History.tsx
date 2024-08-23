import { IonCol, IonContent, IonHeader, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { Transaction } from "../types/global.types";
import TransactionItem from "../components/TransactionItem/TransactionItem";
import { useState } from "react";
import "./History.css"

const History: React.FC = () => {

    const transactions: Transaction[] = [
        {
            name: 'John Peter',
            amount: 600,
            type: 'debit',
            image: './avatars/Avatar-1.png',
            date: '19th Jul 2024, 10:34 am'
        },
        {
            name: 'Sarah Miller',
            amount: 1500,
            type: 'credit',
            image: './avatars/Avatar-2.png',
            date: '21st Jul 2024, 02:45 pm'
        },
        {
            name: 'Michael Smith',
            amount: 320,
            type: 'debit',
            image: './avatars/Avatar-3.png',
            date: '22nd Jul 2024, 11:30 am'
        },
        {
            name: 'Emily Davis',
            amount: 840,
            type: 'debit',
            image: './avatars/Avatar-4.png',
            date: '23rd Jul 2024, 04:20 pm'
        },
        {
            name: 'James Brown',
            amount: 1250,
            type: 'credit',
            image: './avatars/Avatar-5.png',
            date: '24th Jul 2024, 08:10 am'
        },
        {
            name: 'Olivia Wilson',
            amount: 760,
            type: 'debit',
            image: './avatars/Avatar-6.png',
            date: '25th Jul 2024, 01:15 pm'
        },
        {
            name: 'David Johnson',
            amount: 1320,
            type: 'credit',
            image: './avatars/Avatar-7.png',
            date: '26th Jul 2024, 09:50 am'
        },
        {
            name: 'Sophia Martinez',
            amount: 410,
            type: 'debit',
            image: './avatars/Avatar-8.png',
            date: '27th Jul 2024, 03:30 pm'
        },
        {
            name: 'Daniel Rodriguez',
            amount: 920,
            type: 'credit',
            image: './avatars/Avatar-9.png',
            date: '28th Jul 2024, 07:25 am'
        }
    ];

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
