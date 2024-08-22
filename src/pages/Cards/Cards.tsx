import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { Card } from '../../types/global.types';
import CardItem from '../../components/CardItem/CardItem';
import { add } from 'ionicons/icons';


function Cards() {

    const cards: Card[] = [
        {
            amount: '53,454.56',
            carNumber: '4345',
            expire: '03/32',
            cardLogo: './visaLogo.png',
            active: true
        },
        {
            amount: '74,434.06',
            carNumber: '4532',
            expire: '10/33',
            cardLogo: './master-card-logo.png',
            active: false
        },
        {
            amount: '24,434.06',
            carNumber: '4532',
            expire: '10/33',
            cardLogo: './visaLogo.png',
            active: true
        },
    ];

    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar color={'dark'} mode='ios' style={{ '--min-height': '50px' }}>
                    <IonTitle>Cards</IonTitle>
                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon slot="icon-only" icon={add}></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>

            </IonHeader>
            <IonContent color={'dark'}>

                <div style={{ margin: '5px' }}>
                    {cards.map((item, index) => (
                        <CardItem cardData={item} key={index} />
                    ))}
                </div>

            </IonContent>
        </IonPage>
    )
}

export default Cards
